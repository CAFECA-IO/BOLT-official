import MainNavbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <>
      <MainNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
