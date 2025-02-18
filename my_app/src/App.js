
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App text-center">
      {/* hello world */}
      <StudentForm></StudentForm>
      <StudentList></StudentList>
    </div>
  );
}

export default App;
