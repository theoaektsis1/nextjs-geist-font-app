export const metadata = {
  title: 'IKON MEDIA Mobile App',
  description: 'Mobile app for IKON MEDIA',
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
