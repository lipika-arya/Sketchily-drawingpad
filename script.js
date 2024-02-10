document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("drawingCanvas");
    const context = canvas.getContext("2d");
    let painting = false;
    let isEraser = false;
    let currentSize = 5;
    let currentEraserSize = 10;
    let currentPencilColor = "#000"; // Default color is black

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        context.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        context.lineWidth = isEraser ? currentEraserSize : currentSize;
        context.lineCap = "round";

        if (isEraser) {
            context.strokeStyle = "#fff"; // Eraser color is white
        } else {
            context.strokeStyle = currentPencilColor; // Pencil color
        }

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    document.getElementById("pencilBtn").addEventListener("click", function () {
        isEraser = false;
    });

    document.getElementById("clearBtn").addEventListener("click", function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById("eraserBtn").addEventListener("click", function () {
        isEraser = true;
    });

    function setSize(size) {
        currentSize = size;
    }

    document.getElementById("size1").addEventListener("click", function () {
        setSize(1);
    });

    document.getElementById("size3").addEventListener("click", function () {
        setSize(3);
    });

    document.getElementById("size5").addEventListener("click", function () {
        setSize(5);
    });

    document.getElementById("size7").addEventListener("click", function () {
        setSize(7);
    });

    document.getElementById("size10").addEventListener("click", function () {
        setSize(10);
    });

    function setEraserSize(size) {
        currentEraserSize = size;
        resetEraserSizeButtons();
        document.getElementById(`eraserSize${size}`).style.width = "40px";
        document.getElementById(`eraserSize${size}`).style.height = "40px";
    }

    function resetEraserSizeButtons() {
        const eraserSizes = [10, 20, 30, 50, 100];
        eraserSizes.forEach(size => {
            document.getElementById(`eraserSize${size}`).style.width = "30px";
            document.getElementById(`eraserSize${size}`).style.height = "30px";
        });
    }

    document.getElementById("eraserSize10").addEventListener("click", function () {
        setEraserSize(10);
    });

    document.getElementById("eraserSize20").addEventListener("click", function () {
        setEraserSize(20);
    });

    document.getElementById("eraserSize30").addEventListener("click", function () {
        setEraserSize(30);
    });

    document.getElementById("eraserSize50").addEventListener("click", function () {
        setEraserSize(50);
    });

    document.getElementById("eraserSize100").addEventListener("click", function () {
        setEraserSize(100);
    });

    // Event listeners for color buttons
    document.getElementById("pencilColorBlack").addEventListener("click", function () {
        currentPencilColor = "#000"; // Black color
    });

    document.getElementById("pencilColorRed").addEventListener("click", function () {
        currentPencilColor = "#FF0000"; // Red color
    });

    document.getElementById("pencilColorBlue").addEventListener("click", function () {
        currentPencilColor = "#0000FF"; // Blue color
    });

    document.getElementById("pencilColorYellow").addEventListener("click", function () {
        currentPencilColor = "#FFFF00"; // Yellow color
    });

    document.getElementById("pencilColorPink").addEventListener("click", function () {
        currentPencilColor = "#FFC0CB"; // Pink color
    });

    document.getElementById("pencilColorBrown").addEventListener("click", function () {
        currentPencilColor = "#A52A2A"; // Brown color
    });

    document.getElementById("pencilColorGreen").addEventListener("click", function () {
        currentPencilColor = "#008000"; // Green color
    });

    document.getElementById("pencilColorOrange").addEventListener("click", function () {
        currentPencilColor = "#FFA500"; // Orange color
    });

    document.getElementById("pencilColorPurple").addEventListener("click", function () {
        currentPencilColor = "#800080"; // Purple color
    });
});
