// สลับ Tab เมนู
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.nav-btn');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    // เปลี่ยนสถานะปุ่ม Navbar ให้ active
    const activeBtn = Array.from(buttons).find(
        btn => btn.getAttribute('onclick').includes(tabId)
    );
    if (activeBtn) activeBtn.classList.add('active');
}

// เพิ่มคำอวยพร
function addWish(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('senderName');
    const messageInput = document.getElementById('wishMessage');
    const wishBoard = document.getElementById('wishBoard');

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-item';
        wishCard.innerHTML = `
            <strong>${escapeHTML(name)}</strong>
            <p>${escapeHTML(message)}</p>
        `;

        wishBoard.prepend(wishCard);

        // ล้างข้อมูลในฟอร์ม
        nameInput.value = '';
        messageInput.value = '';
    }
}

// ระบบป้องกันการใส่ HTML ในช่องอวยพร (Security)
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
