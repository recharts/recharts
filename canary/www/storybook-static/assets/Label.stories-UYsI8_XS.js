import{R as e}from"./iframe-HFtXtWDU.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-BrbXEreR.js";import{R as g}from"./zIndexSlice-Cqq8ngM8.js";import{L as y}from"./LineChart-Czoiphpc.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DguCJ1oU.js";import{L as h}from"./Line-DZMze_xC.js";import{Y as b}from"./YAxis-DsjAAI5S.js";import{X as x}from"./XAxis-BpsaCJf7.js";import{R}from"./RadarChart-C_oKrA-O.js";import{R as v}from"./Radar-BMUm0PQp.js";import{P as w}from"./PolarGrid-CxNRrz-o.js";import{P as A}from"./PolarAngleAxis-BgEqO62_.js";import{P}from"./PolarRadiusAxis-_Pxx--sx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Text-CDRZZb9B.js";import"./resolveDefaultProps-CtgsYIUG.js";import"./DOMUtils-Cr-MkK7_.js";import"./isWellBehavedNumber-DknTQDme.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-0igMx-O2.js";import"./index-CfzmDy1X.js";import"./index-qsTytkhm.js";import"./throttle-BOHTa9OG.js";import"./RechartsWrapper-3eKbtU-n.js";import"./index-CX6-2c79.js";import"./index-DpFOPUyx.js";import"./renderedTicksSlice-CnA3aPIs.js";import"./axisSelectors-DgDHkI2g.js";import"./d3-scale-BFpMyz7A.js";import"./CartesianChart-Chec9F6S.js";import"./chartDataContext-v3QpNePy.js";import"./CategoricalChart-wF3j6ivZ.js";import"./CartesianAxis-BnlRkakD.js";import"./Layer-DWG7b0hl.js";import"./types-CqGtNHfB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BR3zS18n.js";import"./step-CxNVACTf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-uy3iUhMQ.js";import"./useAnimationId-CzZVkbxz.js";import"./ActivePoints-Cr6rlWwV.js";import"./Dot-bRuvlybH.js";import"./RegisterGraphicalItemId-CYdn0cBX.js";import"./ErrorBarContext-uHz1jF0z.js";import"./GraphicalItemClipPath-njx9wXrL.js";import"./SetGraphicalItem-7uBPAKUB.js";import"./getRadiusAndStrokeWidthFromDot-Cm-vUEgX.js";import"./ActiveShapeUtils-DYmG8TYR.js";import"./PolarChart-C7I-Jxnf.js";import"./Polygon-rEqTO4h3.js";import"./polarScaleSelectors-Co8cRd6N.js";import"./polarSelectors-CWrGIiiW.js";import"./maxBy-CHZ4Lkla.js";import"./iteratee-D-KV-lOb.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ee={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ke=["API","PolarPositions"];export{r as API,o as PolarPositions,ke as __namedExportsOrder,Ee as default};
