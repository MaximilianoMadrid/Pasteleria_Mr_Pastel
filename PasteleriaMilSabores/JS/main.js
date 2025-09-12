document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector(".btn-menu");
  const menuLateral = document.getElementById("menu-lateral");

  btnMenu.addEventListener("click", () => {
    if (window.innerWidth >= 992) {
      // Desktop → colapsar/expandir
      menuLateral.classList.toggle("colapsado");
      document.body.classList.remove("menu-open"); // limpiar mobile
    } else {
      // Mobile → abrir/cerrar panel
      document.body.classList.toggle("menu-open");
      menuLateral.classList.remove("colapsado"); // limpiar desktop
    }
  });
});

const ctx = document.getElementById('ventasMes').getContext('2d');

new Chart(ctx, {
  type: 'bar', // tipos: 'bar', 'line', 'pie', 'doughnut'
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [{
      label: 'Ventas $',
      data: [1200, 1900, 3000, 2500, 3200, 4000],
      backgroundColor: 'rgba(255, 192, 203, 0.6)', // rosa pastel
      borderColor: '#8B4513', // chocolate
      borderWidth: 2,
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Ventas por Mes',
        color: '#5D4037',
        font: { size: 18 }
      }
    }
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const btnToggle = document.querySelector(".btn-toggle-sidebar");
    const sidebar = document.querySelector(".menu-lateral");
    const body = document.body;

    btnToggle?.addEventListener("click", () => {
      sidebar.classList.toggle("colapsado");
      body.classList.toggle("menu-colapsado");
    });
  });
