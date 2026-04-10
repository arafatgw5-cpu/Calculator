import "./globals.css";

export const metadata = {
  title: "Calculator App",
  description: "Next.js Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}