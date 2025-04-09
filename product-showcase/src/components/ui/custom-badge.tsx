import { cn } from '@/lib/utils'; // shadcn's utility for className merging

interface BadgeProps {
    content?: number | string; // The badge content (e.g., count)
    variant?: 'default' | 'dot'; // Support dot or content badge
    className?: string; // Custom classes
}

export function CustomBadge({
    content,
    variant = 'default',
    className,
    children,
}: React.PropsWithChildren<BadgeProps>) {
    return (
        <div className={cn('relative inline-flex', className)}>
            {children}
            {variant === 'dot' ? (
                <span className='absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive translate-x-1/2 -translate-y-1/2' />
            ) : (
                content !== undefined && (
                    <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full translate-x-1/2 -translate-y-1'>
                        {content}
                    </span>
                )
            )}
        </div>
    );
}
