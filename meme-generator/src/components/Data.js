
fetch('https://api.imgflip.com/get_memes')
  .then(res => res.json())
  .then(data => {
    const meme = data;
    return meme;
   })
  .then(() => {
   });
const memeData = meme
  export default memeData