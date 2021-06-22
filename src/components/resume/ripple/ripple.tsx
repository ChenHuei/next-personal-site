import { RippleWrapper, RippleCircle } from './ripple.style'

export interface RippleProps {
  isFirst: boolean
}

const Ripple: React.FC<RippleProps> = (props: RippleProps) => {
  const { isFirst } = props

  return (
    <RippleWrapper isFirst={isFirst}>
      {[...Array(4).keys()].map((_, index) => (
        <RippleCircle key={index} />
      ))}
    </RippleWrapper>
  )
}

export default Ripple
