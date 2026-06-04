import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

type CardItem = {
  label: string
  icon:
    | 'globe'
    | 'badge'
    | 'smile'
    | 'sparkles'
    | 'monitor'
    | 'eye'
    | 'family'
    | 'building'
    | 'activities'
    | 'target'
}

const content = {
  pt: {
    title: 'Diferenciais que Transformam',
    subtitle: 'Por que somos a escolha certa para a sua família?',
    items: [
      { label: 'Bilíngue', icon: 'globe' },
      { label: 'Professores Qualificados', icon: 'badge' },
      { label: 'Ambiente Acolhedor', icon: 'smile' },
      { label: 'Pedagogia Moderna', icon: 'sparkles' },
      { label: 'Tecnologia', icon: 'monitor' },
      { label: 'Acompanhamento Próximo', icon: 'eye' },
      { label: 'Comunicação com a Família', icon: 'family' },
      { label: 'Estrutura Completa', icon: 'building' },
      { label: 'Extracurriculares', icon: 'activities' },
      { label: 'Formação Integral', icon: 'target' },
    ] satisfies CardItem[],
  },
  en: {
    title: 'Differentials that Transform',
    subtitle: 'Why are we the right choice for your family?',
    items: [
      { label: 'Bilingual', icon: 'globe' },
      { label: 'Qualified Teachers', icon: 'badge' },
      { label: 'Welcoming Environment', icon: 'smile' },
      { label: 'Modern Pedagogy', icon: 'sparkles' },
      { label: 'Technology', icon: 'monitor' },
      { label: 'Close Monitoring', icon: 'eye' },
      { label: 'Family Communication', icon: 'family' },
      { label: 'Complete Structure', icon: 'building' },
      { label: 'Extracurriculars', icon: 'activities' },
      { label: 'Integral Formation', icon: 'target' },
    ] satisfies CardItem[],
  },
} as const

