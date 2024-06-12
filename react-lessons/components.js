function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  

{
    /* 
    1.Components are the building blocks of our React app
    2.React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
    3.We can reuse our component anywhere in your React app
    <section> is lowercase, so React knows we refer to an HTML tag.
    <Profile /> starts with a capital P, so React knows that we want to use our component called Profile
    */
}