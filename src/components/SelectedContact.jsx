import { useState } from "react"
import { useEffect } from "react"


 export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null)

    useEffect(()=>{
        async function fetchSingleContact(){
            try {
               const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
               const data = await response.json();
               setContact(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchSingleContact()
    },[selectedContactId])
    console.log('Contact:', contact)
   
    return(
        <div>
            {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website: {contact.website}</p>
          <p>Username: {contact.username}</p>
        </div>
      ) : (
        <p>Loading contacts...</p>
      )}
      <button onClick={()=>setSelectedContactId(null)}>Back To Contacts</button>
        </div>
    )

}


