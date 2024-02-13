"use client"

import DocsSection from "../../../components/DocsSection";
import SideBarNavigation from "../../../components/SidebarNavigation";
import BtnColors from "./components/BtnColors";
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
                <li className="text-main-white text-sm mt-1">
                    <a href="#colors_buttons">Colors</a>
                </li>
            </SideBarNavigation>
            <DocsSection>

                <BtnTypes />
                <BtnSize />
                <BtnColors />
            </DocsSection>
        </>
    )
}