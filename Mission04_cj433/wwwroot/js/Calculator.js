/*Grade Calculator Function*/

$("#btnCalc").click(function calc() {
    var assignment = $("#assignment").val();
    var group = $("#group").val();
    var quiz = $("#quiz").val();
    var mid = $("#mid").val();
    var final = $("#final").val();
    var intex = $("#intex").val();

    var totalGrade = ((assignment * .50) + (group * .10) + (quiz * .10) + (mid * .10) + (final * .10) + (intex * .10));

    if (totalGrade >= 94) {
        letterGrade = "A";
    } else if (totalGrade >= 90) {
        letterGrade = "A-";
    } else if (totalGrade >= 87) {
        letterGrade = "B+";
    } else if (totalGrade >= 84) {
        letterGrade = "B";
    } else if (totalGrade >= 80) {
        letterGrade = "B-";
    } else if (totalGrade >= 77) {
        letterGrade = "C+";
    } else if (totalGrade >= 74) {
        letterGrade = "C";
    } else if (totalGrade >= 70) {
        letterGrade = "C-";
    } else if (totalGrade >= 67) {
        letterGrade = "D+";
    } else if (totalGrade >= 64) {
        letterGrade = "D";
    } else if (totalGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    $("#letter").html("Final Grade: " + letterGrade);
    $("#percent").html("Percent: " + totalGrade.toFixed(2) + "%");
})