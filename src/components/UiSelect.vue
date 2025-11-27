<template>
  <select
    class="ui-select"
    :value="props.modelValue"
    @change="onChange"
  >
    <option value="" disabled>{{ props.placeholder }}</option>
    <option
      v-for="option in props.options"
      :key="getOptionKey(option)"
      :value="typeof option === 'object' ? option.value : option"
    >
      {{ typeof option === 'object' ? option.label : option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type Option = string | { value: string | number; label: string }

const props = defineProps<{
  modelValue: string | number
  options: Option[]
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}

const getOptionKey = (option: Option): string => {
  return typeof option === 'object' ? String(option.value) : option
}
</script>

<style scoped>
.ui-select {
  width: 170px;
  padding: 6px 8px;
  border: 3px solid var(--color-gray-dark);
  border-radius: 4px;
  color:var(--color-black);
  background-color: var(--color-gray-light);
}
</style>