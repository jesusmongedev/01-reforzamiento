import { LayoutProps } from '../../interfaces'

export const Layout = ({ children }: LayoutProps) => {
  return <div className="mt-4 container is-fluid">{children}</div>
}
