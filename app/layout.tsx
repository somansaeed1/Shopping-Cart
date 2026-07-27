import CreateCartContext from "@/components/CartContext";
import "@/app/globals.css";

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
