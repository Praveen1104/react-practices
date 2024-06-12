<div>
    <p> Html code</p>
    <form></form>
</div>




function Sidebar(){
     return (
        <>
            <p>JSX code</p>
            <form></form>
        </>
     )
}

{
    /* 
     1.JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
     2.JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.
     The Rules of JSX 
      1. Return a single root element 
      To return multiple elements from a component, wrap them with a single parent tag.
      For example, you can use a <div> or <>
      2. Close all the tags 
      JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.
      3. camelCase all most of the things! 
      For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead.     
      */
}