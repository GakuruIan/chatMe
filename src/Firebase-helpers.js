import { Auth } from "./Firebase";
import { getDatabase,ref,onValue,query,orderByChild,equalTo,orderByKey, limitToFirst, set, push, serverTimestamp, get, update} from "firebase/database";
import { createUserWithEmailAndPassword, updateProfile ,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword,getAuth} from "firebase/auth";
import { async } from "@firebase/util";

const database = getDatabase()

// check if username exists
export const CheckUsernameExists=(username)=>{

    return new Promise((resolve,reject)=>{
    
    
      const usersRef = ref(database,'users/')
    
      const queryData = query(usersRef,orderByChild('username'),equalTo(username))
      
      onValue(queryData,(snapshot)=>{
         if(snapshot.exists()){
            resolve(true)
         }
         else{
           resolve(false)
         }
      },(error)=>{
        reject(error)
      })
    })
    
  }

export const  RegisterWithEmailAndPassword = (username,email,password)=>{
    return new Promise(async(resolve,reject)=>{
       try {
        const userCredentials = await createUserWithEmailAndPassword(Auth,email,password)
      
        const user = userCredentials.user

       await updateProfile(user,{
            displayName:username
        }).then(()=>{
          const {email,displayName} = user

           set(ref(database,'users/'+Auth.currentUser.uid),{
              email,
              displayName,
              photo:"",
              last_seen:"",
              activity:'online'
            })

            resolve(user)
        })
        .catch(err=>{
            reject(err)
        })

       } catch (error) {
        reject(error)
       }
    })
}

