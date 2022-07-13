let dom = <div id='box'>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>

function dom2tree(dom) {
    const obj = {}
    obj.tag = dom.tagName
    obj.children = []
    dom.childNodes.forEach(child => obj.children.push(dom2tree(child)))
    return obj
}

console.log(dom2tree(document.getElementById('box')))
