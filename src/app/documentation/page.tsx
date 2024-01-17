import DocsSection from "../../components/DocsSection";
import ExternalLink from "../../components/ExternalLink";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
export default function Docs() {
    return (
        <DocsSection>
            <div className="px-4">
                <div className="mb-10">
                    <Header title="What is NucleousUI ?" />
                    <Paragraph text="This is essentially a collection of prebuilt web components, all created using Tailwind CSS. It includes a variety of components like modals, buttons, alerts, and cards. These are part of NucleousUI and are designed to help you design and customize responsive, mobile-first websites quickly and efficiently." />
                </div>
                <div className="mb-10">
                    <Header title="Introduction" />
                    <Paragraph text="To use this UI library effectively, it's recommended to have a basic understanding of Tailwind CSS and a good command of CSS. " />
                    <Paragraph text="Tailwind CSS is a utility-first CSS framework used in many modern UI libraries. Mastering CSS will allow you to customize and create unique designs beyond the default components provided by the library."/>
                </div>
                <div>
                    <Header title="Tailwind Docs" />
                    <Paragraph text="When diving into a UI library, start with the official Tailwind CSS documentation. It's your roadmap for seamless integration, ensuring a solid foundation and a smooth journey into elevated web design." />
                    <ExternalLink href="https://tailwindcss.com/" text="Tailwind Docs" />
                </div>
            </div>
        </DocsSection>
    );
}

