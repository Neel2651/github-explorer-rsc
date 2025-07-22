import './globals.css';
import { ThemeProvider } from './Components/ThemeProvider';

export const metadata = {
  title: 'GitHub Explorer',
  description: 'Built with React Server Components and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
