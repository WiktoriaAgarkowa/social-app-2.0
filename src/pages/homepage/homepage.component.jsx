import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../redux/post/post.action';

import Feeds from '../../components/feeds/feeds.component';

const Homepage = ({ getAllPosts }) => {

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts])

    return (
    <div>
        <Feeds />
    </div>
)}


const mapDispatchToProps = dispatch => ({
    getAllPosts: () => dispatch(getAllPosts())
})

export default connect(null, mapDispatchToProps)(Homepage);