import "./globals.css";

export const metadata = {
  title: "Sumedha Niroshan",
  description: "Sumedha Niroshan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body>{children}</body>
    </html>
  );
}
