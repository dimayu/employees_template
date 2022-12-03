import './Employers.css';

import Employer from "../Employer/Employer";

const Employers = () => {
    return (
        <ul className="app-list list-group">
            <Employer />
            <Employer />
            <Employer />
        </ul>
    );
}

export default Employers;