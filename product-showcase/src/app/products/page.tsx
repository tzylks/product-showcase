/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FocusCards } from '@/components/ui/focus-cards';
import { cn } from '@/lib/utils';

export default function Products() {
    const cards = [
        {
            title: 'Watch',
            price: '$199',
            src: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'EDC Essentials',
            price: '$39',
            src: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Parfum',
            price: '$210',
            src: 'https://images.unsplash.com/photo-1651540589735-12cffa044899?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Glasses',
            price: '$55',
            src: 'https://images.unsplash.com/photo-1651540589735-12cffa044899?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Beauty Products',
            price: '$24',
            src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Shoes',
            price: '$89',
            src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    return (
        <div className='p-16'>
            <div className='relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black'>
                <div
                    className={cn(
                        'absolute inset-0',
                        '[background-size:20px_20px]',
                        '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
                        'dark:[background-image:radial-gradient(#404040_1px,transparent_2px)]'
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black' />
                <FocusCards cards={cards} />
            </div>
        </div>
    );
}
