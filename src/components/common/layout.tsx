import MainNavbar from "./navbar";
import Footer from "./footer";

function Layout(props: any) {
  return (
    <div>
      <MainNavbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
