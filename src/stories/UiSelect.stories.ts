import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiSelect from '../components/UiSelect.vue'

const meta: Meta<typeof UiSelect> = {
  title: 'UiSelect',
  component: UiSelect
}

export default meta

type Story = StoryObj<typeof UiSelect>

export const StringOptions: Story = {
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const model = ref(args.modelValue || '')
      return { model, args }
    },
    template: `
      <UiSelect
        v-model="model"
        :options="args.options"
        :placeholder="args.placeholder"
      />
    `
  }),
  args: {
    modelValue: '',
    placeholder: 'Choose...',
    options: ['Apple', 'Banana', 'Cherry']
  }
}