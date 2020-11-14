import React, { useState } from 'react'
import { Form, Input } from 'reactstrap';

let test_;
const Login =(props) => {
    const [test, setTest] = useState('')
    const handleCondition = (e) => {
        test_ = e.target.value
        setTest(test_)
    }
    return(
        <div>
            <h1>Login</h1>
            <Input onChange={handleCondition} style={{width: '95%'}} className='m-3' type="select" name='categories' bsSize="lg">
                <option value='default' >Condition</option>
                <option value='new' >New</option>
                <option value='old' >Old</option>
            </Input>

            {test === "new" ? <h1>old</h1> : test === "old" ? <h1>new</h1> : <h1>default</h1>}
        </div>
    )
}

export default Login