'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store/store';
import { removeItem } from '@/app/store/cart/cartSlice';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    price: string;
    name: string;
    src: string;
    id: number;
}

interface ConsolidatedEntry {
    title: string;
    content: React.ReactNode;
    price: string;
    name: string;
    src: string;
    ids: number[];
    quantity: number;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const dispatch = useDispatch<AppDispatch>();

    // Consolidate duplicate items
    const consolidatedData = React.useMemo(() => {
        const itemMap = new Map<string, ConsolidatedEntry>();

        data.forEach((item) => {
            const key = `${item.name}-${item.src}`;
            if (itemMap.has(key)) {
                const existing = itemMap.get(key)!;
                const priceNum = parseFloat(item.price.replace('$', ''));
                const existingPriceNum = parseFloat(
                    existing.price.replace('$', '')
                );
                existing.quantity += 1;
                existing.price = `$${(existingPriceNum + priceNum).toFixed(2)}`;
                existing.ids.push(item.id);
            } else {
                itemMap.set(key, {
                    ...item,
                    quantity: 1,
                    ids: [item.id],
                });
            }
        });

        const result = Array.from(itemMap.values());
        return result;
    }, [data]);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref, consolidatedData]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 20%', 'end end'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <div
            className='w-full bg-white dark:bg-neutral-950 font-sans md:px-10 min-h-screen flex flex-col'
            ref={containerRef}
        >
            <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-10'>
                <h2 className='text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl'>
                    Shopping Cart
                </h2>
                <p className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-4'>
                    You will find your items below
                </p>
            </div>

            {consolidatedData.length === 0 ? (
                <div className='flex-grow flex items-center justify-center'>
                    <p className='text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-medium'>
                        Your cart is empty. Add items to get started!
                    </p>
                </div>
            ) : (
                <div
                    ref={ref}
                    className='relative max-w-7xl mx-auto'
                >
                    {consolidatedData.map((item, index) => (
                        <div
                            key={index}
                            className='flex justify-start pt-0 md:pt-0 md:gap-10 mb-8'
                        >
                            <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
                                <div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center'>
                                    <div className='h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2' />
                                </div>
                                <h3 className='hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500'>
                                    {item.price}
                                </h3>
                            </div>

                            <div className='relative pl-20 pr-4 md:pl-4 w-full'>
                                <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500'>
                                    {item.name} (x{item.quantity})
                                </h3>
                                <div className='grid grid-cols-2 gap-4 items-center'>
                                    <Image
                                        src={item.src}
                                        alt={item.name}
                                        width={500}
                                        height={500}
                                        className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
                                    />
                                    <div className='flex items-center gap-4'>
                                        <span className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base'>
                                            Qty: {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleRemove(item.ids[0])
                                            }
                                            className='text-neutral-700 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-sm font-medium py-2 px-4 rounded-full border border-neutral-300 dark:border-neutral-700 transition-colors'
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
                        style={{
                            height: height + 'px',
                        }}
                        className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
                    >
                        <motion.div
                            style={{
                                height: heightTransform,
                                opacity: opacityTransform,
                            }}
                            className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full'
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
