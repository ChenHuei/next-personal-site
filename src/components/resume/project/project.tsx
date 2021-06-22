import {
  ProjectList,
  ProjectItem,
  ProjectItemTitle,
  ProjectItemLink,
  ProjectItemDescription
} from './project.style'
import { ResumeProject } from '@/types/resume'

export interface ProjectProps {
  isOdd: boolean
  list: ResumeProject[]
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { list, isOdd } = props

  return (
    <ProjectList isOdd={isOdd}>
      {list.map(item => (
        <ProjectItem key={item.title}>
          <ProjectItemTitle>
            {item.link ? (
              <ProjectItemLink href={item.link} isOdd={isOdd} target="_blank">
                {item.title}
              </ProjectItemLink>
            ) : (
              item.title
            )}
          </ProjectItemTitle>
          <ProjectItemDescription>{item.description}</ProjectItemDescription>
        </ProjectItem>
      ))}
    </ProjectList>
  )
}

export default Project
