// --- Date ---
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const todayStr = dd + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

// --- State ---
let fungsi = 1;
let flag = 1;
let flagg = 1;
let pemb = "";
let aa = 0;
let kata1, katab1, kata2, katab2, kata3, katab3, teksnolak;

const tekstolak1 = "Eits 😜";
const tekstolak11 = "Yakin? 🤔";
const tekstolak2 = "Gabisa 😝";
const tekstolak22 = "Eits 😜";

// --- Particles ---
function initParticles() {
  const container = document.getElementById('particles');
  const colors = ['var(--pink)', 'var(--purple)', 'var(--rose)', 'rgba(255,255,255,0.3)'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.setProperty('--size', (Math.random() * 6 + 2) + 'px');
    p.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    p.style.setProperty('--duration', (Math.random() * 8 + 6) + 's');
    p.style.setProperty('--delay', (Math.random() * 6) + 's');
    p.style.setProperty('--drift-x', (Math.random() * 200 - 100) + 'px');
    p.style.setProperty('--drift-y', (Math.random() * 200 - 100) + 'px');
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    container.appendChild(p);
  }
}

// --- Toast ---
function showToast(msg, duration = 1500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), duration);
}

// --- Modal ---
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const input = document.getElementById('nama-input');
  const btn = document.getElementById('modal-btn');
  const error = document.getElementById('modal-error');

  function submit() {
    const nama = input.value.trim();
    if (!nama || nama.length > 10) {
      error.textContent = 'Nama gak boleh kosong / lebih dari 10 huruf ya!';
      input.focus();
      return;
    }
    error.textContent = '';
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
    lanjut(nama);
  }

  btn.addEventListener('click', submit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submit();
  });

  setTimeout(() => input.focus(), 500);
}

// --- Typing Effect ---
function kpemb() {
  const el = document.getElementById('idgeser');
  if (aa < pemb.length) {
    el.innerHTML += pemb.charAt(aa);
    aa++;
    setTimeout(kpemb, 60);
  }
  if (aa === pemb.length) {
    setTimeout(() => el.style.display = 'none', 300);
    setTimeout(() => {
      const card = document.getElementById('card');
      card.classList.add('visible');
    }, 600);
    setTimeout(() => {
      document.getElementById('btn-group').classList.add('visible');
    }, 1200);
  }
}

// --- Card text animation ---
function animateCardText() {
  const kt = document.getElementById('katakata');
  const kb = document.getElementById('katabawah');
  kt.style.transform = 'scale(0.8)';
  kt.style.opacity = '0';
  kb.style.transform = 'scale(0.8)';
  kb.style.opacity = '0';
  setTimeout(() => {
    kt.style.transform = 'scale(1)';
    kt.style.opacity = '1';
    kb.style.transform = 'scale(1)';
    kb.style.opacity = '1';
  }, 300);
}

// --- Hearts ---
function createHeart() {
  const hearts = ['💖', '💗', '💕', '💝', '💓', '✨', '🩷'];
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-5vh';
  heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
  heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

// --- Tolak ---
window.tolak = function () {
  const btnNo = document.getElementById('btn-no');
  const btnYes = document.getElementById('btn-yes');
  const tease = document.getElementById('tease-text');

  if (fungsi === 1) {
    if (flagg === 1) {
      btnNo.style.cssText = "margin-left:60px;transform:rotate(90deg)";
      btnYes.style.opacity = "0.3";
      tease.textContent = tekstolak1;
      tease.classList.add('visible');
      setTimeout(() => tease.classList.remove('visible'), 1200);
      flagg = 2;
    } else if (flagg === 2) {
      btnNo.style.cssText = "margin-left:60px;transform:rotate(180deg)";
      tease.textContent = tekstolak2;
      tease.classList.add('visible');
      setTimeout(() => tease.classList.remove('visible'), 1200);
      flagg = 3;
    } else if (flagg === 3) {
      btnNo.style.cssText = "";
      btnYes.style.opacity = "1";
      flagg = 1;
    }
  } else if (fungsi === 2) {
    if (flag === 1) {
      btnNo.style.cssText = "margin-left:60px";
      btnYes.style.opacity = "0.3";
      tease.textContent = tekstolak11;
      tease.classList.add('visible');
      setTimeout(() => tease.classList.remove('visible'), 1200);
      flag = 2;
    } else if (flag === 2) {
      btnNo.style.cssText = "margin-left:60px;transform:rotate(90deg)";
      tease.textContent = tekstolak22;
      tease.classList.add('visible');
      setTimeout(() => tease.classList.remove('visible'), 1200);
      flag = 3;
    } else if (flag === 3) {
      btnNo.style.cssText = "";
      btnYes.style.opacity = "1";
      showToast("Harus mau!!! 😝");
      flag = 1;
    }
  }
};

// --- Terima ---
window.terima = function () {
  const emoji = document.getElementById('card-emoji');
  const btnGroup = document.getElementById('btn-group');

  if (fungsi === 1) {
    document.getElementById('katakata').innerHTML = kata2;
    document.getElementById('katabawah').innerHTML = katab2;
    document.getElementById('btn-yes').textContent = 'Mau 💕';
    emoji.textContent = '🥰';
    animateCardText();
    btnGroup.classList.remove('visible');
    setTimeout(() => btnGroup.classList.add('visible'), 600);
    fungsi = 2;
  } else if (fungsi === 2) {
    document.getElementById('katakata').innerHTML = kata3;
    document.getElementById('katabawah').innerHTML = '';
    const dateEl = document.createElement('p');
    dateEl.className = 'card-date';
    dateEl.textContent = katab3;
    document.getElementById('katabawah').appendChild(dateEl);
    emoji.textContent = '💑';
    animateCardText();
    btnGroup.classList.remove('visible');
    setTimeout(() => {
      document.getElementById('wa-btn').classList.add('visible');
    }, 2500);
    setInterval(createHeart, 250);
  }
};

// --- WhatsApp ---
window.menuju = function () {
  if (fungsi === 2) {
    window.location = "https://api.whatsapp.com/send?phone=6285156242860&text=Iyaa%20mau%20mas";
  }
};

// --- Lanjut ---
function lanjut(nama) {
  pemb = "Hai " + nama + ", makasih sudah bertahan sampai saat ini... mas bersyukur banget bisa punya " + nama + "       ";
  kata1 = "Mamas ama " + nama + " dan mas pengen hubungan kita jadi lebih bermakna. Emm " + nama + ", sayang ama mas ga? 🥺";
  katab1 = "";
  kata2 = "Mulai saat ini, " + nama + " mau ga jadi pasangan Mamas? 🥰";
  katab2 = "";
  kata3 = "Yeay! Akhirnya kita jadian! 🥳💕";
  katab3 = "Tanggal jadian kita: " + todayStr + " 💝";
  teksnolak = "Harus mau!!! 😝";

  document.getElementById('katakata').innerHTML = kata1;
  document.getElementById('katabawah').innerHTML = katab1;
  setTimeout(kpemb, 200);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initModal();
});
