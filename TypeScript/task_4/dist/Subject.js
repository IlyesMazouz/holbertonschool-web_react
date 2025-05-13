"use strict";
var Subjects;
(function (Subjects) {
    class Subject {
        constructor() {
            this.teacher = {};
        }
        setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
