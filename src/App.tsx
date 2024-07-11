import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (<>
    <section>
      <div>
        <img src="/public/1.jpg" />
        <h2>#001</h2>
      </div>
    </section>
    <section>
      <div>
        <img src="/public/2.jpg" />
        <h2>#002</h2>
      </div>
    </section>
    <section>
      <div>
        <img src="/public/3.jpg" />
        <h2>#003</h2>
      </div>
    </section>
    <section>
      <div>
        <img src="/public/4.jpg" />
        <h2>#004</h2>
      </div>
    </section>
    <section>
      <div>
        <img src="/public/5.jpg" />
        <h2>#005</h2>
      </div>
    </section>
  </>);
};

export default App;
