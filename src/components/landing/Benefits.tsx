const BENEFITS = [
  {
    title: "Фіксована ціна в договорі",
    description: "Кошторис не змінюється після підписання — жодних доплат «за факт».",
  },
  {
    title: "Власна бригада",
    description: "Без субпідрядників — ті самі майстри від заміру до фінального приймання.",
  },
  {
    title: "Гарантія 3 роки",
    description: "Безкоштовно виправляємо будь-які недоліки з нашої вини протягом 3 років.",
  },
  {
    title: "Щотижневі фотозвіти",
    description: "Бачите хід робіт у особистому кабінеті, навіть якщо живете в іншому місті.",
  },
  {
    title: "Прозорий кошторис",
    description: "Детальний розрахунок за статтями витрат — матеріали, робота, строки.",
  },
  {
    title: "Дотримання строків",
    description: "За кожен день затримки з нашої вини — компенсація, прописана в договорі.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Чому нам довіряють ремонт
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            180+ завершених об&apos;єктів у Києві та області — без заморожених
            ремонтів і зниклих бригад.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}