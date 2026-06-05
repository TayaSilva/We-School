import type { ReactNode } from 'react'
import { useState } from 'react'
import balletIcon from '../../assets/icons/bale.svg?raw'
import cookingIcon from '../../assets/icons/cozinha.svg?raw'
import judoIcon from '../../assets/icons/judo.svg?raw'
import balletImage from '../../assets/images/bale.png'
import projectBaileImage from '../../assets/images/projeto-baile.png'
import poolImage from '../../assets/images/piscina.png'
import roboticsStudentsImage from '../../assets/images/alunos-robotica.png'
import kitchenKidsImage from '../../assets/images/crianca-cozinha.png'
import judoImage from '../../assets/images/judo.png'
import studentCouncilProjectImage from '../../assets/images/projeto-gremio.png'
import studentCouncilImage from '../../assets/images/sala-do-gremio.png'
import studentCouncilPdf from '../../docs/We School.pdf'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

type ActivityCard = {
  id: 'judo' | 'ballet' | 'cooking'
  title: string
  description: string
  image: string
  accent: string
  icon: 'judo' | 'ballet' | 'cooking'
}

type AdvancedTrackCard = {
  title: string
  description: string
  tone: string
  textTone: string
  icon: ReactNode
}

type StudentCouncilCard = {
  title: string
  description: string
  image: string
  caption: string
}

type PoolHighlight = {
  title: string
  description: string
  icon: 'heated' | 'eco'
}

const activityIcons = {
  judo: judoIcon,
  ballet: balletIcon,
  cooking: cookingIcon,
} as const

