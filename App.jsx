import Counter from './src/Componenets/Counter.jsx'
import Todo from './src/Componenets/Todo.jsx'
import Filter_application from './src/Componenets/filter_application.jsx'
import './src/Componenets/Filter_application.css'
import Form from './src/Componenets/Form.jsx'
import './src/Componenets/Form.css'
import Api_fetching from './src/Componenets/Api/Api_fetching.jsx'

function App() {
  return (
    <>
  <Counter />
  <Todo />
  <Filter_application />
  <Form />
  <Api_fetching/>
  </>
)
}

export default App
