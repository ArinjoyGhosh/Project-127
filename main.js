srk = 'Darr Kiran.mp3';
bshah = 'shehar ki ladki.mp3';
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(425, 210);

    camera = createCapture(VIDEO);
    camera.position(canvas.x, canvas.y);
}

function preload() {
    loadSound(srk);
    loadSound(bshah);
}