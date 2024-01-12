import Modal from '../components/Modal';
import classes from './NewPost.module.css'
import {useNavigate} from 'react-router-dom'
import { Link, Form, redirect } from 'react-router-dom';

function NewPost(props){
   
    const navigate = useNavigate()
function closeHandler(){
  navigate('/')
}

    return(
        <Modal>
        <Form method='post' className={classes.form} >
            <p>
                <label htmlFor="body">Text</label>
                <textarea  id="body" name='body' required rows={3} ></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name='author' required />
            </p>
            <p className={classes.actions}>
                <Link to='/'><button type='button'>Cancel</button></Link>
                <button type='submit'>Submit</button>
                
            </p>
        </Form>
        </Modal>
    )
}

export default NewPost

export async function submitter({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData)
    fetch('http://localhost:8000/posts',{
            method:'POST',
            body:JSON.stringify(postData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return redirect('/')
}