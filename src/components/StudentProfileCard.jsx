function StudentProfileCard({ name, studentId, major, year, gpa }) {
  return (
    <article className="student-card">
      <h2>{name}</h2>
      <dl>
        <div><dt>Student ID</dt><dd>{studentId}</dd></div>
        <div><dt>Major</dt><dd>{major}</dd></div>
        <div><dt>Year</dt><dd>{year}</dd></div>
        <div><dt>GPA</dt><dd>{gpa.toFixed(2)}</dd></div>
      </dl>
    </article>
  );
}

export default StudentProfileCard;