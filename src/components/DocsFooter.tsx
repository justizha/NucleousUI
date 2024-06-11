export default function DocsFooter() {
  return (
    <footer className="mx-4 w-full border-t border-main-accent py-10 text-sm leading-6 lg:ml-80">
      <div className="m-1 flex items-center justify-between  px-4">
        <p className="text-main-gray">Copyright © 2023 NucleosUI</p>
        <a
          href="https://github.com/justizha/NucleousUI"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/github.png" alt="github" className="w-6" />
        </a>
      </div>
    </footer>
  );
}
