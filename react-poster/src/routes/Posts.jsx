import PostLists from "../components/PostsLists";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import {Outlet} from 'react-router-dom'


function Posts() {
  return<> 
  <Outlet></Outlet>
  <main>
    <PostLists>
    </PostLists>
  </main>
  </>
}

export default Posts;

export async  function loader(){
  const response = await fetch('http://localhost:8000/posts')
  const resData = await response.json();
  return resData.posts;
}