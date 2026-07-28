import "@/app/globals.css";
import CreateCartContext from "@/components/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CreateCartContext>
          {children}
        </CreateCartContext>
      </body>
    </html>
  );
}
