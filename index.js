//Dados los siguientes arreglos de objetos completas la misión:

const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];
const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
  { _id: 3, name: "Juan Velez" },
];
const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 1, student_id: 3 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];
courses.forEach((course) => {
  console.log(`-${course.title}`);
  students.forEach((student) => {
    enrollments.forEach((enrollment) => {
      if (
        course._id === enrollment.course_id &&
        student._id === enrollment.student_id
      ) {
        console.log(` * ${student.name}`);
      }
    });
  });
});

console.log("------------------------------");

students.forEach((student) => {
  console.log(`-${student.name}`);
  courses.forEach((course) => {
    enrollments.forEach((enrollment) => {
      if (
        course._id === enrollment.course_id &&
        student._id === enrollment.student_id
      ) {
        console.log(` * ${course.title}`);
      }
    });
  });
});
