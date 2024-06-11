import { Toaster } from 'sonner';
import { QueryClientProvider } from '@tanstack/react-query';

import { router } from './router';
import { lazy, PropsWithChildren, ReactElement, Suspense } from 'react';
import { queryClient } from './hooks/query/query-client';
import { RouterProvider } from 'react-router-dom';
import { Fallback } from './components/fallback';
import { TailwindIndicator } from './components/tailwind-indicator';
import { ThemeProvider } from "@/components/theme/theme-provider"

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
const DevTools = lazy(() =>
  import('@tanstack/react-query-devtools').then(m => ({
    default: m.ReactQueryDevtools,
  }))
);

const DebugProvider = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <Suspense>{import.meta.env.DEV && <DevTools />}</Suspense>
      {children}
    </>
  );
};

const future = {
  v7_startTransition: true,
} as const;
function App() {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DebugProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider
              fallbackElement={<Fallback />}
              router={router}
              future={future}
            />
          </ThemeProvider>
        </DebugProvider>
      </QueryClientProvider>
      <Toaster theme="system" richColors />
      <TailwindIndicator />
    </>
  )
}

export default App
