export default {
    title: "Title Component",
    description: 'Simple Title Component, Receives Children And Then Returns It.',
    props: [
        { 'children': 'Text Between Title Tags' },
        { 'id': 'You Can Pass Id, For Future Reasons (styles, dom manipulation...)' },
        { 'className': 'You Can Pass className, For Future Reasons (styles, dom manipulation...)' },
        { 'size': 'Size Has 3 Variants: tiny, base (default) and large' },
        { 'onDarkBackground': 'Boolean, if true its returns white title' },
        { 'uppercase': 'Boolean, if true its returns uppercase title' },
        { 'style': 'Style Object, Pass into Component' }
    ]
}