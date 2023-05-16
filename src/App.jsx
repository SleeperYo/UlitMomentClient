import "./App.css"
import "@fontsource/roboto"
import LoginForm from "./components/LoginForm";
import {Route, Routes} from "react-router-dom";
import CoursesMain from "./components/CoursesMain";
import Course from "./components/Course";
import Profile from "./components/Profile";
import StudentsPage from "./components/StudentsPage";
import SchoolPage from "./components/SchoolPage";
import NavBar from "./components/NavBar";

const App = () => {

    return (

        <div  className="App d-grid">
            <NavBar/>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/courses" element={<CoursesMain/>}/>
                <Route path="/course/:id" element={<Course/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/students" element={<StudentsPage/>}/>
                <Route path="/schools" element={<SchoolPage/>}/>
                <Route path="*" element={<LoginForm/>}/>

            </Routes>
        </div>
    );
};

export default App;
