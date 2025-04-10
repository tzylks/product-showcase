'use client';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/app/common/AppSidebar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { SiteHeader } from '@/components/ui/site-header';
import StoreProvider from '@/app/store/StoreProvider';

export function ClientProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
        >
            <StoreProvider>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <SiteHeader />
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </StoreProvider>
        </ThemeProvider>
    );
}
