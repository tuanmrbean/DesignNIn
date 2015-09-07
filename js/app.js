var canvas = new fabric.Canvas('c', {
    selection: false
});
var grid = 20;

// create grid
for (var i = 0; i < (canvas.width / grid); i++) {
    //Vertical lines
    canvas.add(new fabric.Line([i * grid, 0, i * grid, canvas.height], {
        stroke: '#ccc',
        selectable: false
    }));
}
for (var i = 0; i < (canvas.height / grid); i++) {
    //Horizontal lines
    canvas.add(new fabric.Line([0, i * grid, canvas.width, i * grid], {
        stroke: '#ccc',
        selectable: false
    }))
}

// add objects
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 135,
    height: 135,
    fill: '#006699',
    originX: 'left',
    originY: 'top',
    centeredRotation: true
});
canvas.add(rect);
// rect pattern
fabric.util.loadImage('images/rect_pattern.png', function(img) {
    rect.fill = new fabric.Pattern({
        source: img,
        //repeat: 'repeat'
    });
    canvas.renderAll();
});
var rect1 = new fabric.Rect({
    left: 100,
    top: 300,
    width: 135,
    height: 135,
    fill: '#006699',
    originX: 'left',
    originY: 'top',
    centeredRotation: true
});
canvas.add(rect1);
fabric.util.loadImage('images/circle_pattern.png', function(img) {
    rect1.fill = new fabric.Pattern({
        source: img,
        //repeat: 'repeat'
    });
    canvas.renderAll();
});
// snap to grid
canvas.on('object:moving', function (options) {
    options.target.set({
        left: Math.round(options.target.left / grid) * grid,
        top: Math.round(options.target.top / grid) * grid
    });
});