import Footer from "components/footer";
import Header from "components/header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
