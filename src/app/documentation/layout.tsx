import DocsFooter from "../../components/DocsFooter"
import PageWrapper from "../../components/PageWrapper"
import SideBar from "../../components/SideBar"
export default function Layout({ children }) {
    return (
        <>
            <PageWrapper>
                <SideBar />
                <div className="mx-auto">
                    {children}
                </div>
            </PageWrapper>
            <div className="flex justify-end">
                <DocsFooter />
            </div>
        </>
    )
}