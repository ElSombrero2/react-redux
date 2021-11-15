import './App.scss';
import { Form } from './components/form/form.component';
import { Table } from './components/table/table.component';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Form />
          </div>
          <div className="col-sm-6">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
