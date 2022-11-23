import OriginalLink, { LinkProps } from 'next/link'

export default function Link({ ...props }: LinkProps) {
  return <OriginalLink {...props} />
}
