import { GlobalContextProvider } from "../../../store/store";
import Header from "../Header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalContextProvider>
      <div className="overflow-x-hidden">
        <Header />
        {children}
      </div>
    </GlobalContextProvider>
  );
}
