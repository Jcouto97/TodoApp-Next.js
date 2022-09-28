import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
