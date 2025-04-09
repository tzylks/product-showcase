import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ModeToggle } from './mode-toggle';

export function SiteHeader() {
    return (
        <header className='w-full group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear'>
            <div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 justify-between'>
                <div className='flex items-center gap-1 lg:gap-2'>
                    <SidebarTrigger className='-ml-1' />
                    <Separator
                        orientation='vertical'
                        className='mx-2 data-[orientation=vertical]:h-4'
                    />
                    <h1 className='text-base font-medium'>Product Site</h1>
                </div>
                <ModeToggle />
            </div>
        </header>
    );
}
