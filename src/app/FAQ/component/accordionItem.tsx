import { FC } from "react";
import parse from "html-react-parser";
import ArrowIcon from "@/asset/images/ic_arrow.svg";
import { styles } from "@/app/FAQ/component/faq.styles";

interface FaqItemProps {
  id: string;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem = ({
  id,
  categoryName,
  subCategoryName,
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) => {
  return (
    <li css={styles.accordionItem} className="accordion" key={id + question}>
      <h3 css={[styles.summary]} className={`${isOpen ? "open" : ""}`} onClick={onToggle}>
        <em>{categoryName}</em>
        <em>{subCategoryName}</em>
        <strong>{question}</strong>
        <div className="icon">
          <ArrowIcon />
        </div>
      </h3>
      {isOpen && (
        <div css={styles.details} className={isOpen ? "open" : ""}>
          <div className="inner">{answer && parse(answer)}</div>
        </div>
      )}
    </li>
  );
};