export const RegisterWithGooglePopup =()=>{
    return new Promise((resolve,reject)=>{
        const provider = new GoogleAuthProvider()

        signInWithPopup(Auth,provider)
        .then((userCredentials)=>{
            if(userCredentials){
                const credential = GoogleAuthProvider.credentialFromResult(userCredentials);

                const {email,displayName} = userCredentials.user

                set(ref(database,'users/'+Auth.currentUser.uid),{
                    email,
                    displayName,
                    photo:"",
                    last_seen:"",
                    activity:'online'
                  })

                resolve(userCredentials.user)
            }
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export const LoginWithEmailAndPassword =(email,password)=>{
     return new Promise((resolve,reject)=>{
        signInWithEmailAndPassword(Auth,email,password)
        .then((userCredentials)=>{
            const userRef = ref(database,`users/${userCredentials.user.uid}/`)

            onValue(userRef,(snapshot)=>{
               resolve(snapshot.val())
            })
        })
        .catch((error)=>{
            reject(error)
        })
     })
}

export const SignInWithGooglePopup = ()=>{
    return new Promise((resolve,reject)=>{
    const provider = new GoogleAuthProvider()
      signInWithPopup(Auth,provider)
      .then((userCredentials)=>{
        if(userCredentials){
            resolve(userCredentials.user)
        }
      })
      .catch((err)=>{
        reject(err)
      })
    })
}

export const GetPeopleList =()=>{
    return new Promise(async(resolve,reject)=>{
      const usersRef = ref(database,'users/')
      const queryData =  query(usersRef,orderByKey(),limitToFirst(20))
      let people = []
   
      onValue(queryData,(snapshot)=>{
           let peopleObject = snapshot.val()
            for(const id in peopleObject){
              if(id !== Auth.currentUser.uid){
                people.push({
                  id,
                  ...peopleObject[id]
                })
              }
            }
          resolve(people)
      })
    })
}

export const SendMessage=(message,photo,recieverID,chatID)=>{
   return new Promise(async(resolve,reject)=>{
    try {
      const ChatsRef = ref(database,'chats/')
      
      const ChatRef = ref(database,`chats/${chatID}`)
      const ChatSnapshot = await get(ChatRef)

      if(ChatSnapshot.exists()){

          //if the chat already exists
          await push(ref(database,`chats/${chatID}/messages`),{
            text:message,
            senderID:Auth.currentUser.uid,
            timestamp:serverTimestamp()
          })

          await update(ref(database,`chats/${chatID}/last_message/`),{
              text:message,
              senderID:Auth.currentUser.uid,
              timestamp:serverTimestamp()
          })

          resolve(true)
      }
      else{
        // if chat doesnt exist
        const newChatRef = push(ChatsRef)
        const ChatID = newChatRef.key

        // updating  the chat object
        await update(newChatRef,{
          members:{
            [Auth.currentUser.uid]:true,
            [recieverID]:true
          },
          last_message:{
            text:message,
            senderID:Auth.currentUser.uid,
            timestamp:serverTimestamp()
          },
          messages:{}
        })

        // adding the message to the chat object  
        await push(ref(database,`chats/${ChatID}/messages/`),{
           text:message,
           senderID:Auth.currentUser.uid,
           photos:"",
           timestamp:serverTimestamp(),
           status:0,  // 0 -> show the message hasn't being read 1 -> the message has been read
        })
           
        resolve(true)
      }
    } 
    catch (error) {
       reject(error)
    }
      

   })
}

export const CreateGroup=(groupname,description,type)=>{
    return new Promise(async(resolve,reject)=>{
      try {
  
        const groupRef = ref(database,'groups/')

        const queryData = query(groupRef,orderByChild('name'),equalTo(groupname))

        let exists =false

        const snapshot =  await get(queryData);

        if(snapshot.exists()){
           exists = Object.keys(snapshot.val()).length > 0;
        }

      
        if(!exists){
          await push(ref(database,'groups/'),{
            name:groupname,
            description,
            created_by:{
              username:Auth.currentUser.displayName,
              id:Auth.currentUser.uid
            },
            created_at:serverTimestamp(),
            group_icon:"",
            admins:{
              [Auth.currentUser.uid]:true
            },
            members_count:1,
            members:{
              [Auth.currentUser.uid]:true
            },
            group_type:type
          })
          
        resolve(true)
        }
        else{
            reject({error:"Group name exist"})
        }
          
      } 
      catch (error) {
        reject(error)
      }

    })
}

export const FetchGroups = ()=>{
  return new Promise((resolve,reject)=>{
       const groupref = ref(database,'groups')

       const queryGroups =   query(groupref,orderByChild('created_at'),limitToFirst(20))

       let groups = []

       onValue(queryGroups,(snapshot)=>{
          if(snapshot.exists()){
            let GroupObject = snapshot.val()

            for(const groupId in GroupObject){
                 groups.push({
                       id:groupId,
                       ...GroupObject[groupId]
                 })
            }
             resolve(groups)
          }

       },(err)=>{
          reject(err)
       })
  })
}

export const GetUsersGroup =()=>{
  return new Promise((resolve,reject)=>{
    const groupsRef = ref(database,'groups/')

    const queryData = query(groupsRef,orderByChild('created_at'),limitToFirst(20))

    let MyGroups = []

    onValue(queryData,(snapshot)=>{
         if(snapshot.exists()){
             let groupsObject = snapshot.val()

             for(const groupId in groupsObject){
                const {created_by} = groupsObject[groupId]

                if(created_by.id === Auth.currentUser.uid){
                  MyGroups.push({
                    id:groupId,
                    ...groupsObject[groupId]
                  })
                }
             }

             resolve(MyGroups)
         }
    },(err)=>{
      reject(err)
    })
  })
}


// Discover groups for user
export const DiscoverGroups =()=>{
   return new Promise((resolve,reject)=>{
    const groupsref = ref(database,'groups')
    let Groups = []

        const queryData = query(groupsref,orderByChild('created_at'),limitToFirst(20))

        onValue(queryData,(snapshot)=>{
             if(snapshot.exists()){
                let groupsObject = snapshot.val()

                for(const groupId in groupsObject){
                    const {created_by} = groupsObject[groupId]

                    if(created_by.id !== Auth.currentUser.uid){
                      Groups.push({
                        id:groupId,
                        ...groupsObject[groupId]
                      })
                    }
                }

                resolve(Groups)
              }
        },(err)=>{
          reject(err)
        })
   })
}


export const SearchGroup = (search)=>{
    return new Promise((resolve,reject)=>{
      const groupsref = ref(database,'groups')
      let Groups = []
      if(search){
        const queryData = query(groupsref,orderByChild('name'),equalTo(search),limitToFirst(20))
        
        onValue(queryData,(snapshot)=>{
            if(snapshot.exists()){
              let groupsObject = snapshot.val()

              for(const groupId in groupsObject){
                  Groups.push({
                      id:groupId,
                      ...groupsObject[groupId]
                    })
              }

              resolve(Groups)
            }
            else{
              resolve([])
            }
        },(err)=>{
           reject(err)
           console.log(err)
        })
      }
    })
}

export const SearchPeople=(search)=>{
  return new Promise((resolve,reject)=>{
     const usersRef = ref(database,'users')
     let people = []

     const queryData = query(usersRef,orderByChild('displayName'),equalTo(search),limitToFirst(20))

     onValue(queryData,(snapshot)=>{
           if(snapshot.exists()){
             let PeopleObject = snapshot.val()

             for (const userId in PeopleObject){
                if(userId !== Auth.currentUser.uid){
                  people.push({
                     id:userId,
                     ...PeopleObject[userId]
                  })
                }
             }

             resolve(people)
           }
           else{
            resolve([])
           }
     },(err)=>{
        reject(err)
     })
  })
}

export const Logout=()=>{
   return new Promise((resolve,reject)=>{
      const userRef = ref(database,`users/${Auth.currentUser.uid}`)

      let updateLastSeen = {
        last_seen : serverTimestamp() 
      } 

      update(userRef,updateLastSeen)
      .then(()=>{
        resolve(true)
      })
      .catch((err)=>{
        reject(err)
      })

   })
}