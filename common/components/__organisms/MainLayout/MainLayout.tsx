import { GlobalContextProvider } from "../../../store/store";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalContextProvider>
      <div className="font-montserrat overflow-x-hidden overflow-y-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </GlobalContextProvider>
  );
}
