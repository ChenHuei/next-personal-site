import Image from 'next/image'

// components
import {
  WorksList,
  WorksItem,
  WorksItemLink,
  WorksItemInformation,
  WorksItemInformationTitle,
  WorksItemInformationDescription
} from './works.style'
import Feature from './feature'
import Section from '@/components/section'

// types
import { WorkItem } from '@/types/works'

export interface WorksProps {
  title: string
  list: WorkItem[]
}

const Works: React.FC<WorksProps> = (props: WorksProps) => {
  const { title, list } = props

  return (
    <Section title={title}>
      <WorksList>
        {list.map(item => (
          <WorksItem key={item.link}>
            <WorksItemLink href={item.link} target="_blank">
              <Image
                src={item.logo}
                alt={item.name}
                width="fill"
                height={240}
                objectFit="contain"
              />
            </WorksItemLink>
            <WorksItemInformation>
              <WorksItemInformationTitle>{item.name}</WorksItemInformationTitle>
              <WorksItemInformationDescription>{item.description}</WorksItemInformationDescription>
              <Feature list={item.features} code={item.code} />
            </WorksItemInformation>
          </WorksItem>
        ))}
      </WorksList>
    </Section>
  )
}

export default Works
