import { Link } from 'react-router-dom'
import emailSvg from '../../assets/icons/email.svg?raw'
import instagramSvg from '../../assets/icons/instagram.svg?raw'
import linkSvg from '../../assets/icons/link.svg?raw'
import locationSvg from '../../assets/icons/local.svg?raw'
import phoneSvg from '../../assets/icons/telefone.svg?raw'
import whatsappSvg from '../../assets/icons/whatsapp.svg?raw'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

type SvgIconProps = {
  svg: string
  className?: string
}

type FooterProps = {
  showCta?: boolean
}

function SvgIcon({ svg, className = 'h-4 w-4' }: SvgIconProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className} [&_svg]:h-full [&_svg]:w-full`}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden="true"
    />
  )
}

const content = {
  pt: {
    ctaTitle: 'Venha conhecer a We School de perto',
    ctaText:
      'O futuro do seu filho começa com uma visita. Agende agora um horário para conhecer nossa estrutura e nossa equipe pedagógica.',
    ctaButton: 'Agendar visita',
    description:
      'Formando líderes globais através de uma educação acolhedora e inspiradora.',
    navigation: 'Navegação',
    legal: 'Institucional',
    contact: 'Contato',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Sobre', to: '/sobre' },
      { label: 'Ensino', to: '/ensino' },
      { label: 'Atividades', to: '/atividades' },
    ],
    legalLinks: ['Contato', 'Política de Privacidade', 'Trabalhe Conosco', 'Portal dos Pais'],
    address: 'Av Tucuruvi, 2971 - São Paulo - SP',
    phone: '(11) 4002-8922',
    email: 'contato@weschool.com.br',
    rights: '© 2024 We School. All rights reserved.',
    made: 'Made with care for future leaders.',
  },
  en: {
    ctaTitle: 'Come visit We School in person',
    ctaText:
      'Your child’s future begins with a visit. Schedule a time now to see our structure and our pedagogical team.',
    ctaButton: 'Schedule a visit',
    description:
      'Forming global leaders through a welcoming and inspiring education.',
    navigation: 'Navigation',
    legal: 'Institutional',
    contact: 'Contact',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/sobre' },
      { label: 'Teaching', to: '/ensino' },
      { label: 'Activities', to: '/atividades' },
    ],
    legalLinks: ['Contact', 'Privacy Policy', 'Careers', 'Parent Portal'],
    address: 'Av Tucuruvi, 2971 - São Paulo - SP',
    phone: '(11) 4002-8922',
    email: 'contact@weschool.com.br',
    rights: '© 2024 We School. All rights reserved.',
    made: 'Made with care for future leaders.',
  },
} as const

const socialLinks = [
  { label: 'LinkedIn', icon: linkSvg, href: '#' },
  { label: 'WhatsApp', icon: whatsappSvg, href: '#' },
  { label: 'Instagram', icon: instagramSvg, href: '#' },
] as const

function Footer({ showCta = true }: FooterProps) {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const footerContent = content[language]

  const textClass = isDark ? 'text-white/76' : 'text-neutral-700'
  const linkClass = isDark
    ? 'text-white/76 hover:text-[#ffb7cf]'
    : 'text-neutral-700 hover:text-primary-600'
  const headingClass = isDark ? 'text-[#ffb7cf]' : 'text-primary-600'

  return (
    <footer className={`transition-colors duration-300 ${isDark ? 'bg-[#242827]' : 'bg-[#E9E5E3]'}`}>
      <div className="w-full px-4 pb-12 pt-20 sm:px-6 lg:px-[48px]">
        {showCta ? (
          <div
            className={`mx-auto max-w-[1280px] rounded-[28px] px-6 py-14 text-center shadow-[0_18px_40px_rgba(30,22,20,0.12)] sm:px-10 ${
              isDark
                ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(135deg,#ff9fcb_0%,#ff8fb0_52%,#ff7b22_100%)] [background-size:22px_22px,100%_100%]'
                : 'bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(135deg,#a00083_0%,#9b2aa1_48%,#ff6b13_100%)] [background-size:22px_22px,100%_100%]'
            }`}
          >
            <h2 className="font-heading text-[16px] font-semibold text-white sm:text-[1.35rem]">
              {footerContent.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[12px] font-medium leading-[1.55] text-white/92 sm:text-[0.95rem]">
              {footerContent.ctaText}
            </p>
            <Link
              to="/contato"
              viewTransition
              className="mt-8 inline-flex min-h-12 min-w-[178px] items-center justify-center rounded-[10px] bg-white px-6 text-sm font-semibold text-primary-600 shadow-[0_10px_24px_rgba(20,20,20,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-50 hover:text-primary-700"
            >
              {footerContent.ctaButton}
            </Link>
          </div>
        ) : null}

        <div className={`grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] ${showCta ? 'pt-20' : 'pt-0'}`}>
          <div>
            <Link
              to="/"
              viewTransition
               className={`font-heading text-[16px] font-bold sm:text-[1.35rem] ${headingClass}`}
            >
              We School
            </Link>
            <p className={`mt-5 max-w-[310px] text-[12px] leading-[1.65] sm:text-base ${textClass}`}>
              {footerContent.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                    isDark
                      ? 'bg-white/10 text-[#ffb7cf] hover:bg-[#ffb7cf] hover:text-[#242827]'
                      : 'bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white'
                  }`}
                >
                  <SvgIcon svg={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-[16px] font-semibold sm:text-base ${headingClass}`}>
              {footerContent.navigation}
            </h3>
            <nav className="mt-6 flex flex-col gap-4">
              {footerContent.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  viewTransition
                  className={`text-[12px] transition-colors duration-300 sm:text-base ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={`text-[16px] font-semibold sm:text-base ${headingClass}`}>
              {footerContent.legal}
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              {footerContent.legalLinks.map((item) => (
                <span key={item} className={`text-[12px] sm:text-base ${textClass}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-[16px] font-semibold sm:text-base ${headingClass}`}>
              {footerContent.contact}
            </h3>
            <address className="mt-6 flex flex-col gap-5 not-italic">
              <a
                href="https://maps.google.com/?q=Av+Tucuruvi,+2971,+Sao+Paulo"
                className={`group flex gap-4 text-[12px] leading-[1.55] transition-colors duration-300 sm:text-base ${linkClass}`}
              >
                <SvgIcon
                  svg={locationSvg}
                  className={`mt-1 h-5 w-5 ${headingClass} transition-colors duration-300 group-hover:text-current`}
                />
                <span>{footerContent.address}</span>
              </a>
              <a
                href="tel:+551140028922"
                className={`group flex items-center gap-4 text-[12px] transition-colors duration-300 sm:text-base ${linkClass}`}
              >
                <SvgIcon
                  svg={phoneSvg}
                  className={`h-5 w-5 ${headingClass} transition-colors duration-300 group-hover:text-current`}
                />
                <span>{footerContent.phone}</span>
              </a>
              <a
                href={`mailto:${footerContent.email}`}
                className={`group flex items-center gap-4 text-[12px] transition-colors duration-300 sm:text-base ${linkClass}`}
              >
                <SvgIcon
                  svg={emailSvg}
                  className={`h-5 w-5 ${headingClass} transition-colors duration-300 group-hover:text-current`}
                />
                <span>{footerContent.email}</span>
              </a>
            </address>
          </div>
        </div>

        <div className={`flex flex-col gap-4 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between ${
          isDark ? 'border-white/10 text-white/68' : 'border-neutral-300 text-neutral-600'
        }`}>
          <p>{footerContent.rights}</p>
          <p>{footerContent.made}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
