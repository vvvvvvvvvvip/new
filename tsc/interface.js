function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
document.body.innerHTML = area({ name: "rectangle", width: 30, height: 15 }) + "</br>" + area({ name: "square", width: 30, height: 30, color: "blue" });
