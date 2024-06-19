import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LangSwitcher from '../components/navbar/langSwitcher.vue'

const mockI18n = {
    locale: 'en',
    locales: [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' }
    ],
    setLocale: vi.fn()
}
describe('LangSwitcher.vue', () => {
    it('muestra el idioma actual y activa el menú desplegable', async () => {
        const wrapper = mount(LangSwitcher, {
            global: {
                mocks: {
                    $i18n: mockI18n
                }
            }
        })
        expect(wrapper.text()).toContain('English')
        expect(wrapper.find('.z-20').exists()).toBe(false)
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('.z-20').exists()).toBe(true)
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('.z-20').exists()).toBe(false)
    })
    it('cambia de idioma cuando se pulsa una opción diferente', async () => {
        const wrapper = mount(LangSwitcher, {
            global: {
                mocks: {
                    $i18n: mockI18n
                }
            }
        })
        await wrapper.find('button').trigger('click')
        await wrapper.findAll('button')[1].trigger('click')
        expect(mockI18n.setLocale).toHaveBeenCalledWith('es')
        expect(wrapper.find('.z-20').exists()).toBe(false)
    })
})
