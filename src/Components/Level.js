import React, { Component } from 'react'
import './../styles/Level-main.css'

class Level extends Component {
    render (){
        return(
            <div className='Level-main'>
                    <form>
                        <div>
                            <span>Level: </span>
                            <input type='number' name='level' placeholder='choose level' />
                        </div>
                        <input type='submit' />
                    </form>
                </div>
        )
    }
}

export default Level