import { useTheme } from '../contexts/ThemeContext'

interface BadgeProps {
  tag: string
}

type TagCategory = 'react' | 'node' | 'design' | 'cms' | 'tools' | 'team' | 'default'

const Badge = ({ tag }: BadgeProps) => {
  const { isDarkMode } = useTheme()

  // Mapeamento de tags para categorias - todas roxas
  const getTagCategory = (): TagCategory => {
    // Todas as tags usam a categoria 'design' (roxo)
    return 'design'
  }

  const category = getTagCategory()
  const baseClass = 'project-tag-badge'
  const categoryClass = `project-tag-badge-${category}`
  const themeClass = isDarkMode ? 'project-tag-badge-dark' : 'project-tag-badge-light'

  return (
    <span 
      className={`${baseClass} ${categoryClass} ${themeClass}`}
    >
      {tag}
    </span>
  )
}

export default Badge

