// stories/UiButton.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from '../components/UiButton.vue'

const meta: Meta<typeof UiButton> = {
  title: 'UiButton',
  component: UiButton,
  argTypes: {
    layout: {
      control: 'inline-radio',
      options: ['primary', 'secondary']
    },
    type: {
      control: 'inline-radio',
      options: ['button', 'submit', 'reset']
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    layout: 'primary',
    type: 'button',
    disabled: false
  }
}

export default meta

type Story = StoryObj<typeof UiButton>

const renderButton = (args: any) => ({
  components: { UiButton },
  setup() {
    return { args }
  },
  template: '<UiButton v-bind="args">Click me</UiButton>'
})

export const Primary: Story = {
  render: renderButton,
  args: {
    layout: 'primary'
  }
}

export const Secondary: Story = {
    render: renderButton,
    args: { layout: 'secondary' }
}

export const Disabled: Story = {
    render: renderButton,
    args: {
        layout: 'primary',
        disabled: true
    }
}