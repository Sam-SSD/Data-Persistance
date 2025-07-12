  // Paso 1: Configuración de variables y captura de elementos
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const guardarBtn = document.getElementById('guardarBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const outputDiv = document.getElementById('output');
    const contadorDiv = document.getElementById('contador');

    // Paso 3: Función para mostrar los datos almacenados
    function mostrarDatos() {
      const nombre = localStorage.getItem('nombre');
      const edad = localStorage.getItem('edad');

      if (nombre && edad) {
        outputDiv.innerHTML = `
          <div class="data-display">
            <strong>📋 Datos Almacenados:</strong><br>
            <span style="color: #48bb78;">👤 Nombre:</span> ${nombre}<br>
            <span style="color: #667eea;">🎂 Edad:</span> ${edad} años
          </div>
        `;
        outputDiv.classList.remove('empty-state');
      } else {
        outputDiv.innerHTML = `
          <div class="empty-state">
            <span style="font-size: 2rem;">📝</span><br>
            No hay información almacenada.<br>
            <small>Ingresa tu nombre y edad para comenzar</small>
          </div>
        `;
        outputDiv.classList.add('empty-state');
      }
    }

    // Función para mostrar notificación
    function mostrarNotificacion(mensaje, tipo = 'success') {
      // Crear elemento de notificación
      const notificacion = document.createElement('div');
      notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      `;
      
      if (tipo === 'success') {
        notificacion.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
      } else {
        notificacion.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
      }
      
      notificacion.textContent = mensaje;
      document.body.appendChild(notificacion);
      
      // Animar entrada
      setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
      }, 100);
      
      // Remover después de 3 segundos
      setTimeout(() => {
        notificacion.style.transform = 'translateX(100%)';
        setTimeout(() => {
          document.body.removeChild(notificacion);
        }, 300);
      }, 3000);
    }

    // Paso 2: Guardar datos en Local Storage
    guardarBtn.addEventListener('click', () => {
      const nombre = nombreInput.value.trim();
      const edad = edadInput.value.trim();

      if (nombre === '' || edad === '') {
        mostrarNotificacion('Por favor ingresa nombre y edad.', 'error');
        return;
      }

      if (parseInt(edad) < 1 || parseInt(edad) > 120) {
        mostrarNotificacion('La edad debe estar entre 1 y 120 años.', 'error');
        return;
      }

      localStorage.setItem('nombre', nombre);
      localStorage.setItem('edad', edad);

      console.log('Datos guardados en Local Storage.');
      mostrarDatos();
      mostrarNotificacion('✅ Datos guardados exitosamente!');
      
      // Limpiar campos después de guardar
      nombreInput.value = '';
      edadInput.value = '';
      nombreInput.focus();
    });

    // Paso 4: Contador de interacciones con Session Storage
    function actualizarContador() {
      let contador = sessionStorage.getItem('contador');

      if (contador === null) {
        contador = 0;
      } else {
        contador = parseInt(contador);
      }

      contador++;
      sessionStorage.setItem('contador', contador);
      
      contadorDiv.innerHTML = `
        <div class="data-display">
          <strong>🔄 Interacciones en esta sesión:</strong><br>
          <span style="color: #667eea; font-size: 1.2rem;">${contador}</span> interacciones
        </div>
      `;
      console.log(`Interacciones actuales: ${contador}`);
    }

    // Paso 5: Limpiar datos de Local Storage
    limpiarBtn.addEventListener('click', () => {
      localStorage.removeItem('nombre');
      localStorage.removeItem('edad');
      console.log('Datos eliminados del Local Storage.');
      mostrarDatos();
      mostrarNotificacion('🗑️ Datos eliminados exitosamente!');
    });

    // Función para manejar la tecla Enter en los inputs
    function manejarEnter(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        guardarBtn.click();
      }
    }

    // Agregar event listeners para Enter
    nombreInput.addEventListener('keypress', manejarEnter);
    edadInput.addEventListener('keypress', manejarEnter);

    // Función para agregar efectos visuales a los inputs
    function agregarEfectosInputs() {
      const inputs = document.querySelectorAll('input');
      
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
          input.parentElement.style.transform = 'scale(1)';
        });
      });
    }

    // Mostrar datos y contador al cargar la página
    window.addEventListener('load', () => {
      mostrarDatos();
      actualizarContador();
      agregarEfectosInputs();
      
      // Efecto de carga inicial
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    });
