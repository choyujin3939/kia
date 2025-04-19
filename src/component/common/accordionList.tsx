import { accordion, moreButton } from "@/component/pages/faq.styles";
import { AccordionItem } from "@/component/common/accordionItem";
import { useState } from "react";

export interface IFaqItem {
  id: string;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

interface IFaqAccordionListProps {
  faqItems: IFaqItem[] | [];
  hasNextFaqList: boolean;
  fetchNextFaqList: () => void;
  isLoadingNextFaqList: boolean;
}

export const AccordionList = ({
  faqItems,
  hasNextFaqList,
  fetchNextFaqList,
  isLoadingNextFaqList,
}: IFaqAccordionListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      <ul css={accordion}>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.question + index}
            {...item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </ul>
      {hasNextFaqList && (
        <button
          css={moreButton}
          type="button"
          onClick={fetchNextFaqList}
          disabled={isLoadingNextFaqList}
        >
          <i />더 보기
        </button>
      )}
    </div>
  );
};
