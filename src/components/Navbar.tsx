import "./Navbar.css";

type NavbarProps = {
  currentPage: string;
};

export default function Navbar({ currentPage }: NavbarProps) {
  function NavTitle({ pageTitle }: { pageTitle: string }) {
    return (
      <li className={currentPage == pageTitle ? "active-page" : ""}>
        {pageTitle}
      </li>
    );
  }

  return (
    <ul className="custom-navbar">
      <NavTitle pageTitle="Home" />
      <NavTitle pageTitle="Blog" />
      <NavTitle pageTitle="About Me" />
    </ul>
  );
}
