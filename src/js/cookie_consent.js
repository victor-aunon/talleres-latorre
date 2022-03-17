document.addEventListener("DOMContentLoaded", () => {
  COOKIES_ENABLER.init({
    bannerClass: "cookie-banner",
    bannerHTML: `
      <p>Utilizamos cookies propias y de terceros para fines funcionales dirigidos a permitir la correcta navegación por nuestra página web, guardar información de sus preferencias de usuario, analizar cómo interactúa con nosotros, medir qué uso hace de los servicios que le proporcionamos y poder mejorarlos.</p>
      <div class="accept-cookies-container">
        <p>Para consentir su utilización y confirmar que ha leído la información proporcionada, pulse el botón “Acepto”. Puede obtener más información consultando nuestra
            <a href="/cookies.html"> Política de Cookies</a>
        </p>
        <div class="accept-cookies-btn-container">
          <button id="accept-cookies" class="accept-cookies-btn ce-accept">Acepto</button>
          <button id="dismiss-cookies" class="accept-cookies-btn ce-dismiss">Rechazo</button>
        </div>
      </div>
    `,
    cookieDuration: "30",
    iframesPlaceholderHTML: `
      <p>Para ver nuestra ubicación en maps debe <a href="#" class="ce-accept">Aceptar las cookies</a>. No se añadirá ninguna cookie si no ha iniciado sesión en Google ni Facebook.
      </p>
    `,
  });

  // revoke consent
  const revokeBtn = document.querySelector("#revoke-consent");

  if (revokeBtn) {
    const oldDate = new Date(0);
    revokeBtn.addEventListener("click", () => {
      document.cookie = `ce-cookie=; expires=${oldDate.toGMTString()}; path=/`;
    });
  }
});
