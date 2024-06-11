import DocsFooter from "../../components/DocsFooter";
import DocsNavBar from "../../components/DocsNavbar";
import PageWrapper from "../../components/PageWrapper";
import SideBar from "../../components/SideBar";
export default function Layout({ children }) {
  return (
    <>
      <DocsNavBar />
      <PageWrapper>
        <div className="mx-auto">
          <SideBar />
          {children}
        </div>
      </PageWrapper>
      <div className="flex justify-end">
        <DocsFooter />
      </div>
    </>
  );
}
