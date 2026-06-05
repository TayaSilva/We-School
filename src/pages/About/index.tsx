import { useEffect, useRef, useState } from 'react'
import carinhoIcon from '../../assets/icons/carinho.png'
import fogueteIcon from '../../assets/icons/foguete.png'
import visaoIcon from '../../assets/icons/visao.png'
import infirmaryImage from '../../assets/images/enfermaria.png'
import oldFacadeImage from '../../assets/images/fachada-antiga.png'
import schoolCourtyardImage from '../../assets/images/fundo-escola-2.png'
import schoolFacadeImage from '../../assets/images/fundo-escola-3.png'
import computerLabImage from '../../assets/images/informatica.png'
import scienceLabImage from '../../assets/images/laboratorio.png'
import openCourtImage from '../../assets/images/quadra-aberta.png'
import indoorCourtImage from '../../assets/images/quadra-fechada.png'
import cafeteriaImage from '../../assets/images/refeitorio.png'
import classroomImage from '../../assets/images/sala-de-aula.png'
import balletRoomImage from '../../assets/images/sala-de-bale.png'
import judoRoomImage from '../../assets/images/sala-do-judo.png'
import cookingRoomImage from '../../assets/images/sala-culinaria.png'
import paintingRoomImage from '../../assets/images/sala-pintura.png'
import roboticsRoomImage from '../../assets/images/sala-robotica.png'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

type HeroPhase = 'idle' | 'orientation' | 'carousel'

const slides = [
  {
    image: paintingRoomImage,
    alt: 'Sala de pintura da We School',
    mobilePosition: 'object-[68%_center]',
    pt: {
      label: 'Sala de pintura',
      description: 'Criatividade com cores e formas.',
    },
    en: {
      label: 'Painting room',
      description: 'Creativity with colors and shapes.',
    },
  },
  {
    image: classroomImage,
    alt: 'Sala de aula da We School',
    mobilePosition: 'object-[58%_center]',
    pt: {
      label: 'Sala de aula',
      description: 'Aprendizado bilíngue todos os dias.',
    },
    en: {
      label: 'Classroom',
      description: 'Bilingual learning every day.',
    },
  },
  {
    image: balletRoomImage,
    alt: 'Sala de balé da We School',
    mobilePosition: 'object-[54%_center]',
    pt: {
      label: 'Sala de balé',
      description: 'Movimento, ritmo e expressão.',
    },
    en: {
      label: 'Ballet room',
      description: 'Movement, rhythm and expression.',
    },
  },
  {
    image: judoRoomImage,
    alt: 'Sala de judô da We School',
    mobilePosition: 'object-[56%_center]',
    pt: {
      label: 'Sala de judô',
      description: 'Disciplina, foco e confiança.',
    },
    en: {
      label: 'Judo room',
      description: 'Discipline, focus and confidence.',
    },
  },
  {
    image: scienceLabImage,
    alt: 'Laboratório da We School',
    mobilePosition: 'object-[58%_center]',
    pt: {
      label: 'Laboratório',
      description: 'Ciência com prática e curiosidade.',
    },
    en: {
      label: 'Science lab',
      description: 'Science with practice and curiosity.',
    },
  },
  {
    image: roboticsRoomImage,
    alt: 'Sala de robótica da We School',
    mobilePosition: 'object-[55%_center]',
    pt: {
      label: 'Sala de robótica',
      description: 'Tecnologia para criar soluções.',
    },
    en: {
      label: 'Robotics room',
      description: 'Technology to create solutions.',
    },
  },
  {
    image: cookingRoomImage,
    alt: 'Sala de culinária da We School',
    mobilePosition: 'object-[52%_center]',
    pt: {
      label: 'Sala de culinária',
      description: 'Aprender com sabor e autonomia.',
    },
    en: {
      label: 'Cooking room',
      description: 'Learning with flavor and autonomy.',
    },
  },
  {
    image: computerLabImage,
    alt: 'Sala de informática da We School',
    mobilePosition: 'object-[50%_center]',
    pt: {
      label: 'Informática',
      description: 'Conexão, pesquisa e criação digital.',
    },
    en: {
      label: 'Computer lab',
      description: 'Connection, research and digital creation.',
    },
  },
  {
    image: cafeteriaImage,
    alt: 'Refeitório da We School',
    mobilePosition: 'object-[52%_center]',
    pt: {
      label: 'Refeitório',
      description: 'Pausas acolhedoras para conviver.',
    },
    en: {
      label: 'Cafeteria',
      description: 'Welcoming breaks to connect.',
    },
  },
  {
    image: infirmaryImage,
    alt: 'Enfermaria da We School',
    mobilePosition: 'object-[50%_center]',
    pt: {
      label: 'Enfermaria',
      description: 'Cuidado e segurança todos os dias.',
    },
    en: {
      label: 'Infirmary',
      description: 'Care and safety every day.',
    },
  },
  {
    image: openCourtImage,
    alt: 'Quadra aberta da We School',
    mobilePosition: 'object-[62%_center]',
    pt: {
      label: 'Quadra aberta',
      description: 'Movimento, esporte e convivência.',
    },
    en: {
      label: 'Open court',
      description: 'Movement, sports and connection.',
    },
  },
  {
    image: indoorCourtImage,
    alt: 'Quadra fechada da We School',
    mobilePosition: 'object-[50%_center]',
    pt: {
      label: 'Quadra fechada',
      description: 'Esporte com conforto em toda rotina.',
    },
    en: {
      label: 'Indoor court',
      description: 'Sports with comfort every day.',
    },
  },
  {
    image: schoolCourtyardImage,
    alt: 'Área externa da We School',
    mobilePosition: 'object-[60%_center]',
    pt: {
      label: 'Biblioteca',
      description: 'Leitura, pesquisa e descoberta.',
    },
    en: {
      label: 'Library',
      description: 'Reading, research and discovery.',
    },
  },
  {
    image: schoolFacadeImage,
    alt: 'Fachada da We School',
    mobilePosition: 'object-[58%_center]',
    pt: {
      label: 'Teatro',
      description: 'Arte, palco e expressão.',
    },
    en: {
      label: 'Theater',
      description: 'Art, stage and expression.',
    },
  },
] as const

