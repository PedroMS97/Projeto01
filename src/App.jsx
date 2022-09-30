// JSX = JavaScript + XML 
import {Header} from './components/Header'
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import {Siderbar} from './components/Siderbar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post 
          author="Pedro Mendonça"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iusto est sed at distinctio officiis, dolores corporis deserunt incidunt, a assumenda facilis provident consectetur impedit sint eos non libero exercitationem"
          />
          <Post 
          author="Pedro Mendonça"
          content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}


