import { styles } from "@/app/FAQ/component/faq.styles";
import { AccordionItem } from "@/app/FAQ/component/accordionItem";
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

  if (faqItems.length === 0) return null;

  return (
    <div>
      <ul css={styles.accordion}>
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
          css={styles.more}
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
