<template>
  <button
    class="ui-button"
    :type="props.type"
    :disabled="props.disabled"
    :class="{
      'ui-button--disabled': props.disabled,
      'ui-button--primary': props.layout === 'primary',
      'ui-button--secondary': props.layout === 'secondary'
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps{
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  layout: 'primary' | 'secondary'
};

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style scooped>
.ui-button {
  padding: 6px 12px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 14px;
}

.ui-button--primary {
  border: 3px solid var(--color-primary-light);
  color: var(--color-white);
  background-color: var(--color-primary);
}

.ui-button--secondary {
  background-color: transparent;
  border: 3px solid var(--color-gray-dark);
  color: var(--color-white);
}

.ui-button--primary:hover:not(:disabled),
.ui-button--secondary:hover:not(:disabled) {
  filter: brightness(0.7);
}

.ui-button:disabled,
.ui-button--disabled {
  background-color: var(--color-gray-light);
  border-color: var(--color-primary-dark);
  color: var(--color-primary-dark);
  cursor: not-allowed;
}
</style>