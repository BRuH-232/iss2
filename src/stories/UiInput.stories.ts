import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiInput from '../components/UiInput.vue'

const meta: Meta<typeof UiInput> = {
  title: 'UiInput',
  component: UiInput,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password']
    },
    placeholder: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof UiInput>

export const Default: Story = {
  render: (args) => ({
    components: { UiInput },
    setup() {
      const model = ref(args.modelValue || '')
      return { model, args }
    },
    template: `
      <UiInput
        v-model="model"
        :type="args.type"
        :placeholder="args.placeholder"
      />
    `
  }),
  args: {
    modelValue: '',
    type: 'text',
    placeholder: 'Enter text...'
  }
}