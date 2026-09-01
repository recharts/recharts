import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./ReferenceLine-CPZnbrex.js";import{n as s,t as c}from"./CartesianGrid-D3Nuobx9.js";import{n as l,t as u}from"./Line-CGcNDODy.js";import{n as d,t as f}from"./XAxis-DaKmDvZB.js";import{n as p,t as m}from"./YAxis-DFF_vhTk.js";import{n as h,t as g}from"./ComposedChart-BMuDWuTx.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";import{n as y,t as b}from"./utils-vqcWnakT.js";var x;function S(){return(S=t((()=>{x={className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:`"discard" | "extendDomain" | "hidden" | "visible"`},category:`General`,defaultValue:{summary:`discard`}},defaultValue:`discard`},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:`(union of 6 variants)`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:`select`},options:[`end`,`middle`,`start`],table:{type:{summary:`"end" | "middle" | "start"`},category:`General`,defaultValue:{summary:`middle`}},defaultValue:`middle`},segment:{description:`Tuple of coordinates. If defined, renders a diagonal line segment.`,table:{type:{summary:`[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]`},category:`General`}},shape:{table:{type:{summary:`Function | ReactNode`},category:`General`}},strokeWidth:{description:`The width of the stroke`,table:{type:{summary:`number | string`},category:`Style`}},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:`number | string`},category:`General`}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:`number | string`},category:`General`}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`400`}},defaultValue:400}}})))()}var C,w,T,E;function D(){return(D=t((()=>{C=e(n()),h(),l(),a(),s(),d(),p(),i(),v(),y(),S(),w={argTypes:x,component:o},T={render:e=>C.createElement(r,{width:`100%`,height:500},C.createElement(g,{data:_,margin:{top:5,right:30,left:20,bottom:5}},C.createElement(c,{strokeDasharray:`3 3`}),C.createElement(f,{dataKey:`name`}),C.createElement(m,{type:`number`}),C.createElement(o,e),C.createElement(u,{dataKey:`uv`}))),args:{...b(x),y:1520,stroke:`blue`,strokeWidth:2,strokeDasharray:`4 1`,label:`My example label`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
          <ReferenceLine {...args} />
          <Line dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceLineArgs),
    y: 1520,
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: 'My example label'
  }
}`,...T.parameters?.docs?.source}}},E=[`API`]})))()}D();export{T as API,E as __namedExportsOrder,w as default};