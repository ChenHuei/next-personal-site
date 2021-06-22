import { FeatureTitle, FeatureDescription, FeatureCode } from './feature.style'

export interface FeatureProps {
  list: string[]
  code?: string
}

const Feature: React.FC<FeatureProps> = (props: FeatureProps) => {
  const { list, code } = props

  return (
    <>
      <FeatureTitle>專案內容：</FeatureTitle>
      {list.map((item, index) => (
        <FeatureDescription key={item}>{`${index + 1}. ${item}`}</FeatureDescription>
      ))}
      {code && (
        <FeatureCode href={code} target="_blank" rel="noreferrer">
          原始碼
        </FeatureCode>
      )}
    </>
  )
}

export default Feature
