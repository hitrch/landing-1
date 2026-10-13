const STEPS = [
  {
    number: "01",
    title: "Заявка та безкоштовний замір",
    description: "Телефонуємо протягом години, домовляємось про зручний час заміру.",
  },
  {
    number: "02",
    title: "Кошторис і дизайн-проєкт",
    description: "Готуємо детальний кошторис і план робіт протягом 24 годин після заміру.",
  },
  {
    number: "03",
    title: "Ремонт із фотозвітами",
    description: "Щотижня надсилаємо фото та відео ходу робіт у особистому кабінеті.",
  },
  {
    number: "04",
    title: "Приймання та гарантія",
    description: "Підписуємо акт приймання, видаємо гарантійний талон на 3 роки.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Як ми працюємо
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Чотири кроки від заявки до заселення в оновлену квартиру.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="text-4xl font-bold text-amber-500">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}