import{e}from"./iframe-C75Mon5f.js";import{g as r}from"./utils-ePvtT4un.js";import{bG as c}from"./EventHandlers-CQuYL328.js";import{r as p}from"./DotProps-CypICsmY.js";import{G as f}from"./Styles-CVZG1vZQ.js";import{R as d,a as y}from"./ReferenceComponentShared-DZzhp0Ft.js";import{R as n}from"./ReferenceDot-Dnm38q9e.js";import{R as b}from"./arrayEqualityCheck-CCinF1xg.js";import{C as u}from"./ComposedChart-ZGVCoeE1.js";import{C as g}from"./CartesianGrid-q5_-yTof.js";import{X as h}from"./XAxis-D7rtUFHm.js";import{Y as x}from"./YAxis-BkOESioE.js";import{B as R}from"./Bar-C1CjDvQG.js";import{R as A}from"./RechartsHookInspector-DeYlN7PD.js";import{p as C}from"./Page-Cj8EiXz7.js";const i={...d,x:{description:`If the x-axis specified by xAxisId is a number axis, the type of x must be Number.
      If the x-axis specified by xAxisId is a category axis, the value of x must be one of
      the categories, otherwise no dot will be drawn.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`If the y-axis specified by yAxisId is a number axis, the type of y must be Number.
      If the y-axis specified by yAxisId is a category axis, the value of y must be one of
      the categories, otherwise no dot will be drawn.`,table:{type:{summary:"number | string"},category:"General"}}},I={label:{description:`If set a string or a number, default label will be drawn, and the option is content.
    If set a React element, the option is the custom react element of drawing label. If set a function,
    the function will be called to render customized label.`,defaultValue:!1,table:{type:{summary:"string | number | ReactElement | Function",detail:`<ReferenceDot x="a" y={400} label="MAX"/>
<ReferenceDot x="a" y={400} label={<CustomizedLabel />}/>
<ReferenceDot x="a" y={400} label={renderLabel} />`},category:"Label"}}},m={...f,...y,shape:{description:`If set a ReactElement, the shape of the dot can be customized. If set a function,
    the function will be called to render a customized shape.`,table:{type:{summary:"ReactElement | Function"},category:"Style"}}},E={argTypes:{...m,...i,...I,...c,r:p},component:n},t={render:l=>e.createElement(b,{width:"100%",height:500},e.createElement(u,{data:C,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(h,{dataKey:"name"}),e.createElement(x,{type:"number"}),e.createElement(R,{type:"monotone",dataKey:"uv"}),e.createElement(n,{...l}),e.createElement(A,null))),args:{...r(i),...r(m),x:"Page E",y:1520,r:20,stroke:"red",fill:"teal",label:{fill:"red",fontSize:20}}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <Bar type="monotone" dataKey="uv" />
          <ReferenceDot {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    x: 'Page E',
    y: 1520,
    r: 20,
    stroke: 'red',
    fill: 'teal',
    label: {
      fill: 'red',
      fontSize: 20
    }
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const S=["API"],B=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{t as A,B as C};
