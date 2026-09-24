import type { ReactNode } from "react";

type AccordionItem = { question: string; answer: ReactNode };

/** Native disclosure preserves keyboard interaction and answers without client JavaScript. */
export function Accordion({
  items,
  label,
}: {
  items: readonly AccordionItem[];
  label?: string;
}) {
  return (
    <div
      className="accordion"
      role={label ? "region" : undefined}
      aria-label={label}
    >
      {items.map(({ question, answer }) => (
        <details className="accordion__item" key={question}>
          <summary>
            <span>{question}</span>
            <span className="accordion__icon" aria-hidden="true" />
          </summary>
          <div className="accordion__answer">{answer}</div>
        </details>
      ))}
    </div>
  );
}
