import {React} from 'react'

const UserProfile = ()=>{
    var user = JSON.parse(localStorage.getItem("user"));
    if (user===null){
      window.location.replace('/')
    }
    return(
        
        <>
          profile of {localStorage.getItem('user')}

        </>
    )
}

export default UserProfile