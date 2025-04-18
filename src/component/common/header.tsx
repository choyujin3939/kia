"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import headerStyles from "@/component/common/header.styles";
import Logo from "@/asset/images/logo_kiabiz.svg";
import { useRemoveBodyClass } from "@/hook/useRemoveBodyClass";
import { breakpoints } from "@/style/theme";
import { useScrollBodyClass } from "@/hook/useScrollBodyClass";
const Header = () => {
  const segment = useSelectedLayoutSegment();
  const handleToggleMenu = () => {
    document.body.classList.toggle("nav-opened");
  };

  useRemoveBodyClass("nav-opened", breakpoints.tablet);
  useScrollBodyClass("isScroll", 1);

  return (
    <header css={headerStyles.header}>
      <div className="inner">
        <h1>
          <Link href="/" className="logo">
            <Logo />
          </Link>
        </h1>
        <nav css={headerStyles.nav} className="mobile-nav">
          <ul>
            <li>
              <Link className={segment === "Guide" ? "active" : undefined} href="/Guide">
                서비스 소개
              </Link>
            </li>
            <li>
              <Link className={segment === "FAQ" ? "active" : undefined} href="/FAQ">
                자주 묻는 질문
              </Link>
            </li>
            <li>
              <Link className={segment === "News" ? "active" : undefined} href="/News">
                새소식
              </Link>
            </li>
            <li>
              <Link className={segment === "Counsel" ? "active" : undefined} href="/Counsel">
                상담문의
              </Link>
            </li>
          </ul>
        </nav>
        <div css={headerStyles.navButton}>
          <button type="button" onClick={handleToggleMenu}>
            메뉴 열기/닫기
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
