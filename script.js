const messages = [
    "Anh biết em đùa đấy, em hãy nghĩ lại nhé!",
    "Chắc em nhấn nhầm phải không? Hãy thử lại!",
    "Em đang thử thách tình cảm của anh à?",
    "Em không thể từ chối anh như thế! Hãy suy nghĩ kỹ lại.",
    "Anh tin rằng trái tim em đang nói một điều khác. Hãy lắng nghe nó.",
    "Chắc chắn em chưa sẵn sàng. Nhưng anh sẽ chờ đợi!",
    "Đừng đùa như thế em ơi! Hãy trả lời thật lòng.",
    "Anh tin là em chỉ cần thêm chút thời gian nữa để suy nghĩ. Đúng không?",
    "Trái tim anh biết em cũng yêu anh mà, phải không?",
    "Em hãy cho anh cơ hội nữa nhé!"
];

function showMessage() {
    const loveMessage = document.querySelector('.love-message');
    loveMessage.classList.remove('hidden');
    loveMessage.style.opacity = '1';
    loveMessage.style.transform = 'translateY(0)';
}

function showHeart() {
    alert("Anh biết em yêu anh mà=)), chắc chắn là như vậy rồi!")
    const heart = document.querySelector('.heart');
    heart.classList.remove('hidden');
    document.querySelector('.yes-button').disabled = true;
    document.querySelector('.no-button').disabled = true;
}

function askAgain() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

