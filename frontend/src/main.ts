import './style.css';
import {setupGet} from './get';
import {setupPost} from './post';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>Simple CRUD</h1>
    <div class="card">
      <button id="get" type="button">GET</button>
      <div>
        <input type="text" placeholder="Description" id="todoDescription"/>
        <button id="post" type="button">POST</button>
      </div>
    </div>

  </div>
  <pre id="output"></pre>
`;

setupGet(document.querySelector<HTMLButtonElement>('#get')!);
setupPost(document.querySelector<HTMLButtonElement>('#post')!);
