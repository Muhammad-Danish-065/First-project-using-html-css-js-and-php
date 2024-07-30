function showTextbox() {
    document.getElementById('dynamicFields').innerHTML = `
        <label for="dynamicTextbox">Dynamic Textbox:</label>
        <input type="text" id="dynamicTextbox" name="dynamicTextbox">
    `;
}

function showDropdown() {
    document.getElementById('dynamicFields').innerHTML = `
        <label for="dynamicDropdown">Dynamic Dropdown:</label>
        <select id="dynamicDropdown" name="dynamicDropdown">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
        </select>
    `;
}

function addTextbox() {
    var container = document.getElementById('dynamicFields');
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'additionalTextbox[]';
    container.appendChild(input);
}
