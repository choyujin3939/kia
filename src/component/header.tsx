"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { styles } from "@/component/header.styles";
import Logo from "@/asset/images/logo_kiabiz.svg";
import { useRemoveBodyClass } from "@/hook/useRemoveBodyClass";
import { breakpoints } from "@/style/theme";

const Header = () => {
  const segment = useSelectedLayoutSegment();
  const handleToggleMenu = () => {
    document.body.classList.toggle("nav-opened");
  };

  useRemoveBodyClass("nav-opened", breakpoints.tablet);

  return (
    <header css={styles.header}>
      <h1>
        <Link href="/" css={styles.logo}>
          <Logo />
        </Link>
      </h1>
      <nav css={styles.nav} className="mobile-nav">
        <ul>
          <li>
            <Link className={segment === "Guide" ? "active" : undefined} href="/Guide">
              서비스 소개
            </Link>
          </li>
          <li>
            <Link
              className={segment === "FAQ" ? "active" : undefined}
              href="/src/app/FAQ/component/faq"
            >
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
      <div css={styles.navButton}>
        <button type="button" onClick={handleToggleMenu}>
          메뉴 열기/닫기
        </button>
      </div>
    </header>
  );
};

export default Header;
