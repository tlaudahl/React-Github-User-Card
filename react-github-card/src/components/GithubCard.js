import React from 'react'

export default function GithubCard(props) {
    return (
        <div>
            <h1>{props.user.login}</h1>
            <img id='userPicture' alt={`${props.user.login}`} src={props.user.avatar_url} />
            <p>Name: {props.user.name}</p>
            <p>Location: {props.user.location}</p>
            <p>Bio: {props.user.bio}</p>
            <hr />
            <div className='numFollowers'>
                <h2>Followers: {props.user.followers} (showing 30)</h2>
                <input id='filterSearch' type='search' placeholder='Filter users' onChange={props.handleFilterChange} />
            </div>
            <div className='followerList'>
                {props.followers.map(follower => {
                    return (
                        <div className='followerCard' key={follower.login}>
                            <p>{follower.login}</p>
                            <a href={follower.html_url} target='_blank' rel="noopener noreferrer">
                                <img alt={`${follower.login}`} src={follower.avatar_url} />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
