import "@/assets/styles/globals.css";
export const metadata = {
  title: "PropertyPulse | Find A Place",
  description: "This is a rental site",
  keywords: "rental, apartments, properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
