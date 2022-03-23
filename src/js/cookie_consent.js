import "../css/cookieconsent.css";
import "./cookieconsent.js";

window.addEventListener("load", () => {
  // eslint-disable-next-line no-undef
  const cc = initCookieConsent();

  cc.run({
    current_lang: "es",
    cookie_expiration: 30,
    delay: 1000,
    page_scripts: true,
    mode: "opt-in",
    gui_options: {
      consent_modal: {
        layout: "cloud", // box/cloud/bar
        position: "bottom center", // bottom/middle/top + left/right/center
        transition: "slide", // zoom/slide
        swap_buttons: false, // enable to invert buttons
      },
      settings_modal: {
        layout: "box", // box/bar
        // position: 'left',           // left/right
        transition: "slide", // zoom/slide
      },
    },
    languages: {
      es: {
        consent_modal: {
          title: "Esta página utiliza cookies",
          description:
            'Utilizamos cookies propias y de terceros para fines funcionales dirigidos a permitir la correcta navegación por nuestra página web, guardar información de sus preferencias de usuario, analizar cómo interactúa con nosotros, medir qué uso hace de los servicios que le proporcionamos y poder mejorarlos.<br><br>Para consentir su utilización y confirmar que ha leído la información proporcionada, pulse el botón “Aceptar todas”. Puede obtener más información consultando nuestra <a href="/cookies.html" class="cc-link"> Política de Cookies</a>',
          primary_btn: {
            text: "Aceptar todas",
            role: "accept_all",
          },
          secondary_btn: {
            text: "Configurar",
            role: "settings",
          },
        },
        settings_modal: {
          title: "Preferencias de cookies",
          save_settings_btn: "Guardar preferencias",
          accept_all_btn: "Aceptar todas",
          reject_all_btn: "Aceptar necesarias",
          close_btn_label: "Cerrar",
          cookie_table_headers: [
            { col1: "Nombre" },
            { col2: "Finalidad" },
            { col3: "Caducidad" },
            { col4: "Tipo" },
          ],
          blocks: [
            {
              title: "Uso de cookies",
              description:
                'Aquí puede elegir qué categoría de cookies permitir. Puede obtener más información consultando nuestra <a href="/cookies.html" class="cc-link"> Política de Cookies</a>',
            },
            {
              title: "Cookies técnicas necesarias",
              description:
                "Son aquellas que permiten al usuario la navegación a través de una página web. La página web no puede funcionar adecuadamente sin estas cookies por lo que se consideran necesarias y no requieren su consentimiento.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true,
              },
              cookie_table: [
                {
                  col1: "cc_cookie",
                  col2: "Almacena la respuesta del visitante a la aceptación de las cookies de la página.",
                  col3: "30 días",
                  col4: "Propia/técnica",
                },
              ],
            },
            {
              title: "Cookies de análisis o medición",
              description:
                "Son aquellas que permiten comprender cómo interactúan los visitantes con las páginas web y así realizar el análisis estadístico del uso que hacen los usuarios de la web de los servicios prestados. La información recogida se utiliza en la medición de la actividad de los sitios web o aplicación con el fin de introducir mejoras en los productos y servicios ofrecidos por el responsable.",
              toggle: {
                value: "analytics",
                enabled: false,
                readonly: false,
              },
              cookie_table: [
                {
                  col1: "datr",
                  col2: "Cookie de Facebook para proveer servicios de prevención de fraudes. Esta cookie se almacena en su navegador si ha aceptado las cookies necesarias de Facebook.",
                  col3: "2 años",
                  col4: "Terceros/análisis",
                },
                {
                  col1: "sb",
                  col2: "Cookie de Facebook para para almacenar los detalles del navegador. Esta cookie se almacena en su navegador si ha aceptado las cookies necesarias de Facebook.",
                  col3: "2 años",
                  col4: "Terceros/análisis",
                },
                {
                  col1: "wd",
                  col2: "Cookie de Facebook para para almacenar la resolución de pantalla. Esta cookie se almacena en su navegador si ha aceptado las cookies necesarias de Facebook.",
                  col3: "1 semana",
                  col4: "Terceros/análisis",
                },
              ],
            },
          ],
        },
      },
    },
  });
});
