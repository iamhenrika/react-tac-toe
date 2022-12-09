// All your imports should be at the top
// Components
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import "./App.css";

export default function App() {
  // What is JSX? JSX is a hybrid of JavaScript and HTML
  // In JSX we can only return one parent element. If we want to return more than one element, we ehave wrap it in a parent element. Typically, a div or you can use a React.Fragment

  // PROPS: we add props by adding key value pairs inside our rendered components. They look like attributes.
  // All components can render all other components
  return (
    <div>
      <Header />
      <div className="container">
      <Player whichPlayer="X" />
      <Player whichPlayer="O" />
      </div>
      <Board />
    </div>
  );
}

// const App = () => {
//   return (
//     <h1>
//       React Tac Toe
//     </h1>
//   )
// }

// export default App

// Vanilla JS
// function declarations using the function
// function expressions
// arrow functions
