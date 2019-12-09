
const catable = {
    note: {display: "Note", priority: 9, slug: "note"},
    blog: {display: "Blog", priority: 10, slug: "post"},
    satoshi: {display: "さとし", priority: 0, slug: "satoshi"},
    hiroshi: {display: "ヒロシ", priority: 1, slug: "hiroshi"},
}

function get_func(categories) {
    categories.sort(function(a, b){
        if (catable[a].priority > catable[b].priority) return 1;
        if (catable[a].priority < catable[b].priority) return -1;
    })
    return categories.map((v) => catable[v]);
}

module.exports = {
    get_func,
    catable,
}