export default function inputelement(props) {
    var p = document.createElement('p');
    p.className = "innerParagraph";
    p.innerHTML = props;
    var e = document.getElementById('sidebarElement')
    e.appendChild(p);
}
