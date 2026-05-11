import React from "react";

const services = [
  ["Móveis planejados", "Cozinhas, salas, dormitórios, banheiros e ambientes corporativos feitos sob medida."],
  ["Ambientes completos", "Projetos integrados que unem estética, funcionalidade e aproveitamento inteligente do espaço."],
  ["Acabamento premium", "Materiais selecionados, encaixes precisos e atenção ao detalhe em cada etapa."],
  ["Projetos personalizados", "Soluções criadas para a rotina, o estilo e as necessidades de cada cliente."],
];

const pillars = [
  ["Planejamento", "Cada projeto começa com escuta, medidas e entendimento real do ambiente."],
  ["Qualidade", "Materiais de alto padrão e execução cuidadosa para entregar durabilidade."],
  ["Compromisso", "Acompanhamento próximo, comunicação clara e responsabilidade em cada fase."],
  ["Detalhes", "Acabamentos e escolhas que transformam móveis em experiências de uso."],
];

const portfolio = [
  ["Cozinha gourmet sob medida", "cozinha"],
  ["Painel ripado para sala", "sala"],
  ["Home office funcional", "office"],
  ["Closet planejado", "closet"],
  ["Dormitório personalizado", "quarto"],
  ["Ambiente premium integrado", "integrado"],
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
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C47E3A]/50 bg-[#163126] shadow-lg">
        <div className="absolute top-3 h-1 w-8 rounded-full bg-[#C47E3A]" />
        <div className="absolute top-5 h-1 w-6 rounded-full bg-[#C47E3A]" />
        <span className="mt-3 text-2xl font-black text-[#C47E3A]">T</span>
      </div>
      <div className="leading-tight">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/70">Marcenaria</p>
        <p className="text-xl font-black uppercase tracking-[0.18em] text-white">Tarozzo</p>
      </div>
    </div>
  );
}

