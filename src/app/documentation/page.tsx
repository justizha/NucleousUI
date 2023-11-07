import PageWrapper from "../../components/PageWrapper"
import SideBar from "../../components/SideBar"
export default function Docs() {
    return (
        <PageWrapper>
            <section className="flex" >
                <SideBar />
                <div className="pb-20 pt-20">
                    <div className="mx-12">
                        <h1 className="text-3xl font-bold text-main-white">This is the Documentation</h1>
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}