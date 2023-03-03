import MainNavbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div>
      <MainNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
