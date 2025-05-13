"use strict";
var Subjects;
(function (Subjects) {
    class Java extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
