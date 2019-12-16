/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import '../../src/assets/styles.css'

const req = require.context('../../src', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
