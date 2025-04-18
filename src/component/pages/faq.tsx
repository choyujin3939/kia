"use client";

import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import MRadio from "@/component/common/radio";
import { convertToLabelValue } from "@/util/format";
import useFaqList from "@/service/FAQ/useFaqList";
import useFaqCategoryList from "@/service/FAQ/useFaqCategoryList";
import MInputText from "@/component/common/inputText";
import faqStyle from "@/component/pages/faq.styles";
import { AccordionList, IFaqItem } from "@/component/common/accordionList";

import DownloadIcon from "@/asset/images/ic_download.svg";
import WriteIcon from "@/asset/images/ic_write.svg";
import TalkIcon from "@/asset/images/ic_talk.svg";
import Process1Icon from "@/asset/images/ic_process01.svg";
import Process2Icon from "@/asset/images/ic_process02.svg";
import Process3Icon from "@/asset/images/ic_process03.svg";
import Process4Icon from "@/asset/images/ic_process04.svg";
import GoogleIcon from "@/asset/images/logo_googleplay.svg";
import AppleIcon from "@/asset/images/logo_appstore.svg";
import ArrowStepIcon from "@/asset/images/ic_step_arrow.svg";
import Link from "next/link";

type TParams = {
  tab: string;
  faqCategoryID: string;
  offset: number;
  question: string;
};
const FAQ = () => {
  const initParams: TParams = {
    tab: "CONSULT",
    faqCategoryID: "",
    offset: 0,
    question: "",
  };

  const {
    control,
    reset,
    handleSubmit: onSubmit,
  } = useForm({
    defaultValues: initParams,
    mode: "all",
  });

  const [filterParams, setFilterParams] = useState(initParams);

  const { data: categoryData } = useFaqCategoryList("faqCategoryList", {
    tab: filterParams.tab,
  });

  const {
    data: faqList,
    isLoading: isLoadingFaqList,
    fetchNextPage: fetchNextFaqList,
    hasNextPage: hasNextFaqList,
    isFetchingNextPage: isLoadingNextFaqList,
  } = useFaqList("faqList", {
    limit: 10,
    offset: filterParams.offset,
    tab: filterParams.tab,
    faqCategoryID: filterParams.faqCategoryID,
    question: filterParams.question,
  });

  const faqItems = (faqList?.pages.flatMap(page => page.items) ?? []).map(item => {
    if (filterParams.tab === "CONSULT") {
      const { categoryName, ...rest } = item;
      return rest;
    }
    return item;
  });

  const categoryOptions = convertToLabelValue(categoryData, "name", "categoryID");

  const handleTabChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterParams(prev => ({
      ...prev,
      tab: event.target.value,
      faqCategoryID: "",
    }));
  };

  const handleTabCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterParams(prev => ({
      ...prev,
      faqCategoryID: event.target.value,
    }));
  };

  const handleSearch = (formData: TParams) => {
    setFilterParams(prev => ({
      ...prev,
      question: formData.question,
    }));
  };

  const handleReset = () => {
    reset({ question: "" });
    setFilterParams(prev => ({
      ...prev,
      question: "",
    }));
  };

  return (
    <>
      <h1 css={faqStyle.title.h1}>
        자주 묻는 질문 <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>
      <MRadio
        group={[
          { label: "서비스 도입", value: "CONSULT" },
          { label: "서비스 이용", value: "USAGE" },
        ]}
        name="tab"
        control={control}
        onChange={handleTabChange}
        designType="tabs"
      />
      <MInputText
        control={control}
        name="question"
        placeholder="찾으시는 내용을 입력해 주세요"
        onClear={handleReset}
        onSubmit={onSubmit(handleSearch)}
      />
      <MRadio
        group={categoryOptions}
        name="faqCategoryID"
        control={control}
        onChange={handleTabCategoryChange}
        designType="filters"
      />

      {isLoadingFaqList ? (
        <div css={faqStyle.loading} className="indicator">
          <i /> 로딩중입니다...
        </div>
      ) : (
        <AccordionList
          faqItems={faqItems as IFaqItem[]}
          hasNextFaqList={hasNextFaqList}
          fetchNextFaqList={fetchNextFaqList}
          isLoadingNextFaqList={isLoadingNextFaqList}
        />
      )}

      <div>
        <h2 css={faqStyle.title.h2}>서비스 문의</h2>
        <div css={faqStyle.downloadSection}>
          <a
            href="/file/proposal.pdf"
            download="기아 비즈 서비스 제안서.pdf"
            className="btn-xxlg btn-tertiary"
          >
            <i className="ic">
              <DownloadIcon />
            </i>
            <span>서비스 제안서 다운로드</span>
          </a>
          <Link href="/Counsel" className="btn-xxlg btn-tertiary">
            <i className="ic">
              <WriteIcon />
            </i>
            <span>상담문의 등록하기</span>
          </Link>
          <Link
            href="https://pf.kakao.com/_xfLxjdb"
            target="_blank"
            rel="noreferrer"
            className="btn-xxlg btn-tertiary"
          >
            <i className="ic">
              <TalkIcon />
            </i>
            <span>
              카톡으로 문의하기
              <em>ID : 기아 비즈</em>
            </span>
          </Link>
        </div>
      </div>

      <div>
        <h2 css={faqStyle.title.h2}>이용 프로세스 안내</h2>
        <ol css={faqStyle.processSection}>
          <li>
            <i className="ic">
              <Process1Icon />
            </i>
            <div className="detail">
              <strong>1. 문의 등록</strong>
              <em>상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.</em>
            </div>
          </li>
          <li>
            <i className="ic">
              <Process2Icon />
            </i>
            <div className="detail">
              <i>
                <ArrowStepIcon />
              </i>
              <strong>2. 관리자 설정</strong>
              <em>관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.</em>
            </div>
          </li>
          <li>
            <i className="ic">
              <Process3Icon />
            </i>
            <div className="detail">
              <i>
                <ArrowStepIcon />
              </i>
              <strong>3. 임직원 가입</strong>
              <em>이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.</em>
            </div>
          </li>
          <li>
            <i className="ic">
              <Process4Icon />
            </i>
            <div className="detail">
              <i>
                <ArrowStepIcon />
              </i>
              <strong>4. 서비스 이용</strong>
              <em>이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!</em>
            </div>
          </li>
        </ol>
      </div>

      <div css={faqStyle.appSection}>
        <h2>
          <em>기아 비즈 App</em> 지금 만나보세요!
        </h2>
        <Link
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <GoogleIcon />
          </i>
          Google Play
        </Link>
        <Link
          href="https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <AppleIcon />
          </i>
          App Store
        </Link>
      </div>
    </>
  );
};

export default FAQ;
