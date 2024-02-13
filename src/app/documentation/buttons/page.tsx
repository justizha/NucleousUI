"use client"

import DocsSection from "../../../components/DocsSection";
import SideBarNavigation from "../../../components/SidebarNavigation";
import BtnSize from "./components/BtnSize";
import BtnTypes from "./components/BtnTypes";
export default function Buttons() {




    return (
        <>
            <SideBarNavigation>
                <li className="text-main-white text-sm mt-1">
                    <a href="#types_buttons">Types</a>
                </li>
                <li className="text-main-white text-sm mt-1">
                    <a href="#sizes_buttons">Sizes</a>
                </li>
            </SideBarNavigation>
            <DocsSection>

                <BtnTypes />
                <BtnSize />

            </DocsSection>
        </>
    )
}