import React from 'react';

export default function SustainLanding() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white selection:bg-emerald-300 selection:text-[#0B0D10]">
      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-emerald-300/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              LATAM • Pagos & ESG
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Sostenibilidad que{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                sí mueve la aguja
              </span>.
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              <strong>Personas:</strong> aprende ESG sin humo con artículos cortos y shorts. <br />
              <strong>Fintech & PYMES:</strong> implementa pagos y operaciones más verdes en ≤ 30 días.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" role="group" aria-label="Hero CTAs">
              <a
                href="#articulos"
                className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-[#0B0D10] font-medium hover:opacity-90 transition"
              >
                Leer artículos gratis
              </a>
              <a
                href="#toolkit"
                className="inline-flex justify-center items-center px-5 py-3 rounded-md border border-white/20 hover:border-white/40 text-white font-medium"
              >
                Toolkit para empresas
              </a>
            </div>
            <p className="mt-3 text-xs text-white/60">
              Verde como base; moderno para jóvenes adultos y profesional para PYMES.
            </p>
          </div>

          <div aria-hidden="true" className="relative">
            <img
              src="https://images.unsplash.com/photo-1543946602-a0fce8117694?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="rounded-xl ring-1 ring-white/10 object-cover w-full h-72 md:h-96"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-sm">
              <p className="text-white/90 font-semibold">Concept Hub</p>
              <p className="text-white/70">ESG sin humo: definiciones simples y aplicables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rutas rápidas */}
      <section className="px-6 md:px-10 lg:px-16 py-14 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6" role="navigation" aria-label="Rutas de inicio">
          <a
            href="#articulos"
            className="group rounded-xl border border-white/10 hover:border-white/30 p-6 bg-white/[0.02] transition"
          >
            <h2 className="text-xl font-semibold">
              Personas: <span className="text-emerald-300">ESG sin humo</span>
            </h2>
            <p className="mt-2 text-white/75">
              Entiende lo esencial en 5 minutos: artículos breves, shorts y una guía express de conceptos.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-emerald-200 group-hover:translate-x-1 transition">
              Ver conceptos básicos →
            </p>
          </a>

          <a
            href="#toolkit"
            className="group rounded-xl border border-white/10 hover:border-white/30 p-6 bg-white/[0.02] transition"
          >
            <h2 className="text-xl font-semibold">
              Empresas (Fintech & PYMES): <span className="text-emerald-300">Pagos Verdes</span>
            </h2>
            <p className="mt-2 text-white/75">
              Implementa prácticas sostenibles sin frenar tu operación. Checklist operativo y 6 playbooks rápidos.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-emerald-200 group-hover:translate-x-1 transition">
              Ver Toolkit →
            </p>
          </a>
        </div>
      </section>

      {/* Artículos & Shorts */}
      <section id="articulos" className="px-6 md:px-10 lg:px-16 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Artículos y Shorts gratuitos</h3>
              <p className="text-white/70">Piezas cortas, al grano, con ejemplos de LATAM.</p>
            </div>
            <a href="#suscripcion" className="text-emerald-200 hover:text-emerald-100">
              Quiero los nuevos por mail →
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Qué es ESG (sin humo)',
                tag: 'Concepto',
                img: 'https://images.unsplash.com/photo-1500928452274-d572117af498?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Pagos y huella de carbono',
                tag: 'Pagos',
                img: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Greenwashing: cómo evitarlo',
                tag: 'Comunicación',
                img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
              }
            ].map((a) => (
              <article key={a.title} className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <img src={a.img} alt="" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-300/20">
                    {a.tag}
                  </span>
                  <h4 className="mt-3 font-semibold">{a.title}</h4>
                  <a href="#" className="mt-3 inline-block text-emerald-200 hover:text-emerald-100">
                    Leer →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Hub */}
      <section className="px-6 md:px-10 lg:px-16 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold">Concept Hub: ESG en claro</h3>
          <p className="text-white/70">Definiciones simples + checklist aplicable en tu día a día.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { k: 'ESG', d: 'Marco para evaluar impacto ambiental, social y de gobernanza.' },
              { k: 'Pagos Verdes', d: 'Prácticas para reducir impacto en el ciclo de pago.' },
              { k: 'Materialidad', d: 'Enfoque en lo que realmente importa para tu negocio.' }
            ].map((c) => (
              <div key={c.k} className="rounded-xl p-5 border border-white/10 bg-white/[0.02]">
                <h4 className="font-semibold">{c.k}</h4>
                <p className="mt-2 text-white/75">{c.d}</p>
                <a href="#" className="mt-3 inline-block text-emerald-200 hover:text-emerald-100">
                  Ver ejemplo →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empresas: Toolkit */}
      <section id="toolkit" className="px-6 md:px-10 lg:px-16 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Toolkit “Pagos Verdes”</h3>
            <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
              <li>Checklist operativo listo para implementar.</li>
              <li>6 playbooks rápidos (onboarding, reporting, comunicación, etc.).</li>
              <li>Storytelling creíble sin greenwashing.</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#suscripcion"
                className="inline-flex px-5 py-3 rounded-md bg-white text-[#0B0D10] font-medium hover:opacity-90 transition"
              >
                Recibir teaser por correo
              </a>
              <a
                href="#"
                className="inline-flex px-5 py-3 rounded-md border border-white/20 hover:border-white/40 text-white font-medium"
              >
                Agendar 20 min
              </a>
            </div>
          </div>
          <div aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="rounded-xl ring-1 ring-white/10 object-cover w-full h-72 md:h-96"
            />
          </div>
        </div>
      </section>

      {/* Suscripción */}
      <section id="suscripcion" className="px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold">Recibe artículos y shorts nuevos</h3>
          <p className="text-white/70">1‑2 correos/mes. Sin spam. Solo valor.</p>
          <form className="mt-4 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-md bg-[#0B0D10] text-white placeholder-white/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-md bg-emerald-400/90 hover:bg-emerald-400 text-[#0B0D10] font-semibold transition"
            >
              Suscribirme
            </button>
          </form>
          <p className="mt-2 text-xs text-white/50">
            Al suscribirte aceptas nuestra política de privacidad.
          </p>
        </div>
      </section>
    </main>
  );
}
