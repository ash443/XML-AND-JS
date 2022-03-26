const students = require("../data/student.json");

const getAll = ({ rollno, firstname, lastname, nickname, marks }) =>
  new Promise((resolve) => {
    let result = Array.from(students);

    if (rollno) {
      result = result.filter((item) => item.id === Number (rollno));
    }

    if (firstname) {
      result = result.filter((item) => item.firstname === firstname);
    }

    if (lastname) {
      result = result.filter((item) => item.lastname === lastname);
    }

    if (nickname) {
      result = result.filter((item) => item.nickname === nickname);
    }
    if (marks) {
      result = result.filter((item) => item.marks === marks);
    }

   

    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (rollno) =>
  new Promise((resolve) => {
    const student = students.find((student) => student.rollno === Number(rollno));

    if (student) {
      resolve({ code: 200, data: JSON.stringify(student) });
    } else {
      resolve({
        code: 404,
        data: { message: `No data found` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};