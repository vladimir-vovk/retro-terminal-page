import { Code as CodeBright } from 'bright'
import { CodeWrapper } from './CodeWrapper'

export const Code = (props: any) => {
  const lang = props?.children?.props?.className?.replace('language-', '')

  CodeBright.theme = {
    dark: 'github-dark',
    light: 'one-dark-pro' // 'github-light'
  }

  return (
    <CodeWrapper>
      <CodeBright {...props} lang={lang} />
    </CodeWrapper>
  )
}
