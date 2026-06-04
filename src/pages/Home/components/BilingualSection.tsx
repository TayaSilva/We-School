import globeIcon from '../../../assets/icons/mundo.svg'
import translationIcon from '../../../assets/icons/traducao.svg'
import classroomStudents from '../../../assets/images/alunos-sala.png?url'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

const content = {
  pt: {
    eyebrow: 'Metodologia Global',
    title: 'Educação bilíngue feita do jeito certo',
    description:
      'Na We School, o inglês não é apenas uma disciplina: é o veículo do conhecimento. Promovemos imersão total para que a comunicação aconteça de forma espontânea e natural, preparando nossos alunos para serem cidadãos do mundo.',
    items: [
      { label: 'Fluência Natural', icon: translationIcon },
      { label: 'Visão Global', icon: globeIcon },
    ],
  },
  en: {
    eyebrow: 'Global Methodology',
    title: 'Bilingual Education Done Right',
    description:
      'At We School, English is not just a subject; it is the vehicle for knowledge. We provide total immersion where communication happens spontaneously and naturally, preparing our students to be citizens of the world.',
    items: [
      { label: 'Natural Fluency', icon: translationIcon },
      { label: 'Global Vision', icon: globeIcon },
    ],
  },
} as const

function BilingualSection() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sectionContent = content[language]

  return (
    <section
      className={`transition-colors duration-300 ${
        isDark ? 'bg-[#1B1C1C]' : 'bg-[#F6F3F2]'
      }`}
    >
      <div className="mx-auto max-w-[1760px] px-4 py-14 sm:px-6 sm:py-18 lg:px-[48px] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,720px)] lg:items-center lg:gap-16">
          <div className="max-w-[620px]">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-[0.72rem] font-medium ${
                isDark
                  ? 'bg-white/8 text-[#f4b6c9]'
                  : 'bg-[#f0d9e3] text-primary-600'
              }`}
            >
              {sectionContent.eyebrow}
            </span>

            <h2
              className={`mt-6 font-heading text-[2rem] font-semibold leading-[1.12] sm:text-[2.4rem] lg:text-[2.9rem] ${
                isDark ? 'text-[#d98ae5]' : 'text-tertiary-700'
              }`}
            >
              {sectionContent.title}
            </h2>

            <p
              className={`mt-6 max-w-[560px] text-[1rem] leading-[1.85] sm:text-[1.05rem] ${
                isDark ? 'text-white/72' : 'text-neutral-700'
              }`}
            >
              {sectionContent.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-10">
              {sectionContent.items.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
                    <img
                      src={item.icon}
                      alt=""
                      className={`h-4 w-4 ${
                        isDark
                          ? '[filter:brightness(0)_saturate(100%)_invert(83%)_sepia(29%)_saturate(823%)_hue-rotate(300deg)_brightness(101%)_contrast(97%)]'
                          : ''
                      }`}
                    />
                  </span>
                  <span
                    className={`text-[0.98rem] ${
                      isDark ? 'text-white/88' : 'text-neutral-900'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="justify-self-stretch lg:justify-self-end">
            <div
              className={`overflow-hidden rounded-[28px] p-4 shadow-[0_16px_40px_rgba(31,24,23,0.12)] transition-colors duration-300 ${
                isDark ? 'bg-white/6' : 'bg-[#f5e8ec]'
              }`}
            >
              <img
                src={classroomStudents}
                alt="Students in the classroom"
                className="block h-full w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BilingualSection
