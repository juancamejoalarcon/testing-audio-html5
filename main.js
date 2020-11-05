import "./main.css";
import "./src/initial_countdown/initial_countdown.css";
import initial_countdown from "./src/initial_countdown/initial_countdown.html.js";
import "./src/menu_buttons/menu_buttons.css";
import menu_buttons from "./src/menu_buttons/menu_buttons.html.js";
import "./src/timer/timer.css";
import timer from "./src/timer/timer.html.js";
import "./src/wave/wave_recorder/wave_recorder.css";
import wave_recorder from "./src/wave/wave_recorder/wave_recorder.html.js";
import "./src/wave/wave_editor/wave_editor.css";
import wave_editor from "./src/wave/wave_editor/wave_editor.html.js";
export default `
    ${initial_countdown}
    ${timer}
    ${wave_recorder}
    ${wave_editor}
    ${menu_buttons}
`;