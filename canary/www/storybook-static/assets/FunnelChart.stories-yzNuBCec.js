import{R as e}from"./iframe-BLYaiTCo.js";import{g as p}from"./utils-ePvtT4un.js";import{b as v}from"./Page-Cj8EiXz7.js";import{a as i,F as y}from"./FunnelChart-SAsYPaDt.js";import{R as b}from"./zIndexSlice-lQffsUG8.js";import{L as E}from"./AnimatedItems-LYPYqGuf.js";import{T as f}from"./Tooltip-wFSg0E6n.js";import{L as C}from"./Legend-Ck2lHFMH.js";import"./preload-helper-Dp1pzeXC.js";import"./omit-Cxbd6ABK.js";import"./isPlainObject-C9oZ4RRL.js";import"./get-C6fkE9tv.js";import"./iteratee-7NILAXQu.js";import"./immer-ILyg-GW3.js";import"./index-DnQ-U2Qg.js";import"./index-BI_7Ub3B.js";import"./d3-scale-B2LK6XqV.js";import"./RechartsWrapper-DuKK4DBL.js";import"./index-CCG5587O.js";import"./index-RDG97xsP.js";import"./renderedTicksSlice-kJn42Rl8.js";import"./axisSelectors-D6Dyr_Wd.js";import"./resolveDefaultProps-DpWzBvps.js";import"./isWellBehavedNumber-BqumoSwm.js";import"./PolarUtils-CTnnDHZv.js";import"./Layer-Cjsn70fL.js";import"./types-B8ff9nYs.js";import"./Trapezoid-Cug_Sku6.js";import"./useAnimationId-e0tJBS7c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7KxHmGn.js";import"./tooltipContext-oF71F9U5.js";import"./RegisterGraphicalItemId-C8Ak7Vaq.js";import"./CategoricalChart-CQ3ECWGQ.js";import"./CartesianChart-C6NG5vyr.js";import"./chartDataContext-Bb8xEPvd.js";import"./Label-BDDWEbHy.js";import"./Text-OjYntAZR.js";import"./DOMUtils-CIYC9pgo.js";import"./ZIndexLayer-BDdQieuE.js";import"./useElementOffset-Cl_EM_xR.js";import"./uniqBy-DSvlr4Gg.js";import"./Curve-DeQy-y-t.js";import"./step-BTBSj6ja.js";import"./path-DyVhHtw_.js";import"./Cross-C7PiT0X4.js";import"./Rectangle-D-pvWCLO.js";import"./Sector-Ca5VXyj7.js";import"./Symbols-CyplAlf4.js";import"./symbol-DzrbmI3Q.js";const l={accessibilityLayer:{description:"Turn on accessibility support for keyboard-only and screen reader users.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},barCategoryGap:{description:"The gap between two bar categories, which can be a percent value or a fixed value.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"10%"}},defaultValue:"10%"},barGap:{description:"The gap between two bars in the same category.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"4"}},defaultValue:4},barSize:{description:`The width or height of each bar. If the barSize is not specified, the size of the
bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,table:{type:{summary:"number | string"},category:"General"}},baseValue:{description:"Configures the starting value used to build the internal baseline for non-ranged, non-stacked areas.\n\nWARNING despite the name `dataMin`|`dataMax` this actually reads the domain instead, so it should rather be\n`domainMin`|`domainMax`. This looks like a small detail,\nbut it's actually important because domains are usually extended automatically.\nFor example the default numerical domain starts from 0.\n\n- `number`: uses the corresponding axis value as a flat baseline\n- `dataMin`: uses the minimum of the value-axis domain\n- `dataMax`: uses the maximum of the value-axis domain\n\nThis uses the same `BaseValue` resolution as the `baseValue` prop on `<Area />`, but acts as a fallback:\nitem-level `Area.baseValue` takes precedence over the chart-level `baseValue`.\n\nIgnored for stacked areas and for ranged areas where `dataKey` already returns `[min, max]` tuples.\n\nNote that the baseValue does not interact with `animationInterpolateFn`;\nbaseValue is always animated by linear interpolation.\nIf you want a custom animation then have your `dataKey` return a tuple of two values instead of a single number\nwhich will also render a ranged Area, and that does work with your custom `animationInterpolateFn`.",table:{type:{summary:'"dataMax" | "dataMin" | number'},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},compact:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},cursor:{description:'The CSS cursor style applied to the chart container.\nUseful for setting the mouse cursor when hovering over the chart (e.g. `"pointer"`, `"crosshair"`).',table:{type:{summary:"(union of 45 variants)"},category:"General"}},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.`,table:{type:{summary:"ReadonlyArray<DataPointType>"},category:"General"}},dataKey:{table:{type:{summary:"Function | number | string"},category:"General"}},desc:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}},id:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},layout:{description:"The layout of chart defines the orientation of axes, graphical items, and tooltip.",table:{type:{summary:'"horizontal" | "vertical"'},category:"General",defaultValue:{summary:"horizontal"}},defaultValue:"horizontal"},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},maxBarSize:{description:"The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},onClick:{description:"The customized event handler of click in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onContextMenu:{description:"The customized event handler of contextmenu in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onDoubleClick:{description:"The customized event handler of dblclick in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup in this chart.",table:{type:{summary:"CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>"},category:"Events"}},onTouchEnd:{description:"The customized event handler of touchend in this chart.",table:{type:{summary:"CategoricalChartFunc<React.TouchEvent<SVGGraphicsElement>>"},category:"Events"}},onTouchMove:{description:"The customized event handler of touchmove in this chart.",table:{type:{summary:"CategoricalChartFunc<React.TouchEvent<SVGGraphicsElement>>"},category:"Events"}},onTouchStart:{description:"The customized event handler of touchstart in this chart.",table:{type:{summary:"CategoricalChartFunc<React.TouchEvent<SVGGraphicsElement>>"},category:"Events"}},ref:{table:{type:{summary:"Function | React.RefObject<SVGSVGElement> | null"},category:"General"}},responsive:{description:`If true, then it will listen to container size changes and adapt the SVG chart accordingly.
If false, then it renders the chart at the specified width and height and will stay that way
even if the container size changes.

