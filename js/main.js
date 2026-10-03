// Минимальная логика: открытие и закрытие модального окна <dialog>
document.querySelectorAll('[data-modal-open]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.getElementById(btn.dataset.modalOpen).showModal();
  });
});
document.querySelectorAll('[data-modal-close]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('dialog').close();
  });
});
