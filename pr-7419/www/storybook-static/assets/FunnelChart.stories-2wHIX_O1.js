import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Legend-DiG0OfkN.js";import{n as s,t as c}from"./Tooltip-tAkHHdqP.js";import{_ as l,m as u}from"./AnimatedItems-8WFomZ48.js";import{i as d,n as f,r as p,t as m}from"./FunnelChart-B3P1EgG0.js";import{i as h,t as g}from"./Page-DUsfWi7y.js";import{n as _,t as v}from"./utils-vqcWnakT.js";var y;function b(){return(b=t((()=>{y={accessibilityLayer:{description:`Turn on accessibility support for keyboard-only and screen reader users.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`true`}},defaultValue:!0},barCategoryGap:{description:`The gap between two bar categories, which can be a percent value or a fixed value.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`10%`}},defaultValue:`10%`},barGap:{description:`The gap between two bars in the same category.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`4`}},defaultValue:4},barSize:{description:`The width or height of each bar. If the barSize is not specified, the size of the
bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,table:{type:{summary:`number | string`},category:`General`}},baseValue:{description:"Configures the starting value used to build the internal baseline for non-ranged, non-stacked areas.\n\nWARNING despite the name `dataMin`|`dataMax` this actually reads the domain instead, so it should rather be\n`domainMin`|`domainMax`. This looks like a small detail,\nbut it's actually important because domains are usually extended automatically.\nFor example the default numerical domain starts from 0.\n\n- `number`: uses the corresponding axis value as a flat baseline\n- `dataMin`: uses the minimum of the value-axis domain\n- `dataMax`: uses the maximum of the value-axis domain\n\nThis uses the same `BaseValue` resolution as the `baseValue` prop on `<Area />`, but acts as a fallback:\nitem-level `Area.baseValue` takes precedence over the chart-level `baseValue`.\n\nIgnored for stacked areas and for ranged areas where `dataKey` already returns `[min, max]` tuples.\n\nNote that the baseValue does not interact with `animationInterpolateFn`;\nbaseValue is always animated by linear interpolation.\nIf you want a custom animation then have your `dataKey` return a tuple of two values instead of a single number\nwhich will also render a ranged Area, and that does work with your custom `animationInterpolateFn`.",table:{type:{summary:`"dataMax" | "dataMin" | number`},category:`General`}},children:{table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},compact:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`}},cursor:{description:'The CSS cursor style applied to the chart container.\nUseful for setting the mouse cursor when hovering over the chart (e.g. `"pointer"`, `"crosshair"`).',table:{type:{summary:`(union of 45 variants)`},category:`General`}},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.`,table:{type:{summary:`ReadonlyArray<DataPointType>`},category:`General`}},dataKey:{table:{type:{summary:`Function | number | string`},category:`General`}},desc:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}},id:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},layout:{description:`The layout of chart defines the orientation of axes, graphical items, and tooltip.`,table:{type:{summary:`"horizontal" | "vertical"`},category:`General`,defaultValue:{summary:`horizontal`}},defaultValue:`horizontal`},margin:{description:`Empty space around the container.`,table:{type:{summary:`Partial<Margin>`},category:`General`,defaultValue:{summary:`{"top":5,"right":5,"bottom":5,"left":5}`}},defaultValue:{top:5,right:5,bottom:5,left:5}},maxBarSize:{description:`The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},onClick:{description:`The customized event handler of click in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onContextMenu:{description:`The customized event handler of contextmenu in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onDoubleClick:{description:`The customized event handler of dblclick in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onMouseDown:{description:`The customized event handler of mousedown in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onMouseEnter:{description:`The customized event handler of mouseenter in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onMouseLeave:{description:`The customized event handler of mouseleave in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onMouseMove:{description:`The customized event handler of mousemove in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onMouseUp:{description:`The customized event handler of mouseup in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.MouseEvent<SVGGraphicsElement, MouseEvent>>`},category:`Events`}},onTouchEnd:{description:`The customized event handler of touchend in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.TouchEvent<SVGGraphicsElement>>`},category:`Events`}},onTouchMove:{description:`The customized event handler of touchmove in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.TouchEvent<SVGGraphicsElement>>`},category:`Events`}},onTouchStart:{description:`The customized event handler of touchstart in this chart.`,table:{type:{summary:`CategoricalChartFunc<React.TouchEvent<SVGGraphicsElement>>`},category:`Events`}},ref:{table:{type:{summary:`Function | React.RefObject<SVGSVGElement> | null`},category:`General`}},responsive:{description:`If true, then it will listen to container size changes and adapt the SVG chart accordingly.
If false, then it renders the chart at the specified width and height and will stay that way
even if the container size changes.

This is similar to ResponsiveContainer but without the need for an extra wrapper component.
The \`responsive\` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},reverseStackOrder:{description:"If `false`, stacked items will be rendered left to right.\nIf `true`, stacked items will be rendered right to left.\n\nRender direction affects SVG layering, not x position.",control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},role:{description:`The ARIA role for the chart, which provides semantic information for screen reader users.`,control:{type:`text`},table:{type:{summary:`string`},category:`General`}},stackOffset:{description:`The type of offset function used to generate the lower and upper values in the series array.
The types are built-in offsets in d3-shape.
Only applicable for stacked Area or Bar charts.
Has no effect when the stackId prop is not set on Area or Bar components.`,control:{type:`select`},options:[`none`,`sign`,`expand`,`wiggle`,`silhouette`,`positive`],table:{type:{summary:`"expand" | "none" | "positive" | "sign" | "silhouette" | "wiggle"`},category:`General`,defaultValue:{summary:`none`}},defaultValue:`none`},style:{table:{type:{summary:`React.CSSProperties`},category:`Style`}},syncId:{description:`Charts with the same syncId will synchronize Tooltip and Brush events.`,table:{type:{summary:`number | string`},category:`General`}},syncMethod:{description:"Customize how the charts will synchronize tooltips and brushes.\n`index`: synchronize using the data index in the data array. Index expects that all data has the same length.\n`value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).\nfunction: a custom sync method which receives tick and data as argument and returns an index.",table:{type:{summary:`"index" | "value" | Function`},category:`General`,defaultValue:{summary:`index`}},defaultValue:`index`},tabIndex:{description:`If and where the chart should appear in the tab order`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},throttleDelay:{description:`Decides the time interval to throttle events.
Only events defined in \`throttledEvents\` prop are throttled.
All other events are executed immediately/synchronously.

Options:
- \`number\`: the time interval in milliseconds
- \`'raf'\`: use requestAnimationFrame to schedule updates.`,table:{type:{summary:`"raf" | number`},category:`General`,defaultValue:{summary:`raf`}},defaultValue:`raf`},throttledEvents:{description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,table:{type:{summary:`"all" | Array<keyof GlobalEventHandlersEventMap>`},category:`General`,defaultValue:{summary:`["mousemove","touchmove","pointermove","scroll","wheel"]`}},defaultValue:[`mousemove`,`touchmove`,`pointermove`,`scroll`,`wheel`]},title:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:`General`}}}})))()}var x,S,C,w,T;function E(){return(E=t((()=>{x=e(n()),d(),f(),l(),a(),i(),s(),_(),g(),b(),S={argTypes:y,component:m},C={name:`Simple`,render:e=>{let{data:t}=e;return x.createElement(r,{width:`100%`,height:200},x.createElement(m,{accessibilityLayer:!0,data:t},x.createElement(p,{dataKey:`value`,stroke:`#424242`,isAnimationActive:!0,lastShapeType:`rectangle`,shape:e.shape,activeShape:e.activeShape},x.createElement(u,{dataKey:`name`,fill:`#000`,position:`right`,stroke:`none`})),x.createElement(c,null)))},args:{...v(y),shape:{},activeShape:{fill:`gold`,stroke:`purple`},data:[{fill:`#EEEEEE`,name:`A`,value:1009},{fill:`#E0E0E0`,name:`B`,value:903},{fill:`#BDBDBD`,name:`C`,value:756},{fill:`#9E9E9E`,name:`D`,value:622},{fill:`#757575`,name:`E`,value:602},{fill:`#424242`,name:`F`,value:580},{fill:`#424242`,name:`F`,value:580}]}},w={render:e=>{let[t,n]=x.useState(`amt`);return x.createElement(x.Fragment,null,x.createElement(`form`,{style:{display:`flex`,flexDirection:`column`},onChange:e=>`value`in e.target&&typeof e.target.value==`string`&&n(e.target.value)},x.createElement(`label`,{htmlFor:`dataKey-amt`,style:{display:`flex`,flexDirection:`row`}},x.createElement(`input`,{type:`radio`,id:`dataKey-amt`,name:`dataKey`,value:`amt`,defaultChecked:t===`amt`}),`dataKey 1`),x.createElement(`label`,{htmlFor:`dataKey-pv`,style:{display:`flex`,flexDirection:`row`}},x.createElement(`input`,{type:`radio`,id:`dataKey-pv`,name:`dataKey`,value:`pv`,defaultChecked:t===`pv`}),`dataKey 2`),x.createElement(`label`,{htmlFor:`dataKey-empty`,style:{display:`flex`,flexDirection:`row`}},x.createElement(`input`,{type:`radio`,id:`dataKey-empty`,name:`dataKey`,value:`hidden`,defaultChecked:t===`hidden`}),`Hidden`)),x.createElement(m,e,x.createElement(o,null),x.createElement(p,{dataKey:t,fill:`orange`,fillOpacity:.5,stroke:`blue`,strokeDasharray:`3 3`,lastShapeType:`rectangle`,label:{dataKey:`name`,stroke:`none`,fill:`black`,strokeDasharray:`0 0`}}),x.createElement(c,null)))},args:{...v(y),data:h,width:360,height:360}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`API`,`WithChangingDataKey`]})))()}E();export{C as API,w as WithChangingDataKey,T as __namedExportsOrder,S as default};