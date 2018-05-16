/**
 * Created by cy183 on 2018/5/16.
 */
function area(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
document.body.innerHTML = area("rectangle", 30, 15);
