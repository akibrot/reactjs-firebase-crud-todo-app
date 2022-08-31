import React, { useEffect, useState } from 'react'
import './index.css'
import Todos from './Todos'
import { collection, doc,  addDoc, getDocs, updateDoc,  deleteDoc } from "firebase/firestore";
import { db } from './Firebase'


function App() {
    const [data, setdata] = useState([])
    const [ref, setref] = useState(false)
    const [title, settitle] = useState()

    useEffect(() => {
        fetechdata()
    }, [ref, setref])

    const fetechdata = async () => {
        let arr = []
        const querySnapshot = await getDocs(collection(db, "todos"));
        querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id })
        });
        setdata(arr)

    }

    const updateread = async (data) => {
        const docref = doc(db, 'todos', data.id)
        await updateDoc(docref, {
            complet: !data.complet
        })
        setref(!ref)
    }
    const deletetodo = async (data) => {
        const docref = doc(db, 'todos', data.id)
        await deleteDoc(docref)
        setref(!ref)
    }

    const savetotdo = async () => {
        const docRef = await addDoc(collection(db, "todos"), {
            "text": title,
            "complet": false
        })
        setref(!ref)

    }



    return (
        <div className='app'>
            <div className="title"><h1>Todo App</h1></div>
            <div className="create">
                <input type="text" name="" id="" placeholder='Add todos' onChange={(e) => settitle(e.target.value)} />
                <button onClick={savetotdo}>+</button>
            </div>
            <div className="lists">
                {
                    data.map((datts) => <Todos key={datts.id} data={datts} test={updateread} dele={deletetodo}></Todos>)
                }
            </div>
            <p>you have {data.length}</p>
        </div>
    )
}

export default App