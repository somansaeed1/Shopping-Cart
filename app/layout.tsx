import CreateCartContext from "@/components/CartContext";
import "@/app/globals.css"; // or your global stylesheet path

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
