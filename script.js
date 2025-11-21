// نفترض أن العنصر عنده id="myButton"
const btn = document.getElementById('myButton');

// ضبط الموقع في منتصف الشاشة
function centerElement(el) {
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const rect = el.getBoundingClientRect();
  
  el.style.position = 'absolute';
  el.style.left = (winWidth - rect.width) / 2 + 'px';
  el.style.top = (winHeight - rect.height) / 2 + 'px';
}

// نفّذ الضبط
centerElement(btn);

// إعادة الضبط لو تغيّر حجم الشاشة
window.addEventListener('resize', () => centerElement(btn));
