import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-row w-screen">
        <Sidebar />
        <main className="bg-dark-300 w-full h-screen">{children}</main>
      </div>
    </>
  );
}
