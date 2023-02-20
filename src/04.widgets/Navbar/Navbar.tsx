import { useRouter } from "next/router";
import React from "react";
import s from "./Navbar.module.scss";
import { NavbarItemProps, navbarItems } from "./NavbarItems";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();

  function handleRedirect(route: NavbarItemProps) {
    if (route.path === router.asPath) return;

    router.push(route.path);
  }

  return (
    <nav className={s.main}>
      <ul className={s.list}>
        {navbarItems.map((Route, index) => (
          <li key={index}>
            <a onClick={() => handleRedirect(Route)} className={s.item}>
              <Route.logo
                size={20}
                color={
                  router.asPath === Route.path
                    ? "#0185FF"
                    : "var(--accent-faded)"
                }
              />
              <span>{Route.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
