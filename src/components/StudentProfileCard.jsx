function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function StudentProfileCard({ name, studentId, major, year, gpa }) {
  return (
    <article className="student-card">
      <div className="avatar" aria-hidden="true">{getInitials(name)}</div>
      <h2>{name}</h2>
      <p className="major">{major}</p>
      <dl>
        <div><dt>Student ID</dt><dd>{studentId}</dd></div>
        <div><dt>Year</dt><dd>{year}</dd></div>
        <div><dt>GPA</dt><dd><span className="gpa">{gpa.toFixed(2)}</span></dd></div>
      </dl>
    </article>
  );
}

export default StudentProfileCard;