/**
 * Created by cy183 on 2018/5/16.
 */
interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

function area(shape : Shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

document.body.innerHTML =  area( {name: "rectangle", width: 30, height: 15} )+"</br>"+  area( {name: "square", width: 30, height: 30, color: "blue"} );