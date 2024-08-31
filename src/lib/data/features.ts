import type { Feature } from "$lib/utils/types";

export default [ 
  {
    name: 'Consistent',
    description:
      'SurgeOS is consistent, with a modern look utilizing both Material Design 2 and Material Design 3.',
    image: 'images/features/markdown.jpg',
    tags: [{ label: 'Powered by MDsveX' }]
  }, 
  {
    name: 'Customizable',
    description:
      'The OS can easily be themed to express your style via the Wallpaper and style app.',
    image: 'images/features/themeable.jpg',
    tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }]
  }, 
  {
    name: 'Extensible',
    description:
      "You can easily install a plethora of apps from AppGet, SurgeOS' app store (coming in a future release)",
    image: 'images/features/extensible.jpg',
  }, 
  {
    name: 'Safe and Secure',
    description:
      'SurgeOS is regularly updated with security patch updates being released at least every 3 months (optimally monthly)',
    image: 'images/features/optimized.jpg',
    tags: [{ label: 'Powered by Image Transmutation' }]
  }, 
  {
    name: 'Light and Dark Modes',
    description:
      'The OS offers both light and dark mode, to ensure an optimal experience.',
    image: 'images/features/light-dark.jpg',
  },
  {
    name: 'Open Source',
    description:
      'SurgeOS is partially open source, but aims to be fully open source in the future, to facilitate contribution to and improvement of the OS.',
    image: 'images/features/open-source.jpg'
  },
] as Feature[];