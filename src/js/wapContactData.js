const data = {
    name: "Talleres de la Torre",
    phone: "34634821093",
    titleText: "¿Quieres hacernos una pregunta?",
    subtitleText: "Haz clic aquí para hablarnos por Whatsapp",
    titleTextOnExpanded: "Pregúntanos cualquier duda",
    subtitleTextOnExpanded: "Haz clic abajo para abrir WhatsApp y hablar con nosotros directamente",
    messageNotAvailable: "Lo siento, hoy no estamos disponible",
    messageSoonAvailable: "En breve estaremos disponible",
    // 0 is Sunday, 1 is Monday...
    // daysOpen: [...Array(7).keys()],
    daysOpen: [1, 2, 3, 4, 5],
    // Each hour includes from 0 to 59 minutes. UTC time
    timeOpenUTC: [7, 8, 9, 10, 11, 12, 15, 16, 17, 18],
    timeOpenTextDays: "lunes a viernes",
    timeOpenTextHours: "8:30 a 14:00 y de 16:00 a 19:30"
}

export default data;