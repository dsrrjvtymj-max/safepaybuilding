document.addEventListener('DOMContentLoaded', () => {
  // Approve / submit milestone rows
  document.querySelectorAll('[data-milestone-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const row = button.closest('.milestone-row');
      if (!row) return;
      row.classList.remove('active');
      row.classList.add('done');
      const dot = row.querySelector('.dot');
      if (dot) dot.setAttribute('aria-label', 'Complete');
      button.remove();

      const next = row.nextElementSibling;
      if (next && next.classList.contains('milestone-row')) {
        next.classList.add('active');
      }

      const status = document.getElementById(button.dataset.statusTarget);
      if (status) status.textContent = button.dataset.statusMessage || 'Milestone updated.';
    });
  });

  // Fund escrow / request payout / other single-action buttons
  document.querySelectorAll('[data-demo-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const status = document.getElementById(button.dataset.statusTarget);
      if (status) status.textContent = button.dataset.statusMessage || 'Done.';
    });
  });

  // Pay-supplier form
  const payForm = document.getElementById('pay-supplier-form');
  if (payForm) {
    payForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const supplier = document.getElementById('supplier-select');
      const amount = document.getElementById('supplier-amount');
      const status = document.getElementById('pay-supplier-status');
      const supplierName = supplier ? supplier.options[supplier.selectedIndex].text : 'supplier';
      const amountValue = amount && amount.value ? `£${Number(amount.value).toLocaleString()}` : 'the amount';
      if (status) {
        status.textContent = `${amountValue} sent to ${supplierName} — wallet-to-wallet, no bank details needed.`;
      }
      payForm.reset();
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
