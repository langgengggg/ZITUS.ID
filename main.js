document.addEventListener('DOMContentLoaded', function() {
  // ... ANIMASI TEXT ZITUS
  const zitusName = document.getElementById('zitusName');
  const text1 = "ZITUS STORE";
  const text2 = "Full Stack Dev";
  let i = 0;
  let j = text1.length;
  let showingText1 = true;

  function erase() {
    const currentText = showingText1 ? text1 : text2;
    if (j > 0) {
      zitusName.textContent = currentText.substring(0, j - 1);
      j--;
      setTimeout(erase, 80);
    } else {
      showingText1 = !showingText1;
      i = 0;
      setTimeout(type, 400);
    }
  }

  function type() {
    const currentText = showingText1 ? text1 : text2;
    if (i < currentText.length) {
      zitusName.textContent += currentText.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      j = currentText.length;
      setTimeout(erase, 1200);
    }
  }

   zitusName.textContent = "";
   type();
  // ANIMASI SEND KOCAK 2 HARI GUA BIKIN PUQI 2 HARI GUA MENTOK DISINI EMANG YA GUA SUKA BANGET AMA JAVA SCRIPT KALO BISA GUA PACARIN
  const form = document.querySelector('.contact-box');
  if (!form) return;
  const btn = form.querySelector('button[type="submit"]');
  const td = btn.parentElement;

  let isRight = true; 

  btn.style.right = "px";
  btn.style.left = "";

  btn.addEventListener('mouseenter', function() {
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!email || !phone || !message) {
      const tdWidth = td.offsetWidth;
      const btnWidth = btn.offsetWidth;
      const maxMove = tdWidth - btnWidth;

      if (isRight) {
        btn.style.left = "";
        btn.style.right = "280px";
      } else {
        btn.style.right = "";
        btn.style.left = "0px";
      }
      isRight = !isRight;
    }
  });

  form.addEventListener('input', function() {
    btn.style.left = "";
    btn.style.right = "0px";
    isRight = false;
  });
});