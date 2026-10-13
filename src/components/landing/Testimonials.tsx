const TESTIMONIALS = [
  {
    name: "Олена К.",
    location: "ЖК «Комфорт Таун», 62 м²",
    quote:
      "Ремонт зробили за 5 тижнів замість обіцяних шести, бо погода дозволила раніше завершити балкон. Кошторис не змінився ні на гривню.",
  },
  {
    name: "Андрій М.",
    location: "Позняки, 45 м²",
    quote:
      "Найбільше сподобались щотижневі фотозвіти — я був у відрядженні два місяці й весь час бачив, що відбувається в квартирі.",
  },
  {
    name: "Марина і Віталій",
    location: "Оболонь, 78 м²",
    quote:
      "Робили капітальний ремонт із заміною всієї електрики. Майстри акуратні, прибирали за собою щодня. Гарантійний випадок за пів року усунули за два дні.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Відгуки клієнтів
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Що кажуть власники квартир після завершення ремонту.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <blockquote className="text-sm leading-6 text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}