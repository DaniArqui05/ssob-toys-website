import "./globals.css";

export const metadata = {
  title: "SSOB Toys",
  description: "Japan Toy Figures, Resin and Merchandise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
