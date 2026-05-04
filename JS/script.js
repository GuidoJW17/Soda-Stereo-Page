// Esperamos a que el DOM esté completamente cargado para evitar errores de 'null'
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Referencias a los elementos del DOM
    const miVideo = document.getElementById('videoSoda');
    const btnPlay = document.getElementById('btnPlayPausa');
    const btnMute = document.getElementById('btnMute');
    
    // Referencias a los iconos dentro de los botones
    const iconoPlay = document.getElementById('iconoPlay');
    const iconoMute = document.getElementById('iconoMute');

    // Verificación de seguridad en consola (útil para debugear)
    if (!miVideo) {
        console.error("Error: No se encontró el video con id 'videoSoda'. Revisa tu HTML.");
        return;
    }

    // 2. Función para Controlar Reproducción (Play/Pausa)
    btnPlay.addEventListener('click', () => {
        if (miVideo.paused) {
            miVideo.play();
            // Cambia el icono a "Pausa" cuando el video corre
            iconoPlay.className = "fas fa-pause";
        } else {
            miVideo.pause();
            // Cambia el icono a "Play" cuando el video se detiene
            iconoPlay.className = "fas fa-play";
        }
    });

    // 3. Función para Controlar el Audio (Mute/Unmute)
    btnMute.addEventListener('click', () => {
        if (miVideo.muted) {
            miVideo.muted = false;
            // Icono de volumen activo
            iconoMute.className = "fas fa-volume-up";
            // Feedback visual: el borde se ilumina en rojo cuando hay sonido
            btnMute.style.borderColor = "#ff0000";
        } else {
            miVideo.muted = true;
            // Icono de volumen silenciado
            iconoMute.className = "fas fa-volume-mute";
            // El borde vuelve a ser oscuro en silencio
            btnMute.style.borderColor = "#1a1a1a";
        }
    });
});