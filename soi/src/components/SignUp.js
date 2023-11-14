import React, {useState} from "react";
const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setMiddleName('');
    };
    return (
        <>
            <h1>SOI</h1>
            <form>
                <label htmlFor="firstName">Имя:</label>
                <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange}/>
                <label htmlFor="firstName">Имя:</label>
                <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange}/>
                <label htmlFor="firstName">Имя:</label>
                <input type="text" id="middleName" value={middleName} onChange={handleMiddleNameChange}/>
                <button type="submit">Продолжить</button>
            </form>
        </>
    )
}

export default SignUp