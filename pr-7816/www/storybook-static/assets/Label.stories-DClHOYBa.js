import{R as e}from"./iframe-CuYkZAih.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DkhadSFF.js";import{R as g}from"./zIndexSlice-0x3uku_R.js";import{L as y}from"./LineChart-DEuZT58V.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-_OfLj8s1.js";import{L as h}from"./Line-DV8dDFgR.js";import{Y as b}from"./YAxis-2PiHbRgB.js";import{X as x}from"./XAxis-CuSaxTWM.js";import{R}from"./RadarChart-B2gjBjlb.js";import{R as v}from"./Radar-CQh_LS7d.js";import{P as w}from"./PolarGrid-DTrggKE3.js";import{P as A}from"./PolarAngleAxis-roFKqFpl.js";import{P}from"./PolarRadiusAxis-DzqDUBdH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-CXyYB23t.js";import"./resolveDefaultProps-B8cjP6Xa.js";import"./DOMUtils-CE__HHZf.js";import"./isWellBehavedNumber-BcDmyfQy.js";import"./useId-m8zXXplu.js";import"./useBackwardsCompatibleTheme-D-5GiVJq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DhyZBBI_.js";import"./index-D8cZoCL4.js";import"./index-BxmeqXxm.js";import"./throttle-gMp3XSAK.js";import"./RechartsWrapper-COZpTTaF.js";import"./axisSelectors-DIa8K2JO.js";import"./d3-scale-DA_CpRjn.js";import"./index-TSt0tMTq.js";import"./index-27otVVTa.js";import"./renderedTicksSlice-Cf_8fVTa.js";import"./index-C60udeJw.js";import"./CartesianChart-dlpQhUsY.js";import"./chartDataContext-FQ-3D9_1.js";import"./CategoricalChart-CzQsygRV.js";import"./CartesianAxis-D3i-DiW_.js";import"./Layer-GHV7gJU9.js";import"./types-CPc5yIEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C6S_ZKxy.js";import"./step-xkx3tdDV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B6_FAdg8.js";import"./useAnimationId-CKSd0jBH.js";import"./ActivePoints-989YAHN3.js";import"./Dot-lCEMTHT5.js";import"./RegisterGraphicalItemId-DI2Sgslq.js";import"./ErrorBarContext-DQRpVtQS.js";import"./GraphicalItemClipPath-BA9HfA5b.js";import"./SetGraphicalItem-Bwlc4Qg6.js";import"./getRadiusAndStrokeWidthFromDot-C8_uSveN.js";import"./ActiveShapeUtils-48Bcq-tK.js";import"./useGraphicalItemIdentity-DpHd4fG4.js";import"./PolarChart-V4CF62i7.js";import"./Polygon-C7s8OtNc.js";import"./maxBy-uxWLpisi.js";import"./iteratee-CqsXLn41.js";import"./polarScaleSelectors-Cw5_5GwL.js";import"./polarSelectors-DEv9Ocvk.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Se={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},Ke=["API","PolarPositions"];var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{r as API,o as PolarPositions,Ke as __namedExportsOrder,Se as default};
