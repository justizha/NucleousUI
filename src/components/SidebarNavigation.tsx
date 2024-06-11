"use client";
export default function SideBarNavigation({ children }) {
  return (
    <div className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-10 hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
      <div className="w-64">
        <h1 className="text-base font-medium text-main-blue">On this Page</h1>
        <ul className="list-none">{children}</ul>
      </div>
    </div>
  );
}
