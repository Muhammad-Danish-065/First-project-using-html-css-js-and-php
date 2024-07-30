<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $question = $_POST['question'];
    $standards = $_POST['standards'];
    $option = $_POST['option'];
    $dynamicField = $option == 'textbox' ? $_POST['dynamicTextbox'] : $_POST['dynamicDropdown'];
    $additionalTextboxes = isset($_POST['additionalTextbox']) ? $_POST['additionalTextbox'] : [];
    $uniqueId = $_POST['uniqueId'];
    $domain = $_POST['domain'];
    $implementationSteps = $_POST['implementationSteps'];
    $comments = $_POST['comments'];

    // Process and store the data as needed

    echo "Form submitted successfully!";
    // Display the collected data for testing purposes
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
}
?>
