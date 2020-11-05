export default `
<div class="menu-buttons">
    <div class="menu-buttons__container">
        <div class="menu-buttons__controls">
            <button id="grabar-button">Grabar</button>
            <button id="play-button">Play</button>
        </div>
        <div class="menu-buttons__wave-editor" id="wave-editor-buttons">
            <div class="menu-buttons__wave-editor__container">
                <div class="menu-buttons__wave-editor__block">
                    <div class="color_picker">
                        <input type="color" id="waveColorSelection" name="favcolor" value="#ff0000">
                        <label for="favcolor">Color wave:</label>
                    </div>
                    <div class="color_picker">
                        <input type="color" id="backgroundColorSelection" name="favcolor" value="#ff0000">
                        <label for="favcolor">Color background:</label>
                    </div>
                </div>
                <div class="menu-buttons__wave-editor__block">
                    <div class="range">
                        <input id="barWidthSelection" type="range" id="volume" name="volume" value="5"
                            min="2" max="11">
                        <label for="volume">Bar width</label>
                    </div>
                    <div class="range">
                        <input id="barHeightSelection" type="range" id="volume" name="volume" value="2"
                            min="2" max="8">
                        <label for="volume">Bar height</label>
                    </div>
                    <div class="range">
                        <input type="range" id="barGapSelection" name="volume"
                            min="2" max="8">
                        <label for="volume">Bar gap</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;