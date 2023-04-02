export function setupGet(element: HTMLButtonElement) {
  const executeGet = () => {
    const output = document.querySelector<HTMLButtonElement>('#output')!;
    fetch('http://localhost:3000/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        output.innerHTML = JSON.stringify(data, undefined, 2);
      });
  };
  element.addEventListener('click', () => executeGet());
}
