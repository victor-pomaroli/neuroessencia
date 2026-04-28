"use client";
import Image from "next/image";
import { useState } from "react";

const WA_URL =
  "https://wa.me/5531995356323?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20neuropsicol%C3%B3gica.";
const WA_URL_SCHEDULE =
  "https://wa.me/5531995356323?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20neuropsicol%C3%B3gica.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppButton({
  href,
  text,
  microcopy,
  large,
  light,
}: {
  href: string;
  text: string;
  microcopy?: string;
  large?: boolean;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 font-semibold rounded-full shadow-lg active:scale-95 transition-all duration-200 ${
          light
            ? "bg-white text-titulo hover:bg-fundo"
            : "bg-titulo text-white hover:bg-titulo-light"
        } ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"}`}
      >
        <WhatsAppIcon className={large ? "w-6 h-6" : "w-5 h-5"} />
        {text}
      </a>
      {microcopy && (
        <p className="text-xs text-texto-light text-center">{microcopy}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <IndicationsSection />
      <InvestigateSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-fundo min-h-[88vh] flex items-center">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#f5d0c5", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "#4faf9e", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-sand text-titulo text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
            <span
              className="w-2 h-2 rounded-full bg-green-400"
              style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
            />
            Agenda aberta — presencial e online
          </div>

          <h1 className="font-display text-5xl lg:text-7xl text-titulo leading-[1.05] mb-6">
            Entender a sua <br />
            <em className="not-italic" style={{ fontStyle: "italic", fontWeight: 300 }}>
              mente
            </em>{" "}
            é o <br />
            primeiro passo
          </h1>

          <p className="text-texto text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            A avaliação neuropsicológica oferece respostas claras sobre como
            você pensa, aprende e sente — para que você possa viver com mais
            leveza e intencionalidade.
          </p>

          <WhatsAppButton
            href={WA_URL}
            text="Quero agendar minha avaliação"
            microcopy="Resposta em até 24 horas · Sem compromisso"
            large
          />
        </div>

        <div className="flex-shrink-0 relative w-72 h-80 lg:w-96 lg:h-[480px]">
          <div
            className="w-full h-full overflow-hidden shadow-2xl"
            style={{ borderRadius: "2rem" }}
          >
            <Image
              src="/adult.jpg"
              alt="Ambiente de consulta neuropsicológica acolhedor"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute -bottom-4 -left-4 bg-white shadow-lg p-4 flex items-center gap-3"
            style={{ borderRadius: "1rem" }}
          >
            <div
              className="w-10 h-10 flex items-center justify-center text-titulo font-bold text-lg"
              style={{ background: "#f5d0c5", borderRadius: "50%" }}
            >
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-titulo">Laudo completo</p>
              <p className="text-xs text-texto-light">Com orientações personalizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { number: "10+", label: "Anos de experiência" },
    { number: "500+", label: "Avaliações realizadas" },
    { number: "4", label: "Faixas etárias atendidas" },
    { number: "CRP/MG", label: "Registro profissional ativo" },
  ];

  return (
    <div className="bg-titulo text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl font-semibold">{stat.number}</p>
              <p className="text-sm mt-1" style={{ opacity: 0.75 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-fundo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-shrink-0 relative">
            <div
              className="w-72 h-80 lg:w-80 lg:h-96 overflow-hidden shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              <Image
                src="/adult.jpg"
                alt="Neuropsicóloga NeuroEssência"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 bg-white shadow-lg p-4 text-center"
              style={{ borderRadius: "1rem" }}
            >
              <p className="text-titulo font-bold text-sm">CRP/MG</p>
              <p className="text-xs text-texto-light">Registro ativo</p>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <span className="text-sm font-medium text-botao uppercase tracking-widest mb-3 block">
              Sobre a profissional
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-titulo mb-6 leading-tight">
              Uma avaliação feita com ciência{" "}
              <em style={{ fontWeight: 300 }}>e cuidado</em>
            </h2>
            <p className="text-texto text-lg leading-relaxed mb-5">
              Sou neuropsicóloga especializada em avaliação do funcionamento
              cognitivo, emocional e comportamental. Acredito que cada mente é
              única — e que uma avaliação bem feita é o primeiro passo para o
              tratamento certo, a escola certa, o suporte certo.
            </p>
            <p className="text-texto text-lg leading-relaxed mb-8">
              Trabalho com método científico validado e linguagem acessível, para
              que você saia da consulta com clareza — não com mais dúvidas.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                "Neuropsicologia",
                "Avaliação Cognitiva",
                "Neurodesenvolvimento",
                "Demências",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-fundo-alt text-titulo text-sm px-3 py-1.5 border border-sand font-medium"
                  style={{ borderRadius: "9999px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndicationsSection() {
  const groups = [
    {
      title: "Crianças",
      description:
        "Quando há dificuldades escolares, problemas de atenção, atraso no desenvolvimento da fala ou comportamentos desafiadores que preocupam os pais.",
      image: "/lapis.jpeg",
      emoji: "🧒",
    },
    {
      title: "Adolescentes",
      description:
        "Quando o desempenho escolar cai, a motivação some, surgem mudanças de comportamento ou suspeita de transtornos como TDAH e dislexia.",
      image: "/teen.jpg",
      emoji: "🧑",
    },
    {
      title: "Adultos",
      description:
        "Quando você sente que sua memória ou concentração não estão como antes, enfrenta ansiedade intensa, ou quer se conhecer melhor para tomar decisões mais conscientes.",
      image: "/adult.jpg",
      emoji: "🧑‍💼",
    },
    {
      title: "Idosos",
      description:
        "Quando surgem esquecimentos frequentes, mudanças de personalidade ou há suspeita de Alzheimer e outras demências — o diagnóstico precoce faz toda a diferença.",
      image: "/senior.jpg",
      emoji: "👴",
    },
  ];

  return (
    <section id="indicacoes" className="py-20 lg:py-28 bg-fundo-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-botao uppercase tracking-widest mb-3 block">
            Para quem é indicado
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-titulo leading-tight">
            Você se identifica{" "}
            <em style={{ fontWeight: 300 }}>com alguma situação?</em>
          </h2>
          <p className="text-texto text-lg mt-4 max-w-2xl mx-auto">
            A avaliação neuropsicológica pode ser o passo que estava faltando
            para entender o que está acontecendo e encontrar o caminho certo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              style={{ borderRadius: "1.5rem" }}
            >
              <div className="relative h-48">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,87,83,0.7) 0%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl">{group.emoji}</span>
                  <h3 className="font-display text-2xl text-white font-semibold">
                    {group.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-texto leading-relaxed">{group.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton
            href={WA_URL}
            text="Tire suas dúvidas pelo WhatsApp"
            microcopy="É gratuito e sem compromisso"
          />
        </div>
      </div>
    </section>
  );
}

function InvestigateSection() {
  const conditions = [
    {
      icon: "🧠",
      title: "TDAH",
      desc: "Transtorno do Déficit de Atenção com Hiperatividade",
    },
    { icon: "🌈", title: "TEA", desc: "Transtorno do Espectro Autista" },
    {
      icon: "📚",
      title: "Dislexia e Disgrafia",
      desc: "Transtornos específicos de aprendizagem",
    },
    {
      icon: "⚡",
      title: "Altas Habilidades",
      desc: "Superdotação e perfis de gênio",
    },
    {
      icon: "🌿",
      title: "Ansiedade e Depressão",
      desc: "Avaliação do perfil emocional e cognitivo",
    },
    {
      icon: "🧩",
      title: "Deficiência Intelectual",
      desc: "Atraso global do desenvolvimento",
    },
    {
      icon: "🔍",
      title: "Alzheimer e Demências",
      desc: "Diagnóstico precoce e monitoramento cognitivo",
    },
    {
      icon: "📊",
      title: "Declínio Cognitivo",
      desc: "Memória, atenção, funções executivas",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-fundo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-botao uppercase tracking-widest mb-3 block">
            Áreas de investigação
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-titulo leading-tight">
            O que a avaliação{" "}
            <em style={{ fontWeight: 300 }}>pode identificar?</em>
          </h2>
          <p className="text-texto text-lg mt-4 max-w-2xl mx-auto">
            Com instrumentos científicos validados, investigamos uma ampla gama
            de condições cognitivas, emocionais e do neurodesenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conditions.map((c) => (
            <div
              key={c.title}
              className="bg-white p-5 shadow-sm hover:shadow-md transition-shadow border border-sand"
              style={{ borderRadius: "1rem" }}
            >
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <h3 className="font-semibold text-titulo mb-1">{c.title}</h3>
              <p className="text-sm text-texto-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      bgClass: "bg-destaque",
      title: "Primeiro contato",
      desc: "Você entra em contato pelo WhatsApp. Nossa equipe responde com acolhimento, esclarece dúvidas e apresenta todas as informações sobre valores e prazos — sem pressão.",
    },
    {
      number: "02",
      bgClass: "bg-blue-100",
      title: "Entrevista inicial",
      desc: "A avaliação começa com uma conversa detalhada com a neuropsicóloga: suas principais queixas, história clínica e o que você espera da avaliação.",
    },
    {
      number: "03",
      bgClass: "bg-green-100",
      title: "Sessões de testagem",
      desc: "As sessões são presenciais e agendadas com antecedência. Usamos instrumentos científicos adaptados à faixa etária e demanda específica de cada pessoa.",
    },
    {
      number: "04",
      bgClass: "bg-amber-100",
      title: "Devolutiva e orientações",
      desc: "Você recebe um laudo completo e uma conversa explicando os resultados com clareza. Saímos com orientações práticas e personalizadas para os próximos passos.",
    },
  ];

  return (
    <section id="processo" className="py-20 lg:py-28 bg-titulo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium uppercase tracking-widest mb-3 block"
            style={{ color: "#f5d0c5" }}
          >
            Passo a passo
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight">
            Como funciona o <em style={{ fontWeight: 300 }}>processo?</em>
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Do primeiro contato ao laudo final, tudo é conduzido com cuidado,
            transparência e respeito pelo seu tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 border"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.2)",
                borderRadius: "1.5rem",
              }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 ${step.bgClass} text-titulo font-bold text-lg mb-4`}
                style={{ borderRadius: "0.75rem" }}
              >
                {step.number}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {step.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.72)" }} className="leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            Formato: presencial (Contagem — MG) ou online
          </p>
          <WhatsAppButton
            href={WA_URL_SCHEDULE}
            text="Agendar agora"
            microcopy="Resposta em até 24 horas"
            large
            light
          />
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: "🎯",
      title: "Clareza sobre o que está acontecendo",
      desc: "Chega de achismos. Você terá respostas concretas, baseadas em ciência, sobre o funcionamento da sua mente.",
    },
    {
      icon: "🛤️",
      title: "Direção para os próximos passos",
      desc: "Com o laudo em mãos, você e os profissionais que te acompanham saberão exatamente como agir de forma eficaz.",
    },
    {
      icon: "🤝",
      title: "Suporte na escola, família e trabalho",
      desc: "As orientações do laudo facilitam conversas com professores, gestores, médicos e familiares — garantindo o suporte certo em cada ambiente.",
    },
    {
      icon: "💡",
      title: "Autoconhecimento que transforma",
      desc: "Entender como sua mente funciona é libertador. Muitos relatam que a avaliação foi um ponto de virada em suas vidas.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-fundo-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-botao uppercase tracking-widest mb-3 block">
            O que você leva
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-titulo leading-tight">
            Mais do que um laudo —{" "}
            <em style={{ fontWeight: 300 }}>uma nova perspectiva</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              style={{ borderRadius: "1.5rem" }}
            >
              <span className="text-4xl mb-4 block">{b.icon}</span>
              <h3 className="font-semibold text-titulo text-xl mb-3">
                {b.title}
              </h3>
              <p className="text-texto leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const testimonials = [
    {
      text: "A avaliação foi muito mais completa do que eu esperava. A explicação foi clara e empática, e saí com um relatório que me ajudou a entender meu filho de uma forma que nenhum outro profissional tinha conseguido.",
      author: "Mãe de paciente, 8 anos",
      initial: "A",
    },
    {
      text: "Sempre soube que tinha algo diferente na forma como processo informações. A avaliação confirmou meu TDAH e me deu as ferramentas para lidar com isso. Foi um divisor de águas.",
      author: "Paciente adulta, 34 anos",
      initial: "C",
    },
    {
      text: "Minha mãe estava com esquecimentos frequentes e ficávamos preocupados. A avaliação trouxe clareza e as orientações nos ajudaram a tomar as providências certas rapidamente.",
      author: "Filha de paciente idosa",
      initial: "M",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-fundo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-botao uppercase tracking-widest mb-3 block">
            Experiências compartilhadas
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-titulo leading-tight">
            O que dizem <em style={{ fontWeight: 300 }}>nossos pacientes</em>
          </h2>
          <p className="text-texto-light text-sm mt-3 italic">
            *Relatos adaptados para preservar a identidade dos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 shadow-sm border border-sand"
              style={{ borderRadius: "1.5rem" }}
            >
              <p
                className="font-display text-5xl leading-none mb-4"
                style={{ color: "#d4896f" }}
              >
                &ldquo;
              </p>
              <p className="text-texto leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center text-titulo font-bold"
                  style={{ background: "#f5d0c5", borderRadius: "50%" }}
                >
                  {t.initial}
                </div>
                <p className="text-sm text-texto-light">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.1)",
        borderColor: "rgba(255,255,255,0.2)",
        borderRadius: "1rem",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <span
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            color: "rgba(255,255,255,0.7)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Quanto tempo dura a avaliação neuropsicológica?",
      a: "O processo costuma durar entre 6 e 10 sessões, dependendo da faixa etária e da demanda. Cada sessão tem duração de 50 a 90 minutos. Após as sessões, realizamos a análise e elaboração do laudo.",
    },
    {
      q: "A avaliação é feita em uma só consulta?",
      a: "Não. A avaliação neuropsicológica é um processo estruturado em etapas: entrevista inicial, sessões de testagem e devolutiva. Esse processo garante qualidade e confiabilidade dos resultados.",
    },
    {
      q: "O laudo tem validade? Precisa ser renovado?",
      a: "Sim, laudos têm validade, especialmente para fins escolares e de saúde. Em geral, recomenda-se reavaliação após alguns anos ou quando há mudanças significativas na situação clínica.",
    },
    {
      q: "A avaliação pode ser feita de forma online?",
      a: "Parte das etapas pode ser realizada online. A entrevista inicial e a devolutiva são compatíveis com o formato remoto. As sessões de testagem podem exigir presença em Contagem — MG, dependendo dos instrumentos.",
    },
    {
      q: "O plano de saúde cobre a avaliação?",
      a: "A maioria dos planos de saúde não cobre avaliações neuropsicológicas privadas. Recomendamos verificar diretamente com seu plano. Oferecemos facilidades de pagamento — entre em contato para mais detalhes.",
    },
    {
      q: "Como saber se meu filho precisa de uma avaliação?",
      a: "Se você percebe dificuldades persistentes na escola, comportamentos que preocupam, atrasos no desenvolvimento ou simplesmente quer entender melhor o perfil do seu filho, uma conversa inicial sem compromisso pode esclarecer suas dúvidas.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-titulo">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-sm font-medium uppercase tracking-widest mb-3 block"
            style={{ color: "#f5d0c5" }}
          >
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight">
            Perguntas que{" "}
            <em style={{ fontWeight: 300 }}>todo mundo faz</em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            Não encontrou sua resposta? Fale diretamente comigo.
          </p>
          <WhatsAppButton
            href={WA_URL}
            text="Perguntar pelo WhatsApp"
            light
          />
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-fundo relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "#f5d0c5",
          opacity: 0.2,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="text-sm font-medium text-botao uppercase tracking-widest mb-4 block">
          Pronto para começar?
        </span>
        <h2 className="font-display text-5xl lg:text-6xl text-titulo leading-[1.1] mb-6">
          O próximo passo <br />
          <em style={{ fontWeight: 300 }}>começa com uma conversa</em>
        </h2>
        <p className="text-texto text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Entre em contato pelo WhatsApp, sem compromisso. Tire suas dúvidas,
          saiba mais sobre o processo e descubra como a avaliação
          neuropsicológica pode fazer a diferença na sua vida ou na vida de
          alguém que você ama.
        </p>
        <WhatsAppButton
          href={WA_URL_SCHEDULE}
          text="Iniciar conversa pelo WhatsApp"
          microcopy="Atendimento humanizado · Resposta em até 24 horas"
          large
        />
        <p className="mt-6 text-sm text-texto-light">
          Contagem — MG · Atendimento presencial e online
        </p>
      </div>
    </section>
  );
}
