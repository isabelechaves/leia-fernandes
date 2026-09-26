import { createFileRoute } from "@tanstack/react-router";
import {
  HeartPulse,
  MapPinned,
  Users,
  GraduationCap,
  Baby,
  HandHeart,
  Instagram,
  Stethoscope,
  Cross,
  Landmark,
  Quote,
  ChevronRight,
} from "lucide-react";

import fotoHero from "@/assets/leia-IMG_5086.jpg.asset.json";
import fotoEnfermeira from "@/assets/leia-IMG_5030.jpg.asset.json";
import fotoProfissional from "@/assets/leia-IMG_5193.jpg.asset.json";
import fotoBandeira from "@/assets/leia-IMG_5174.jpg.asset.json";
import fotoRally from "@/assets/leia-rally-0049.jpg.asset.json";
import fotoPalco from "@/assets/leia-rally-0041.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Leia Fernandes 22456 — Deputada Estadual do Amazonas",
      },
      {
        name: "description",
        content:
          "Leia Fernandes, enfermeira e servidora pública, candidata a deputada estadual do Amazonas pelo número 22456. Saúde, cuidado e compromisso com o povo amazonense.",
      },
      { property: "og:title", content: "Leia Fernandes 22456 — Deputada Estadual do Amazonas" },
      {
        property: "og:description",
        content:
          "Enfermeira, servidora pública e cristã. Paixão em cuidar, determinação para defender, visão para o futuro. Vote 22456.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Eixo = {
  numero: string;
  titulo: string;
  subtitulo: string;
  icone: typeof HeartPulse;
  descricao: string;
  propostas: string[];
};

const eixos: Eixo[] = [
  {
    numero: "01",
    titulo: "Saúde em todas as idades",
    subtitulo: "Saúde",
    icone: HeartPulse,
    descricao:
      "O acesso à saúde precisa acompanhar as pessoas desde a infância até a terceira idade, com atenção às necessidades de cada fase da vida.",
    propostas: [
      "Fortalecer ações de prevenção e promoção da saúde para crianças, jovens, adultos e idosos.",
      "Estruturar linhas de cuidado por ciclo de vida, com metas monitoradas de cobertura vacinal e exames preventivos.",
      "Ampliar a atenção à saúde da mulher e o acesso a acompanhamento preventivo.",
      "Incentivar acompanhamento integrado de doenças crônicas, com prontuário eletrônico único entre unidades.",
    ],
  },
  {
    numero: "02",
    titulo: "Saúde para quem vem do interior",
    subtitulo: "Interior e SISREG",
    icone: MapPinned,
    descricao:
      "Quem viaja horas para cuidar da saúde não pode voltar para casa sem atendimento. O SISREG deveria ser garantia de previsibilidade — hoje, muitas vezes, é uma fila invisível.",
    propostas: [
      "Maior integração entre municípios, SISREG e unidades de saúde da capital.",
      "Prazo máximo de resposta na regulação de vagas, com regras claras e cobrança de cumprimento.",
      "Painel público de acompanhamento do SISREG: tempo de espera, vagas e taxa de absorção por município.",
      "Leito de retaguarda para o paciente do interior enquanto aguarda regulação.",
      "Telessaúde e teleconsulta para reduzir deslocamentos evitáveis.",
    ],
  },
  {
    numero: "03",
    titulo: "Cuidado com os idosos",
    subtitulo: "Pessoa Idosa",
    icone: Users,
    descricao:
      "Envelhecer não deveria significar enfrentar a vida sozinho. O cuidado com a pessoa idosa precisa ir além do atendimento de urgência.",
    propostas: [
      "Fortalecer serviços de atenção domiciliar e visitas programadas a idosos.",
      "Identificar e acompanhar idosos que vivem sozinhos em situação de vulnerabilidade.",
      "Integrar saúde, assistência social e redes de apoio comunitário.",
      "Prevenção de quedas, promoção da autonomia e envelhecimento saudável.",
    ],
  },
  {
    numero: "04",
    titulo: "Gravidez na adolescência",
    subtitulo: "Educação e Prevenção",
    icone: GraduationCap,
    descricao:
      "Informação também é cuidado. Prevenção também é proteção. A prevenção exige informação, acolhimento e busca ativa — não pode depender da adolescente chegar sozinha ao sistema.",
    propostas: [
      "Educação em saúde nas escolas, com abordagem adequada à idade e participação das famílias.",
      "Busca ativa de adolescentes grávidas em vulnerabilidade, via ESF e agentes comunitários.",
      "Orientação sobre saúde sexual e reprodutiva e planejamento familiar.",
      "Rede de apoio psicossocial para a adolescente grávida, prevenindo a evasão escolar.",
    ],
  },
  {
    numero: "05",
    titulo: "Pré-natal e leito garantido",
    subtitulo: "Pré-natal e Leito Garantido",
    icone: Baby,
    descricao:
      "Nenhuma mãe ou bebê deveria morrer por falta de vaga. Cada óbito materno ou neonatal evitável é uma falha do sistema que pode e deve ser corrigida.",
    propostas: [
      "Identificação precoce da gestação de alto risco, com encaminhamento monitorado para Manaus.",
      "Sistema de reserva e monitoramento de leitos obstétricos em tempo real.",
      "Transporte dedicado (SAMU e remoção aérea) para gestantes de alto risco do interior.",
      "Comitê de vigilância de óbito materno e neonatal, com investigação obrigatória de cada caso.",
    ],
  },
  {
    numero: "06",
    titulo: "Povos indígenas e comunidades",
    subtitulo: "Respeito e Inclusão",
    icone: HandHeart,
    descricao:
      "Todo povo merece respeito. Todo lugar merece atenção. As políticas públicas precisam considerar as comunidades rurais, ribeirinhas, indígenas e os municípios distantes da capital.",
    propostas: [
      "Respeito aos direitos dos povos indígenas, suas culturas, tradições e formas de organização.",
      "Escuta e participação das comunidades na identificação de suas necessidades.",
      "Melhorias no acesso à saúde, educação e serviços públicos nas comunidades do interior.",
      "Iniciativas que considerem distâncias, transporte e particularidades geográficas do Amazonas.",
    ],
  },
];

