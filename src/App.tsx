import BookShelf from './components/BookShelf';
import BookStack from './components/BookStack';
import Book from './components/Book';
import BookStackElement from './components/BookStackElement';

/*
  todo: // * ADJUSTABLE WIDTHS (based on page count)
  todo: // ! ADJUSTABLE HEIGHTS
  todo: // * NO MORE THAN 5 CHILDREN in Stack {maybe??}
  todo: // ! Make a rand title generator
  todo: // * Add Stacks into random book generations
  todo: // * Custom themes
  todo: // * Adjust onDisplay books (title spacing)
  todo: // * Need white/black text for books
  todo: // * Make necessary changes to StackElem to === book component
/* 
  ? Themes: default(none), beige, night owl, shades of purple, gruvbox, vue, {CUSTOM}
  ~ Colors: green(default), blue, umber, springer, maroon, pink, cyan, purple, #HEX
  ^ Design: no bands(default), split band, dual top bands, colored spine
  & Orientation: default, tilted, onDisplay
*/

function App() {
  return (
    <BookShelf>
      <Book title={"Hello World"} color={"purple"} design={"dual top bands"} width={1120}/>
      <Book title={"Cascading Style Sheets"} subtitle={"Guide to Design"} color={"blue"} design={"split bands"} width={870}/>
      <Book title={"Psychology of Colors"} color={"pink"} design={"dual top bands"} width={540}/>
      <Book title={"TypeScript"} subtitle={"Intro JS to type checking"} color={"cyan"} design={"colored spine"} width={1130}/>
      <Book title={"Testing"} width={10}/>
      <Book title={"CoffeeScript"} subtitle={"The JS Alternative"} author={"The Dev Guy"} design={"split bands"} color={"#bbff33"} orientation={"onDisplay"}/>
      <Book title={"Clean Code"} color={"maroon"}/>
      <Book title={"White Space"} color={"#FFF"} design={"split bands"}/>
      <Book title={"Cascading Style Sheets"} subtitle={"Guide to Design"} color={"blue"} design={"split bands"} orientation={"tilted"}/>
      <Book title={"UI/UX"} subtitle={"Guide to Mobile Development"} author={"John Doe"} color={"springer"} orientation={"onDisplay"} design={"dual top bands"}/>
      <Book title={"Clean Code"} color={"maroon"} orientation={"tilted"} design={"split bands"}/>
      <Book title={"Docs for Devs"}/>
      <BookStack stackDesign={"split bands"}>
        <BookStackElement title={"Flowers in the Attic"} color={"green"} design={"no bands"}/>
        <BookStackElement title={"Petal on the Wind"} color={"maroon"} design={"colored spine"}/>
        <BookStackElement title={"If Their be Thorns"} color={"blue"} design={"split bands"}/>
        <BookStackElement title={"Seeds of Yesterday"} color={"umber"} design={"dual top bands"}/>
        <BookStackElement title={"Garden of Shadows"} color={"pink"}/>
      </BookStack>
    </BookShelf>
  );
}

export default App;
