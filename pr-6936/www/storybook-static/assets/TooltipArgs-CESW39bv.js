const e={active:{description:`If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.
If false, then Tooltip is never displayed.
If undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},allowEscapeViewBox:{description:"This option allows the tooltip to extend beyond the viewBox of the chart itself.",table:{type:{summary:"AllowInDimension"},category:"General",defaultValue:{summary:'{"x":false,"y":false}'}},defaultValue:{x:!1,y:!1}},animationDuration:{description:"Specifies the duration of animation, the unit of this option is ms.",control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{description:"The type of easing function.",control:{type:"select"},options:["linear","ease","ease-in","ease-out","ease-in-out"],table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"'},category:"Animation",defaultValue:{summary:"ease"}},defaultValue:"ease"},axisId:{description:`Tooltip always attaches itself to the "Tooltip" axis. Which axis is it? Depends on the layout:
- horizontal layout -> X axis
- vertical layout -> Y axis
- radial layout -> radial axis
- centric layout -> angle axis

Tooltip will use the default axis for the layout, unless you specify an axisId.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},content:{description:`Renders the content of the tooltip.

This should return HTML elements, not SVG elements.

- If not set, the {@link DefaultTooltipContent} component is used.
- If set to a React element, this element will be cloned and extra props will be passed in.
- If set to a function, the function will be called and should return HTML elements.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},contentStyle:{description:"The style of tooltip content which is a dom element.",table:{type:{summary:"React.CSSProperties"},category:"Style",defaultValue:{summary:"{}"}},defaultValue:{}},cursor:{description:`If set false, no cursor will be drawn when tooltip is active.
If set a object, the option is the configuration of cursor.
If set a React element, the option is the custom react element of drawing cursor.`,table:{type:{summary:"React.SVGProps<SVGElement> | ReactNode | false | true"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},defaultIndex:{table:{type:{summary:"null | number | string"},category:"General"}},filterNull:{description:"When an item of the payload has value null or undefined, this item won't be displayed.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},formatter:{description:`Function to customize the value in the tooltip.
If you return an array, the first entry will be the formatted "value", and the second entry will be the formatted "name"`,table:{type:{summary:"Formatter<TValue, TName>"},category:"General"}},includeHidden:{description:`If true, the tooltip will display information about hidden series.
Defaults to false.
Interacting with the hide property of Area, Bar, Line, Scatter.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},isAnimationActive:{description:`If set false, animation of tooltip will be disabled.
If set "auto", the animation will be disabled in SSR and enabled in browser.`,table:{type:{summary:'"auto" | false | true'},category:"Animation",defaultValue:{summary:"auto"}},defaultValue:"auto"},itemSorter:{description:"Sorts tooltip items.\nDefaults to 'name' which means it sorts alphabetically by graphical item `name` property.",table:{type:{summary:'"dataKey" | "name" | "value" | Function'},category:"General",defaultValue:{summary:"name"}},defaultValue:"name"},itemStyle:{description:"The style of default tooltip content item which is a li element.",table:{type:{summary:"React.CSSProperties"},category:"Style",defaultValue:{summary:"{}"}},defaultValue:{}},labelClassName:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},labelFormatter:{description:"The formatter function of label in tooltip.",table:{type:{summary:"Function"},category:"General"}},labelStyle:{description:"The style of default tooltip label which is a p element.",table:{type:{summary:"React.CSSProperties"},category:"Style",defaultValue:{summary:"{}"}},defaultValue:{}},offset:{description:`The offset size between the position of tooltip and the mouse cursor position.
When a number is provided, the same offset is applied to both x and y axes.

When a Coordinate object is provided, you can specify different offsets for each axis (x and y as numbers)`,table:{type:{summary:"Coordinate | number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},payloadUniqBy:{table:{type:{summary:"UniqueFunc<TooltipPayloadEntry> | false | true"},category:"General"}},portal:{description:`If portal is defined, then Tooltip will use this element as a target
for rendering using React Portal: https://react.dev/reference/react-dom/createPortal

If this is undefined then Tooltip renders inside the recharts-wrapper element.`,table:{type:{summary:"HTMLElement | null"},category:"General"}},position:{description:`If this field is set, the tooltip will be displayed at the specified position
regardless of the mouse position.

You can set a single field (x or y) and let the other field be calculated automatically based
on the mouse position.`,table:{type:{summary:"Partial<Coordinate>"},category:"General"}},reverseDirection:{table:{type:{summary:"AllowInDimension"},category:"General",defaultValue:{summary:'{"x":false,"y":false}'}},defaultValue:{x:!1,y:!1}},separator:{description:"The separator between name and value.",control:{type:"text"},table:{type:{summary:"string"},category:"General",defaultValue:{summary:" : "}},defaultValue:" : "},shared:{description:`Defines whether the tooltip is reacting to the current data point,
or to all data points at the current axis coordinate.

- \`true\`: tooltip will appear on top of all bars on an axis tick.
- \`false\`: tooltip will appear on individual bars.

Different chart types allow different modes, and have different defaults.`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},trigger:{description:"If `hover` then the Tooltip shows on mouse enter and hides on mouse leave.\n\nIf `click` then the Tooltip shows after clicking and stays active.",table:{type:{summary:'"click" | "hover"'},category:"General",defaultValue:{summary:"hover"}},defaultValue:"hover"},useTranslate3d:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},wrapperClassName:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},wrapperStyle:{description:"CSS styles to be applied to the wrapper `div` element.",table:{type:{summary:"React.CSSProperties"},category:"Style",defaultValue:{summary:"{}"}},defaultValue:{}}};export{e as T};
