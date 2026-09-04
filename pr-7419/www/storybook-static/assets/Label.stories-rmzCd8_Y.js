import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{o as a,r as o}from"./Label-BRbY2UPz.js";import{n as s,t as c}from"./PolarGrid-DMtKlK5C.js";import{n as l,t as u}from"./PolarRadiusAxis-CHzBJKXB.js";import{n as d,t as f}from"./PolarAngleAxis-BkWUnbsr.js";import{n as p,t as m}from"./Radar-CNbB0c0g.js";import{n as h,t as g}from"./CartesianGrid-C0BAtXH9.js";import{n as _,t as v}from"./Line---TR8N4V.js";import{n as y,t as b}from"./XAxis-BC2eC402.js";import{n as x,t as S}from"./YAxis-Ch1VfSce.js";import{n as C,t as w}from"./LineChart-DFJO6Y-4.js";import{n as T,t as E}from"./RadarChart-C_Y50zug.js";import{r as D,t as O}from"./Page-DUsfWi7y.js";import{n as k,t as A}from"./utils-vqcWnakT.js";var j;function M(){return(M=t((()=>{j={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:`Function | ReactNode`},category:`General`}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:`Function`},category:`General`}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:`text`},table:{type:{summary:`string`},category:`General`}},index:{control:{type:`number`},table:{type:{summary:`number`},category:`General`}},labelRef:{table:{type:{summary:`React.RefObject<SVGTextElement> | null`},category:`General`}},offset:{description:`The offset to the specified "position". Direction of the offset depends on the position.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`5`}},defaultValue:5},parentViewBox:{table:{type:{summary:`Required<CartesianViewBox> | Required<PolarViewBox>`},category:`General`}},position:{description:`The position of label relative to the view box.`,table:{type:{summary:`"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }`},category:`General`,defaultValue:{summary:`middle`}},defaultValue:`middle`},textBreakAll:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:`false | null | number | string | true`},category:`General`}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:`Required<CartesianViewBox> | Required<PolarViewBox>`},category:`General`}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`2000`}},defaultValue:2e3}}})))()}var N,P,F,I,L;function R(){return(R=t((()=>{N=e(n()),h(),a(),_(),C(),d(),s(),l(),p(),T(),i(),y(),x(),O(),k(),M(),P={argTypes:j,component:o},F={name:`CartesianPositions`,render:e=>N.createElement(r,{width:`100%`,height:400},N.createElement(w,{data:D,margin:{top:100,bottom:100,left:100,right:100}},N.createElement(g,null),N.createElement(v,{type:`monotone`,dataKey:`uv`,stroke:`#111`}),N.createElement(S,{tick:!1}),N.createElement(b,{dataKey:`name`,tick:!1}),N.createElement(o,{value:`Position: ${e.position}`,...e}))),args:{...A(j),position:`center`}},I={render:e=>N.createElement(E,{width:800,height:800,data:D,margin:{top:30,bottom:30,left:100,right:100}},N.createElement(m,{type:`monotone`,dataKey:`uv`,fill:`rgba(0, 200, 200, 0.2)`}),N.createElement(c,null),N.createElement(f,{dataKey:`name`}),N.createElement(u,{tick:!1}),N.createElement(o,{value:`Position: ${e.position}`,...e})),args:{...A(j),position:`center`}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'CartesianPositions',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart data={pageData} margin={{
        top: 100,
        bottom: 100,
        left: 100,
        right: 100
      }}>
          <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="#111" />
          <YAxis tick={false} />
          <XAxis dataKey="name" tick={false} />
          <Label value={\`Position: \${args.position}\`} {...args} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <RadarChart width={800} height={800} data={pageData} margin={{
      top: 30,
      bottom: 30,
      left: 100,
      right: 100
    }}>
        <Radar type="monotone" dataKey="uv" fill="rgba(0, 200, 200, 0.2)" />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis tick={false} />
        <Label value={\`Position: \${args.position}\`} {...args} />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...I.parameters?.docs?.source}}},L=[`API`,`PolarPositions`]})))()}R();export{F as API,I as PolarPositions,L as __namedExportsOrder,P as default};