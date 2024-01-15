import {createRouter,createWebHashHistory} from 'vue-router'

// Pages
import Login from './Pages/Login/Login.vue'
import Register from './Pages/Register/Register.vue'
import Chat from './Pages/Chats/Chat.vue'

import Messages from './components/Messages/Messages.vue'
import Groups from './components/Groups/Groups.vue'
import People from './components/People/People.vue'
import CreateGroup from './components/Forms/CreateGroup.vue'
import EditProfile from './components/Forms/EditProfile.vue'



const routes = [
    {path:'/',component:Login},
    {path:'/register',component:Register},
    {
        path:'/chats',
        component:Chat,
        children: [
          {
            path: '',
            components: {
                content:Messages
            }
          }, 
          {
            path: 'groups',
            components: {
                content:Groups
            }
          },
          {
            path: 'people',
            components: {
                content:People
            }
          },
          {
            path: 'create-group',
            components: {
                content:CreateGroup
            }
          },
          {
            path: 'edit-profile',
            components: {
                content:EditProfile
            }
          }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory('http://localhost:5173/'),
    routes,
})

export default router