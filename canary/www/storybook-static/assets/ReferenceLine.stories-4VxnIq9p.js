import{e}from"./iframe-CKmpfOpL.js";import{g as a}from"./utils-ePvtT4un.js";import{G as r}from"./Styles-CVZG1vZQ.js";import{a as p,R as d}from"./ReferenceComponentShared-DZzhp0Ft.js";import{R as i}from"./ReferenceLine-DC7_iR40.js";import{R as y}from"./arrayEqualityCheck-CGTamc7H.js";import{C as f}from"./ComposedChart-CicuSwT1.js";import{C as u}from"./CartesianGrid-Cq5KhU9R.js";import{X as b}from"./XAxis-BBRqfJxe.js";import{Y as h}from"./YAxis-ho-us9Q5.js";import{L as g}from"./Line-DaQHc97g.js";import{R as x}from"./RechartsHookInspector-DZtkbE0Z.js";import{p as w}from"./Page-Cj8EiXz7.js";const l={...d,x:{description:`If set a string or a number, a vertical line perpendicular to the x-axis specified by xAxisId
    will be drawn. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis
    is a category axis, the value of x must be one of the categories, otherwise no line will be drawn.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`If set a string or a number, a horizontal line perpendicular to the y-axis specified by yAxisId
    will be drawn. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis
    is a category axis, the value of y must be one of the categories, otherwise no line will be drawn.`,table:{type:{summary:"number | string"},category:"General"}},segment:{description:"Array of endpoints in { x, y } format. These endpoints would be used to draw the line.",table:{type:{summary:"array"},category:"General"}}},R={label:{description:`If set a string or a number, default label will be drawn, and the option is content.
    If set a React element, the option is the custom react element of drawing label. If set a function,
    the function will be called to render customized label.`,defaultValue:!1,table:{type:{summary:"string | number | ReactElement | Function",detail:`<ReferenceLine x="05" label="Middle" />
<ReferenceLine y={400} yAxisId="left" label={<CustomizedLabel />} />`},category:"Label"}}},m={...p,stroke:{...r.stroke,defaultValue:"#ccc"},strokeWidth:r.strokeWidth,strokeDasharray:r.strokeDasharray,position:{description:"Defines at which position of an axis point the line will start/end if the axis does not have type 'number'.",defaultValue:"middle",table:{type:{summary:"'start' | 'middle' | 'end'"},category:"Style"}},shape:{description:`If set a ReactElement, the shape of the line can be customized. If set a function,
    the function will be called to render a customized shape.`,table:{type:{summary:"ReactElement | Function"},category:"Style"}}},A={argTypes:{...l,...R,...m,dangerouslySetInnerHTML:{table:{category:"Deprecated"},hide:!0,disable:!0}},component:i},t={render:c=>e.createElement(y,{width:"100%",height:500},e.createElement(f,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(b,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...c}),e.createElement(g,{dataKey:"uv"}),e.createElement(x,null))),args:{...a(l),...a(m),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    y: 1520,
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: 'My example label'
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const I=["API"],j=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:I,default:A},Symbol.toStringTag,{value:"Module"}));export{t as A,j as C};
