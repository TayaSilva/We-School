import poolImage from '../../../assets/images/piscina.png'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

const content = {
  pt: {
    eyebrow: 'LANCAMENTO 2026',
    title: 'Em breve: Natacao',
    description:
      'Estamos construindo um centro aquatico de ultima geracao. Com piscina semi-olimpica aquecida e tratamento por ozonio, a natacao integrara nosso curriculo para promover saude e disciplina.',
    status: 'Obras em andamento',
    highlights: [
      {
        title: 'Piscina Aquecida',
        description: 'Conforto o ano todo.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 4c1.4 1.5 1.4 3 0 4.5S5.6 11.5 7 13" />
            <path d="M12 4c1.4 1.5 1.4 3 0 4.5s-1.4 3 0 4.5" />
            <path d="M17 4c1.4 1.5 1.4 3 0 4.5s-1.4 3 0 4.5" />
            <path d="M4 18c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
          </svg>
        ),
      },
      {
        title: 'Eco-Sustentavel',
        description: 'Tratamento por ozonio.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
            <path d="M4 10c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
            <path d="M4 5c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
          </svg>
        ),
      },
    ],
  },
  en: {
    eyebrow: '2026 LAUNCH',
    title: 'Coming Soon: Swimming',
    description:
      'We are building a next-generation aquatic center. With a heated semi-olympic pool and ozone treatment, swimming will become part of our curriculum to promote health and discipline.',
    status: 'Construction in progress',
    highlights: [
      {
        title: 'Heated Pool',
        description: 'Comfort all year round.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 4c1.4 1.5 1.4 3 0 4.5S5.6 11.5 7 13" />
            <path d="M12 4c1.4 1.5 1.4 3 0 4.5s-1.4 3 0 4.5" />
            <path d="M17 4c1.4 1.5 1.4 3 0 4.5s-1.4 3 0 4.5" />
            <path d="M4 18c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
          </svg>
        ),
      },
      {
        title: 'Eco-Friendly',
        description: 'Ozone-based treatment.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
            <path d="M4 10c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
            <path d="M4 5c1.2.8 2.4 1.2 3.6 1.2 2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2c1.2 0 2.4.4 3.4 1.2" />
          </svg>
        ),
      },
    ],
  },
} as const

function BeyondClassroomSection() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sectionContent = content[language]

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#171717]' : 'bg-[#f3eee3]'}`}>
      <div className="mx-auto max-w-[1760px] px-4 py-14 sm:px-6 sm:py-18 lg:px-[48px] lg:py-20">
        <div
          className={`overflow-hidden rounded-[28px] border shadow-[0_30px_80px_rgba(56,37,24,0.08)] ${
            isDark
              ? 'border-white/10 bg-[linear-gradient(135deg,#221d1f_0%,#161616_100%)]'
              : 'border-white/60 bg-[linear-gradient(135deg,#f9f6ef_0%,#f3ede2_48%,#efe8da_100%)]'
          }`}
        >
          <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)]">
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
              <span className={`text-[10px] font-medium uppercase tracking-[0.28em] ${isDark ? 'text-[#f0c8d7]' : 'text-[#ca9a6b]'}`}>
                {sectionContent.eyebrow}
              </span>

              <h2 className={`mt-3 font-heading text-[1.9rem] font-semibold leading-[1.05] sm:text-[2.6rem] ${isDark ? 'text-white' : 'text-[#b01457]'}`}>
                {sectionContent.title}
              </h2>

              <p className={`mt-5 max-w-[430px] text-[12px] leading-[1.8] sm:text-[0.98rem] ${isDark ? 'text-white/72' : 'text-[#6f6259]'}`}>
                {sectionContent.description}
              </p>

              <div className="mt-8 grid max-w-[430px] gap-3 sm:grid-cols-2">
                {sectionContent.highlights.map((item) => (
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
                      <span className="h-5 w-5">{item.icon}</span>
                    </span>

                    <h3 className={`mt-4 font-heading text-[1rem] font-semibold ${isDark ? 'text-white' : 'text-[#463833]'}`}>
                      {item.title}
                    </h3>

                    <p className={`mt-1 text-[11px] leading-[1.6] sm:text-[0.82rem] ${isDark ? 'text-white/65' : 'text-[#7d7065]'}`}>
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full">
              <img src={poolImage} alt={sectionContent.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,22,21,0.08)_0%,rgba(34,22,21,0)_28%,rgba(34,22,21,0.18)_100%)]" />

              <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold shadow-[0_12px_28px_rgba(25,18,16,0.12)] backdrop-blur-md sm:text-[0.82rem] ${
                    isDark ? 'border-white/16 bg-black/28 text-white' : 'border-white/65 bg-white/78 text-[#b01457]'
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-[#df1b63]" />
                  {sectionContent.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondClassroomSection
