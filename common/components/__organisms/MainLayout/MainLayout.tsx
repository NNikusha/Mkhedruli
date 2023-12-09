import "common/assets/globals.css";
import { GlobalContextProvider } from "../../../store/store";
import Header from "../Header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalContextProvider>
      <div className="">
        <Header />
        {children}
      </div>
    </GlobalContextProvider>
  );
}
