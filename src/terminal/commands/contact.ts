import { createContentBlock } from '../utils'
import { CommandArgs } from '../types'

export const contact = ({ setContent }: CommandArgs): void => {
  setContent((oldContent: any) => {
    return [
      ...oldContent,
      createContentBlock({
        elements: [
          {
            type: 'text',
            text: '\nSocial links\n'
          },
          {
            type: 'text',
            text: '------------\n\n'
          },
          {
            type: 'text',
            text: 'Github    '
          },
          {
            type: 'link',
            href: 'https://github.com/vladimir-vovk',
            text: '[https://github.com/vladimir-vovk]'
          },
          {
            type: 'text',
            text: '\nLinkedIn  '
          },
          {
            type: 'link',
            href: 'https://linkedin.com/in/vvovk',
            text: '[https://linkedin.com/in/vvovk]'
          },
          {
            type: 'text',
            text: '\nTelegram  '
          },
          {
            type: 'link',
            href: 'https://t.me/vovk_vladimir',
            text: '[https://t.me/vovk_vladimir]'
          },
          {
            type: 'text',
            text: '\n\n'
          },
          {
            type: 'text',
            text: 'Blog      '
          },
          {
            type: 'link',
            href: '/blog',
            text: '[https://vladimir.vovk.in/blog]'
          },
          {
            type: 'text',
            text: '\n\nExperiments\n'
          },
          {
            type: 'text',
            text: '-----------\n\n'
          },
          {
            type: 'text',
            text: 'Expo Template   '
          },
          {
            type: 'link',
            href: 'https://github.com/vladimir-vovk/expo-ts',
            text: '[https://github.com/vladimir-vovk/expo-ts]'
          },
          {
            type: 'text',
            text: '\nCats Word Game  '
          },
          {
            type: 'link',
            href: 'https://cats-word-game.vovk.in/',
            text: '[https://cats-word-game.vovk.in/]'
          },
          {
            type: 'text',
            text: '\nFox-pet Game    '
          },
          {
            type: 'link',
            href: 'https://vpet.vovk.in/',
            text: '[https://vpet.vovk.in/]'
          },
          {
            type: 'text',
            text: '\n\nFind more on the GitHub... ~(=^‥^)\n\n'
          }
        ]
      })
    ]
  })
}
