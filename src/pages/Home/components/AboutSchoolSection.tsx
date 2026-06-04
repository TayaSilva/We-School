import { Link } from 'react-router-dom'
import schoolImage from '../../../assets/images/fundo-escola.png?url'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

const content = {
  pt: {
    title: 'Sobre a We School',
    paragraphOne:
      'Com mais de 15 anos de história, a We School nasceu do desejo de transformar a educação no Brasil. Nossa jornada é guiada pelo respeito à individualidade do aluno e pelo compromisso com uma formação acadêmica de nível internacional.',
    paragraphTwo:
      'Acreditamos que o ambiente escolar deve ser uma extensão da casa, onde a segurança e o afeto caminham lado a lado com a tecnologia e a inovação.',
    button: 'Saiba mais sobre nós',
  },
  en: {
    title: 'About We School',
    paragraphOne:
      'With over 15 years of history, We School was born from the desire to transform education in Brazil. Our journey is guided by respect for the student’s individuality and a commitment to international-level academic formation.',
    paragraphTwo:
      'We believe that the school environment should be an extension of the home, where safety and affection walk side by side with technology and innovation.',
    button: 'Learn more about us',
  },
} as const

function AboutSchoolSection() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sectionContent = content[language]

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#171717]' : 'bg-white'}`}>
      <div className="mx-auto max-w-[1760px] px-4 py-14 sm:px-6 sm:py-18 lg:px-[48px] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[480px_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[22px]">
            <img
              src={schoolImage}
              alt="We School campus"
              className="h-[260px] w-full rounded-[22px] object-cover shadow-[0_18px_40px_rgba(25,20,19,0.18)] lg:h-[300px]"
            />
          </div>

          <div className="max-w-[640px]">
            <h2
              className={`font-heading text-[2rem] font-semibold sm:text-[2.3rem] ${
                isDark ? 'text-[#ffb7cf]' : 'text-primary-600'
              }`}
            >
              {sectionContent.title}
            </h2>

            <p className={`mt-5 text-[0.98rem] leading-[1.7] ${isDark ? 'text-white/80' : 'text-neutral-700'}`}>
              {sectionContent.paragraphOne}
            </p>

            <p className={`mt-5 text-[0.98rem] leading-[1.7] ${isDark ? 'text-white/80' : 'text-neutral-700'}`}>
              {sectionContent.paragraphTwo}
            </p>

            <Link
              to="/sobre"
              className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-[10px] border px-5 text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? 'border-[#f4b6c9] text-[#f4b6c9] hover:bg-white/6'
                  : 'border-primary-300 text-primary-600 hover:bg-primary-50'
              }`}
            >
              {sectionContent.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSchoolSection
