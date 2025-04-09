import { Card } from '@/app/common/Card';
import { Button } from '@/components/ui/button';
import { HeroParallax } from '@/components/ui/hero-parallax';

export default function Home() {
    const products = [
        {
            title: 'Flower',
            link: 'test',
            thumbnail:
                'https://images.unsplash.com/photo-1469259943454-aa100abba749?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    return (
        <div className=''>
            <main className=''>
                <HeroParallax products={products} />
            </main>
        </div>
    );
}
