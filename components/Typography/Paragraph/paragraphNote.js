export default {
    title: "Paragraph Component",
    description: 'Simple Component, Receives Children And Then Returns It.',
    props: [
        { 'children': 'Text Between Paragraph Tags' },
        { 'id': 'You Can Pass Id, For Future Reasons (styles, dom manipulation...)' },
        { 'className': 'You Can Pass className, For Future Reasons (styles, dom manipulation...)' },
        { 'size': 'Size Has 3 Variants: tiny, base (default) and large' },
        { 'onDarkBackground': 'Boolean, if true its returns white Paragraph' },
        { 'uppercase': 'Boolean, if true its returns uppercase Paragraph' },
        { 'bold': 'Boolean, if true its returns bold Paragraph' },
        { 'style': 'Style Object, Pass into Component' }
    ]
}