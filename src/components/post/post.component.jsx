import React from 'react';
import './post.styles.scss';

const Post = ({post}) => {

    const { content, user } = post;

    return(
        <div className='post'>
            <div className='flex-item'>
                <img className='avatar' src={user.avatar_url} alt='avatar' />
                <span className='username'>{user.username}</span>
            </div>

            <li className='content'>{content}</li>
        </div>
    )
}

export default Post;