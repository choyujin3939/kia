"use client";

import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import MRadio from "@/component/radio";
import { convertToLabelValue } from "@/util/format";
import useFaqList from "@/app/FAQ/remote/useFaqList";
import parse from "html-react-parser";
import useFaqCategoryList from "@/app/FAQ/remote/useFaqCategoryList";
import MInputText from "@/component/inputText";
import ArrowIcon from "@/asset/images/ic_arrow.svg";
import { styles } from "@/app/FAQ/component/faq.styles";
import { AccordionList, IFaqItem } from "@/app/FAQ/component/accordionList";
import { AccordionItem } from "@/app/FAQ/component/accordionItem";

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
    // setValue,
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

  const faqItems = faqList?.pages.flatMap(page => page.items) ?? [];

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
      <h1 css={styles.h1}>
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

      <AccordionList
        faqItems={faqItems as IFaqItem[]}
        hasNextFaqList={hasNextFaqList}
        fetchNextFaqList={fetchNextFaqList}
        isLoadingNextFaqList={isLoadingNextFaqList}
      />
    </>
  );
};

export default FAQ;
