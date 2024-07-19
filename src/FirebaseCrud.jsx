import React,{useEffect, useState} from 'react'
import { collection,addDoc,updateDoc,deleteDoc,doc, query, onSnapshot,getDoc } from 'firebase/firestore'
import {db} from './firebase'
const FirebaseCrud = () => {
    const [userData,setUserData] = useState({
        id:"",
        name:"",
        age:""
    })
    const [data,setData] = useState([])
    useEffect(()=>{

        const q = query(collection(db, 'abc123'))
        const getData = onSnapshot(q,(Qsnapshot)=>{
            let myData = []
            Qsnapshot.forEach((i)=>{
              myData.push({ ...i.data(), id: i.id });
            })
            setData(myData)
        })
        return ()=> getData()
        
    },[])
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }
    const saveData = async(e)=>{
        e.preventDefault();
        let ans = await addDoc(collection(db,"abc123"),userData)
        setUserData({
          id:'',
          name:'',
          age:''
        })
        console.log("inserted sucessfully.");
    }
    const editData = async(id)=>{
        const userInfo = doc(db, "abc123", id) // db = getFirestore()
       
        // Fetch document
        const docSnap = await getDoc(userInfo)
        if(docSnap.exists()){
          let data1 = docSnap.data();
          setUserData({
            name:data1.name,
            age:data1.age,
            id:id
           
          })
        }
        
      }
    const updateData = async(e)=>{
      e.preventDefault();
      const res = await updateDoc(doc(db,"abc123",userData.id),userData)
      
      setUserData({
          id:'',
          name:'',
          age:''
      })
    }
    const delData = async(id)=>{
        const res = await deleteDoc(doc(db,"abc123",id))
        console.log('deleted successfully');

    }
  return (
    <div>
      <form action='#' method='post' onSubmit={userData.id !='' ?updateData :saveData}>
        Name: 
        <input type="text" name="name" id="" value={userData.name} onChange={handleChange}/>
        Age: 
        <input type="number" name="age" id="" value={userData.age} onChange={handleChange}/>
        <input type="submit" value={ userData.id != ''?"Update Data":"Save Data"}/>
      </form>

        <br /><br />
        <table border={"2"}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            {
                data && data.map((i)=>{
                    return (
                        <>
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td><button onClick={()=>editData(i.id)}>Edit</button><button onClick={()=>delData(i.id)}>Delete</button></td>
                            </tr>
                        </>
                    )
                })
            }
        </table>
    </div>
  )
}

export default FirebaseCrud
