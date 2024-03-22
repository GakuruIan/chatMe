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
import MyGroups from './components/Groups/Mygroups.vue'
import DiscoverGroups from './components/Groups/DiscoverGroups.vue'
import GroupSearch from './components/SearchResults/GroupSearch.vue'
import UserSearch from './components/SearchResults/UserSearch.vue'

const routes = [
    {path:'/',component:Login,name:'login'},
    {path:'/register',component:Register,name:'register'},
    {
        path:'/main',
        name:'chats',
        component:Chat,
        children: [
          {
            path: '/main',
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
            path:'mygroups',
            components: {
              content:MyGroups
            }
          },
          {
           path:'discover-groups',
           components: {
             content: DiscoverGroups
           }
          },
          {
             path:'search-group',
             components:{
              content:GroupSearch
             }
          },
          {
             path:'search-people',
             components:{
              content: UserSearch
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
            path: 'profile',
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