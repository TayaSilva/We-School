import babyIcon from '../../../assets/icons/bebe.svg'
import studyIcon from '../../../assets/icons/estudo.svg'
import bookIcon from '../../../assets/icons/livro.svg'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

const content = {
  pt: {
    title: 'Ciclos de Aprendizado',
    cards: [
      {
        title: 'Fundamental I',
        description:
          'Foco na alfabetização bilíngue e desenvolvimento socioemocional através do lúdico.',
        period: 'Período: Manhã e Tarde',
        action: 'Saiba mais',
      },
      {
        title: 'Fundamental II',
        description:
          'Aprofundamento acadêmico e desenvolvimento da autonomia crítica e criativa.',
        period: 'Período: Manhã',
        action: 'Saiba mais',
      },
      {
        title: 'Ensino Médio',
        description:
          'Preparação de alto nível para vestibulares e universidades internacionais.',
        period: 'Período: Integral',
        action: 'Saiba mais',
      },
    ],
  },
  en: {
    title: 'Our Teaching Segments',
    cards: [
      {
        title: 'Elementary I',
        description:
          'Focus on bilingual literacy and socio-emotional development through play-based learning.',
        period: 'Period: Morning and Afternoon',
        action: 'Learn more',
      },
      {
        title: 'Elementary II',
        description:
          'Academic deepening and development of critical and creative autonomy.',
        period: 'Period: Morning',
        action: 'Learn more',
      },
      {
        title: 'High School',
        description:
          'High-level preparation for national entrance exams and international universities.',
        period: 'Period: Full-time',
        action: 'Learn more',
      },
    ],
  },
} as const

const icons = [babyIcon, studyIcon, bookIcon] as const

function TeachingSegmentsSection() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sectionContent = content[language]

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#141414]' : 'bg-white'}`}>
      <div className="mx-auto max-w-[1760px] px-4 py-14 sm:px-6 sm:py-18 lg:px-[48px] lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center text-center">
            <h2 className={`font-heading text-[16px] font-semibold sm:text-[2rem] ${isDark ? 'text-white' : 'text-neutral-950'}`}>
              {sectionContent.title}
            </h2>
            <span className={`mt-3 h-0.5 w-14 rounded-full ${isDark ? 'bg-secondary-300' : 'bg-secondary-600'}`} />
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {sectionContent.cards.map((card, index) => {
              const hoverBorderClass = isDark
                ? index === 0
                  ? 'hover:border-primary-300/60'
                  : index === 1
                    ? 'hover:border-secondary-400/60'
                    : 'hover:border-tertiary-300/60'
                : index === 0
                  ? 'hover:border-primary-500/45'
                  : index === 1
                    ? 'hover:border-secondary-500/45'
                    : 'hover:border-tertiary-500/45'

              return (
                <article
                  key={card.title}
                  className={`group flex min-h-[292px] flex-col rounded-[16px] border p-5 text-center transition-all duration-300 sm:min-h-[330px] sm:rounded-[18px] sm:p-6 ${
                    isDark
                      ? `border-white/5 bg-white/[0.05] ${hoverBorderClass}`
                      : `border-neutral-200 bg-white shadow-[0_10px_25px_rgba(30,24,23,0.05)] ${hoverBorderClass}`
                  }`}
                >
                  <div
                    className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 ${
                      index === 0
                        ? isDark
                          ? 'bg-[#3a2a31]'
                          : 'bg-[#f7e6ec]'
                        : index === 1
                          ? isDark
                            ? 'bg-[#3c2f28]'
                            : 'bg-[#f8eadf]'
                          : isDark
                            ? 'bg-[#342b37]'
                            : 'bg-[#f1e5f7]'
                    }`}
                  >
                    <img src={icons[index]} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <h3
                    className={`mt-4 font-heading text-[16px] font-semibold sm:mt-5 sm:text-[1.4rem] ${
                      index === 0
                        ? isDark
                          ? 'text-[#ffb7cf]'
                          : 'text-primary-600'
                        : index === 1
                          ? isDark
                            ? 'text-secondary-300'
                            : 'text-secondary-600'
                          : isDark
                            ? 'text-[#e59cff]'
                            : 'text-tertiary-600'
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`mt-3 min-h-[72px] text-[12px] leading-[1.5] sm:mt-4 sm:min-h-[88px] sm:text-[0.94rem] sm:leading-[1.55] ${
                      isDark ? 'text-white/72' : 'text-neutral-600'
                    }`}
                  >
                    {card.description}
                  </p>

                  <div className={`mx-auto mt-4 h-px w-full sm:mt-5 ${isDark ? 'bg-white/10' : 'bg-neutral-200'}`} />

                  <p className={`mt-3 text-[12px] sm:mt-4 sm:text-[0.8rem] ${isDark ? 'text-white/62' : 'text-neutral-500'}`}>
                    {card.period}
                  </p>

                  <button
                    type="button"
                    className={`mt-auto inline-flex items-center justify-center gap-2 pt-3 text-[12px] font-semibold transition-colors sm:pt-4 sm:text-[0.9rem] ${
                      isDark
                        ? index === 0
                          ? 'text-[#ffb7cf]'
                          : index === 1
                            ? 'text-secondary-300'
                            : 'text-[#e59cff]'
                        : index === 0
                          ? 'text-primary-600'
                          : index === 1
                            ? 'text-secondary-600'
                            : 'text-tertiary-600'
                    }`}
                  >
                    {card.action}
                    <span aria-hidden="true">-&gt;</span>
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeachingSegmentsSection
