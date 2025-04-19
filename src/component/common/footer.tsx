"use client";

import footerStyles from "@/component/common/footer.styles";
import Logo from "@/asset/images/logo_kia.svg";
import Dialog from "@/component/common/dialog";
import useModal from "@/hook/useModal";
import useTerms, { TTerms, TTermsResponse } from "@/service/common/useTerms";
import { formatDate } from "@/util/format";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { loading } from "@/component/pages/faq.styles";
const Footer = () => {
  const [selectedVersion, setSelectedVersion] = useState<number>(0);

  const { isModalOpen, openModal, closeModal } = useModal();

  const { data: terms, isLoading: isLoadingTerms } = useTerms("terms", {
    termsClassID: "JOIN_SERVICE_USE",
  });

  const selectedTerms = terms?.find((item: TTerms) => item.termsVersion === selectedVersion);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(Number(e.target.value));
  };

  useEffect(() => {
    if (terms && terms.length > 0) {
      setSelectedVersion(terms[0].termsVersion);
    }
  }, [terms]);

  return (
    <>
      <footer css={footerStyles.footer}>
        <div className="inner">
          <div css={footerStyles.information}>
            <div className="utils">
              <button type="button">
                <b>개인정보 처리방침</b>
              </button>
              <button type="button" onClick={openModal}>
                이용약관
              </button>
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
        <Dialog title="이용약관" type="policy" open={isModalOpen} handleClose={closeModal}>
          <div className="policy-top">
            <select value={selectedVersion} onChange={handleChange}>
              {terms?.map((term: TTerms) => {
                const start = formatDate(term.startDate);
                const end = term.endDate === 0 ? "현재" : formatDate(term.endDate);
                return (
                  <option key={term.termsVersion} value={term.termsVersion}>
                    {start} ~ {end}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            {isLoadingTerms ? (
              <div css={loading} className="indicator">
                <i /> 로딩중입니다...
              </div>
            ) : (
              <div>
                {selectedTerms?.contents ? parse(selectedTerms.contents) : "내용이 없습니다."}
              </div>
            )}
          </div>
        </Dialog>
      </footer>
    </>
  );
};

export default Footer;
