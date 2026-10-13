export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 sm:flex-row">
        <p>© {year} РеноДім. Усі права захищені.</p>
        <p className="text-slate-500">
          Демонстраційний проєкт, створений для портфоліо.
        </p>
      </div>
    </footer>
  );
}