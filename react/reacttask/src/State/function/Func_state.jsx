import React, { useState } from 'react'
import Func_img from './Func_img';
function Func_state() {

    // var name="Raj"
    const [name, setName] = useState("Raj nagar");

    // data={id:1,number:0,}

    const [data, setData] = useState({
        number: 0,
        isImage: true
    });

    return (
        <div>
            <button onClick={() => setName("Akash Patel")}>Change</button>
            <h1>Hi my name is {name}</h1>
            <hr />

            <h1>
                <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
                {data.number}
                <button onClick={() => { if (data.number > 0) { setData({ ...data, number: data.number - 1 }) } }}>-</button>
            </h1>

            <hr />
            <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button onClick={() => setData({ ...data, isImage: true })}>Show</button>
            <button onClick={() => setData({ ...data, isImage: !data.isImage })}>Hide/Show</button>
            {data.isImage ? <Func_img /> : null}
        </div>
    )
}

export default Func_state