// ไฟล์นี้พร้อมสำหรับเพิ่ม JavaScript ในอนาคต
console.log("Welcome to Sumathinee's Personal Web!");

// ตัวอย่างโค้ดที่อาจใช้ในอนาคต:
// 1. การทำ Navigation Bar ให้เปลี่ยนสีเมื่อเลื่อนจอ
// 2. การทำให้ Portfolio Item "เด้ง" ขึ้นมาเมื่อเลื่อนจอไปถึง
// 3. การสร้าง Contact Form ที่ตรวจสอบข้อมูลได้

// -------- ตัวอย่างโค้ดสำหรับ Active Link บน Navbar (ถ้าอยากลอง) --------

// เลือก section ทั้งหมด
const sections = document.querySelectorAll("section");
// เลือก link ใน nav ทั้งหมด
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) { // 60 คือความสูงของ nav โดยประมาณ
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") == "#" + current) {
            a.classList.add("active");
        }
    });
});

// (หากใช้โค้ดด้านบน อย่าลืมเพิ่ม CSS นี้ในไฟล์ style.css)
/*
nav ul li a.active {
    color: var(--pink);
}
*/