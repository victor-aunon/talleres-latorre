import "../css/photoswipe.css";

import PhotoSwipe from "./photoswipe.esm.js";
import PhotoSwipeLightBox from "./photoswipe-lightbox.esm.js";

const PSOptions = {
  loop: true,
  padding: {
    top: 50,
    bottom: 50,
    left: 20,
    right: 20,
  },
  bgOpacity: 0.9,
  indexIndicatorSep: " de ",
  pswpModule: PhotoSwipe,
  children: "a",
  closeTitle: "Cerrar",
  zoomTitle: "Zoom",
};

const PSOptionsMustang = { ...PSOptions };
PSOptionsMustang.gallery = "#gallery-mustang";
const lightboxMustang = new PhotoSwipeLightBox(PSOptionsMustang);
lightboxMustang.init();

const PSOptionsBMW = { ...PSOptions };
PSOptionsBMW.gallery = "#gallery-bmw-m2";
const lightboxBMW = new PhotoSwipeLightBox(PSOptionsBMW);
lightboxBMW.init();

const PSOptionsPeugeot = { ...PSOptions };
PSOptionsPeugeot.gallery = "#gallery-peugeot";
const lightboxPeugeot = new PhotoSwipeLightBox(PSOptionsPeugeot);
lightboxPeugeot.init();

const PSOptionsVespa = { ...PSOptions };
PSOptionsVespa.gallery = "#gallery-vespa";
const lightboxVespa = new PhotoSwipeLightBox(PSOptionsVespa);
lightboxVespa.init();

const PSOptionsCalibracion = { ...PSOptions };
PSOptionsCalibracion.gallery = "#gallery-calibracion";
const lightboxCalibracion = new PhotoSwipeLightBox(PSOptionsCalibracion);
lightboxCalibracion.init();
