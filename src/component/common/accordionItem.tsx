import parse from "html-react-parser";
import ArrowIcon from "@/asset/images/ic_arrow.svg";

interface FaqItemProps {
  id: string;
  categoryName?: string;
  subCategoryName?: string;
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
    <li className="accordionItem" key={id + question}>
      <div className={`summary ${isOpen ? "open" : ""}`} onClick={onToggle}>
        {categoryName && <em className="category">{categoryName}</em>}
        <em className="sub">{subCategoryName}</em>
        <strong className="subject">{question}</strong>
        <div className="icon">
          <ArrowIcon />
        </div>
      </div>
      {isOpen && (
        <div className={`details ${isOpen ? "open" : ""}`}>
          <div className="inner">{answer && parse(answer)}</div>
        </div>
      )}
    </li>
  );
};