function DifferentialIcon({
  icon,
  className,
}: {
  icon: CardItem['icon']
  className: string
}) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
  }

  switch (icon) {
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'badge':
      return (
        <svg {...common}>
          <path d="M8 5h8v5H8z" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="m10 10-1 5 3-2 3 2-1-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M10 7h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'smile':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9.2" cy="10.3" r="0.8" fill="currentColor" />
          <circle cx="14.8" cy="10.3" r="0.8" fill="currentColor" />
          <path
            d="M9 14c.8.8 1.8 1.2 3 1.2s2.2-.4 3-1.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'sparkles':
      return (
        <svg {...common}>
          <path
            d="m12 4 1.4 3.6L17 9l-3.6 1.4L12 14l-1.4-3.6L7 9l3.6-1.4L12 4ZM18.5 14l.7 1.8L21 16.5l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8ZM6 13l1 2.4L9.5 16 7 17l-1 2.5L5 17l-2.5-1 2.5-.6L6 13Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'monitor':
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 19h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'eye':
      return (
        <svg {...common}>
          <path
            d="M3 12s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
    case 'family':
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="16" cy="8" r="2" fill="currentColor" />
          <circle cx="12" cy="13" r="2" fill="currentColor" />
          <path
            d="M5.5 18a2.5 2.5 0 0 1 5 0M13.5 18a2.5 2.5 0 0 1 5 0M9 20a3 3 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'building':
      return (
        <svg {...common}>
          <path
            d="M6 20V7l6-3 6 3v13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 10h1M14 10h1M9 14h1M14 14h1M11 20v-4h2v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'activities':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 4.5v15M4.5 12h15M7 7l10 10M17 7 7 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'target':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 2v3M20 12h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
  }
}

function DifferentialsCarouselSection() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sectionContent = content[language]
  const carouselItems = [...sectionContent.items, ...sectionContent.items]

  const leftFadeClass = isDark
    ? 'bg-gradient-to-r from-[#171717] via-[#171717]/85 to-transparent'
    : 'bg-gradient-to-r from-white via-white/90 to-transparent'

  const rightFadeClass = isDark
    ? 'bg-gradient-to-l from-[#171717] via-[#171717]/85 to-transparent'
    : 'bg-gradient-to-l from-white via-white/90 to-transparent'

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#171717]' : 'bg-white'}`}>
      <div className="mx-auto max-w-[1760px] px-4 py-14 sm:px-6 sm:py-18 lg:px-[48px] lg:py-22">
        <div>
          <div className="text-center">
            <h2 className={`font-heading text-[2rem] font-semibold ${isDark ? 'text-white' : 'text-neutral-950'}`}>
              {sectionContent.title}
            </h2>
            <p className={`mt-3 text-[1rem] ${isDark ? 'text-white/68' : 'text-neutral-600'}`}>
              {sectionContent.subtitle}
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden">
            <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 ${leftFadeClass}`} />
            <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 ${rightFadeClass}`} />

            <div className="flex w-max animate-[marquee_95s_linear_infinite]">
              <div className="flex shrink-0 gap-4 pr-4">
                {carouselItems.map((item, index) => (
                  <article
                    key={`${item.label}-${index}`}
                    className={`flex h-[112px] w-[152px] shrink-0 flex-col items-center justify-center rounded-[18px] border px-4 text-center transition-all duration-300 ${
                      isDark
                        ? 'border-white/8 bg-white/[0.04] text-white hover:border-white/18 hover:bg-white/[0.08] hover:shadow-[0_12px_26px_rgba(10,10,10,0.22)]'
                        : 'border-neutral-200 bg-white text-neutral-900 shadow-[0_8px_22px_rgba(28,22,21,0.05)] hover:border-neutral-300 hover:shadow-[0_12px_26px_rgba(28,22,21,0.1)]'
                    }`}
                  >
                    <DifferentialIcon
                      icon={item.icon}
                      className={`h-4 w-4 ${
                        index % sectionContent.items.length === 0
                          ? 'text-primary-600'
                          : index % sectionContent.items.length === 1
                            ? 'text-secondary-600'
                            : index % sectionContent.items.length === 2
                              ? 'text-tertiary-600'
                              : index % sectionContent.items.length === 3
                                ? 'text-primary-600'
                                : index % sectionContent.items.length === 4
                                  ? 'text-secondary-600'
                                  : index % sectionContent.items.length === 5
                                    ? 'text-tertiary-600'
                                    : index % sectionContent.items.length === 6
                                      ? 'text-primary-600'
                                      : index % sectionContent.items.length === 7
                                        ? 'text-secondary-600'
                                        : index % sectionContent.items.length === 8
                                          ? 'text-tertiary-600'
                                          : 'text-primary-600'
                      }`}
                    />
                    <p className="mt-4 text-[0.95rem] font-medium leading-[1.35]">{item.label}</p>
                  </article>
                ))}
              </div>

              <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
                {carouselItems.map((item, index) => (
                  <article
                    key={`${item.label}-clone-${index}`}
                    className={`flex h-[112px] w-[152px] shrink-0 flex-col items-center justify-center rounded-[18px] border px-4 text-center transition-all duration-300 ${
                      isDark
                        ? 'border-white/8 bg-white/[0.04] text-white'
                        : 'border-neutral-200 bg-white text-neutral-900 shadow-[0_8px_22px_rgba(28,22,21,0.05)]'
                    }`}
                  >
                    <DifferentialIcon
                      icon={item.icon}
                      className={`h-4 w-4 ${
                        index % sectionContent.items.length === 0
                          ? 'text-primary-600'
                          : index % sectionContent.items.length === 1
                            ? 'text-secondary-600'
                            : index % sectionContent.items.length === 2
                              ? 'text-tertiary-600'
                              : index % sectionContent.items.length === 3
                                ? 'text-primary-600'
                                : index % sectionContent.items.length === 4
                                  ? 'text-secondary-600'
                                  : index % sectionContent.items.length === 5
                                    ? 'text-tertiary-600'
                                    : index % sectionContent.items.length === 6
                                      ? 'text-primary-600'
                                      : index % sectionContent.items.length === 7
                                        ? 'text-secondary-600'
                                        : index % sectionContent.items.length === 8
                                          ? 'text-tertiary-600'
                                          : 'text-primary-600'
                      }`}
                    />
                    <p className="mt-4 text-[0.95rem] font-medium leading-[1.35]">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DifferentialsCarouselSection
