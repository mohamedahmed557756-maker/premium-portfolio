export const metadata = {
  title: "Premium Portfolio",
  description: "Premium Web Design & AI Automation Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
