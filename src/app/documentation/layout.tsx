import DocsFooter from "../../components/DocsFooter"
import PageWrapper from "../../components/PageWrapper"
import SideBar from "../../components/SideBar"
export default function Layout({ children }) {
    return (
        <>
            <PageWrapper>
                <SideBar />
                <section className="mx-auto">
                    {children}
                </section>
            </PageWrapper>
            <div className="flex justify-end">
                <DocsFooter />
            </div>
        </>
    )
}