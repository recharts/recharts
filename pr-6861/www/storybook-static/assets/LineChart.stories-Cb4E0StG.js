import{r as s,e}from"./iframe-BzK4IM4O.js";import{g as b}from"./utils-ePvtT4un.js";import{L as n}from"./LineChart-m8pMGU70.js";import{R as k}from"./arrayEqualityCheck-DntSlYRe.js";import{L as i}from"./Line-BDor0g31.js";import{R as f}from"./RechartsHookInspector-Blpd2IS8.js";import{X as c}from"./XAxis-BEioX7l9.js";import{T as u}from"./Tooltip-DG0VLx16.js";import{p as v}from"./Page-DPte-9pC.js";const l={accessibilityLayer:{description:"Turn on accessibility support for keyboard-only and screen reader users.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},barCategoryGap:{description:"The gap between two bar categories, which can be a percent value or a fixed value.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"10%"}},defaultValue:"10%"},barGap:{description:"The gap between two bars in the same category.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"4"}},defaultValue:4},barSize:{description:`The width or height of each bar. If the barSize is not specified, the size of the
bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,table:{type:{summary:"number | string"},category:"General"}},baseValue:{description:"The base value of area.",table:{type:{summary:'"dataMax" | "dataMin" | number'},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},compact:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.`,table:{type:{summary:"ReadonlyArray<unknown>"},category:"General"}},dataKey:{table:{type:{summary:"Function | number | string"},category:"General"}},desc:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}},id:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},layout:{description:"The layout of chart defines the orientation of axes, graphical items, and tooltip.",table:{type:{summary:'"horizontal" | "vertical"'},category:"General",defaultValue:{summary:"horizontal"}},defaultValue:"horizontal"},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:'{"top":5,"right":5,"bottom":5,"left":5}'},maxBarSize:{description:"The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},onClick:{description:"The customized event handler of click in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onContextMenu:{description:"The customized event handler of contextmenu in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onDoubleClick:{description:"The customized event handler of dblclick in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchEnd:{description:"The customized event handler of touchend in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchMove:{description:"The customized event handler of touchmove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchStart:{description:"The customized event handler of touchstart in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},responsive:{description:`If true, then it will listen to container size changes and adapt the SVG chart accordingly.
If false, then it renders the chart at the specified width and height and will stay that way
even if the container size changes.

This is similar to ResponsiveContainer but without the need for an extra wrapper component.
The \`responsive\` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},reverseStackOrder:{description:"If `false`, stacked items will be rendered left to right.\nIf `true`, stacked items will be rendered right to left.\n\nRender direction affects SVG layering, not x position.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},role:{description:"The ARIA role for the chart, which provides semantic information for screen reader users.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},stackOffset:{description:`The type of offset function used to generate the lower and upper values in the series array.
The types are built-in offsets in d3-shape.
Only applicable for stacked Area or Bar charts.
Has no effect when the stackId prop is not set on Area or Bar components.`,control:{type:"select"},options:["none","sign","expand","wiggle","silhouette","positive"],table:{type:{summary:'"expand" | "none" | "positive" | "sign" | "silhouette" | "wiggle"'},category:"General",defaultValue:{summary:"none"}},defaultValue:"none"},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},syncId:{description:"Charts with the same syncId will synchronize Tooltip and Brush events.",table:{type:{summary:"number | string"},category:"General"}},syncMethod:{description:"Customize how the charts will synchronize tooltips and brushes.\n`index`: synchronize using the data index in the data array. Index expects that all data has the same length.\n`value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).\nfunction: a custom sync method which receives tick and data as argument and returns an index.",table:{type:{summary:'"index" | "value" | Function'},category:"General",defaultValue:{summary:"index"}},defaultValue:"index"},tabIndex:{description:"If and where the chart should appear in the tab order",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},throttleDelay:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},title:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},x={argTypes:l,component:n},t={name:"Simple",render:r=>{const[C,o]=s.useState(!1),T=s.useCallback(()=>{o(!0)},[o]),w=s.useCallback(()=>{o(!1)},[o]);return e.createElement(k,{width:"100%",height:400},e.createElement(n,{...r},e.createElement(i,{onMouseEnter:T,onMouseLeave:w,dataKey:"uv",strokeWidth:C?8:4,animationDuration:5e3}),e.createElement(f,null)))},args:{...b(l),data:v}},a={render:r=>e.createElement("div",null,e.createElement(n,{...r,id:"BookOne",className:"BookOne"},e.createElement(i,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(c,{dataKey:"name"}),e.createElement(u,{active:!0}),e.createElement(f,null)),e.createElement(n,{...r,id:"BookTwo",className:"BookTwo"},e.createElement(i,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(c,{dataKey:"name"}),e.createElement(u,null))),args:{...b(l),data:v,syncId:"example-syncId",width:400,height:400}};var m,d,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var y,p,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
          <RechartsHookInspector />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const E=["API","SynchronizedTooltip"],F=Object.freeze(Object.defineProperty({__proto__:null,API:t,SynchronizedTooltip:a,__namedExportsOrder:E,default:x},Symbol.toStringTag,{value:"Module"}));export{t as A,F as C};
