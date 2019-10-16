import React from 'react'

export default function Header(props) {
    return (
        <div className='headerContainer'>
            <div className='logo'>
                <h2>Github User Search</h2>
            </div>
            <div className='inputContainers'>
                <div className='searchContainer'>
                    <input id='userSearch' type='search' placeholder='Search' onChange={props.handleUserChange} />
                    <button type='submit' onClick={props.fetchNewUser}>Search!</button>
                </div>
            </div>
        </div>
    )
}
