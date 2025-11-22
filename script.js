// استخراج بيانات الموسم ورقم الحلقة من الرابط
const params = new URLSearchParams(window.location.search);
const season = params.get("season");
let episode = parseInt(params.get("episode"));

// زر الحلقة السابقة
const prevEpisodeBtn = document.getElementById("prevEpisodeBtn");

// دالة الانتقال للحلقة السابقة
function prevEpisode() {
  if (episode > 1) {
    window.location.href = `watch.html?season=${season}&episode=${episode - 1}`;
  }
}

// إخفاء زر الحلقة السابقة لو الحلقة الأولى
(function handlePrevEpisodeVisibility() {
  if (episode <= 1) {
    prevEpisodeBtn.style.display = "none";
  }
})();
