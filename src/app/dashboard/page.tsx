import React from 'react'
import PostList from '../blog/PostList'
import { generateStaticParams } from '../blog/[slug]/page';


const DashboardHome = () => {
    const slug=generateStaticParams();
  return (
    <div>
        <h1>Dashboard Page</h1>
        <PostList posts={slug}/>
    </div>
  )
}

export default DashboardHome