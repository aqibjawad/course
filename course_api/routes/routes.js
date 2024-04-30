
const departmentRoutes = require("../modules/Department/department.routes");

const authRoutes = require("../modules/Auth/auth.routes");

const courseRoutes = require("../modules/Courses/courses.routes");

const coursefileRoutes = require("../modules/CourseFile/course/coursefile.routes");

const sessionRoutes = require("../modules/Session/session.routes");

const semesterRoutes= require("../modules/Semester/semester.routes");

const courseMidRoutes = require("../modules/CourseFile/mid/mid.routes");

const courseAssignmentRoutes = require("../modules/CourseFile/assignment/assignment.routes");

const courseFinalRoutes = require("../modules/CourseFile/final/final.routes")

const courseQuizRoutes = require("../modules/CourseFile/quiz/quiz.routes")

module.exports = function router(app) {
  app
    .use("/api/v1/department", departmentRoutes)

    .use("/api/v1/auth", authRoutes)

    .use("/api/v1/course", courseRoutes)

    .use("/api/v1/coursefile", coursefileRoutes)

    .use("/api/v1/session", sessionRoutes)

    .use("/api/v1/semester", semesterRoutes)

    .use("/api/v1/mid", courseMidRoutes)

    .use("/api/v1/final", courseFinalRoutes)

    .use("/api/v1/coursequiz", courseQuizRoutes)

    .use("/api/v1/assignment", courseAssignmentRoutes)

};
