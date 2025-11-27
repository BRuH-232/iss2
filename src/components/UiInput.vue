<template>
  <input
    class="ui-input"
    :value="props.modelValue"
    @input="onInput"
    :placeholder="props.placeholder"
    :type="props.type"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
  disabled?: boolean
  type?: 'text' | 'email' | 'number' | 'password'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.ui-input {
  width: 150px;
  padding: 6px 8px;
  border: 3px solid var(--color-gray);
  border-radius: 4px;
}
</style>