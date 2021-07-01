window.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('mousedown', evt => {
        const { target } = evt;
        const attr = Object.assign({}, target.dataset);

        if(attr.draggable) {
            chrome.webview.hostObjects.sync.eventForwarder.MouseDownDrag();
            evt.preventDefault();
            evt.stopPropagation();
        }
    });
});