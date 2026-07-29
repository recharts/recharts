import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,At as i,B as a,O as o,Q as s,R as c,St as l,Vn as u,W as d,X as f,bt as p,ft as m,t as h,v as g,wt as _}from"./iframe-BqVvK_R4.js";import{t as v}from"./data-J2vpPkF6.js";import{r as y,s as b}from"./Page-C0w_0_Yr.js";import{n as x,t as S}from"./utils-4uF5A2JM.js";var C,w=e((()=>{C={angle:{description:`Text rotation angle in degrees.
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`2000`}},defaultValue:2e3}}})),T,E,D,O,k,A,j,M;e((()=>{T=t(n()),h(),v(),x(),w(),E={argTypes:C,component:i},D={render:e=>{let[t,n]=[600,300];return T.createElement(u,{width:`100%`,height:n},T.createElement(r,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:y},T.createElement(a,{dataKey:`name`}),T.createElement(c,null),T.createElement(f,{dataKey:`uv`},T.createElement(i,e))))},args:{...S(C),dataKey:`uv`,position:`top`,offset:5,angle:0,textBreakAll:!1,zIndex:2e3}},O={render:e=>{let[t,n]=[600,300];return T.createElement(u,{width:`100%`,height:n},T.createElement(o,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:y},T.createElement(s,{strokeDasharray:`3 3`}),T.createElement(a,{dataKey:`name`}),T.createElement(c,null),T.createElement(d,{dataKey:`uv`,fill:`#8884d8`},T.createElement(i,e))))},args:{...S(C),dataKey:`uv`,position:`top`,offset:5}},k={render:e=>T.createElement(g,{width:500,height:400,data:b},T.createElement(_,null),T.createElement(p,{dataKey:`subject`}),T.createElement(l,null),T.createElement(m,{name:`A`,dataKey:`A`,stroke:`#8884d8`,fill:`#8884d8`,fillOpacity:.6},T.createElement(i,e))),args:{...S(C),dataKey:`A`,position:`outside`,clockWise:!0}},A={render:e=>{let t=e=>{let{x:t,y:n,width:r,value:i}=e;if(i==null)return null;let a=Number(t)+Number(r)/2,o=Number(n)-14;return T.createElement(`g`,null,T.createElement(`circle`,{cx:a,cy:o,r:10,fill:`#8884d8`}),T.createElement(`text`,{x:a,y:o,fill:`#fff`,textAnchor:`middle`,dominantBaseline:`middle`,fontSize:10},i))},[n,r]=[600,300];return T.createElement(u,{width:`100%`,height:r},T.createElement(o,{width:n,height:r,margin:{top:30,right:20,bottom:20,left:20},data:y},T.createElement(s,{strokeDasharray:`3 3`}),T.createElement(a,{dataKey:`name`}),T.createElement(c,null),T.createElement(d,{dataKey:`pv`,fill:`#82ca9d`},T.createElement(i,{...e,content:t}))))},args:{...S(C),dataKey:`pv`}},j={render:e=>{let[t,n]=[600,300];return T.createElement(u,{width:`100%`,height:n},T.createElement(o,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:y},T.createElement(s,{strokeDasharray:`3 3`}),T.createElement(a,{dataKey:`name`}),T.createElement(c,null),T.createElement(d,{dataKey:`uv`,fill:`#8884d8`},T.createElement(i,{...e,formatter:e=>e==null?``:`${e} visitors`}))))},args:{...S(C),dataKey:`uv`,position:`top`}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`API`,`OnBarChart`,`OnRadarChart`,`WithCustomContent`,`WithFormatter`]}))();export{D as API,O as OnBarChart,k as OnRadarChart,A as WithCustomContent,j as WithFormatter,M as __namedExportsOrder,E as default};