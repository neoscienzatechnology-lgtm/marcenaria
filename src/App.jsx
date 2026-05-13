import React from "react";

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

const creatives = {
  hero: img("hero-ambiente-premium.png"),
  office: img("home-office-projeto.png"),
  closet: img("closet-planejado.png"),
  living: img("sala-painel-madeira.png"),
  bedroom: img("quarto-planejado.png"),
  logoClean: img("logo-tarozzo-limpo.png"),
};

const services = [
  {
    title: "Móveis planejados",
    text: "Cozinhas, salas, dormitórios, banheiros e ambientes corporativos feitos sob medida.",
    image: creatives.closet,
  },
  {
    title: "Ambientes completos",
    text: "Projetos integrados que unem estética, funcionalidade e aproveitamento inteligente do espaço.",
    image: creatives.living,
  },
  {
    title: "Acabamento premium",
    text: "Materiais selecionados, encaixes precisos e atenção ao detalhe em cada etapa.",
    image: creatives.hero,
  },
  {
    title: "Projetos personalizados",
    text: "Soluções criadas para a rotina, o estilo e as necessidades de cada cliente.",
    image: creatives.office,
  },
];

const pillars = [
  {
    title: "Planejamento",
    text: "Cada projeto começa com escuta, medidas e entendimento real do ambiente.",
    image: creatives.office,
  },
  {
    title: "Qualidade",
    text: "Materiais de alto padrão e execução cuidadosa para entregar durabilidade.",
    image: creatives.living,
  },
  {
    title: "Compromisso",
    text: "Acompanhamento próximo, comunicação clara e responsabilidade em cada fase.",
    image: creatives.bedroom,
  },
  {
    title: "Detalhes",
    text: "Acabamentos e escolhas que transformam móveis em experiências de uso.",
    image: creatives.hero,
  },
];

const portfolio = [
  ["Cozinha gourmet sob medida", creatives.hero],
  ["Painel ripado para sala", creatives.living],
  ["Home office funcional", creatives.office],
  ["Closet planejado", creatives.closet],
  ["Dormitório personalizado", creatives.bedroom],
  ["Ambiente premium integrado", creatives.hero],
];

const steps = [
  "Briefing e levantamento de medidas",
  "Desenvolvimento do projeto personalizado",
  "Escolha de materiais e acabamentos",
  "Produção com precisão",
  "Instalação e entrega final",
];

function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={creatives.logoClean}
        alt="Marcenaria Tarozzo - Detalhes para a vida"
        className="h-12 w-auto max-w-[210px] object-contain sm:h-14"
      />
    </div>
  );
}

function Button({ children, outline = false }) {
  return (
    <a
      href="#contato"
      className={
        outline
          ? "inline-flex max-w-full justify-center rounded-full border border-white/30 px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
          : "inline-flex max-w-full justify-center rounded-full bg-[#C47E3A] px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-xl transition hover:bg-[#A9672E]"
      }
    >
      {children}
    </a>
  );
}

function SectionTag({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#C47E3A]/35 bg-[#C47E3A]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#C47E3A]">
      <span className="h-px w-7 bg-[#C47E3A]" />
      {children}
    </div>
  );
}

