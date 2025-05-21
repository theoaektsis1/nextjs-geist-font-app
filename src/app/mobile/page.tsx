"use client";

import React, { useEffect } from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: "€150,00",
    features: [
      "1 Restaurant",
      "Öffnungszeiten + Sonderzeiten",
      "Speisekarte",
      "Reservierungen",
      "Bestellungen",
      "Bewertungen 1 Plattform",
      "Social Media Autopilot fb und instagram 3 Posts pro Woche",
      "Webseiten API",
    ],
  },
  {
    name: "Pro",
    price: "€250,00",
    features: [
      "1 Restaurant",
      "Öffnungszeiten + Sonderzeiten",
      "Speisekarte",
      "Reservierungen",
      "Bestellungen",
      "Bewertungen 3 Plattformen",
      "Social Media Autopilot fb, instagram und tiktok 7 Posts pro Woche",
      "Webseite inkl. Domain",
    ],
  },
  {
    name: "VIP",
    price: "€700,00",
    features: [
      "Mehrere Restaurants",
      "Öffnungszeiten + Sonderzeiten",
      "Speisekarte",
      "Reservierungen",
      "Bestellungen",
      "Bewertungen 3 Plattformen",
      "Social Media Autopilot fb, instagram und tiktok 7 Posts /Woche/Restaurant",
      "Mehrere Webseiten, inkl. Domains",
    ],
  },
];

export default function MobileApp() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          console.log("Service Worker registered successfully.");
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return (
    <>
      <html lang="de">
        <head>
          <title>IKON MEDIA Mobile App</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="min-h-screen bg-white text-black font-sans px-4 py-6 max-w-md mx-auto">
          <main>
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-bold mb-2">IKON MEDIA</h1>
              <p className="text-lg font-semibold mb-4">
                Die beste Lösung für Gastronomen
              </p>
              <p className="mb-6">
                Speisekarte, Website, Social Media, uvm. bewertet mit ★★★★★ von
                100+ Gastronomen
              </p>
              <a
                href="#"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Jetzt kostenlos testen
              </a>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                Die wichtigsten Funktionen im Überblick
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Legen Sie beliebig viele Kategorien (Warengruppen) und beliebig
                  viele Artikel an.
                </li>
                <li>
                  Automatische Bestellnummern-Vergabe inkl. Warnsystem für doppelte
                  Bestellnummern.
                </li>
                <li>Änderungen sofort auf Webseite sichtbar</li>
                <li>
                  Smarte Rechtschreib- und Grammatikprüfung mit Hilfe von OpenAI
                  ChatGPT.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                Planen Sie gemeinsam mit uns Ihre Beiträge
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Wählen Sie aus diversen Kategorien aus, wie Speisekarte, Quiz,
                  Gutscheine, uvm.
                </li>
                <li>
                  Informieren Sie über Events, Sonderöffnungszeiten, Wochenkarten,
                  uvm. auf Social Media
                </li>
                <li>Planen Sie Ihre Beiträge bis zu drei volle Monate im Voraus</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Preise</h2>
              <div className="space-y-6">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="border border-black rounded-lg p-4 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-lg font-bold mb-3">{plan.price} monatlich</p>
                    <ul className="list-disc list-inside space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <footer className="text-center text-sm text-gray-600 mt-12">
              © IKON MEDIA UG. Alle Rechte vorbehalten.
            </footer>
          </main>
        </body>
      </html>
    </>
  );
}
