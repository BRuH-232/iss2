import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiField from '../components/UiField.vue'
import UiInput from '../components/UiInput.vue'

const meta: Meta<typeof UiField> = {
  title: 'UiField',
  component: UiField,
  argTypes: {
    label: { control: 'text' }
  },
  args: {
    label: 'Username'
  }
}

export default meta

type Story = StoryObj<typeof UiField>

export const WithInput: Story = {
  render: () => ({
    components: { UiField, UiInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <UiField label="Username">
        <UiInput v-model="value" placeholder="Type..." />
      </UiField>
    `
  })
}