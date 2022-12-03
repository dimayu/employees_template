import './App.css';
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFillter from "../AppFillter/AppFillter";
import Employers from "../Employers/Employers";
import EmploersAddForm from "../EmploersAddForm/EmploersAddForm";

function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFillter />
            </div>
            <Employers />
            <EmploersAddForm />
        </div>
    );
}

export default App;