function ImageBlock({ src, alt, className = "", label, title }) {
  return (
    <div className={`group relative max-w-full overflow-hidden rounded-[2rem] bg-[#10281F] shadow-2xl ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2118]/90 via-[#0b2118]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/5" />
      <div className="absolute left-8 top-8 rounded-3xl border border-[#C47E3A]/40 bg-[#10281F]/60 p-3 backdrop-blur">
        <img src={creatives.logoClean} alt="Logo Marcenaria Tarozzo" className="h-12 w-auto max-w-[190px] object-contain" />
      </div>
      {(label || title) && (
        <div className="absolute bottom-8 left-8 right-8 max-w-md rounded-[1.5rem] border border-white/10 bg-[#10281F]/72 p-6 text-white backdrop-blur-md">
          {label && <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C47E3A]">{label}</p>}
          {title && <p className="mt-3 text-2xl font-black uppercase leading-tight">{title}</p>}
        </div>
      )}
    </div>
  );
}

function PortfolioCard({ title, src, index }) {
  return (
    <div className="group relative h-96 overflow-hidden rounded-[1.8rem] bg-[#1F3A2E] shadow-lg">
      <img src={src} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F231B]/95 via-[#0F231B]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#C47E3A]">Projeto {String(index + 1).padStart(2, "0")}</p>
        <h3 className="text-2xl font-black uppercase tracking-tight">{title}</h3>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F3EF] text-[#333333]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1F3A2E]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
            <a href="#sobre" className="hover:text-[#C47E3A]">Sobre</a>
            <a href="#servicos" className="hover:text-[#C47E3A]">Serviços</a>
            <a href="#portfolio" className="hover:text-[#C47E3A]">Portfólio</a>
            <a href="#contato" className="hover:text-[#C47E3A]">Contato</a>
          </nav>
          <a href="#contato" className="hidden rounded-full bg-[#C47E3A] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white md:block">Orçamento</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#1F3A2E] text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #C47E3A, transparent 28%), radial-gradient(circle at 80% 10%, #D2C5B5, transparent 18%)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-28">
          <div className="min-w-0">
            <SectionTag>Detalhes para a vida</SectionTag>
            <h1 className="max-w-4xl break-words text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Marcenaria sob medida com acabamento premium.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Projetos personalizados que unem design, funcionalidade e precisão para transformar ambientes em espaços elegantes, duráveis e feitos para o seu jeito de viver.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button>Fazer orçamento</Button>
              <Button outline>Ver projetos</Button>
            </div>
          </div>
          <ImageBlock src={creatives.hero} alt="Ambiente premium de marcenaria planejada" className="min-h-[520px]" label="Detalhes para a vida" title="Ambientes elegantes, funcionais e feitos para durar." />
        </div>
      </section>

      <section id="sobre" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="min-w-0">
            <SectionTag>Sobre a marcenaria</SectionTag>
            <h2 className="break-words text-3xl font-black uppercase tracking-tight text-[#1F3A2E] sm:text-4xl md:text-5xl">
              Design, madeira e precisão em cada detalhe.
            </h2>
          </div>
          <div className="min-w-0 space-y-6 text-lg leading-8 text-[#333333]/75">
            <p>
              A Marcenaria Tarozzo cria soluções sob medida para clientes que valorizam ambientes bem planejados, acabamento refinado e atendimento próximo. Cada projeto é pensado para transformar rotina, estética e funcionalidade em uma entrega única.
            </p>
            <p>
              Do primeiro desenho à instalação final, o trabalho combina técnica, escolha cuidadosa de materiais e atenção ao acabamento para entregar móveis bonitos, duráveis e funcionais.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <ImageBlock src={creatives.office} alt="Home office planejado" className="h-80 md:col-span-1" label="Projetos inteligentes" title="Cada detalhe pensado para sua rotina." />
          <ImageBlock src={creatives.living} alt="Sala planejada com painel em madeira" className="h-80 md:col-span-2" label="Acabamento premium" title="Madeira, design e funcionalidade." />
        </div>
      </section>

      <section id="servicos" className="bg-[#EFE8DF] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionTag>Serviços</SectionTag>
            <h2 className="break-words text-3xl font-black uppercase tracking-tight text-[#1F3A2E] sm:text-4xl md:text-5xl">
              Soluções completas para ambientes personalizados.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, text, image }) => (
              <div key={title} className="rounded-[1.7rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-7 h-40 overflow-hidden rounded-[1.2rem] bg-[#1F3A2E]">
                  <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#1F3A2E]">{title}</h3>
                <p className="mt-4 leading-7 text-[#333333]/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F3A2E] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionTag>Pilares da marcenaria</SectionTag>
            <h2 className="break-words text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">O que guia cada entrega.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ title, text, image }) => (
              <div key={title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
                <div className="h-44 overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-black uppercase tracking-wide text-[#C47E3A]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <SectionTag>Portfólio</SectionTag>
            <h2 className="mx-auto max-w-4xl break-words text-3xl font-black uppercase tracking-tight text-[#1F3A2E] sm:text-4xl md:text-5xl">
              Projetos que valorizam o espaço e o estilo de cada cliente.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map(([item, image], index) => (
              <PortfolioCard key={item} title={item} src={image} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EFE8DF] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTag>Processo</SectionTag>
            <h2 className="break-words text-3xl font-black uppercase tracking-tight text-[#1F3A2E] sm:text-4xl md:text-5xl">Da ideia ao ambiente pronto.</h2>
            <p className="mt-6 text-lg leading-8 text-[#333333]/72">Um fluxo claro para que cada decisão seja feita com segurança e atenção aos detalhes.</p>
            <ImageBlock src={creatives.office} alt="Processo de projeto" className="mt-10 h-80" label="Do projeto à instalação" title="Tudo planejado com precisão." />
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1F3A2E] text-lg font-black text-[#C47E3A]">{index + 1}</div>
                <p className="text-xl font-bold text-[#1F3A2E]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden bg-[#1F3A2E] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(135deg, #C47E3A 0px, #C47E3A 1px, transparent 1px, transparent 28px)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionTag>Contato</SectionTag>
            <h2 className="max-w-4xl break-words text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-6xl">Pronto para transformar seu ambiente?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Solicite um orçamento e receba uma proposta personalizada para seu projeto residencial ou comercial.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button>Chamar no WhatsApp</Button>
              <Button outline>Solicitar projeto</Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
            <Logo />
            <div className="mt-8 space-y-5 text-white/75">
              <p><strong className="text-[#C47E3A]">Telefone:</strong> (11) 99999-9999</p>
              <p><strong className="text-[#C47E3A]">E-mail:</strong> contato@marcenariatarozzo.com.br</p>
              <p><strong className="text-[#C47E3A]">Instagram:</strong> @marcenariatarozzo</p>
              <p><strong className="text-[#C47E3A]">Atendimento:</strong> sob consulta</p>
            </div>
            <div className="mt-8 rounded-3xl bg-[#C47E3A]/15 p-5 text-sm leading-6 text-white/70">
              Substitua os dados de contato pelos canais oficiais da empresa antes de publicar.
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#13251D] px-5 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <Logo />
          <p className="text-sm text-white/50">© 2026 Marcenaria Tarozzo. Detalhes para a vida.</p>
        </div>
      </footer>
    </main>
  );
}