function Button({ children, outline = false }) {
  return (
    <a href="#contato" className={outline ? "inline-flex justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10" : "inline-flex justify-center rounded-full bg-[#C47E3A] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl transition hover:bg-[#A9672E]"}>
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

function WoodTexture({ className = "" }) {
  return <div className={`absolute inset-0 ${className}`} style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(135deg, #5b3318, #9f642f 45%, #c47e3a)", backgroundSize: "22px 100%, cover" }} />;
}

function BrandMark({ small = false }) {
  return (
    <div className={`relative ${small ? "h-14 w-14" : "h-20 w-20"}`}>
      <div className="absolute left-1/2 top-3 h-1.5 w-3/4 -translate-x-1/2 rounded-full bg-[#C47E3A]" />
      <div className="absolute left-1/2 top-7 h-1.5 w-1/2 -translate-x-1/2 rounded-full bg-[#C47E3A]" />
      <div className="absolute bottom-2 left-1/2 h-10 w-3 -translate-x-1/2 rounded bg-[#C47E3A]" />
      <div className="absolute bottom-2 left-[28%] h-9 w-2 rotate-[24deg] rounded bg-[#C47E3A]" />
      <div className="absolute bottom-2 right-[28%] h-9 w-2 -rotate-[24deg] rounded bg-[#C47E3A]" />
    </div>
  );
}

function InteriorCreative({ variant = "sala", label = "Projeto sob medida", className = "" }) {
  const isCloset = variant === "closet";
  const isOffice = variant === "office";
  const isBedroom = variant === "quarto";

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#10281F] shadow-2xl ${className}`}>
      <WoodTexture />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2118]/85 via-[#0b2118]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />
      <div className="absolute right-8 top-8 h-2 w-64 rounded-full bg-[#F0B66E]/70 blur-[1px]" />
      <div className="absolute right-14 top-16 h-56 w-1 rounded-full bg-[#F0B66E]/80" />
      <div className="absolute right-10 top-[17rem] h-3 w-12 rounded-full bg-[#F0B66E]" />
      <div className="absolute right-36 top-20 h-40 w-1 rounded-full bg-[#F0B66E]/60" />
      <div className="absolute right-[8.2rem] top-56 h-3 w-10 rounded-full bg-[#F0B66E]/80" />

      {isCloset ? (
        <div className="absolute right-8 bottom-12 grid h-72 w-[58%] grid-cols-4 gap-3 rounded-[1.5rem] border border-[#F0B66E]/25 bg-[#1F3A2E]/35 p-4 backdrop-blur-sm">
          {Array.from({ length: 8 }).map((_, i) => <div key={i} className="rounded-xl border border-[#F0B66E]/25 bg-black/18 p-2"><div className="mb-3 h-1 rounded bg-[#F0B66E]/60" /><div className="mx-auto h-24 w-1 rounded bg-[#D2C5B5]/50" /><div className="mt-2 h-8 rounded bg-[#6b4424]/70" /></div>)}
        </div>
      ) : isOffice ? (
        <div className="absolute right-8 bottom-12 h-72 w-[58%] rounded-[1.5rem] border border-[#F0B66E]/25 bg-[#3b2414]/55 p-5 backdrop-blur-sm">
          <div className="absolute bottom-10 left-8 right-8 h-20 rounded-xl bg-[#8d572a] shadow-2xl" /><div className="absolute bottom-[7.2rem] left-14 right-14 h-1 rounded bg-[#F0B66E]/55" /><div className="absolute bottom-[8rem] left-16 h-28 w-56 rounded-xl border border-[#D2C5B5]/30 bg-[#EFE8DF]/70 rotate-[-4deg]" /><div className="absolute bottom-[9.5rem] right-20 h-28 w-36 rounded-2xl bg-black/50" /><div className="absolute bottom-16 right-24 h-8 w-24 rounded bg-[#111]" /><div className="absolute bottom-24 left-20 h-4 w-36 rounded bg-[#333]/50" />
        </div>
      ) : isBedroom ? (
        <div className="absolute right-8 bottom-12 h-72 w-[58%] rounded-[1.5rem] border border-[#F0B66E]/25 bg-[#2b1b12]/45 p-5 backdrop-blur-sm">
          <div className="absolute bottom-10 left-8 h-28 w-[78%] rounded-[1.2rem] bg-[#D2C5B5] shadow-2xl" /><div className="absolute bottom-28 left-12 h-20 w-[70%] rounded-t-[1.5rem] bg-[#b6a99b]" /><div className="absolute bottom-32 right-28 h-12 w-20 rounded-xl bg-[#1F3A2E]" /><div className="absolute bottom-32 right-10 h-12 w-20 rounded-xl bg-[#A77A55]" /><div className="absolute left-10 top-8 right-10 h-24 rounded-xl bg-[#6f421f]/70" /><div className="absolute top-24 left-10 right-10 h-2 rounded bg-[#F0B66E]/60" />
        </div>
      ) : (
        <div className="absolute right-8 bottom-12 h-72 w-[58%] rounded-[1.5rem] border border-[#F0B66E]/25 bg-[#2d1c11]/50 p-5 backdrop-blur-sm">
          <div className="absolute bottom-12 left-8 right-8 h-24 rounded-xl bg-[#7a4925] shadow-2xl" /><div className="absolute bottom-36 left-10 right-10 h-28 rounded-xl bg-[#1F3A2E]/85" /><div className="absolute bottom-[16.2rem] left-10 right-10 h-2 rounded bg-[#F0B66E]/70" /><div className="absolute right-12 top-8 h-48 w-24 rounded-xl border border-[#F0B66E]/25 bg-black/25" /><div className="absolute right-[8.8rem] top-8 h-48 w-24 rounded-xl border border-[#F0B66E]/25 bg-black/20" /><div className="absolute left-12 bottom-16 h-20 w-32 rounded-2xl bg-[#D2C5B5]" />
        </div>
      )}

      <div className="absolute left-8 top-8 rounded-3xl border border-[#C47E3A]/40 bg-[#10281F]/60 p-3 backdrop-blur"><BrandMark small /></div>
      <div className="absolute bottom-8 left-8 max-w-sm rounded-[1.5rem] border border-white/10 bg-[#10281F]/70 p-6 text-white backdrop-blur-md">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C47E3A]">{label}</p>
        <p className="mt-3 text-2xl font-black uppercase leading-tight">Ambientes elegantes, funcionais e feitos para durar.</p>
      </div>
    </div>
  );
}

function MiniCreative({ variant, title, index }) {
  return (
    <div className="group relative h-96 overflow-hidden rounded-[1.8rem] bg-[#1F3A2E] shadow-lg">
      <InteriorCreative variant={variant} label={`Projeto ${String(index + 1).padStart(2, "0")}`} className="absolute inset-0 rounded-none shadow-none transition duration-700 group-hover:scale-105" />
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
    <main className="min-h-screen bg-[#F5F3EF] text-[#333333]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1F3A2E]/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"><Logo /><nav className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex"><a href="#sobre" className="hover:text-[#C47E3A]">Sobre</a><a href="#servicos" className="hover:text-[#C47E3A]">Serviços</a><a href="#portfolio" className="hover:text-[#C47E3A]">Portfólio</a><a href="#contato" className="hover:text-[#C47E3A]">Contato</a></nav><a href="#contato" className="hidden rounded-full bg-[#C47E3A] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white md:block">Orçamento</a></div></header>
      <section className="relative overflow-hidden bg-[#1F3A2E] text-white"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #C47E3A, transparent 28%), radial-gradient(circle at 80% 10%, #D2C5B5, transparent 18%)" }} /><div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-28"><div><SectionTag>Detalhes para a vida</SectionTag><h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">Marcenaria sob medida com acabamento premium.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">Projetos personalizados que unem design, funcionalidade e precisão para transformar ambientes em espaços elegantes, duráveis e feitos para o seu jeito de viver.</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><Button>Fazer orçamento</Button><Button outline>Ver projetos</Button></div></div><InteriorCreative variant="cozinha" label="Detalhes para a vida" className="min-h-[520px]" /></div></section>
      <section id="sobre" className="px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><SectionTag>Sobre a marca</SectionTag><h2 className="text-4xl font-black uppercase tracking-tight text-[#1F3A2E] md:text-5xl">Design, madeira e precisão em cada detalhe.</h2></div><div className="space-y-6 text-lg leading-8 text-[#333333]/75"><p>A Marcenaria Tarozzo cria soluções sob medida para clientes que valorizam ambientes bem planejados, acabamento refinado e atendimento próximo. Cada projeto é pensado para transformar rotina, estética e funcionalidade em uma entrega única.</p><p>A identidade visual combina verde escuro, tons amadeirados, cobre e bege, transmitindo sofisticação, confiança, qualidade artesanal e modernidade.</p></div></div></section>
      <section className="px-5 pb-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3"><InteriorCreative variant="office" label="Projetos inteligentes" className="h-80 md:col-span-1" /><InteriorCreative variant="sala" label="Acabamento premium" className="h-80 md:col-span-2" /></div></section>
      <section id="servicos" className="bg-[#EFE8DF] px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><SectionTag>Serviços</SectionTag><h2 className="text-4xl font-black uppercase tracking-tight text-[#1F3A2E] md:text-5xl">Soluções completas para ambientes personalizados.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(([title, text]) => <div key={title} className="rounded-[1.7rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F3A2E] text-2xl font-black text-[#C47E3A]">T</div><h3 className="text-xl font-black uppercase tracking-tight text-[#1F3A2E]">{title}</h3><p className="mt-4 leading-7 text-[#333333]/70">{text}</p></div>)}</div></div></section>
      <section className="bg-[#1F3A2E] px-5 py-24 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><SectionTag>Pilares da marca</SectionTag><h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">O que guia cada entrega.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{pillars.map(([title, text]) => <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"><div className="mb-6 h-10 w-10 rounded-full border border-[#C47E3A]/50" /><h3 className="font-black uppercase tracking-wide text-[#C47E3A]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{text}</p></div>)}</div></div></section>
      <section id="portfolio" className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 text-center"><SectionTag>Portfólio</SectionTag><h2 className="mx-auto max-w-4xl text-4xl font-black uppercase tracking-tight text-[#1F3A2E] md:text-5xl">Projetos que valorizam o espaço e o estilo de cada cliente.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{portfolio.map(([item, variant], index) => <MiniCreative key={item} title={item} variant={variant} index={index} />)}</div></div></section>
      <section className="bg-[#EFE8DF] px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]"><div><SectionTag>Processo</SectionTag><h2 className="text-4xl font-black uppercase tracking-tight text-[#1F3A2E] md:text-5xl">Da ideia ao ambiente pronto.</h2><p className="mt-6 text-lg leading-8 text-[#333333]/72">Um fluxo claro para que cada decisão seja feita com segurança e atenção aos detalhes.</p><InteriorCreative variant="office" label="Do projeto à instalação" className="mt-10 h-80" /></div><div className="space-y-4">{steps.map((step, index) => <div key={step} className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-sm"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1F3A2E] text-lg font-black text-[#C47E3A]">{index + 1}</div><p className="text-xl font-bold text-[#1F3A2E]">{step}</p></div>)}</div></div></section>
      <section id="contato" className="relative overflow-hidden bg-[#1F3A2E] px-5 py-24 text-white lg:px-8"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(135deg, #C47E3A 0px, #C47E3A 1px, transparent 1px, transparent 28px)" }} /><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr]"><div><SectionTag>Contato</SectionTag><h2 className="max-w-4xl text-4xl font-black uppercase tracking-tight md:text-6xl">Pronto para transformar seu ambiente?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Solicite um orçamento e receba uma proposta personalizada para seu projeto residencial ou comercial.</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><Button>Chamar no WhatsApp</Button><Button outline>Solicitar projeto</Button></div></div><div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur"><Logo /><div className="mt-8 space-y-5 text-white/75"><p><strong className="text-[#C47E3A]">Telefone:</strong> (11) 99999-9999</p><p><strong className="text-[#C47E3A]">E-mail:</strong> contato@marcenariatarozzo.com.br</p><p><strong className="text-[#C47E3A]">Instagram:</strong> @marcenariatarozzo</p><p><strong className="text-[#C47E3A]">Atendimento:</strong> sob consulta</p></div><div className="mt-8 rounded-3xl bg-[#C47E3A]/15 p-5 text-sm leading-6 text-white/70">Substitua os dados de contato pelos canais oficiais da empresa antes de publicar.</div></div></div></section>
      <footer className="bg-[#13251D] px-5 py-8 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row"><Logo /><p className="text-sm text-white/50">© 2026 Marcenaria Tarozzo. Detalhes para a vida.</p></div></footer>
    </main>
  );
}
