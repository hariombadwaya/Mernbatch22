import { useState } from "react"


function BasicForm() {

    // const [completeName, setCompleteName] = useState("Mohan");
    // const [email, setEmail] = useState("mohan@gmail.com");
    // const [password, setPassword] = useState(1234);
    // const [dob, setDob] = useState(6 / 6 / 666);
    // const [tob, setTob] = useState(12.30);
    // const [age, setAge] = useState(25);
    // const [searchItem, setSearchItem] = useState("sabun");
    // const [resume, setResume] = useState();
    // const [gender, setGender] = useState("male");
    // let [areaOfExperties, setAreaOfExperties] = useState([]);
    // const [country, setCountry] = useState("india");
    // const [suggestion, setSuggestion] = useState("achhe se padhao")


    const [formData, setFormData] = useState({

        completeName: "Mohan",
        email: "mohan@gmail.com",
        password: 1234,
        dob: "6 / 6 / 666",
        tob: "12.20",
        age: 20,
        searchItem: "Juba Kesari",
        resume: "",
        gender: "male",
        areaOfExperties: [],
        country: "india",
        suggestion: ""

    })

    function printValueOfForms(event) {
        event.preventDefault();
        console.log("All info of form", formData)

    }

    function formManagement(event) {
        const { name, value, checked, type } = event.target;

        if (type === "checkbox") {
       let purnaData = formData;
       if(checked){
         purnaData.areaOfExperties.push(value);
        setFormData(purnaData);
       }
       else{
        purnaData.areaOfExperties = formData.areaOfExperties.filter((item)=> item !== value);
        setFormData(purnaData)
       }
    }
}
    let oldData;
    console.log(oldData)
    return (
        <div className="form-container">
            <form className="form" onSubmit={(event) => {
                printValueOfForms(event)
            }}>
                <h2 className="form-title">Registration Form</h2>

                <div className="form-group">
                    <label htmlFor="completeName">Complete Name</label>
                    <input type="text" id="completeName"
                        placeholder="Enter your complete name"
                        name="completeName"
                        value={formData.completeName}
                        onChange={(event) => {
                            formManagement(event)

                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={(event) => {
                            formManagement(event)

                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={(event) => {
                            formManagement(event)

                        }}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={(event) => {
                                formManagement(event)

                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tob">Time of Birth</label>
                        <input type="time" id="tob"
                            name="tob"
                            value={formData.tob}
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Current Age</label>
                    <input type="number" id="age"
                        name="age"
                        value={formData.age}
                        onChange={(event) => {
                            formManagement(event)

                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="searchItem">Search Item</label>
                    <input type="search" id="searchItem"
                        placeholder="Search here..."
                        name="searchItem"
                        value={formData.searchItem}
                        onChange={(event) => {
                            formManagement(event)

                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="file">Choose Your Resume</label>
                    <input type="file" id="file"
                        name="resume"
                        value={formData.resume}
                        onChange={(event) => {
                            formManagement(event)
                        }}
                    />
                </div>

                <div className="form-group">
                    <span className="group-title">Gender</span>
                    <div className="options">
                        <label htmlFor="male">Male</label>
                        <input type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            onChange={(event) => {
                                formManagement(event)

                            }} />


                        <label htmlFor="female"> Female</label>

                        <input type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                        <label htmlFor="others"> Others</label>


                        <input type="radio"
                            id="others"
                            name="gender"
                            value="others"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                    </div>
                </div>

                <div className="form-group">
                    <span className="group-title">Area of Expertise</span>
                    <div className="options">
                        <label htmlFor="c++"> c++</label>
                        <input type="checkbox"
                            id="c++"
                            name="areaOfExperties"
                            value="c++"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                        <label htmlFor="java"> java</label>
                        <input type="checkbox"
                            id="java"
                            name="areaOfExperties"
                            value="java"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                        <label htmlFor="dsa"> dsa</label>
                        <input type="checkbox"
                            id="dsa"
                            name="areaOfExperties"
                            value="dsa"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Select your country</label>
                    <select
                        id="country"
                        name="country"
                        onChange={(event) => {
                            formManagement(event)

                        }} >
                        <option >Select option</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Russia">Russia</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="suggestion">Write your suggestion</label>
                    <textarea
                        id="suggestion"
                        placeholder="Ask questions..."
                        name="suggestion"
                        onChange={(event) => {
                            formManagement(event)
                        }}


                    ></textarea>
                </div>

                <button className="submit-btn">Submit</button>
            </form>
        </div>

    )
}

export default BasicForm