//your JS code here. If required.
function removeSelectedColor() {
            let colorSelect = document.getElementById("colorSelect");

            // Remove the selected option
            colorSelect.remove(colorSelect.selectedIndex);
        }