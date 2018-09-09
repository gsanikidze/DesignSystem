export default {
    ui_vars: {
        title: "ui_vars.scss - User Interface Variables",
        description: 'In This File Are Stored All Main Variables In User Interface And The Other scss Files Are Receiving This Variables. You Can Change This Variables and Then All User Interface Will Be Updated. For Example You Can Change $color_primary variable with your brand color and UI will be updated with your brand color.',
        file_content: [
            { 'color': 'In This Section Are Stored All Colors.' },
            { 'measurement': 'This section contains 3 type of variables. $unit_... -  this is main measurement units, without measurement type (just numbers 8, 16...). $sizing_px_... - sizes in pixel, base on $unit_... variables. $sizing_pr_... (sizes in percent, base on $unit_... variables).' },
            { 'typography': 'There Are Stored Primary and Secondary Font Faces, Font Sizes Base on $unit... variables. Also Font weight and line height variables.' },
            { 'radius': 'Border Radiuses Base on $unit... variables.' },
        ]
    },
    mixins: {
        title: "mixins.scss - Mixins",
        description: 'In This File Are Stored All Mixins In User Interface And The Other scss Files Are Receiving This Mixins. You Can Change This Mixins and Then All User Interface Will Be Updated. '
    },
    main: {
        title: "main.scss - Adds Default Styles."
    },
    reset: {
        title: "reset.scss - Simple Resets Default Styles in Browser."
    }
}