import logo from './logo.svg';
import './App.css';
import LtqJsxExpression from './components/LtqJsxExpression';
import LtqFuncomp from './components/LtqFuncomp';
import LtqClassComp from './components/LtqClassComp';

function App() {
  return (
    <div className="Container border">
    <h1>Làm việc với các thành phần cơ bản trong ReactJs</h1>
    <hr/>
    <LtqJsxExpression/>
    <LtqFuncomp/>
    <LtqFuncomp name="Thanh Quan" age="47"/>

    <LtqClassComp/>
    <LtqClassComp fullName="Lê Thanh Quan" company="FitNTU"/>
    <LtqClassComp fullName="Lê Thanh Quan" company="K22CNT1"/>
    </div>
  );
}

export default App;
