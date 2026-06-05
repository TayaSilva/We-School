import emailIcon from '../../assets/icons/email.svg'
import instagramSvg from '../../assets/icons/instagram.svg?raw'
import linkSvg from '../../assets/icons/link.svg?raw'
import locationIcon from '../../assets/icons/local.svg'
import phoneIcon from '../../assets/icons/telefone.svg'
import whatsappSvg from '../../assets/icons/whatsapp.svg?raw'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

type SvgIconProps = {
  svg: string
  className?: string
}

function SvgIcon({ svg, className = 'h-5 w-5' }: SvgIconProps) {
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
    title: 'Entre em Contato',
    description:
      'Estamos aqui para ouvir voc\u00ea. Se voc\u00ea tem d\u00favidas sobre nosso curr\u00edculo bil\u00edngue, quer agendar uma visita ou precisa de suporte, sinta-se \u00e0 vontade para nos escrever.',
    infoCards: [
      {
        title: 'Endere\u00e7o',
        icon: locationIcon,
        lines: ['Av. Tucuruvi, 2971', 'Tucuruvi, S\u00e3o Paulo - SP'],
        accent: 'bg-primary-600',
        href: 'https://maps.google.com/?q=Av+Tucuruvi,+2971,+Sao+Paulo,+SP',
      },
      {
        title: 'Telefone',
        icon: phoneIcon,
        lines: ['(11) 4002-8922', 'Segunda a Sexta, 08:00 - 18:00'],
        accent: 'bg-secondary-500',
        href: 'tel:+551140028922',
      },
      {
        title: 'E-mail',
        icon: emailIcon,
        lines: ['contato@weschool.com.br', 'Respondemos em at\u00e9 24h \u00fateis'],
        accent: 'bg-tertiary-600',
        href: 'mailto:contato@weschool.com.br',
      },
    ],
    mapTitle: 'Localiza\u00e7\u00e3o da We School',
    socialTitle: 'Redes sociais',
  },
  en: {
    title: 'Get in Touch',
    description:
      'We are here to listen. If you have questions about our bilingual curriculum, want to schedule a visit, or need support, feel free to contact us.',
    infoCards: [
      {
        title: 'Address',
        icon: locationIcon,
        lines: ['Av. Tucuruvi, 2971', 'Tucuruvi, S\u00e3o Paulo - SP'],
        accent: 'bg-primary-600',
        href: 'https://maps.google.com/?q=Av+Tucuruvi,+2971,+Sao+Paulo,+SP',
      },
      {
        title: 'Phone',
        icon: phoneIcon,
        lines: ['(11) 4002-8922', 'Monday to Friday, 08:00 - 18:00'],
        accent: 'bg-secondary-500',
        href: 'tel:+551140028922',
      },
      {
        title: 'E-mail',
        icon: emailIcon,
        lines: ['contact@weschool.com.br', 'We reply within 24 business hours'],
        accent: 'bg-tertiary-600',
        href: 'mailto:contact@weschool.com.br',
      },
    ],
    mapTitle: 'We School location',
    socialTitle: 'Social media',
  },
} as const

const socialLinks = [
  { label: 'LinkedIn', icon: linkSvg, href: '#' },
  { label: 'WhatsApp', icon: whatsappSvg, href: '#' },
  { label: 'Instagram', icon: instagramSvg, href: '#' },
] as const

function ContactPage() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const pageContent = content[language]

  return (
    <section className={`transition-colors duration-300 ${isDark ? 'bg-[#171717]' : 'bg-[#FFECEE]'}`}>
      <div className="mx-auto max-w-[1760px] px-4 pb-16 pt-[132px] sm:px-6 sm:pb-20 sm:pt-[188px] lg:px-[48px] lg:pb-24 lg:pt-[196px]">
        <div className="w-full">
          <div className="mx-auto max-w-[760px] text-center">
            <h1
              className={`font-heading text-[16px] font-semibold sm:text-[2.5rem] ${
                isDark ? 'text-[#ffb7cf]' : 'text-primary-600'
              }`}
            >
              {pageContent.title}
            </h1>
            <p
              className={`mx-auto mt-4 max-w-[640px] text-[12px] leading-[1.7] sm:text-[1rem] ${
                isDark ? 'text-white/72' : 'text-neutral-600'
              }`}
            >
              {pageContent.description}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid gap-4 lg:grid-cols-3">
              {pageContent.infoCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`rounded-[20px] border p-4 shadow-[0_16px_34px_rgba(28,22,21,0.12)] backdrop-blur-md sm:p-5 ${
                    isDark
                      ? 'border-white/10 bg-white/[0.06]'
                      : 'border-white/55 bg-white/45'
                  } block transition-all duration-300 hover:-translate-y-0.5 ${
                    isDark ? 'hover:bg-white/[0.09]' : 'hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${item.accent}`}>
                      <img src={item.icon} alt="" className="h-4 w-4 [filter:brightness(0)_invert(1)]" />
                    </span>

                    <div>
                      <h2 className={`font-heading text-[16px] font-semibold ${isDark ? 'text-white' : 'text-primary-600'}`}>
                        {item.title}
                      </h2>
                      <div
                        className={`mt-2 space-y-1 text-[12px] leading-[1.6] sm:text-[0.95rem] ${
                          isDark ? 'text-white/72' : 'text-neutral-600'
                        }`}
                      >
                        {item.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border shadow-[0_18px_44px_rgba(28,22,21,0.08)]">
              <iframe
                title={pageContent.mapTitle}
                src="https://www.google.com/maps?q=Av+Tucuruvi,+2971,+Sao+Paulo,+SP&z=16&output=embed"
                className={`h-[300px] w-full sm:h-[360px] lg:h-[420px] ${
                  isDark ? 'bg-[#202020]' : 'bg-[#eae4e2]'
                }`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col items-center justify-center pt-6 text-center">
              <h2 className={`font-heading text-[16px] font-semibold ${isDark ? 'text-white' : 'text-primary-600'}`}>
                {pageContent.socialTitle}
              </h2>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-[16px] border transition-all duration-300 ${
                      isDark
                        ? 'border-white/10 bg-white/[0.05] text-[#ffb7cf] hover:bg-white/[0.09]'
                        : 'border-neutral-200 bg-white text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    <SvgIcon svg={social.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
