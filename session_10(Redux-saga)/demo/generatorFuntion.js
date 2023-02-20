function* getCycleStudentRA() {
    console.log("Từ Nhật Bản trở lại Việt Nam");
    yield "Nhập học tại RA";
    console.log("Học tập và làm việc tại RA");
    yield "Tốt nghiệp RA";
    console.log("Vào làm việc tại Rikkei Soft");
    yield "Sang Nhật làm việc";
}

let cycleRA = getCycleStudentRA();
console.log(cycleRA.next());
console.log(cycleRA.next());
console.log(cycleRA.next());
console.log(cycleRA.next());