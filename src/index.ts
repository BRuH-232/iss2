import UiButton from './components/UiButton.vue'
import UiSelect from './components/UiSelect.vue'
import UiInput from './components/UiInput.vue'
import UiField from './components/UiField.vue'

// Экспорт по отдельности
export { UiButton, UiSelect, UiInput, UiField }

// Экспорт по умолчанию (опционально)
export default {
  install(app : any) {
    app.component('UiButton', UiButton)
    app.component('UiSelect', UiSelect)
    app.component('UiInput', UiInput)
    app.component('UiField', UiField)
  }
}