This is similar to ResponsiveContainer but without the need for an extra wrapper component.
The \`responsive\` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},reverseStackOrder:{description:"If `false`, stacked items will be rendered left to right.\nIf `true`, stacked items will be rendered right to left.\n\nRender direction affects SVG layering, not x position.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},role:{description:"The ARIA role for the chart, which provides semantic information for screen reader users.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},stackOffset:{description:`The type of offset function used to generate the lower and upper values in the series array.
The types are built-in offsets in d3-shape.
Only applicable for stacked Area or Bar charts.
Has no effect when the stackId prop is not set on Area or Bar components.`,control:{type:"select"},options:["none","sign","expand","wiggle","silhouette","positive"],table:{type:{summary:'"expand" | "none" | "positive" | "sign" | "silhouette" | "wiggle"'},category:"General",defaultValue:{summary:"none"}},defaultValue:"none"},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},syncId:{description:"Charts with the same syncId will synchronize Tooltip and Brush events.",table:{type:{summary:"number | string"},category:"General"}},syncMethod:{description:"Customize how the charts will synchronize tooltips and brushes.\n`index`: synchronize using the data index in the data array. Index expects that all data has the same length.\n`value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).\nfunction: a custom sync method which receives tick and data as argument and returns an index.",table:{type:{summary:'"index" | "value" | Function'},category:"General",defaultValue:{summary:"index"}},defaultValue:"index"},tabIndex:{description:"If and where the chart should appear in the tab order",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},throttleDelay:{description:"Decides the time interval to throttle events.\nOnly events defined in `throttledEvents` prop are throttled.\nAll other events are executed immediately/synchronously.\n\nOptions:\n- `number`: the time interval in milliseconds\n- `'raf'`: use requestAnimationFrame to schedule updates.",table:{type:{summary:'"raf" | number'},category:"General",defaultValue:{summary:"raf"}},defaultValue:"raf"},throttledEvents:{description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,table:{type:{summary:'"all" | Array<keyof GlobalEventHandlersEventMap>'},category:"General",defaultValue:{summary:'["mousemove","touchmove","pointermove","scroll","wheel"]'}},defaultValue:["mousemove","touchmove","pointermove","scroll","wheel"]},title:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},ve={argTypes:l,component:i},r={name:"Simple",render:a=>{const{data:t}=a;return e.createElement(b,{width:"100%",height:200},e.createElement(i,{accessibilityLayer:!0,data:t},e.createElement(y,{dataKey:"value",stroke:"#424242",isAnimationActive:!0,lastShapeType:"rectangle",shape:a.shape,activeShape:a.activeShape},e.createElement(E,{dataKey:"name",fill:"#000",position:"right",stroke:"none"})),e.createElement(f,null)))},args:{...p(l),shape:{},activeShape:{fill:"gold",stroke:"purple"},data:[{fill:"#EEEEEE",name:"A",value:1009},{fill:"#E0E0E0",name:"B",value:903},{fill:"#BDBDBD",name:"C",value:756},{fill:"#9E9E9E",name:"D",value:622},{fill:"#757575",name:"E",value:602},{fill:"#424242",name:"F",value:580},{fill:"#424242",name:"F",value:580}]}},n={render:a=>{const[t,g]=e.useState("amt");return e.createElement(e.Fragment,null,e.createElement("form",{style:{display:"flex",flexDirection:"column"},onChange:o=>"value"in o.target&&typeof o.target.value=="string"&&g(o.target.value)},e.createElement("label",{htmlFor:"dataKey-amt",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-amt",name:"dataKey",value:"amt",defaultChecked:t==="amt"}),"dataKey 1"),e.createElement("label",{htmlFor:"dataKey-pv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-pv",name:"dataKey",value:"pv",defaultChecked:t==="pv"}),"dataKey 2"),e.createElement("label",{htmlFor:"dataKey-empty",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-empty",name:"dataKey",value:"hidden",defaultChecked:t==="hidden"}),"Hidden")),e.createElement(i,{...a},e.createElement(C,null),e.createElement(y,{dataKey:t,fill:"orange",fillOpacity:.5,stroke:"blue",strokeDasharray:"3 3",lastShapeType:"rectangle",label:{dataKey:"name",stroke:"none",fill:"black",strokeDasharray:"0 0"}}),e.createElement(f,null)))},args:{...p(l),data:v,width:360,height:360}};var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data
    } = args;
    return <ResponsiveContainer width="100%" height={200}>
        <FunnelChart accessibilityLayer data={data}>
          <Funnel dataKey="value" stroke="#424242" isAnimationActive lastShapeType="rectangle" shape={args.shape} activeShape={args.activeShape}>
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
          </Funnel>
          <Tooltip />
        </FunnelChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(FunnelChartArgs),
    shape: {},
    activeShape: {
      fill: 'gold',
      stroke: 'purple'
    },
    data: [{
      fill: '#EEEEEE',
      name: 'A',
      value: 1009
    }, {
      fill: '#E0E0E0',
      name: 'B',
      value: 903
    }, {
      fill: '#BDBDBD',
      name: 'C',
      value: 756
    }, {
      fill: '#9E9E9E',
      name: 'D',
      value: 622
    }, {
      fill: '#757575',
      name: 'E',
      value: 602
    }, {
      fill: '#424242',
      name: 'F',
      value: 580
    }, {
      fill: '#424242',
      name: 'F',
      value: 580
    }]
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,h,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('amt');
    return <>
        <form style={{
        display: 'flex',
        flexDirection: 'column'
      }} onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}>
          <label htmlFor="dataKey-amt" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-amt" name="dataKey" value="amt" defaultChecked={dataKey === 'amt'} />
            dataKey 1
          </label>
          <label htmlFor="dataKey-pv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey 2
          </label>
          <label htmlFor="dataKey-empty" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-empty" name="dataKey" value="hidden" defaultChecked={dataKey === 'hidden'} />
            Hidden
          </label>
        </form>
        <FunnelChart {...args}>
          <Legend />
          <Funnel dataKey={dataKey} fill="orange" fillOpacity={0.5} stroke="blue" strokeDasharray="3 3" lastShapeType="rectangle" label={{
          dataKey: 'name',
          stroke: 'none',
          fill: 'black',
          strokeDasharray: '0 0'
        }} />
          <Tooltip />
        </FunnelChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(FunnelChartArgs),
    data: pageDataWithFillColor,
    width: 360,
    height: 360
  }
}`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const be=["API","WithChangingDataKey"];export{r as API,n as WithChangingDataKey,be as __namedExportsOrder,ve as default};
