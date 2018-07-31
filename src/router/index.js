import Vue from 'vue'
import Router from 'vue-router'
const Domes = () => import('@/domes/index')
const Guide = () => import('@/components/guide')
const Layout = () => import('@/domes/layout')
const Container = () => import('@/domes/contaniner')
const Input = () => import('@/domes/input')
const Switch = () => import('@/domes/switch')
const Loading = () => import('@/domes/loading')
const Message = () => import('@/domes/message')
const Button = () => import('@/domes/button')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Domes',
      component: Domes,
      redirect:'/layout',
      children:[{
      	path: 'layout',
      	name: 'Layout',
      	component: Layout
      },{
      	path: 'container',
      	name: 'Container',
      	component: Container
      },{
      	path: 'input',
      	name: 'Input',
      	component: Input
      },{
      	path: 'switch',
      	name: 'Switch',
      	component: Switch
      },{
        path: '/loading',
        name: 'Loading',
        component: Loading
      },{
        path: '/message',
        name: 'Message',
        component: Message
      },{
        path: '/button',
        name: 'Button',
        component: Button
      }]
    },{
    	path: '/guide',
    	name: 'Guide',
    	component: Guide
    }
  ]
})
