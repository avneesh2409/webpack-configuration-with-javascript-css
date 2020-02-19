
export function outerparagraph(props) {
    var outer = document.createElement('p');
    outer.innerHTML = props;
    document.getElementById('outerP').appendChild(outer);
}
