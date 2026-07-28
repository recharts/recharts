import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Mt as a,Q as o,R as s,St as c,Vn as l,X as u,bt as d,ft as f,t as p,v as m,wt as h}from"./iframe-BiMB5Acc.js";import{t as g}from"./data-J2vpPkF6.js";import{r as _}from"./Page-C0w_0_Yr.js";import{n as v,t as y}from"./utils-4uF5A2JM.js";var b,x=e((()=>{b={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`0`}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:`Function | ReactNode`},category:`General`}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:`Function`},category:`General`}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:`text`},table:{type:{summary:`string`},category:`General`}},index:{control:{type:`number`},table:{type:{summary:`number`},category:`General`}},labelRef:{table:{type:{summary:`React.RefObject<SVGTextElement> | null`},category:`General`}},offset:{description:`The offset to the specified "position". Direction of the offset depends on the position.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`5`}},defaultValue:5},parentViewBox:{table:{type:{summary:`Required<CartesianViewBox> | Required<PolarViewBox>`},category:`General`}},position:{description:`The position of label relative to the view box.`,table:{type:{summary:`"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }`},category:`General`,defaultValue:{summary:`middle`}},defaultValue:`middle`},textBreakAll:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:`false | null | number | string | true`},category:`General`}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:`Required<CartesianViewBox> | Required<PolarViewBox>`},category:`General`}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`2000`}},defaultValue:2e3}}})),S,C,w,T,E;e((()=>{S=t(n()),p(),g(),v(),x(),C={argTypes:b,component:a},w={name:`CartesianPositions`,render:e=>S.createElement(l,{width:`100%`,height:400},S.createElement(r,{data:_,margin:{top:100,bottom:100,left:100,right:100}},S.createElement(o,null),S.createElement(u,{type:`monotone`,dataKey:`uv`,stroke:`#111`}),S.createElement(s,{tick:!1}),S.createElement(i,{dataKey:`name`,tick:!1}),S.createElement(a,{value:`Position: ${e.position}`,...e}))),args:{...y(b),position:`center`}},T={render:e=>S.createElement(m,{width:800,height:800,data:_,margin:{top:30,bottom:30,left:100,right:100}},S.createElement(f,{type:`monotone`,dataKey:`uv`,fill:`rgba(0, 200, 200, 0.2)`}),S.createElement(h,null),S.createElement(d,{dataKey:`name`}),S.createElement(c,{tick:!1}),S.createElement(a,{value:`Position: ${e.position}`,...e})),args:{...y(b),position:`center`}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`API`,`PolarPositions`]}))();export{w as API,T as PolarPositions,E as __namedExportsOrder,C as default};