const content = {
  pt: {
    title: 'Conheça a We School',
    description:
      'Liderando a educação do futuro com uma abordagem bilíngue inovadora, centrada no aluno e em um ambiente arquitetônico que inspira a criatividade.',
    button: 'Descubra',
    rotateMessage: 'Vire a tela para uma melhor experiência',
    storyEyebrow: 'Nossa história',
    storyTitle: 'Uma trajetória dedicada à excelência educacional',
    storyParagraphs: [
      'Fundada em 2008, a We School nasceu do sonho de criar um ambiente onde o bilinguismo e a inovação caminhassem lado a lado. Começamos como um pequeno centro de idiomas e, ao longo de mais de 15 anos, evoluímos para uma instituição de ensino completa, reconhecida pela sua metodologia humanizada e pelo foco no desenvolvimento global do aluno.',
      'Hoje, somos referência em educação internacional, preparando cidadãos críticos e criativos para os desafios do futuro.',
    ],
    purposeEyebrow: 'Nosso propósito',
    purposeTitle: 'Missão, Visão e Valores',
    pillars: [
      {
        title: 'Missão',
        description:
          'Transformar vidas através de uma educação bilíngue de excelência, preparando cidadãos globais conscientes e capacitados.',
      },
      {
        title: 'Visão',
        description:
          'Ser referência nacional em metodologias ativas e inovação pedagógica até 2030, integrando tecnologia e humanismo.',
      },
      {
        title: 'Valores',
        items: ['Ética profissional', 'Respeito à diversidade', 'Inovação constante'],
      },
    ],
  },
  en: {
    title: 'Discover We School',
    description:
      'Leading the future of education with an innovative bilingual approach, centered on students and an architectural environment that inspires creativity.',
    button: 'Discover',
    rotateMessage: 'Rotate your screen for a better experience',
    storyEyebrow: 'Our history',
    storyTitle: 'A journey dedicated to educational excellence',
    storyParagraphs: [
      'Founded in 2008, We School was born from the dream of creating a place where bilingual education and innovation could grow side by side. We started as a small language center and, over more than 15 years, evolved into a complete educational institution recognized for its human-centered methodology and its focus on each student’s global development.',
      'Today, we are a reference in international education, preparing critical and creative citizens for the challenges of the future.',
    ],
    purposeEyebrow: 'Our purpose',
    purposeTitle: 'Mission, Vision and Values',
    pillars: [
      {
        title: 'Mission',
        description:
          'To transform lives through excellent bilingual education, preparing conscious and capable global citizens.',
      },
      {
        title: 'Vision',
        description:
          'To be a national reference in active methodologies and pedagogical innovation by 2030, integrating technology and humanism.',
      },
      {
        title: 'Values',
        items: ['Professional ethics', 'Respect for diversity', 'Constant innovation'],
      },
    ],
  },
} as const

