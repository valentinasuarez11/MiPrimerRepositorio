function calcular() {
    const gramosSemilla = parseFloat(document.getElementById("semillas").value);
    if (isNaN(gramosSemilla) || gramosSemilla <= 0) {
      document.getElementById("resultado").textContent = "Por favor ingresa una cantidad válida.";
      return;
    }
  
    const gramosGerminado = gramosSemilla * 6;
    const dias = 4; // Tiempo promedio
  
    document.getElementById("resultado").textContent =
      `Con ${gramosSemilla} g de semillas, obtendrás aproximadamente ${gramosGerminado} g de germinados en un promedio de ${dias} días.`;
  }
  