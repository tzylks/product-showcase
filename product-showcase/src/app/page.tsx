import { HeroParallax } from '@/components/ui/hero-parallax';
import { Box, Settings, Sparkles, Search, Lock } from 'lucide-react';
import { GridItem } from './common/GridItem';

export default function Home() {
    const products = [
        {
            title: 'Shoes',
            link: 'test',
            thumbnail:
                'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Beauty Products',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Watch',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'EDC',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Parfum',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Gym',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1612188842101-f976582906fc?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Beauty Products',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Watch',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'EDC',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Shoes',
            link: 'test',
            thumbnail:
                'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Parfum',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Gym',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1612188842101-f976582906fc?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Glasses',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1651540589735-12cffa044899?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Shoes',
            link: 'test',
            thumbnail:
                'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Beauty Products',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Watch',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'EDC',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Parfum',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Gym',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1612188842101-f976582906fc?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Beauty Products',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Watch',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'EDC',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2193&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Shoes',
            link: 'test',
            thumbnail:
                'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Parfum',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Gym',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1612188842101-f976582906fc?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Glasses',
            link: '/',
            thumbnail:
                'https://images.unsplash.com/photo-1651540589735-12cffa044899?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    return (
        <div>
            <main>
                <HeroParallax products={products} />
                <div className='px-8 py-32'>
                    <ul className='grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2'>
                        <GridItem
                            area='md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]'
                            icon={
                                <Box className='h-4 w-4 text-black dark:text-neutral-400' />
                            }
                            title='Nice Looking Products'
                            description='For you to use'
                        />

                        <GridItem
                            area='md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]'
                            icon={
                                <Settings className='h-4 w-4 text-black dark:text-neutral-400' />
                            }
                            title='A Sample'
                            description='Of quality you can expect'
                        />

                        <GridItem
                            area='md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]'
                            icon={
                                <Sparkles className='h-4 w-4 text-black dark:text-neutral-400' />
                            }
                            title='Custom Components'
                            description='Suited For Your Needs'
                        />

                        <GridItem
                            area='md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]'
                            icon={
                                <Lock className='h-4 w-4 text-black dark:text-neutral-400' />
                            }
                            title='Trusted Design'
                            description='For a flawless experience'
                        />

                        <GridItem
                            area='md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]'
                            icon={
                                <Search className='h-4 w-4 text-black dark:text-neutral-400' />
                            }
                            title='Professional and Clean'
                            description='And easy to use'
                        />
                    </ul>
                </div>
            </main>
        </div>
    );
}
