import StudentProfileCard from "./components/StudentProfileCard";
import "./App.css";

function App() {
  return (
    <>
      <header className="banner">
        <h1>Student Directory</h1>
        <p className="pill">Computer Engineering</p>
      </header>

      <main className="directory">
        <div className="grid">
          <StudentProfileCard name="Aale Aaditi" studentId="202537195" major="Computer Engineering" year="1st year" gpa={4.2} />
          <StudentProfileCard name="Ong Kahlen Zhiqi" studentId="202699471" major="Computer Engineering" year="Exchange student" gpa={4.3} />
          <StudentProfileCard name="Sunar Roshani" studentId="202537197" major="Computer Engineering" year="1st year" gpa={4.15} />
        </div>
        <p className="note">GPA values are sample data for this exercise.</p>
      </main>

      <footer className="footer">Task 11-A &middot; React &middot; Web Programming</footer>
    </>
  );
}

export default App;