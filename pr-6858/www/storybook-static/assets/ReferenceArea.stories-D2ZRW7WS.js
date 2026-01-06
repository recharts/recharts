import{e}from"./iframe-DP2mOMln.js";import{r as m}from"./RectangleProps-FnvMdhCT.js";import{ag as l,ah as f,ad as u,ab as c,af as d,a9 as p,aj as y,bl as h}from"./EventHandlers-CQuYL328.js";import{G as b}from"./Styles-CVZG1vZQ.js";import{R as g,a as x}from"./ReferenceComponentShared-DZzhp0Ft.js";import{g as A}from"./utils-ePvtT4un.js";import{R as s}from"./ReferenceArea-CCcwxqAC.js";import{R as v}from"./arrayEqualityCheck-5iTHPuD6.js";import{C as I}from"./ComposedChart-D-mUb2sk.js";import{C as R}from"./CartesianGrid-CwGJdEIL.js";import{X as C}from"./XAxis-B_VQg86f.js";import{Y as w}from"./YAxis-WXcImUvg.js";import{L as E}from"./Line-7aVkqytC.js";import{R as S}from"./RechartsHookInspector-DVpbP7qM.js";import{p as k}from"./Page-Cj8EiXz7.js";const G={...b,...x,label:{description:`If set a string or a number, default label will be drawn, and the option is content.
    If set a React element, the option is the custom react element of drawing label. If set a function,
    the function will be called to render customized label.`,defaultValue:!1,table:{type:{summary:"String | Number | ReactElement | Function",detail:`<ReferenceArea x1="01" x2="08" label="MAX"/>
<ReferenceArea y1={100} y2={500} label={<CustomizedLabel />}/>`},category:"Style"}},shape:{description:"Renders a svg returned by the react element or function.\n    If undefined, it will default to rectangle controlled by other props, like `radius` and `strokeWidth`.",table:{type:{summary:"ReactElement | Function | undefined",detail:"<ReferenceArea shape={<CustomSvgShape/>}/>"},category:"Style"}}},M={...g,x1:{description:`A boundary value of the area. If the specified x-axis is a number axis, the type of x
      must be Number. If the specified x-axis is a category axis, the value of x must be one of the
      categories. If x1 is not set, the first value on the x-axis is used instead. If one of x1 or x2
      is invalid, the area will not be drawn.`,table:{type:{summary:"string | number"},category:"General"}},x2:{description:`A boundary value of the area. If the specified x-axis is a number axis, the type of x
    must be Number. If the specified x-axis is a category axis, the value of x must be one of the
    categories. If x2 is not set, the last value on the x-axis is used instead. If one of x1 or x2 is
    invalid, the area will not be drawn.`,table:{type:{summary:"string | number"},category:"General"}},y1:{description:`A boundary value of the area. If the specified y-axis is a number axis, the type of y
    must be Number. If the specified y-axis is a category axis, the value of y must be one of the
    categories. If y1 is not set, the first value on the y-axis is used instead. If one of y1 or y2 is
    invalid, the area will not be drawn.`,table:{type:{summary:"string | number"},category:"General"}},y2:{description:`A boundary value of the area. If the specified y-axis is a number axis, the type of y
    must be Number. If the specified y-axis is a category axis, the value of y must be one of the
    categories. If y2 is not set, the last value on the y-axis is used instead. If one of y1 or y2 is
    invalid, the area will not be drawn.`,table:{type:{summary:"string | number"},category:"General"}}},n={...G,...M,radius:m,onClick:h,onMouseDown:y,onMouseUp:p,onMouseMove:d,onMouseOver:c,onMouseOut:u,onMouseEnter:f,onMouseLeave:l},O={argTypes:n,component:s},t={render:i=>e.createElement(v,{width:"100%",height:500},e.createElement(I,{data:k,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(R,{strokeDasharray:"3 3"}),e.createElement(C,{dataKey:"name"}),e.createElement(w,{type:"number"}),e.createElement(E,{dataKey:"uv"}),e.createElement(s,{...i}),e.createElement(S,null))),args:{...A(n),x1:"Page B",x2:"Page E",y1:1e3,y2:1500,stroke:"red",strokeOpacity:.3}};var a,r,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(referenceAreaArgTypes),
    x1: 'Page B',
    x2: 'Page E',
    y1: 1000,
    y2: 1500,
    stroke: 'red',
    strokeOpacity: 0.3
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const P=["API"],W=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:P,default:O},Symbol.toStringTag,{value:"Module"}));export{t as A,W as C};
