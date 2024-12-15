import "./globals.css";
export const metadata = {
  title: "Kalakaari",
  description: "Create beautiful AI Art",
  icons:{
    icon:"./favicon.ico",
    apple:"./favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
