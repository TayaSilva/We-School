import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <div>{children}</div>
}

export default Container