const pilares = [
  { icone: Stethoscope, titulo: "Enfermeira", texto: "Técnica em enfermagem e servidora pública na área da saúde, na linha de frente." },
  { icone: Landmark, titulo: "Servidora Pública", texto: "Compromisso com o serviço público e com quem dele depende." },
  { icone: Cross, titulo: "Cristã", texto: "Fé que move o cuidado com o próximo e a defesa da vida." },
];

type Marco = {
  ano: string;
  titulo: string;
  texto: string;
};

const trajetoria: Marco[] = [
  {
    ano: "Lábrea/AM",
    titulo: "Nasceu no interior do Amazonas",
    texto:
      "Leia Fernandes nasceu em Lábrea, no Amazonas. Desde cedo conviveu com a realidade do interior e dos povos da floresta.",
  },
  {
    ano: "2005",
    titulo: "Chegada a Manaus",
    texto:
      "Veio para Manaus com um sonho que nasceu no coração de Deus. Ainda no ensino médio, começou a cursar técnico em enfermagem e, depois, cabeleireira — sempre buscando conhecimento.",
  },
  {
    ano: "Ministério",
    titulo: "O chamado de cuidar",
    texto:
      "Seu primeiro ministério foi o missionário. Foi nesse serviço de amor ao próximo que nasceu o chamado de cuidar das crianças, das grávidas, dos adolescentes, dos idosos e das mulheres.",
  },
  {
    ano: "Formação",
    titulo: "Sempre estudando",
    texto:
      "Seguiu estudando e fez curso superior em Serviço Social e, depois, em Administração Empresarial Pública — unindo cuidado técnico e gestão pública.",
  },
  {
    ano: "Interior",
    titulo: "Conhecimento de causa",
    texto:
      "Viajou pelos interiores do Amazonas atuando na área da saúde. Viu de perto os problemas do estado e construiu, na prática, propostas técnicas e cobráveis.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Barra superior */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2 text-center text-xs font-semibold tracking-wide sm:text-sm">
          <span className="rounded bg-accent px-2 py-0.5 font-bold text-accent-foreground">22456</span>
          <span>LEIA FERNANDES · DEPUTADA ESTADUAL DO AMAZONAS</span>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
              Nº 22456 · BRASIL
            </span>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight text-secondary-foreground sm:text-6xl md:text-7xl">
              LEIA
              <br />
              FERNANDES
            </h1>
            <p className="mt-3 text-xl font-semibold text-accent sm:text-2xl">
              Deputada Estadual do Amazonas
            </p>
            <p className="mt-5 max-w-md text-lg text-secondary-foreground/90">
              Paixão em cuidar. Determinação para defender. Visão para o futuro.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#propostas"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lg transition hover:brightness-110"
              >
                Conheça as propostas
                <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/leiafernandesam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-6 py-3 text-base font-bold text-accent transition hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-5 w-5" />
                @leiafernandesam
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-sm md:max-w-md">
              <div className="absolute -inset-3 -rotate-2 rounded-3xl bg-accent/80" />
              <img
                src={fotoHero.url}
                alt="Leia Fernandes, candidata a deputada estadual do Amazonas"
                className="relative rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="h-3 w-full bg-gradient-to-r from-primary via-accent to-primary" />
      </header>

      {/* Sobre Leia */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-3 rotate-2 rounded-3xl bg-primary/20" />
            <img
              src={fotoEnfermeira.url}
              alt="Leia Fernandes como enfermeira"
              className="relative mx-auto max-w-sm rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Quem é Leia
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Enfermeira. Servidora pública. Cristã.
            </h2>
            <p className="mt-3 text-base font-semibold text-accent">
              41 anos · Natural de Lábrea, Amazonas
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Cuidar de quem precisa é olhar para todo o Amazonas — da capital aos municípios mais
              distantes. Leia Fernandes nasceu em Lábrea, no interior do Amazonas, e chegou a Manaus
              em 2005 com um sonho que nasceu no coração de Deus. Seu primeiro ministério foi o
              missionário; foi nesse serviço de amor ao próximo que nasceu o chamado de cuidar das
              crianças, das grávidas, dos adolescentes, dos idosos e das mulheres.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Ainda no ensino médio, cursou técnico em enfermagem e depois cabeleireira. Seguiu
              estudando e fez curso superior em Serviço Social e, em seguida, em Administração
              Empresarial Pública. Como servidora pública na área da saúde, viajou pelos interiores
              do Amazonas — e viu de perto os problemas que suas propostas agora buscam corrigir.
              Compromissos técnicos, concretos e cobráveis, nascidos da prática.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {pilares.map((p) => (
                <div
                  key={p.titulo}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
                >
                  <p.icone className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-2 font-bold text-foreground">{p.titulo}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linha do tempo da trajetória */}
        <div className="mt-14">
          <h3 className="text-center text-2xl font-extrabold sm:text-3xl">
            Uma trajetória de cuidado e conhecimento
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-5">
            {trajetoria.map((marco, i) => (
              <div key={i} className="relative">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                    {marco.ano}
                  </span>
                  <h4 className="mt-3 text-base font-bold text-foreground">{marco.titulo}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{marco.texto}</p>
                </div>
                {i < trajetoria.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-primary/30 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faixa de destaque */}
      <div className="bg-primary py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-lg font-semibold text-primary-foreground">
          Um Amazonas inteiro precisa ser cuidado. Da capital ao interior mais distante.
        </p>
      </div>

      {/* Propostas */}
      <section id="propostas" className="mx-auto max-w-6xl scroll-mt-4 px-4 py-16 md:py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Propostas
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Seis eixos de compromisso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Compromissos técnicos, concretos e cobráveis — nascidos da prática de quem está na linha
            de frente da saúde pública.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {eixos.map((eixo) => (
            <article
              key={eixo.numero}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <eixo.icone className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-foreground/70">
                    Eixo {eixo.numero} · {eixo.subtitulo}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-foreground">{eixo.titulo}</h3>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{eixo.descricao}</p>
              <ul className="mt-5 space-y-2.5">
                {eixo.propostas.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Galeria — aproximação com o eleitor */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              Com o povo
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-secondary-foreground sm:text-4xl">
              Leia entre a gente
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-foreground/80">
              Da consulta ao comício, do branco do consultório ao verde-amarelo da rua — Leia está
              onde o povo está.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={fotoProfissional.url}
                alt="Leia Fernandes em postura profissional"
                className="h-72 w-full object-cover transition hover:scale-105"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl shadow-lg lg:row-span-2">
              <img
                src={fotoRally.url}
                alt="Leia Fernandes em caminhada com apoiadores"
                className="h-full w-full object-cover transition hover:scale-105"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={fotoBandeira.url}
                alt="Leia Fernandes segurando a bandeira do Brasil"
                className="h-72 w-full object-cover transition hover:scale-105"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl shadow-lg sm:col-span-2 lg:col-span-2">
              <img
                src={fotoPalco.url}
                alt="Leia Fernandes no palco fazendo gesto de coração"
                className="h-72 w-full object-cover transition hover:scale-105 lg:h-full"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Citação / compromisso */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <Quote className="mx-auto h-12 w-12 text-accent" />
        <blockquote className="mt-6 text-center text-2xl font-semibold leading-relaxed sm:text-3xl">
          “Cuidar tecnicamente é cuidar de verdade.”
        </blockquote>
        <p className="mt-6 text-center text-lg text-muted-foreground">
          As propostas de Leia Fernandes partem da experiência prática de quem já esteve na linha de
          frente da saúde pública — e se conectam em um mesmo compromisso com o Amazonas.
        </p>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl">
            Vote 22456
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/90">
            Leia Fernandes — Deputada Estadual do Amazonas
          </p>
          <p className="mt-2 text-lg text-accent">
            Paixão em cuidar. Determinação para defender. Visão para o futuro.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/leiafernandesam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-lg font-bold text-accent-foreground shadow-lg transition hover:brightness-110"
            >
              <Instagram className="h-5 w-5" />
              Siga @leiafernandesam
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Essas propostas continuam sendo construídas — com você. Sua voz ajuda a corrigir o que só
            quem está na ponta consegue enxergar.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-foreground/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-extrabold text-secondary">
            <span className="rounded bg-accent px-2 py-0.5 text-accent-foreground">22456</span>
            LEIA FERNANDES
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Deputada Estadual do Amazonas · Enfermeira · Servidora Pública · Cristã
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Proposta de campanha · Documento oficial
          </p>
        </div>
      </footer>
    </div>
  );
}
