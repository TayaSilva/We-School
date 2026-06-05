import classroomImage from '../../assets/images/sala-de-aula.png'
import highSchoolImage from '../../assets/images/ensino-medio.png'
import fundamentalOneImage from '../../assets/images/fundamental-1 (2).png'
import labImage from '../../assets/images/laboratorio.png'
import schoolGuidePdf from '../../docs/We School.pdf'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

type EducationStage = {
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  bullets?: string[]
  cards?: Array<{
    title: string
    description: string
  }>
}

const content = {
  pt: {
    heroEyebrow: 'Formação integral',
    heroTitle: 'Excelência Acadêmica em Cada Etapa',
    heroDescription:
      'Nossa abordagem pedagógica bilíngue integra currículo internacional com o rigor acadêmico brasileiro, preparando estudantes para desafios globais com empatia e inovação.',
    sections: [
      {
        title: 'Fundamental I',
        subtitle: 'Base Sólida e Criatividade',
        description:
          'No Ensino Fundamental I, focamos no desenvolvimento integral da criança. Através de um ambiente bilíngue e imersivo, promovemos a alfabetização plena em português e inglês.',
        image: fundamentalOneImage,
        imageAlt: 'Alunos estudando em sala',
        bullets: [
          'Alfabetização bilíngue e letramento digital',
          'Desenvolvimento socioemocional e ético',
          'Aprendizagem baseada em projetos criativos',
        ],
      },
      {
        title: 'Fundamental II',
        subtitle: 'Investigação e Fluência',
        description:
          'Nesta etapa, o foco aprofunda-se para o pensamento crítico e a autonomia intelectual. Nossos laboratórios de ciências e espaços maker são palcos para a descoberta.',
        image: labImage,
        imageAlt: 'Alunos em laboratório escolar',
        cards: [
          {
            title: 'Projeto STEM',
            description: 'Integração de ciências, tecnologia e matemática em desafios reais.',
          },
          {
            title: 'Fluência Global',
            description: 'Comunicação em inglês para debates, produções e apresentações.',
          },
        ],
      },
      {
        title: 'Ensino Médio',
        subtitle: 'Protagonismo e Futuro Global',
        description:
          'Preparamos nossos jovens para as melhores universidades do mundo. O currículo personalizado permite que cada estudante foque em suas metas enquanto consolida repertório acadêmico e humano.',
        image: highSchoolImage,
        imageAlt: 'Estudantes reunidos em ambiente colaborativo',
      },
    ] satisfies EducationStage[],
    ctaTitle: 'Quer saber mais sobre o que ensinamos?',
    ctaDescription:
      'Acesse nossos documentos detalhados de currículo e descubra como transformamos a jornada educacional de nossos alunos.',
    ctaPrimary: 'Baixar Guia Curricular',
  },
  en: {
    heroEyebrow: 'Integral education',
    heroTitle: 'Academic Excellence at Every Stage',
    heroDescription:
      'Our bilingual pedagogical approach combines international curriculum standards with Brazilian academic rigor, preparing students for global challenges with empathy and innovation.',
    sections: [
      {
        title: 'Elementary I',
        subtitle: 'Strong Foundations and Creativity',
        description:
          'In Elementary I, we focus on the child\'s full development. Through an immersive bilingual environment, students build literacy in both Portuguese and English.',
        image: fundamentalOneImage,
        imageAlt: 'Students learning in the classroom',
        bullets: [
          'Bilingual literacy and digital fluency',
          'Socio-emotional and ethical development',
          'Project-based creative learning',
        ],
      },
      {
        title: 'Elementary II',
        subtitle: 'Inquiry and Fluency',
        description:
          'At this stage, the focus deepens into critical thinking and intellectual autonomy. Our science labs and maker spaces become places of discovery.',
        image: labImage,
        imageAlt: 'Students in a school laboratory',
        cards: [
          {
            title: 'STEM Project',
            description: 'Science, technology and mathematics integrated into real-world challenges.',
          },
          {
            title: 'Global Fluency',
            description: 'English communication for debates, projects and presentations.',
          },
        ],
      },
      {
        title: 'High School',
        subtitle: 'Leadership and a Global Future',
        description:
          'We prepare students for the world\'s leading universities. A personalized curriculum helps each learner pursue ambitious goals while strengthening academic and human development.',
        image: highSchoolImage,
        imageAlt: 'Students collaborating in a modern learning space',
      },
    ] satisfies EducationStage[],
    ctaTitle: 'Want to learn more about what we teach?',
    ctaDescription:
      'Access our detailed curriculum materials and see how we transform each student\'s educational journey.',
    ctaPrimary: 'Download Curriculum Guide',
  },
} as const

