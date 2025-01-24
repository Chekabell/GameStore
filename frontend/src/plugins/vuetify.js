/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const DarkTheme = {
  dark: true,
  colors: {
    background: '#141414',
    surface: '#0F0F0F',
    accent: '#262626',
    'surface-bright': '#FFFFFF',
    'surface-light': '#141414',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE', //Это текст
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#009AB6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#999999',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 1,
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
    'font-family': '',
  },
}


export default createVuetify({
  theme: {
    defaultTheme: 'DarkTheme',
    themes: {
      DarkTheme,
    }
  },
})
