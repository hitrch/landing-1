const PLANS = [
  {
    name: "Косметичний",
    price: "від 4 500 ₴/м²",
    description: "Оновлення без зміни планування та комунікацій.",
    features: [
      "Вирівнювання стін і стелі",
      "Заміна підлоги та плінтусів",
      "Фарбування, шпалери",
      "Заміна сантехніки та розеток",
    ],
    featured: false,
  },
  {
    name: "Капітальний",
    price: "від 7 800 ₴/м²",
    description: "Повна заміна інженерії та чорнових робіт.",
    features: [
      "Усе з тарифу «Косметичний»",
      "Заміна електрики й водопостачання",
      "Стяжка підлоги, штукатурка стін",
      "Встановлення дверей і сантехніки",
    ],
    featured: true,
  },
  {
    name: "Під ключ з дизайном",
    price: "від 10 500 ₴/м²",
    description: "Індивідуальний дизайн-проєкт і повне оздоблення.",
    features: [
      "Усе з тарифу «Капітальний»",
      "Дизайн-проєкт і 3D-візуалізація",
      "Підбір і закупівля матеріалів",
      "Фінальне прибирання після ремонту",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Тарифи
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Орієнтовні ціни за м². Точний кошторис — після безкоштовного
            заміру.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? "bg-slate-900 text-white ring-1 ring-slate-900"
                  : "border border-slate-200 text-slate-900"
              }`}
            >
              {plan.featured && (
                <span className="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                  Популярний вибір
                </span>
              )}
              <h3 className="mt-4 text-xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>
              <p className="mt-6 text-3xl font-bold">{plan.price}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured ? "text-amber-400" : "text-amber-500"
                      }`}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={plan.featured ? "text-slate-200" : "text-slate-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Обрати тариф
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}