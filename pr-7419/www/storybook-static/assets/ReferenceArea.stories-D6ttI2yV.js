import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./ReferenceArea-BXOtZgUB.js";import{n as s,t as c}from"./CartesianGrid-C0BAtXH9.js";import{n as l,t as u}from"./Line---TR8N4V.js";import{n as d,t as f}from"./XAxis-BC2eC402.js";import{n as p,t as m}from"./YAxis-Ch1VfSce.js";import{n as h,t as g}from"./ComposedChart-CZOHGVI-.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";import{n as y,t as b}from"./utils-vqcWnakT.js";var x;function S(){return(S=t((()=>{x={children:{table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:`"discard" | "extendDomain" | "hidden" | "visible"`},category:`General`,defaultValue:{summary:`discard`}},defaultValue:`discard`},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:`(union of 6 variants)`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},onClick:{description:`The customized event handler of click on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseDown:{description:`The customized event handler of mousedown on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseEnter:{description:`The customized event handler of mouseenter on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseLeave:{description:`The customized event handler of mouseleave on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseMove:{description:`The customized event handler of mousemove on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOut:{description:`The customized event handler of mouseout on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseOver:{description:`The customized event handler of mouseover on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},onMouseUp:{description:`The customized event handler of mouseup on the rectangle`,table:{type:{summary:`React.MouseEventHandler<T>`},category:`Events`}},radius:{description:`The radius of corners.

If you provide a single number, it applies to all four corners.
If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.`,table:{type:{summary:`[number, number, number, number] | number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},shape:{description:`If set a ReactElement, the shape of the reference area can be customized.
If set a function, the function will be called to render customized shape.`,table:{type:{summary:`Function | ReactNode`},category:`General`}},x1:{description:`Starting X-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the left edge of the chart plot area.`,table:{type:{summary:`number | string`},category:`General`}},x2:{description:`Ending X-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the right edge of the chart plot area.`,table:{type:{summary:`number | string`},category:`General`}},xAxisId:{description:`The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},y1:{description:`Starting Y-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the top edge of the chart plot area.`,table:{type:{summary:`number | string`},category:`General`}},y2:{description:`Ending Y-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the bottom edge of the chart plot area.`,table:{type:{summary:`number | string`},category:`General`}},yAxisId:{description:`The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`100`}},defaultValue:100}}})))()}var C,w,T,E;function D(){return(D=t((()=>{C=e(n()),s(),h(),l(),a(),i(),d(),p(),v(),y(),S(),w={argTypes:x,component:o},T={render:e=>C.createElement(r,{width:`100%`,height:500},C.createElement(g,{data:_,margin:{top:5,right:30,left:20,bottom:5}},C.createElement(c,{strokeDasharray:`3 3`}),C.createElement(f,{dataKey:`name`}),C.createElement(m,{type:`number`}),C.createElement(u,{dataKey:`uv`}),C.createElement(o,e))),args:{...b(x),x1:`Page B`,x2:`Page E`,y1:1e3,y2:1500,stroke:`red`,strokeOpacity:.3}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceArea {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceAreaArgs),
    x1: 'Page B',
    x2: 'Page E',
    y1: 1000,
    y2: 1500,
    stroke: 'red',
    strokeOpacity: 0.3
  }
}`,...T.parameters?.docs?.source}}},E=[`API`]})))()}D();export{T as API,E as __namedExportsOrder,w as default};