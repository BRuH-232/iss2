import type { Preview } from '@storybook/vue3'

const style = document.createElement('style')
style.textContent = `
:root {
  --color-primary: #1d4ed8;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e3a8a;
  --color-gray: #9ca3af;
  --color-gray-dark: #374151;
  --color-gray-light: #f3f4f6;
  --color-black: #000000;
  --color-white: #ffffff;
}
`
document.head.appendChild(style)

const preview: Preview = {
    parameters: {
        controls: { expanded: true }
    }
}

export default preview