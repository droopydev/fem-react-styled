import { useState } from 'react';
import { InputText } from '../InputText/InputText';

const ToDo = () => {
  const [textValue, setTextValue] = useState('');
  const [toDos, setToDos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...toDos, textValue]);
    setTextValue('');
  }

  function deleteTodo(index) {
    const newTodos = [...toDos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  }

  return (
    <div>
      <InputText
        onSubmit={handleSubmit}
        onChange={setTextValue}
        inputValue={textValue}
      />
      <div>
        <ul>
          {toDos.map((item, index) => {
            return (
              <li key={`${item}_${index}`}>
                <p>{item}</p>
                <button type="button" onClick={() => deleteTodo(index)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
