"use client";

import footerStyles from "@/component/common/footer.styles";
import Logo from "@/asset/images/logo_kia.svg";

const Footer = () => {
  return (
    <footer css={footerStyles.footer}>
      <div className="inner">
        <div css={footerStyles.information}>
          <div className="utils">
            <button type="button">
              <b>개인정보 처리방침</b>
            </button>
            <button type="button">이용약관</button>
          </div>
          <address className="address">
            <span>
              서울특별시 서초구 헌릉로 12 <em>기아㈜</em>
            </span>
            <br />
            <span>
              대표: <i>송호성, 최준영</i>
            </span>
            <br />
            <span>
              사업자등록번호: <i>119-81-02316</i>
            </span>
            <br />
            <span>
              통신판매번호: <i>2006-07935</i>
            </span>
            <br />
            <span>
              고객센터: <i>1833-4964</i>
            </span>
            <br />
            <span>
              제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
            </span>
          </address>
        </div>
        <div css={footerStyles.copyright}>
          <Logo className="logo" />© 2023 KIA CORP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
