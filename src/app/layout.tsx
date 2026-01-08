import "./globals.css";
import CustomCursor from "../components/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0f0f0f",
          overflowX: "hidden",
        }}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