function SvgIcon({ svg, className }: { svg: string; className: string }) {
  const normalizedSvg = svg.replace(/fill="[^"]*"/g, 'fill="currentColor"')

  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center ${className} [&_svg]:h-full [&_svg]:w-full`}
      dangerouslySetInnerHTML={{ __html: normalizedSvg }}
    />
  )
}

function TrackIcon({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/12 text-current sm:h-12 sm:w-12"
    >
      <span className="h-5 w-5 sm:h-6 sm:w-6">{children}</span>
    </span>
  )
}

function PoolFeatureIcon({ icon }: { icon: PoolHighlight['icon'] }) {
  if (icon === 'heated') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4c1.4 1.5 1.4 3 0 4.5S5.6 11.5 7 13" />
        <path d="M12 4c1.4 1.5 1.4 3 0 4.5s-1.4 3 0 4.5" />
        <path d="M17 4c1.4 1.5 1.4 3 0 4.5s-1.4 3 0 4.5" />
        <path d="M4 18c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
      <path d="M4 10c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
      <path d="M4 5c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
    </svg>
  )
}

const content = {
  pt: {
    eyebrow: 'Educa\u00e7\u00e3o Integral',
    title: 'Atividades que Transformam',
    description:
      'Nossa proposta extracurricular vai al\u00e9m da sala de aula. Focamos no desenvolvimento socioemocional, f\u00edsico e tecnol\u00f3gico, preparando nossos alunos para os desafios do futuro com criatividade e autonomia.',
    sectionTitle: 'Ensino Fundamental',
    sectionDescription: 'Explora\u00e7\u00e3o, movimento e criatividade para os pequenos talentos.',
    roboticsEyebrow: 'Tech & Future',
    roboticsTitle: 'Rob\u00f3tica e Inform\u00e1tica',
    roboticsDescription:
      'Laborat\u00f3rios de ponta onde o c\u00f3digo se torna realidade. Os alunos desenvolvem projetos reais usando tecnologias de \u00faltima gera\u00e7\u00e3o como IA e Automa\u00e7\u00e3o.',
    roboticsTags: ['Programa\u00e7\u00e3o', 'Hardware', 'IA'],
    advancedTitle: 'Ensino M\u00e9dio',
    advancedDescription: 'Trilhas de conhecimento e protagonismo juvenil.',
    advancedEyebrow: 'Protagonismo Juvenil',
    advancedHeading: 'Um curr\u00edculo personalizado',
    advancedBody:
      'No Ensino M\u00e9dio, as atividades extracurriculares s\u00e3o obrigat\u00f3rias, por\u00e9m personaliz\u00e1veis. O aluno \u00e9 o arquiteto de sua jornada, escolhendo eletivas que complementam sua prepara\u00e7\u00e3o acad\u00eamica.',
    advancedHighlights: [
      'Escolha seu pr\u00f3prio caminho acad\u00eamico',
      'Prepara\u00e7\u00e3o integral para a universidade',
      'Workshops t\u00e9cnicos e profissionalizantes',
    ],
    councilTitle: 'Gr\u00eamio Estudantil',
    councilDescription: 'Lideran\u00e7a, democracia e representatividade no cora\u00e7\u00e3o da escola.',
    councilCards: [
      {
        title: 'Lideran\u00e7a Estudantil',
        description:
          'O Gr\u00eamio \u00e9 o elo oficial entre alunos e diretoria, desenvolvendo habilidades de negocia\u00e7\u00e3o e gest\u00e3o de projetos.',
        image: studentCouncilImage,
        caption: 'Sala do Gr\u00eamio',
      },
      {
        title: 'Projeto Formatura',
        description:
          'Um baile organizado todos os anos pelo Gr\u00eamio, criando mem\u00f3rias especiais e fortalecendo a uni\u00e3o entre as turmas.',
        image: projectBaileImage,
        caption: 'Projeto Baile 2025',
      },
      {
        title: 'Vota\u00e7\u00e3o Anual',
        description:
          'Todos os anos os alunos apresentam propostas para vota\u00e7\u00e3o, exercitando cidadania, representa\u00e7\u00e3o e participa\u00e7\u00e3o ativa.',
        image: studentCouncilProjectImage,
        caption: 'Vota\u00e7\u00e3o Gr\u00eamio 2025',
      },
    ] satisfies StudentCouncilCard[],
    councilBannerTitle: 'A\u00e7\u00f5es Comunit\u00e1rias',
    councilBannerBody:
      'O Gr\u00eamio organiza campanhas de arrecada\u00e7\u00e3o e eventos culturais que impactam toda a vizinhan\u00e7a, fomentando a empatia e a responsabilidade social.',
    councilCta: 'Conhecer Gr\u00eamio',
    poolEyebrow: 'Lan\u00e7amento 2026',
    poolTitle: 'Em breve: Nata\u00e7\u00e3o',
    poolDescription:
      'Estamos construindo um centro aqu\u00e1tico de \u00faltima gera\u00e7\u00e3o. Com piscina semi-ol\u00edmpica aquecida e tratamento por oz\u00f4nio, a nata\u00e7\u00e3o integrar\u00e1 nosso curr\u00edculo para promover sa\u00fade e disciplina.',
    poolStatus: 'Obras em andamento',
    poolHighlights: [
      {
        title: 'Piscina Aquecida',
        description: 'Conforto o ano todo.',
        icon: 'heated',
      },
      {
        title: 'Eco-Sustent\u00e1vel',
        description: 'Tratamento por oz\u00f4nio.',
        icon: 'eco',
      },
    ] satisfies PoolHighlight[],
    advancedCards: [
      {
        title: 'Laborat\u00f3rios',
        description: 'Pesquisa avan\u00e7ada em biologia, qu\u00edmica e f\u00edsica aplicada.',
        tone: 'bg-[#8e238c]',
        textTone: 'text-white',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 2v5l-4.8 8.2A3 3 0 0 0 7.8 20h8.4a3 3 0 0 0 2.6-4.8L14 7V2" />
            <path d="M8 2h8" />
            <path d="M9 11h6" />
            <path d="M8 15h8" />
          </svg>
        ),
      },
      {
        title: 'Pr\u00e9-Vestibular',
        description: 'Prepara\u00e7\u00e3o intensiva para os principais vestibulares e ENEM.',
        tone: 'bg-[#d11465]',
        textTone: 'text-white',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9.5 12 4l10 5.5-10 5.5L2 9.5Z" />
            <path d="M6 11.8V16l6 3 6-3v-4.2" />
          </svg>
        ),
      },
      {
        title: 'First Aid',
        description: 'Workshops de enfermagem e primeiros socorros essenciais.',
        tone: 'bg-[#fffaf7]',
        textTone: 'text-[#A00041]',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 7.5h12A1.5 1.5 0 0 1 19.5 9v9A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V9A1.5 1.5 0 0 1 6 7.5Z" />
            <path d="M9 7.5V6A1.5 1.5 0 0 1 10.5 4.5h3A1.5 1.5 0 0 1 15 6v1.5" />
            <path d="M12 10.5v6" />
            <path d="M9 13.5h6" />
          </svg>
        ),
      },
      {
        title: 'Soft Skills',
        description: 'Lideran\u00e7a, orat\u00f3ria e intelig\u00eancia emocional em foco.',
        tone: 'bg-[#FD7C1A]',
        textTone: 'text-white',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M18.4 15a2 2 0 0 1 .4 2.2l-.2.4a2 2 0 0 1-2 1.1l-.4-.1a2 2 0 0 0-2.1.8l-.2.3a2 2 0 0 1-3 0l-.2-.3a2 2 0 0 0-2.1-.8l-.4.1a2 2 0 0 1-2-1.1l-.2-.4a2 2 0 0 1 .4-2.2l.3-.3a2 2 0 0 0 .5-2.2l-.1-.4a2 2 0 0 1 1.1-2l.4-.2a2 2 0 0 0 1-1.9V8a2 2 0 0 1 1.5-1.9l.4-.1a2 2 0 0 0 1.5-1.5l.1-.4A2 2 0 0 1 12 2.5a2 2 0 0 1 1.9 1.5l.1.4a2 2 0 0 0 1.5 1.5l.4.1A2 2 0 0 1 17.4 8v.4a2 2 0 0 0 1 1.9l.4.2a2 2 0 0 1 1.1 2l-.1.4a2 2 0 0 0 .5 2.2l.1.3Z" />
            <path d="M12 13v4" />
          </svg>
        ),
      },
    ] satisfies AdvancedTrackCard[],
    cards: [
      {
        id: 'judo',
        title: 'Judo',
        description: 'Disciplina, respeito e coordena\u00e7\u00e3o motora atrav\u00e9s da arte marcial.',
        image: judoImage,
        accent: 'text-primary-300',
        icon: 'judo',
      },
      {
        id: 'ballet',
        title: 'Ballet',
        description: 'Express\u00e3o corporal, musicalidade e postura em aulas l\u00fadicas e t\u00e9cnicas.',
        image: balletImage,
        accent: 'text-tertiary-300',
        icon: 'ballet',
      },
      {
        id: 'cooking',
        title: 'Culin\u00e1ria',
        description: 'Aulas pr\u00e1ticas que ensinam nutri\u00e7\u00e3o, matem\u00e1tica e trabalho em equipe no fog\u00e3o.',
        image: kitchenKidsImage,
        accent: 'text-secondary-200',
        icon: 'cooking',
      },
    ] satisfies ActivityCard[],
  },
  en: {
    eyebrow: 'Integral Education',
    title: 'Activities that Transform',
    description:
      'Our extracurricular approach goes beyond the classroom. We focus on socio-emotional, physical, and technological development, preparing students for the future with creativity and autonomy.',
    sectionTitle: 'Elementary School',
    sectionDescription: 'Exploration, movement, and creativity for young talents.',
    roboticsEyebrow: 'Tech & Future',
    roboticsTitle: 'Robotics and Computing',
    roboticsDescription:
      'State-of-the-art labs where code becomes reality. Students build real projects using cutting-edge technologies such as AI and Automation.',
    roboticsTags: ['Programming', 'Hardware', 'AI'],
    advancedTitle: 'High School',
    advancedDescription: 'Knowledge tracks and student leadership.',
    advancedEyebrow: 'Student Leadership',
    advancedHeading: 'A personalized curriculum',
    advancedBody:
      'In High School, extracurricular activities are mandatory yet customizable. Students become the architects of their own journey, choosing electives that complement their academic preparation.',
    advancedHighlights: [
      'Choose your own academic path',
      'Comprehensive university preparation',
      'Technical and professional workshops',
    ],
    councilTitle: 'Student Council',
    councilDescription: 'Leadership, democracy, and representation at the heart of the school.',
    councilCards: [
      {
        title: 'Student Leadership',
        description:
          'The Council is the official bridge between students and leadership, strengthening negotiation and project management skills.',
        image: studentCouncilImage,
        caption: 'Student Council Room',
      },
      {
        title: 'Graduation Project',
        description:
          'An annual dance organized by the Council, creating special memories and strengthening the bond between classes.',
        image: projectBaileImage,
        caption: 'Dance Project 2025',
      },
      {
        title: 'Annual Election',
        description:
          'Each year students present proposals for voting, practicing citizenship, representation, and active participation.',
        image: studentCouncilProjectImage,
        caption: 'Student Council Election 2025',
      },
    ] satisfies StudentCouncilCard[],
    councilBannerTitle: 'Community Actions',
    councilBannerBody:
      'The Council organizes donation campaigns and cultural events that impact the entire neighborhood, encouraging empathy and social responsibility.',
    councilCta: 'Discover Council',
    poolEyebrow: '2026 Launch',
    poolTitle: 'Coming Soon: Swimming',
    poolDescription:
      'We are building a next-generation aquatic center. With a heated semi-olympic pool and ozone treatment, swimming will become part of our curriculum to promote health and discipline.',
    poolStatus: 'Construction in progress',
    poolHighlights: [
      {
        title: 'Heated Pool',
        description: 'Comfort all year round.',
        icon: 'heated',
      },
      {
        title: 'Eco-Friendly',
        description: 'Ozone-based treatment.',
        icon: 'eco',
      },
    ] satisfies PoolHighlight[],
    advancedCards: [
      {
        title: 'Laboratories',
        description: 'Advanced research in biology, chemistry, and applied physics.',
        tone: 'bg-[#8e238c]',
        textTone: 'text-white',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 2v5l-4.8 8.2A3 3 0 0 0 7.8 20h8.4a3 3 0 0 0 2.6-4.8L14 7V2" />
            <path d="M8 2h8" />
            <path d="M9 11h6" />
            <path d="M8 15h8" />
          </svg>
        ),
      },
      {
        title: 'College Prep',
        description: 'Intensive preparation for major entrance exams and standardized tests.',
        tone: 'bg-[#d11465]',
        textTone: 'text-white',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9.5 12 4l10 5.5-10 5.5L2 9.5Z" />
            <path d="M6 11.8V16l6 3 6-3v-4.2" />
          </svg>
        ),
      },
      {
        title: 'First Aid',
        description: 'Nursing and essential first aid workshops.',
        tone: 'bg-[#fffaf7]',
        textTone: 'text-[#A00041]',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 7.5h12A1.5 1.5 0 0 1 19.5 9v9A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V9A1.5 1.5 0 0 1 6 7.5Z" />
            <path d="M9 7.5V6A1.5 1.5 0 0 1 10.5 4.5h3A1.5 1.5 0 0 1 15 6v1.5" />
            <path d="M12 10.5v6" />
            <path d="M9 13.5h6" />
          </svg>
        ),
      },
      {
        title: 'Soft Skills',
        description: 'Leadership, public speaking, and emotional intelligence in focus.',
        tone: 'bg-[#FD7C1A]',
        textTone: 'text-white',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M18.4 15a2 2 0 0 1 .4 2.2l-.2.4a2 2 0 0 1-2 1.1l-.4-.1a2 2 0 0 0-2.1.8l-.2.3a2 2 0 0 1-3 0l-.2-.3a2 2 0 0 0-2.1-.8l-.4.1a2 2 0 0 1-2-1.1l-.2-.4a2 2 0 0 1 .4-2.2l.3-.3a2 2 0 0 0 .5-2.2l-.1-.4a2 2 0 0 1 1.1-2l.4-.2a2 2 0 0 0 1-1.9V8a2 2 0 0 1 1.5-1.9l.4-.1a2 2 0 0 0 1.5-1.5l.1-.4A2 2 0 0 1 12 2.5a2 2 0 0 1 1.9 1.5l.1.4a2 2 0 0 0 1.5 1.5l.4.1A2 2 0 0 1 17.4 8v.4a2 2 0 0 0 1 1.9l.4.2a2 2 0 0 1 1.1 2l-.1.4a2 2 0 0 0 .5 2.2l.1.3Z" />
            <path d="M12 13v4" />
          </svg>
        ),
      },
    ] satisfies AdvancedTrackCard[],
    cards: [
      {
        id: 'judo',
        title: 'Judo',
        description: 'Discipline, respect, and motor coordination through martial arts.',
        image: judoImage,
        accent: 'text-primary-300',
        icon: 'judo',
      },
      {
        id: 'ballet',
        title: 'Ballet',
        description: 'Body expression, musicality, and posture in playful and technical classes.',
        image: balletImage,
        accent: 'text-tertiary-300',
        icon: 'ballet',
      },
      {
        id: 'cooking',
        title: 'Cooking',
        description: 'Hands-on classes that teach nutrition, math, and teamwork in the kitchen.',
        image: kitchenKidsImage,
        accent: 'text-secondary-200',
        icon: 'cooking',
      },
    ] satisfies ActivityCard[],
  },
} as const

function ActivitiesPage() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const pageContent = content[language]
  const [activeCard, setActiveCard] = useState<ActivityCard['id']>('ballet')

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#171717]' : 'bg-[#f6f1e8]'}`}>
      <div className="mx-auto max-w-[1760px] px-4 pb-16 pt-[104px] sm:px-6 sm:pb-20 sm:pt-[156px] lg:px-[48px] lg:pb-24 lg:pt-[164px]">
        <div className="w-full">
          <div className="max-w-[680px]">
            <span
              className={`inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium ${
                isDark ? 'bg-white/6 text-secondary-300' : 'bg-secondary-100 text-secondary-700'
              }`}
            >
              {pageContent.eyebrow}
            </span>

            <h1
              className={`mt-5 font-heading text-[16px] font-semibold sm:text-[2.7rem] ${
                isDark ? 'text-[#ffb7cf]' : 'text-primary-700'
              }`}
            >
              {pageContent.title}
            </h1>

            <p className={`mt-5 max-w-[620px] text-[12px] leading-[1.7] sm:text-[1rem] ${isDark ? 'text-white/72' : 'text-neutral-700'}`}>
              {pageContent.description}
            </p>
          </div>

          <div className="mt-14">
            <div className={`border-b pb-4 text-center ${isDark ? 'border-white/8' : 'border-neutral-200'}`}>
              <div>
                <h2 className={`font-heading text-[16px] font-semibold sm:text-[2rem] ${isDark ? 'text-white' : 'text-primary-700'}`}>
                  {pageContent.sectionTitle}
                </h2>
                <p className={`mt-2 text-[12px] leading-[1.6] sm:text-[0.95rem] ${isDark ? 'text-white/65' : 'text-neutral-600'}`}>
                  {pageContent.sectionDescription}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 lg:flex-row">
              {pageContent.cards.map((card) => {
                const isActive = activeCard === card.id

                return (
                  <article
                    key={card.id}
                    onMouseEnter={() => setActiveCard(card.id)}
                    onFocus={() => setActiveCard(card.id)}
                    onPointerDown={(event) => {
                      if (event.pointerType !== 'mouse') {
                        setActiveCard(card.id)
                      }
                    }}
                    onClick={() => setActiveCard(card.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setActiveCard(card.id)
                      }
                    }}
                    role="button"
                    aria-pressed={isActive}
                    tabIndex={0}
                    className={`group relative cursor-pointer overflow-hidden rounded-[22px] border transition-all duration-500 ease-out ${
                      isDark ? 'border-white/8 bg-white/[0.04]' : 'border-neutral-200 bg-white'
                    } ${
                      isActive
                        ? 'min-h-[220px] lg:min-h-[580px] lg:flex-[5.5]'
                        : 'min-h-[220px] lg:min-h-[580px] lg:flex-[1.35]'
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04] lg:group-hover:opacity-100'
                      }`}
                    />

                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-t from-[#c5146a]/72 via-[#c5146a]/26 to-transparent'
                          : isDark
                            ? 'bg-[#232323]'
                            : 'bg-white'
                      }`}
                    />

                    <div className="relative flex h-full flex-col p-6 lg:p-7">
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full sm:h-14 sm:w-14 ${
                          isActive
                            ? 'bg-black/16 text-white'
                            : isDark
                              ? 'bg-white/6'
                              : 'bg-primary-50'
                        } ${isActive ? 'text-white' : card.accent}`}
                      >
                        <SvgIcon svg={activityIcons[card.icon]} className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>

                      <div className={`mt-auto transition-all duration-500 ${isActive ? 'max-w-[460px]' : 'max-w-[240px]'}`}>
                        <h3
                          className={`font-heading text-[16px] font-semibold sm:text-[2rem] ${
                            isActive ? 'text-white' : isDark ? 'text-white' : 'text-neutral-900'
                          }`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`mt-3 text-[12px] leading-[1.65] sm:text-[0.95rem] ${
                            isActive ? 'text-white/92' : isDark ? 'text-white/68' : 'text-neutral-600'
                          }`}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mt-6 sm:mt-16 lg:mt-6">
            <article className="relative overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950 min-h-[360px] sm:min-h-[480px] lg:min-h-[560px]">
              <img
                src={roboticsStudentsImage}
                alt={pageContent.roboticsTitle}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.88)_0%,rgba(17,17,17,0.72)_28%,rgba(17,17,17,0.24)_58%,rgba(17,17,17,0.08)_100%)]" />

              <div className="relative flex min-h-[360px] h-full flex-col justify-between p-5 sm:min-h-[480px] sm:p-8 lg:min-h-[560px] lg:p-12">
                <div className="max-w-[280px] sm:max-w-[360px] lg:max-w-[420px]">
                  <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-secondary-200 sm:text-[0.78rem]">
                    {pageContent.roboticsEyebrow}
                  </span>

                  <h2 className="mt-3 font-heading text-[16px] font-semibold leading-[1.08] text-white sm:text-[2.4rem] lg:text-[3.25rem]">
                    {pageContent.roboticsTitle}
                  </h2>

                  <p className="mt-4 max-w-[240px] text-[12px] leading-[1.6] text-white/82 sm:max-w-[320px] sm:text-[0.98rem] lg:max-w-[390px] lg:text-[1.05rem]">
                    {pageContent.roboticsDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-6">
                  {pageContent.roboticsTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex min-h-[34px] items-center justify-center rounded-full border border-white/16 bg-white/10 px-4 text-[11px] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:min-h-[42px] sm:px-6 sm:text-[0.92rem]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className="mt-20 sm:mt-24 lg:mt-28">
            <div className={`border-b pb-4 text-center ${isDark ? 'border-white/8' : 'border-neutral-200'}`}>
              <div>
                <h2 className={`font-heading text-[16px] font-semibold sm:text-[2rem] ${isDark ? 'text-white' : 'text-primary-700'}`}>
                  {pageContent.advancedTitle}
                </h2>
                <p className={`mt-2 text-[12px] leading-[1.6] sm:text-[0.95rem] ${isDark ? 'text-white/65' : 'text-neutral-600'}`}>
                  {pageContent.advancedDescription}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:items-center">
              <div className="grid gap-4 sm:grid-cols-2">
                {pageContent.advancedCards.map((card) => (
                  <article
                    key={card.title}
                    className={`flex min-h-[188px] flex-col rounded-[20px] p-5 shadow-[0_18px_40px_rgba(31,23,22,0.08)] sm:min-h-[224px] sm:p-6 ${card.tone} ${card.textTone}`}
                  >
                    <TrackIcon>{card.icon}</TrackIcon>

                    <h3 className="mt-5 font-heading text-[16px] font-semibold sm:text-[1.55rem]">
                      {card.title}
                    </h3>

                    <p className="mt-3 max-w-[220px] text-[12px] leading-[1.6] sm:text-[0.95rem]">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="lg:pl-8 xl:pl-14">
                <span className={`text-[10px] font-medium uppercase tracking-[0.26em] sm:text-[0.84rem] ${isDark ? 'text-[#ff8fbc]' : 'text-primary-600'}`}>
                  {pageContent.advancedEyebrow}
                </span>

                <h3 className={`mt-3 font-heading text-[16px] font-semibold leading-[1.12] sm:text-[2.65rem] ${isDark ? 'text-white' : 'text-neutral-950'}`}>
                  {pageContent.advancedHeading}
                </h3>

                <p className={`mt-5 max-w-[560px] text-[12px] leading-[1.75] sm:text-[1rem] ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>
                  {pageContent.advancedBody}
                </p>

                <div className="mt-6 space-y-4">
                  {pageContent.advancedHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                          isDark ? 'border-primary-300/60 text-primary-300' : 'border-primary-500/55 text-primary-600'
                        }`}
                      >
                        ✓
                      </span>

                      <span className={`text-[12px] leading-[1.6] sm:text-[1rem] ${isDark ? 'text-white/84' : 'text-neutral-800'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28 sm:mt-32 lg:mt-40">
            <div className="text-center">
              <h2 className={`font-heading text-[16px] font-semibold sm:text-[2.3rem] ${isDark ? 'text-[#ffb7cf]' : 'text-primary-700'}`}>
                {pageContent.councilTitle}
              </h2>
              <p className={`mx-auto mt-2 max-w-[760px] text-[12px] leading-[1.65] sm:text-[1rem] ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>
                {pageContent.councilDescription}
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {pageContent.councilCards.map((card) => (
                <article
                  key={card.title}
                  className={`flex h-full flex-col overflow-hidden rounded-[24px] border shadow-[0_18px_42px_rgba(31,23,22,0.12)] backdrop-blur-xl ${
                    isDark
                      ? 'border-white/12 bg-white/8 text-white'
                      : 'border-white/55 bg-[linear-gradient(180deg,rgba(255,245,250,0.92)_0%,rgba(255,232,242,0.82)_100%)] text-[#7c2048]'
                  }`}
                >
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="font-heading text-[16px] font-semibold sm:text-[2rem]">{card.title}</h3>

                    <p
                      className={`mt-4 text-[12px] leading-[1.75] sm:text-[1rem] ${
                        isDark ? 'text-white/88' : 'text-[#7c2048]/86'
                      }`}
                    >
                      {card.description}
                    </p>

                    <div className="mt-auto px-0 pb-0 pt-6">
                      <div
                        className={`overflow-hidden rounded-[18px] border ${
                          isDark ? 'border-white/14 bg-white/8' : 'border-white/65 bg-white/38 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]'
                        }`}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-[180px] w-full object-cover sm:h-[220px]"
                        />
                      </div>
                      <p
                        className={`mt-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] sm:text-[0.82rem] ${
                          isDark ? 'text-white/68' : 'text-[#9d4d71]'
                        }`}
                      >
                        {card.caption}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <article className="mt-5 overflow-hidden rounded-[24px] bg-[#8f2597] text-white shadow-[0_18px_42px_rgba(31,23,22,0.12)]">
              <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
                <div className="max-w-[760px]">
                  <h3 className="font-heading text-[16px] font-semibold sm:text-[2rem]">{pageContent.councilBannerTitle}</h3>
                  <p className="mt-3 text-[12px] leading-[1.75] text-white/90 sm:text-[1rem]">
                    {pageContent.councilBannerBody}
                  </p>
                </div>

                <a
                  href={studentCouncilPdf}
                  download="We School.pdf"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-[16px] bg-white px-6 text-center text-[12px] font-semibold text-[#8f2597] transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-[64px] sm:min-w-[236px] sm:px-8 sm:text-[0.98rem]"
                >
                  {pageContent.councilCta}
                </a>
              </div>
            </article>

            <article
              className={`mt-28 overflow-hidden rounded-[28px] border shadow-[0_30px_80px_rgba(56,37,24,0.08)] sm:mt-32 lg:mt-40 ${
                isDark
                  ? 'border-white/10 bg-[linear-gradient(135deg,#221d1f_0%,#161616_100%)]'
                  : 'border-white/60 bg-[linear-gradient(135deg,#f9f6ef_0%,#f3ede2_48%,#efe8da_100%)]'
              }`}
            >
              <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)]">
                <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
                  <span className={`text-[10px] font-medium uppercase tracking-[0.28em] ${isDark ? 'text-[#f0c8d7]' : 'text-[#ca9a6b]'}`}>
                    {pageContent.poolEyebrow}
                  </span>

                  <h3 className={`mt-3 font-heading text-[1.9rem] font-semibold leading-[1.05] sm:text-[2.6rem] ${isDark ? 'text-white' : 'text-[#b01457]'}`}>
                    {pageContent.poolTitle}
                  </h3>

                  <p className={`mt-5 max-w-[430px] text-[12px] leading-[1.8] sm:text-[0.98rem] ${isDark ? 'text-white/72' : 'text-[#6f6259]'}`}>
                    {pageContent.poolDescription}
                  </p>

                  <div className="mt-8 grid max-w-[430px] gap-3 sm:grid-cols-2">
                    {pageContent.poolHighlights.map((item) => (
                      <article
                        key={item.title}
                        className={`rounded-[18px] border p-4 shadow-[0_18px_38px_rgba(84,57,31,0.06)] backdrop-blur-sm ${
                          isDark ? 'border-white/10 bg-white/6' : 'border-white/70 bg-white/62'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
                            isDark ? 'bg-[#b01457]/18 text-[#ff8db6]' : 'bg-[#ffd7e5] text-[#b01457]'
                          }`}
                        >
                          <span className="h-5 w-5">
                            <PoolFeatureIcon icon={item.icon} />
                          </span>
                        </span>

                        <h4 className={`mt-4 font-heading text-[1rem] font-semibold ${isDark ? 'text-white' : 'text-[#463833]'}`}>
                          {item.title}
                        </h4>

                        <p className={`mt-1 text-[11px] leading-[1.6] sm:text-[0.82rem] ${isDark ? 'text-white/65' : 'text-[#7d7065]'}`}>
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                  <img src={poolImage} alt={pageContent.poolTitle} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,22,21,0.08)_0%,rgba(34,22,21,0)_28%,rgba(34,22,21,0.18)_100%)]" />

                  <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold shadow-[0_12px_28px_rgba(25,18,16,0.12)] backdrop-blur-md sm:text-[0.82rem] ${
                        isDark ? 'border-white/16 bg-black/28 text-white' : 'border-white/65 bg-white/78 text-[#b01457]'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#df1b63]" />
                      {pageContent.poolStatus}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesPage
