import { FC, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
// TODO make links work
export const Header: FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleMenuToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <Styled>
        <Navigation>
          <Link href="/">
            <img
              src="/assets/shared/desktop/logo-dark.png"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <ul className="desktop-tablet-nav-list">
            <li>
              <Link href="/about">Our Company</Link>
            </li>
            <li>
              <Link href="/locations">Locations</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <MenuButton onClick={handleMenuToggle}>
            <img
              src={
                toggle
                  ? "/assets/shared/mobile/icon-close.svg"
                  : "/assets/shared/mobile/icon-hamburger.svg"
              }
              alt="Menu Icon"
            />
          </MenuButton>
        </Navigation>
      </Styled>
      {toggle && <MobileNavigation handleClose={() => setToggle(false)} />}
    </>
  );
};

const Styled = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

const Navigation = styled.nav`
  width: 100%;
  max-width: 1111px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  img {
    width: 9.52rem;
  }

  .desktop-tablet-nav-list {
    list-style: none;
    display: none;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 2px;

    ${({ theme }) => theme.breakpoints.tablet} {
      display: flex;
    }
  }

  .desktop-tablet-nav-list li {
    margin-right: 2.25rem;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MenuButton = styled.button`
  border: none;
  padding: 0.5rem;
  background-color: transparent;
  img {
    width: 1.5rem;
    height: 1.25rem;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const MobileNavigation: FC<{ handleClose: () => void }> = ({ handleClose }) => {
  return (
    <Background>
      <MobileMenu>
        <ul className="mobile-nav-list">
          <li onClick={handleClose}>
            <Link href="/about">Our Company</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/locations">Locations</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </MobileMenu>
    </Background>
  );
};

const Background = styled.div`
  height: calc(100vh - 6rem);
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;

  z-index: 40;
`;

const MobileMenu = styled.div`
  background-color: ${({ theme }) => theme.primary.dark};
  width: 100%;
  height: 14.6875rem;
  padding: 3rem 1.5rem;

  .mobile-nav-list {
    list-style: none;
    color: ${(props) => props.theme.primary.light};
    letter-spacing: 2px;
    font-size: 1.5rem;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
  }
`;
