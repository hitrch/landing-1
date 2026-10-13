"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    question: "Скільки триває ремонт?",
    answer:
      "Косметичний ремонт квартири 50-60 м² займає 3-4 тижні, капітальний — 6-8 тижнів, під ключ з дизайном — 10-12 тижнів. Точні строки фіксуємо в договорі після заміру.",
  },
  {
    question: "Чи можна розтермінувати оплату?",
    answer:
      "Так, оплата розбивається на етапи: аванс на старті, далі — за завершенням чорнових, оздоблювальних робіт і фінальне приймання.",
  },
  {
    question: "Що входить у кошторис?",
    answer:
      "Кошторис включає вартість матеріалів, роботи бригади, вивезення будівельного сміття та захист меблів і підлоги на час ремонту. Прихованих платежів немає.",
  },
  {
    question: "Чи даєте гарантію на роботи?",
    answer:
      "Гарантія 3 роки на всі виконані роботи. Якщо виникає дефект з нашої вини — виправляємо безкоштовно протягом 5 робочих днів.",
  },
  {
    question: "Чи працюєте за межами Києва?",
    answer:
      "Так, виїжджаємо по всій Київській області. Вартість виїзду бригади за межі Києва узгоджується окремо під час заміру.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Часті запитання
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Не знайшли відповідь? Напишіть нам у формі нижче.
          </p>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-slate-900">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}