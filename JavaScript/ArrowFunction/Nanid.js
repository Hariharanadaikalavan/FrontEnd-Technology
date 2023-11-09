function addNumber() {
    const inputElement = document.getElementById("numberInput");
    const selectElement = document.getElementById("numberList");

    const inputValue = parseInt(inputElement.value);

    if (!isNaN(inputValue)) {
        const option = document.createElement("option");
        option.text = inputValue;
        selectElement.add(option);
        inputElement.value = ""; // Clear input field after adding
    } else {
        alert("Please enter a valid integer.");
    }
}

function displaySelectedValue() {
    const selectElement = document.getElementById("numberList");
    const selectedValue = selectElement.options[selectElement.selectedIndex].text;
    alert("Selected value: " + selectedValue);
}