const pillarIcons = [fogueteIcon, visaoIcon, carinhoIcon] as const

function MaskIcon({ src, className }: { src: string; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        backgroundColor: 'currentColor',
        maskImage: `url(${src})`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
      }}
    />
  )
}

function setAboutMobileHeaderVisibility(hidden: boolean) {
  window.dispatchEvent(
    new CustomEvent('about-mobile-header-visibility', {
      detail: { hidden },
    }),
  )
}

function AboutPage() {
  const [heroPhase, setHeroPhase] = useState<HeroPhase>('idle')
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isPortraitOrientation, setIsPortraitOrientation] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const pageContent = content[language]
  const activeSlideContent = slides[activeSlide][language]

  const isDiscovering = heroPhase !== 'idle'
  const isShowingOrientation = heroPhase === 'orientation'
  const isCarouselVisible = heroPhase === 'carousel'
  const isMobileLandscape = (isMobileViewport || isTouchDevice) && !isPortraitOrientation
  const isMobileLandscapeCarousel = (isMobileViewport || isTouchDevice) && !isPortraitOrientation && isCarouselVisible

  function resetHero() {
    setHeroPhase('idle')
    setActiveSlide(0)
    setAboutMobileHeaderVisibility(false)
  }

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  function startDiscoverExperience() {
    setActiveSlide(0)

    if (isMobileViewport || isTouchDevice) {
      if (!isPortraitOrientation) {
        setHeroPhase('carousel')
        setAboutMobileHeaderVisibility(true)
        return
      }

      setHeroPhase('orientation')
      setAboutMobileHeaderVisibility(true)
      return
    }

    setHeroPhase('carousel')
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')

    function handleViewportChange(event: MediaQueryListEvent | MediaQueryList) {
      setIsMobileViewport(event.matches)
    }

    handleViewportChange(mediaQuery)

    const listener = (event: MediaQueryListEvent) => handleViewportChange(event)
    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [])

  useEffect(() => {
    const touchQuery = window.matchMedia('(pointer: coarse)')

    function handleTouchDeviceChange(event: MediaQueryListEvent | MediaQueryList) {
      setIsTouchDevice(event.matches)
    }

    handleTouchDeviceChange(touchQuery)

    const listener = (event: MediaQueryListEvent) => handleTouchDeviceChange(event)
    touchQuery.addEventListener('change', listener)

    return () => {
      touchQuery.removeEventListener('change', listener)
    }
  }, [])

  useEffect(() => {
    const orientationQuery = window.matchMedia('(orientation: portrait)')

    function handleOrientationChange(event: MediaQueryListEvent | MediaQueryList) {
      setIsPortraitOrientation(event.matches)
    }

    handleOrientationChange(orientationQuery)

    const listener = (event: MediaQueryListEvent) => handleOrientationChange(event)
    orientationQuery.addEventListener('change', listener)

    return () => {
      orientationQuery.removeEventListener('change', listener)
    }
  }, [])

  useEffect(() => {
    if (!isShowingOrientation) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setHeroPhase('carousel')
    }, 5000)

    return () => window.clearTimeout(timeoutId)
  }, [isShowingOrientation])

  useEffect(() => {
    if (!isShowingOrientation) {
      return
    }

    if (!isPortraitOrientation) {
      const timeoutId = window.setTimeout(() => {
        setHeroPhase('carousel')
      }, 700)

      return () => window.clearTimeout(timeoutId)
    }
  }, [isPortraitOrientation, isShowingOrientation])

  useEffect(() => {
    if (!isCarouselVisible) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [isCarouselVisible])

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.55) {
          resetHero()
        }
      },
      { threshold: [0, 0.25, 0.55, 0.8, 1] },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    return () => {
      setAboutMobileHeaderVisibility(false)
    }
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-neutral-950"
      >
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${slide.mobilePosition} sm:object-center ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            isDiscovering
              ? isDark
                ? 'bg-black/22'
                : 'bg-black/16'
              : 'bg-black/48'
          }`}
        />

        <div
          className={`relative z-10 mx-auto flex min-h-screen w-full max-w-[1760px] px-4 sm:px-6 lg:px-[48px] ${
            isMobileLandscape ? 'items-end pb-8 pt-28' : 'items-center py-20'
          }`}
        >
          <button
            type="button"
            onClick={resetHero}
            className={`absolute right-4 top-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/24 bg-neutral-950/70 text-xl font-semibold leading-none text-white shadow-[0_12px_30px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:bg-neutral-950/85 ${
              isMobileLandscapeCarousel ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-label={language === 'pt' ? 'Fechar carrossel' : 'Close carousel'}
          >
            ×
          </button>

          <div
            className={`max-w-[760px] transition-all duration-700 ${
              isDiscovering
                ? 'pointer-events-none translate-y-4 opacity-0'
                : 'translate-y-0 opacity-100'
            } ${isMobileLandscape ? 'max-w-[360px]' : ''}`}
          >
            <h1
              className={`font-heading font-bold text-white ${
                isMobileLandscape
                  ? 'text-[1.9rem] leading-[0.98]'
                  : 'text-[2.35rem] leading-[1.05] sm:text-[3rem] lg:text-[3.4rem]'
              }`}
            >
              {pageContent.title}
            </h1>
            <p
              className={`mt-5 font-medium text-white ${
                isMobileLandscape
                  ? 'max-w-[360px] text-[0.9rem] leading-[1.5]'
                  : 'max-w-[740px] text-[1rem] leading-[1.65] sm:text-[1.08rem]'
              }`}
            >
              {pageContent.description}
            </p>
            <button
              type="button"
              onClick={startDiscoverExperience}
              className={`mt-7 inline-flex items-center justify-center rounded-[4px] bg-primary-600 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-primary-700 ${
                isMobileLandscape ? 'min-h-10 min-w-[160px] px-6' : 'min-h-12 min-w-[180px] px-8'
              }`}
            >
              {pageContent.button}
            </button>
          </div>

          <div
            className={`absolute inset-0 z-20 flex items-center justify-center px-8 transition-opacity duration-700 sm:hidden ${
              isShowingOrientation ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={!isShowingOrientation}
          >
            <div className="max-w-[280px] rounded-[18px] border border-white/18 bg-neutral-950/62 px-5 py-5 text-center text-white shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <p className="font-heading text-[16px] font-semibold leading-[1.25] text-[#ffb7cf] sm:text-[1.55rem] sm:leading-[1.15]">
                {pageContent.rotateMessage}
              </p>
            </div>
          </div>

          <div
            className={`absolute inset-x-4 bottom-8 z-20 flex flex-col items-center gap-5 transition-opacity duration-700 sm:inset-x-6 lg:inset-x-[48px] ${
              isCarouselVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={!isCarouselVisible}
          >
            <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
              <button
                type="button"
                onClick={showPreviousSlide}
                className={`inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-primary-600 font-semibold leading-none text-white shadow-[0_10px_26px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 ${
                  isMobileLandscape ? 'h-10 w-10 text-[1.35rem]' : 'h-10 w-10 text-[1.35rem] sm:h-12 sm:w-12 sm:text-2xl'
                }`}
                aria-label={language === 'pt' ? 'Imagem anterior' : 'Previous image'}
              >
                &#8249;
              </button>

              <div className={`max-w-[620px] border border-white/18 bg-neutral-950/58 text-center text-white shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm ${
                isMobileLandscape ? 'min-w-0 rounded-[16px] px-3 py-2' : 'rounded-[16px] px-2.5 py-2.5 sm:rounded-[18px] sm:px-5 sm:py-4'
              }`}>
                <h2 className={`font-heading font-semibold text-[#ffb7cf] ${
                  isMobileLandscape ? 'whitespace-nowrap text-[14px] leading-[1.25]' : 'text-[14px] sm:text-[1.35rem]'
                }`}>
                  {activeSlideContent.label}
                </h2>
              </div>

              <button
                type="button"
                onClick={showNextSlide}
                className={`inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-secondary-500 font-semibold leading-none text-white shadow-[0_10px_26px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary-600 ${
                  isMobileLandscape ? 'h-10 w-10 text-[1.35rem]' : 'h-10 w-10 text-[1.35rem] sm:h-12 sm:w-12 sm:text-2xl'
                }`}
                aria-label={language === 'pt' ? 'Próxima imagem' : 'Next image'}
              >
                &#8250;
              </button>
            </div>

            <div className="flex justify-center gap-3">
              {slides.map((slide, index) => (
                <span
                  key={`${slide.image}-indicator`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'w-10 bg-white' : 'w-2.5 bg-white/45'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`transition-colors duration-300 ${
          isDark ? 'bg-[#111315]' : 'bg-[#fbf8f6]'
        }`}
      >
        <div className="mx-auto max-w-[1760px] px-4 py-16 sm:px-6 lg:px-[48px] lg:py-24">
          <div className="grid gap-10 border-b border-black/8 pb-16 dark:border-white/8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,680px)] lg:items-center lg:gap-16 lg:pb-20">
            <div className="max-w-[620px]">
              <span
                className={`text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${
                  isDark ? 'text-[#ffb7cf]' : 'text-primary-600'
                }`}
              >
                {pageContent.storyEyebrow}
              </span>
              <h2
                className={`mt-4 font-heading text-[2rem] font-semibold leading-[1.08] sm:text-[2.6rem] ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                {pageContent.storyTitle}
              </h2>
              <div
                className={`mt-6 space-y-5 text-[1rem] leading-[1.7] ${
                  isDark ? 'text-white/72' : 'text-neutral-700'
                }`}
              >
                {pageContent.storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[10px] shadow-[0_18px_48px_rgba(21,18,17,0.12)]">
              <img
                src={oldFacadeImage}
                alt={language === 'pt' ? 'Ambiente da We School' : 'We School environment'}
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[380px]"
              />
            </div>
          </div>

          <div className="pt-16 lg:pt-20">
            <div className="text-center">
              <span
                className={`text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${
                  isDark ? 'text-[#ffb7cf]' : 'text-primary-600'
                }`}
              >
                {pageContent.purposeEyebrow}
              </span>
              <h2
                className={`mt-4 font-heading text-[2rem] font-semibold ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
              >
                {pageContent.purposeTitle}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pageContent.pillars.map((pillar, index) => {
                const accentClass =
                  index === 0
                    ? isDark
                      ? 'text-[#ffb7cf]'
                      : 'text-primary-600'
                    : index === 1
                      ? isDark
                        ? 'text-[#d8a5ff]'
                        : 'text-tertiary-600'
                      : isDark
                        ? 'text-secondary-300'
                        : 'text-secondary-600'

                const accentBorderClass =
                  index === 0
                    ? isDark
                      ? 'border-primary-400'
                      : 'border-primary-600'
                    : index === 1
                      ? isDark
                        ? 'border-tertiary-400'
                        : 'border-tertiary-500'
                      : isDark
                        ? 'border-secondary-400'
                        : 'border-secondary-500'

                const accentBulletClass =
                  index === 0
                    ? isDark
                      ? 'bg-[#ffb7cf]'
                      : 'bg-primary-600'
                    : index === 1
                      ? isDark
                        ? 'bg-[#d8a5ff]'
                        : 'bg-tertiary-600'
                      : isDark
                        ? 'bg-secondary-300'
                        : 'bg-secondary-600'

                return (
                  <article
                    key={pillar.title}
                    className={`rounded-[8px] border-t-2 p-5 text-left shadow-[0_12px_28px_rgba(20,16,15,0.06)] transition-colors duration-300 sm:p-6 ${
                      isDark ? 'bg-white/[0.03]' : 'bg-white'
                    } ${accentBorderClass}`}
                  >
                    <div
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10 ${
                        isDark ? 'bg-white/6' : 'bg-neutral-100'
                      } ${accentClass}`}
                    >
                      <MaskIcon src={pillarIcons[index]} className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <h3
                      className={`mt-4 font-heading text-[16px] font-semibold sm:mt-5 sm:text-[1.6rem] ${
                        isDark ? 'text-white' : 'text-neutral-950'
                      }`}
                    >
                      {pillar.title}
                    </h3>

                    {'description' in pillar ? (
                      <p
                        className={`mt-3 text-[12px] leading-[1.65] sm:mt-4 sm:text-[0.98rem] ${
                          isDark ? 'text-white/72' : 'text-neutral-700'
                        }`}
                      >
                        {pillar.description}
                      </p>
                    ) : (
                      <div
                        className={`mt-3 space-y-2.5 text-[12px] sm:mt-4 sm:space-y-3 sm:text-[0.98rem] ${
                          isDark ? 'text-white/72' : 'text-neutral-700'
                        }`}
                      >
                        {pillar.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span
                              className={`mt-[7px] h-1.5 w-1.5 rounded-full ${accentBulletClass}`}
                            />
                            <span className="leading-[1.6]">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
