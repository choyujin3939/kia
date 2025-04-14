import { http, HttpResponse } from "msw";
import response from "./response";

export const handlers = [
  http.get("/api/faq/category", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab") ?? "";
    const data = response.category[tab as keyof typeof response.category];

    return HttpResponse.json(data ?? []);
  }),

  http.get("/api/faq", ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get("limit") ?? "10");
    const offset = Number(url.searchParams.get("offset") ?? "0");
    const tab = url.searchParams.get("tab");
    const faqCategoryID = url.searchParams.get("faqCategoryID");
    const question = url.searchParams.get("question");

    const categoryMap =
      response.category[tab as keyof typeof response.category];
    if (!categoryMap) {
      return HttpResponse.json({ pageInfo: {}, items: [] });
    }

    const allItems = response.faq.items;

    const subCategoryName = faqCategoryID
      ? categoryMap.find((item) => item.categoryID === faqCategoryID)?.name
      : undefined;

    const filtered = allItems.filter((item) => {
      const compareField =
        tab === "CONSULT" ? "subCategoryName" : "categoryName";
      const categoryNames = Object.values(categoryMap).map(
        (category) => category.name,
      );

      const isInTab = categoryNames.includes(item[compareField]);

      const isInSubTab =
        !faqCategoryID || item[compareField] === subCategoryName;

      const isMatchQuestion = !question || item.question.includes(question);

      return isInTab && isInSubTab && isMatchQuestion;
    });

    const pagedItems = filtered.slice(offset, offset + limit);

    return HttpResponse.json({
      pageInfo: {
        totalRecord: filtered.length,
        offset,
        limit,
        prevOffset: Math.max(0, offset - limit),
        nextOffset: offset + limit >= filtered.length ? offset : offset + limit,
      },
      items: pagedItems,
    });
  }),
];
