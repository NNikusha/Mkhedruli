import { GlobalContextProvider } from "../../../store/store";
import Header from "../Header/Header";

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
      </div>
    </GlobalContextProvider>
  );
}
