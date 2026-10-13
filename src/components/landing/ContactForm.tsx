"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      area: (form.elements.namedItem("area") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Щось пішло не так");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Щось пішло не так"
      );
    }
  }

  return (
    <section id="contact" className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Залишити заявку на розрахунок
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Залиште контакти — зателефонуємо протягом години, домовимось про
            безкоштовний замір і надішлемо кошторис протягом 24 годин.
          </p>

          <dl className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <dt className="font-semibold text-white">Телефон:</dt>
              <dd>+380 44 123 45 67</dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="font-semibold text-white">Email:</dt>
              <dd>hello@renodim.ua</dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="font-semibold text-white">Офіс:</dt>
              <dd>Київ, вул. Антоновича, 20</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Ім&apos;я
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="Ваше ім'я"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="+380 __ ___ __ __"
              />
            </div>

            <div>
              <label htmlFor="area" className="text-sm font-medium text-slate-700">
                Площа, м²
              </label>
              <input
                id="area"
                name="area"
                type="text"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="60"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Коментар
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                placeholder="Короткий опис проєкту"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Надсилаємо..." : "Надіслати заявку"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-emerald-600">
              Дякуємо! Ми зателефонуємо вам протягом години.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-600">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}