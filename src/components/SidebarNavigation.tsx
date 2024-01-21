'use client'
export default function SideBarNavigation({ children }) {
    return (
        <div className="fixed z-10 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
            <div className="w-64">
                <h1 className="text-lg text-main-blue/50">
                    On this Page
                </h1>
                <ul className="list-none flex flex-col gap-2">
                    {children}
                </ul>
            </div>
        </div>
    )
}