export function setupPost(element: HTMLButtonElement) {
  const executePost = () => {
    const output = document.querySelector('#output')!;
    const todoDescription = document.querySelector<HTMLInputElement>('#todoDescription')!;
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({description: todoDescription.value, done: true}),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        output.innerHTML = JSON.stringify(data, undefined, 2);
      });
  };
  element.addEventListener('click', () => executePost());
}
