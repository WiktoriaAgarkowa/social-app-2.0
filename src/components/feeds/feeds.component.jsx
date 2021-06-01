import React from 'react';
import { connect } from 'react-redux';

import Post from '../post/post.component';
import './feeds.styles.scss';

const Feeds = ({posts}) =>  {

    return (
    <div className='container'>
        {posts.map(
            post => (
                <Post key={post.id} post={post}/>
            )
        )}
    </div>
)}

const mapStateToProps = state => {
    return {
        posts: state.post.posts
    }
}


export default connect(mapStateToProps)(Feeds);