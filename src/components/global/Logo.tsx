type LogoProps = {
  theme?: 'light' | 'dark'
}

function Logo({ theme = 'light' }: LogoProps) {
  return (
    <div
      className={`text-[16px] font-heading font-bold tracking-normal sm:text-[1.7rem] lg:text-[2rem] ${
        theme === 'dark' ? 'text-[#f6c0cf]' : 'text-primary-600'
      }`}
    >
      We School
    </div>
  )
}

export default Logo
