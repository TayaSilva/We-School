import balletImage from '../../../assets/images/bale.png'
import judoImage from '../../../assets/images/judo.png'
import laboratoryImage from '../../../assets/images/laboratorio.png'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

const content = {
  pt: {
    title: 'Muito além da sala de aula',
    description:
      'Projetos que estimulam o corpo e a mente, desenvolvendo talentos e paixões únicas em cada aluno.',
    button: 'Ver todas atividades',
    cards: [
      {
        title: 'Judô',
        description: 'Disciplina e foco através de artes marciais milenares.',
        image: judoImage,
      },
      {
        title: 'Balé',
        description: 'Expressão corporal e postura com graça e arte.',
        image: balletImage,
      },
      {
        title: 'Projetos Especiais',
        description: 'Robótica, artes visuais e projetos de impacto social.',
        image: laboratoryImage,
      },
    ],
  },
  en: {
    title: 'Beyond the Classroom',
    description:
      'Projects that stimulate body and mind, developing unique talents and passions in every student.',
    button: 'View all activities',
    cards: [
      {
        title: 'Judo',
        description: 'Discipline and focus through ancient martial arts.',
        image: judoImage,
      },
      {
        title: 'Ballet',
        description: 'Body expression and posture with grace and art.',
        image: balletImage,
      },
      {
        title: 'Special Projects',
        description: 'Robotics, visual arts, and social impact projects.',
        image: laboratoryImage,
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
    <section className={`transition-colors duration-300 ${isDark ? 'bg-tertiary-700' : 'bg-[#A23FA1]'}`}>
      <div className="mx-auto max-w-[1760px] px-4 py-14 sm:px-6 sm:py-18 lg:px-[48px] lg:py-20">
        <div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[540px]">
              <h2 className="font-heading text-[2rem] font-semibold text-white sm:text-[2.2rem]">
                {sectionContent.title}
              </h2>
              <p className="mt-4 max-w-[460px] text-[0.98rem] leading-[1.6] text-white/90">
                {sectionContent.description}
              </p>
            </div>

            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-secondary-500 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-secondary-400 hover:shadow-[0_10px_20px_rgba(236,111,5,0.25)]"
            >
              {sectionContent.button}
            </button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sectionContent.cards.map((card) => (
              <article
                key={card.title}
                className={`group overflow-hidden rounded-[18px] border transition-all duration-300 ${
                  isDark
                    ? 'border-white/10 bg-white/8 hover:-translate-y-1 hover:border-white/30 hover:bg-white/12 hover:shadow-[0_18px_40px_rgba(13,13,13,0.24)]'
                    : 'border-white/12 bg-white/10 hover:-translate-y-1 hover:border-white/30 hover:bg-white/14 hover:shadow-[0_18px_40px_rgba(87,21,91,0.18)]'
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-[168px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-[1.55rem] font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-[1.55] text-white/82">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondClassroomSection
