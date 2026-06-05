import { useEffect, useMemo, useState } from 'react'
import schoolBackground1 from '../../../assets/images/fundo-escola-1.png'
import schoolBackground2 from '../../../assets/images/fundo-escola-2.png'
import schoolBackground3 from '../../../assets/images/fundo-escola-3.png'
import { useLanguage } from '../../../hooks/useLanguage'
import { useTheme } from '../../../hooks/useTheme'

const slides = [
  {
    id: 1,
    image: schoolBackground1,
    pt: {
      title: 'We School: educação bilíngue que inspira o futuro',
      description:
        'Uma escola bilíngue preparada para acolher, ensinar e desenvolver alunos com excelência acadêmica e fluência natural.',
    },
    en: {
      title: 'We School: Bilingual education that inspires the future',
      description:
        'A bilingual school prepared to welcome, teach, and develop students with academic excellence and natural fluency.',
    },
  },
  {
    id: 2,
    image: schoolBackground2,
    pt: {
      title: 'Ambientes pensados para aprender, explorar e crescer',
      description:
        'Espaços acolhedores e bem estruturados para estimular autonomia, criatividade e uma rotina escolar cheia de descobertas.',
    },
    en: {
      title: 'Spaces designed to learn, explore, and grow',
      description:
        'Welcoming and well-structured environments that encourage autonomy, creativity, and a school routine full of discoveries.',
    },
  },
  {
    id: 3,
    image: schoolBackground3,
    pt: {
      title: 'Uma jornada acadêmica com propósito e visão global',
      description:
        'Formação que une excelência acadêmica, desenvolvimento humano e experiências que conectam os alunos ao mundo.',
    },
    en: {
      title: 'An academic journey with purpose and a global outlook',
      description:
        'An education that combines academic excellence, human development, and experiences that connect students to the world.',
    },
  },
] as const

const buttonLabels = {
  pt: {
    secondaryButton: 'Conheça nossa escola',
    primaryButton: 'Agende uma visita',
  },
  en: {
    secondaryButton: 'Learn about our school',
    primaryButton: 'Schedule a visit',
  },
} as const

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(1)
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const activeSlideContent = slides[activeSlide][language]
  const activeButtons = buttonLabels[language]
  const overlayClassName = useMemo(
    () =>
      isDark
        ? 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_26%),linear-gradient(90deg,rgba(14,14,14,0.9)_0%,rgba(14,14,14,0.76)_26%,rgba(14,14,14,0.5)_48%,rgba(14,14,14,0.24)_72%,rgba(14,14,14,0.08)_100%)]'
        : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.84)_18%,rgba(255,255,255,0.66)_34%,rgba(255,255,255,0.42)_50%,rgba(255,255,255,0.16)_66%,rgba(255,255,255,0.02)_100%)]',
    [isDark],
  )

  return (
    <section className="relative min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-[72%_center] transition-opacity duration-700 sm:bg-center ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== activeSlide}
        />
      ))}

      <div className={`absolute inset-0 transition-all duration-500 ${overlayClassName}`} />
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDark
            ? 'bg-[linear-gradient(180deg,rgba(10,10,10,0.2)_0%,rgba(10,10,10,0.08)_38%,rgba(10,10,10,0.46)_100%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.12)_48%,rgba(255,255,255,0.03)_100%),linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_42%,rgba(255,255,255,0.22)_100%)]'
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1760px] flex-col px-4 pb-8 pt-[122px] sm:px-6 sm:pb-10 sm:pt-[180px] lg:px-[48px]">
        <div className="flex flex-1 items-center">
          <div className="flex w-full max-w-[680px] flex-col">
            <h1
              className={`min-h-[148px] max-w-[320px] font-heading text-[30px] font-bold leading-[0.98] tracking-normal transition-colors duration-300 sm:min-h-[118px] sm:max-w-[520px] sm:text-[40px] lg:min-h-[138px] lg:max-w-[660px] lg:text-[48px] ${
                isDark ? 'text-[#f6b9cb]' : 'text-primary-700'
              }`}
            >
              {activeSlideContent.title}
            </h1>

            <p
              className={`mt-5 min-h-[164px] max-w-[320px] text-[17px] leading-[1.6] transition-colors duration-300 sm:mt-8 sm:min-h-[124px] sm:max-w-[540px] sm:text-[1.2rem] lg:min-h-[180px] lg:max-w-[610px] lg:text-[1.55rem] ${
                isDark ? 'text-white/88 sm:text-white/72' : 'text-neutral-950 sm:text-neutral-800/85'
              }`}
            >
              {activeSlideContent.description}
            </p>

            <div className="mt-8 flex min-h-[100px] w-full flex-col items-center gap-2.5 sm:mt-11 sm:min-h-[56px] sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
              <a
                href="/sobre"
                className={`inline-flex min-h-[44px] w-full items-center justify-center rounded-[12px] border px-4 text-center text-[0.8rem] font-semibold transition-all duration-300 sm:min-h-[56px] sm:min-w-[220px] sm:rounded-[14px] sm:px-7 sm:text-base ${
                  isDark
                    ? 'border-[#f0a8bf] bg-transparent text-[#f7cad7] hover:bg-white/6'
                    : 'border-tertiary-500 bg-white/20 text-tertiary-700 backdrop-blur-[1px] hover:bg-white/35'
                }`}
              >
                {activeButtons.secondaryButton}
              </a>
              <a
                href="/contato"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[12px] bg-primary-600 px-4 text-center text-[0.8rem] font-semibold text-white transition-all duration-300 hover:bg-primary-700 sm:min-h-[56px] sm:min-w-[196px] sm:rounded-[14px] sm:px-7 sm:text-base"
              >
                {activeButtons.primaryButton}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 pb-2 sm:mt-0 sm:pb-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Ir para slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? `w-14 ${isDark ? 'bg-[#f4b0c5]' : 'bg-primary-600'}`
                  : `w-3 ${isDark ? 'bg-white/20 hover:bg-white/35' : 'bg-white/90 hover:bg-white'}`
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
