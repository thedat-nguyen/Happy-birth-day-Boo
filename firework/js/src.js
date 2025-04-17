let clockElement = document.getElementById("clock");
let messageElement = document.getElementById("message");
let line1Element = document.getElementById("line1");
let line2Element = document.getElementById("line2");

let hours = 23;
let minutes = 59;
let seconds = 50;

function updateClock() {
  // Tăng giây
  seconds++;
  
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0; // Reset về 00
      }
    }
  }

  // Cập nhật đồng hồ
  let formattedTime = 
    String(hours).padStart(2, "0") + ":" + 
    String(minutes).padStart(2, "0") + ":" + 
    String(seconds).padStart(2, "0");

  clockElement.textContent = formattedTime;

  // Khi đạt đến 00:00
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(clockInterval); // Dừng đếm thời gian
    clockElement.textContent = "00:00"; // Hiển thị 00:00
    messageElement.classList.remove("hidden"); // Hiển thị container dòng chữ
    showTypingEffect(line1Element, "❤️ Happy Birth Day! ᴸˢBaeBoo ❤️!", () => {
      showTypingEffect(line2Element, "Chúc Chị Nhunn Tuổi Mới Luôn Xinhh Đẹp Và Mạnh Khỏe ❤️", () => {
        setTimeout(() => {
          window.location.href = "./firework/cmnm.html"; // Chuyển hướng sau 3 giây
        }, 3000);
      });
    });
  }
}

// Hàm tạo hiệu ứng gõ từng ký tự
function showTypingEffect(element, text, callback) {
  let index = 0;
  let typingInterval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
    } else {
      clearInterval(typingInterval);
      if (callback) callback(); // Gọi callback sau khi hoàn thành gõ
    }
  }, 100); // Thời gian mỗi ký tự gõ ra (100ms)
}

// Cập nhật mỗi giây
let clockInterval = setInterval(updateClock, 1000);
