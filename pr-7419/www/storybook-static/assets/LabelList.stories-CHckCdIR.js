import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{_ as a,m as o}from"./AnimatedItems-DdWnOKJL.js";import{n as s,t as c}from"./PolarGrid-DMtKlK5C.js";import{n as l,t as u}from"./PolarRadiusAxis-CHzBJKXB.js";import{n as d,t as f}from"./PolarAngleAxis-BkWUnbsr.js";import{n as p,t as m}from"./Radar-CNbB0c0g.js";import{n as h,t as g}from"./CartesianGrid-C0BAtXH9.js";import{n as _,t as v}from"./Line---TR8N4V.js";import{n as y,t as b}from"./Bar-CQB3-sR3.js";import{n as x,t as S}from"./XAxis-BC2eC402.js";import{n as C,t as w}from"./YAxis-Ch1VfSce.js";import{n as T,t as E}from"./LineChart-DFJO6Y-4.js";import{n as D,t as O}from"./BarChart-CpIQPN2H.js";import{n as k,t as A}from"./RadarChart-C_Y50zug.js";import{r as j,s as M,t as N}from"./Page-DUsfWi7y.js";import{n as P,t as F}from"./utils-vqcWnakT.js";var I;function L(){return(L=t((()=>{I={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},clockWise:{description:`The parameter to calculate the view box of label in radial charts.`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`}},content:{description:"If set a React element, the option is the customized React element of rendering each label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set to a function, the function is called once for each item",table:{type:{summary:`Function | ReactNode`},category:`General`}},dataKey:{description:`Decides how to extract the value of each label from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of each label.

If set, then valueAccessor will be ignored.

Scatter requires this prop to be set.
Other graphical components will show the same value as the dataKey of the component by default.`,table:{type:{summary:`Function | number | string`},category:`General`}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:`Function`},category:`General`}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:`text`},table:{type:{summary:`string`},category:`General`}},offset:{description:`The offset to the specified "position".
Direction of the offset depends on the position.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`5`}},defaultValue:5},position:{description:`The position of label relative to the view box.`,table:{type:{summary:`"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }`},category:`General`,defaultValue:{summary:`middle`}},defaultValue:`middle`},textBreakAll:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},valueAccessor:{description:`The accessor function to get the value of each label. Is ignored if dataKey is specified.`,table:{type:{summary:`Function`},category:`General`}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`2000`}},defaultValue:2e3}}})))()}var R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{R=e(n()),y(),D(),h(),a(),_(),T(),d(),s(),l(),p(),k(),i(),x(),C(),N(),P(),L(),z={argTypes:I,component:o},B={render:e=>{let[t,n]=[600,300];return R.createElement(r,{width:`100%`,height:n},R.createElement(E,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:j},R.createElement(S,{dataKey:`name`}),R.createElement(w,null),R.createElement(v,{dataKey:`uv`},R.createElement(o,e))))},args:{...F(I),dataKey:`uv`,position:`top`,offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},V={render:e=>{let[t,n]=[600,300];return R.createElement(r,{width:`100%`,height:n},R.createElement(O,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:j},R.createElement(g,{strokeDasharray:`3 3`}),R.createElement(S,{dataKey:`name`}),R.createElement(w,null),R.createElement(b,{dataKey:`uv`,fill:`#8884d8`},R.createElement(o,e))))},args:{...F(I),dataKey:`uv`,position:`top`,offset:5}},H={render:e=>R.createElement(A,{width:500,height:400,data:M},R.createElement(c,null),R.createElement(f,{dataKey:`subject`}),R.createElement(u,null),R.createElement(m,{name:`A`,dataKey:`A`,stroke:`#8884d8`,fill:`#8884d8`,fillOpacity:.6},R.createElement(o,e))),args:{...F(I),dataKey:`A`,position:`outside`,clockWise:!0}},U={render:e=>{let t=e=>{let{x:t,y:n,width:r,value:i}=e;if(i==null)return null;let a=Number(t)+Number(r)/2,o=Number(n)-14;return R.createElement(`g`,null,R.createElement(`circle`,{cx:a,cy:o,r:10,fill:`#8884d8`}),R.createElement(`text`,{x:a,y:o,fill:`#fff`,textAnchor:`middle`,dominantBaseline:`middle`,fontSize:10},i))},[n,i]=[600,300];return R.createElement(r,{width:`100%`,height:i},R.createElement(O,{width:n,height:i,margin:{top:30,right:20,bottom:20,left:20},data:j},R.createElement(g,{strokeDasharray:`3 3`}),R.createElement(S,{dataKey:`name`}),R.createElement(w,null),R.createElement(b,{dataKey:`pv`,fill:`#82ca9d`},R.createElement(o,{...e,content:t}))))},args:{...F(I),dataKey:`pv`}},W={render:e=>{let[t,n]=[600,300];return R.createElement(r,{width:`100%`,height:n},R.createElement(O,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:j},R.createElement(g,{strokeDasharray:`3 3`}),R.createElement(S,{dataKey:`name`}),R.createElement(w,null),R.createElement(b,{dataKey:`uv`,fill:`#8884d8`},R.createElement(o,{...e,formatter:e=>e==null?``:`${e} visitors`}))))},args:{...F(I),dataKey:`uv`,position:`top`}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Line dataKey="uv">
            <LabelList {...args} />
          </Line>
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    // This API story should have explicit values for all props
    dataKey: 'uv',
    position: 'top',
    offset: 5,
    angle: 0,
    textBreakAll: false,
    zIndex: 2000
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList {...args} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top',
    offset: 5
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <RadarChart width={500} height={400} data={subjectData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        {/* The target component */}
        <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}>
          <LabelList {...args} />
        </Radar>
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'A',
    position: 'outside',
    clockWise: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const renderCustomLabel = (props: LabelProps) => {
      const {
        x,
        y,
        width,
        value
      } = props;
      if (value == null) {
        return null;
      }
      const xPos = Number(x) + Number(width) / 2;
      const yPos = Number(y) - 14;
      return <g>
          <circle cx={xPos} cy={yPos} r={10} fill="#8884d8" />
          <text x={xPos} y={yPos} fill="#fff" textAnchor="middle" dominantBaseline="middle" fontSize={10}>
            {value}
          </text>
        </g>;
    };
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 30,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component with custom content renderer */}
          <Bar dataKey="pv" fill="#82ca9d">
            <LabelList {...args} content={renderCustomLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'pv'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <BarChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component with formatter */}
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList {...args} formatter={value => value != null ? \`\${value} visitors\` : ''} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    dataKey: 'uv',
    position: 'top'
  }
}`,...W.parameters?.docs?.source}}},G=[`API`,`OnBarChart`,`OnRadarChart`,`WithCustomContent`,`WithFormatter`]})))()}K();export{B as API,V as OnBarChart,H as OnRadarChart,U as WithCustomContent,W as WithFormatter,G as __namedExportsOrder,z as default};