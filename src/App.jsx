import { Header } from "./components/header";
import {Post} from "./Post"
import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Guilherme Tavares"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum similique obcaecati accusamus nam, adipisci eligendi consequuntur architecto cupiditate modi enim ad iure quia pariatur sequi dolorum ullam, minima quos maiores!"
      />
      <Post
        author="Jackie Chan"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum similique obcaecati accusamus nam, adipisci eligendi consequuntur architecto cupiditate modi enim ad iure quia pariatur sequi dolorum ullam, minima quos maiores!"
      />
    </>
  )
}

