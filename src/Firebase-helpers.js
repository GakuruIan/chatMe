import { Auth,Firebase } from "./Firebase";
import { getDatabase,ref,onValue,query,orderByChild,equalTo,orderByKey, limitToFirst, set} from "firebase/database";
import { createUserWithEmailAndPassword, updateProfile ,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword,getAuth} from "firebase/auth";

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