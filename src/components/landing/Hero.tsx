const STATS = [
  { value: "180+", label: "завершених проєктів" },
  { value: "3 роки", label: "гарантії на роботи" },
  { value: "14 днів", label: "середній термін косметичного ремонту" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #f59e0b 0%, transparent 45%), radial-gradient(circle at 80% 0%, #fbbf24 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-medium text-amber-300 ring-1 ring-amber-500/30">
            Ремонт квартир під ключ у Києві та області
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Ремонт квартири без стресу, затримок та прихованих витрат
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Фіксуємо ціну та строки у договорі, присилаємо щотижневі фотозвіти
            та даємо гарантію 3 роки на всі роботи. Розрахунок кошторису —
            протягом 24 годин після заміру.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Отримати розрахунок за 24 години
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-slate-400"
            >
              Переглянути тарифи
            </a>
          </div>
        </div>

        <dl className="grid max-w-2xl grid-cols-1 gap-6 border-t border-slate-700 pt-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dd className="text-2xl font-bold text-white">{stat.value}</dd>
              <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}