function EducationPage() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const pageContent = content[language]

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#171717]' : 'bg-[#FFEBF7]'}`}>
      <div className="mx-auto max-w-[1760px] px-4 pb-20 pt-[104px] sm:px-6 sm:pb-24 sm:pt-[156px] lg:px-[48px] lg:pb-32 lg:pt-[164px]">
        <div className="w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:gap-24">
            <div className="max-w-[680px]">
              <span className={`inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] ${isDark ? 'bg-white/6 text-[#ffb7cf]' : 'bg-primary-50 text-primary-600'}`}>
                {pageContent.heroEyebrow}
              </span>
              <h1 className={`mt-6 font-heading text-[2.2rem] font-semibold leading-[1.05] sm:text-[3.4rem] ${isDark ? 'text-white' : 'text-neutral-950'}`}>
                {pageContent.heroTitle}
              </h1>
              <p className={`mt-7 max-w-[620px] text-[12px] leading-[1.95] sm:text-[1rem] ${isDark ? 'text-white/74' : 'text-neutral-600'}`}>
                {pageContent.heroDescription}
              </p>
            </div>

            <div className="overflow-hidden rounded-[8px] sm:rounded-[12px]">
              <img src={classroomImage} alt={pageContent.heroTitle} className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[420px]" />
            </div>
          </div>

          <div className={`mt-16 h-px w-full lg:mt-20 ${isDark ? 'bg-white/8' : 'bg-neutral-200'}`} />

          <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-28 lg:mt-28 lg:space-y-36">
            {pageContent.sections.map((section, index) => {
              const reverseLayout = index % 2 === 1

              return (
                <article
                  key={section.title}
                  className={`grid items-center gap-14 sm:gap-16 lg:gap-24 xl:gap-28 ${
                    reverseLayout ? 'lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]' : 'lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'
                  }`}
                >
                  <div className={reverseLayout ? 'lg:order-2' : ''}>
                    <div className="overflow-hidden rounded-[8px] sm:rounded-[12px]">
                      <img src={section.image} alt={section.imageAlt} className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px] xl:h-[390px]" />
                    </div>
                  </div>

                  <div className={`${reverseLayout ? 'lg:order-1' : ''} max-w-[720px]`}>
                    <span className={`font-heading text-[1.35rem] font-semibold sm:text-[2rem] ${isDark ? 'text-[#ff8db6]' : 'text-primary-600'}`}>
                      {section.title}
                    </span>
                    <h2 className={`mt-3 font-heading text-[1.4rem] font-semibold leading-[1.12] sm:text-[2rem] ${isDark ? 'text-white' : 'text-neutral-950'}`}>
                      {section.subtitle}
                    </h2>
                    <p className={`mt-6 text-[12px] leading-[1.95] sm:text-[0.98rem] ${isDark ? 'text-white/74' : 'text-neutral-600'}`}>
                      {section.description}
                    </p>

                    {section.bullets ? (
                      <div className="mt-8 space-y-4">
                        {section.bullets.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span
                              aria-hidden="true"
                              className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] ${
                                isDark ? 'bg-primary-400/18 text-primary-300' : 'bg-primary-50 text-primary-600'
                              }`}
                            >
                              +
                            </span>
                            <span className={`text-[12px] leading-[1.65] sm:text-[0.94rem] ${isDark ? 'text-white/82' : 'text-neutral-700'}`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.cards ? (
                      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
                        {section.cards.map((card) => (
                          <article
                            key={card.title}
                            className={`rounded-[12px] border p-4 ${
                              isDark ? 'border-white/10 bg-white/6' : 'border-neutral-200 bg-white'
                            }`}
                          >
                            <h3 className={`font-heading text-[1rem] font-semibold ${isDark ? 'text-[#ffb7cf]' : 'text-primary-600'}`}>
                              {card.title}
                            </h3>
                            <p className={`mt-2 text-[11px] leading-[1.65] sm:text-[0.86rem] ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>
                              {card.description}
                            </p>
                          </article>
                        ))}
                      </div>
                    ) : null}

                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-24 sm:mt-28 lg:mt-36">
            <article className="relative overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#b8004c_0%,#c20f67_48%,#9d0041_100%)] px-6 py-8 text-white shadow-[0_28px_60px_rgba(111,17,53,0.28)] sm:px-10 sm:py-10 lg:px-12">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-sm sm:h-32 sm:w-32" />
              <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full border border-white/10" />
              <div className="absolute left-8 top-8 h-16 w-16 animate-[floatCtaBubble_8s_ease-in-out_infinite] rounded-full border border-white/10 bg-white/5 sm:h-20 sm:w-20" />
              <div className="absolute bottom-8 left-[18%] h-10 w-10 animate-[floatCtaBubble_10s_ease-in-out_infinite_reverse] rounded-full bg-white/8 blur-[1px] sm:h-14 sm:w-14" />
              <div className="relative mx-auto max-w-[920px] text-center">
                <h2 className="font-heading text-[1.45rem] font-semibold leading-[1.15] sm:text-[2rem]">
                  {pageContent.ctaTitle}
                </h2>
                <p className="mx-auto mt-3 max-w-[720px] text-[12px] leading-[1.75] text-white/88 sm:text-[0.98rem]">
                  {pageContent.ctaDescription}
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={schoolGuidePdf}
                    download="We School.pdf"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-[#f6a21a] px-5 text-[12px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-[50px] sm:px-6 sm:text-[0.9rem]"
                  >
                    {pageContent.ctaPrimary}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage
