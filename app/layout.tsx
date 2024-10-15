import './globals.css';

export const metadata = {
  title: 'Leads Management',
  description: 'A Next.js app for managing leads',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
