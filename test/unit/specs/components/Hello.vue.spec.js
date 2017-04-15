import Vue from 'vue'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import Hello from 'components/Hello.vue'

describe('Hello.vue', () => {
  let vm, mock

  beforeEach(() => {
    vm = new Vue(Hello).$mount()
    mock = new MockAdapter(axios)
  })

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1').textContent).to.equal('I am hello!')
  })

  it('should be able to get a pickup list', () => {
    mock.onGet('/statics/api/pickups.json').reply(200, {
      entries: [{ storeName: 'a cat' }]
    })
    return vm.fetchPickups().then((res) => {
      expect(vm.pickups.length).to.equal(1)
      expect(vm.$el.textContent).to.contain('a cat')
    })
  })
})
