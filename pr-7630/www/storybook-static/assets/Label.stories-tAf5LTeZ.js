import{R as e}from"./iframe-osdC7w3x.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-CRRMP5SS.js";import{R as g}from"./zIndexSlice-deUrzjsz.js";import{L as y}from"./LineChart-xXTseTwi.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CPnHaeQZ.js";import{L as h}from"./Line-ChMsZBXA.js";import{Y as b}from"./YAxis-DYUQr3XS.js";import{X as x}from"./XAxis-B__lQt6h.js";import{R}from"./RadarChart-DtZwXmtd.js";import{R as v}from"./Radar-DTLq_Xg9.js";import{P as w}from"./PolarGrid-B7pXrzK7.js";import{P as A}from"./PolarAngleAxis-Dq7btFBl.js";import{P}from"./PolarRadiusAxis-DxPZ23hl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-HkDUvF78.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./DOMUtils-CpdlvjrD.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_4Zumz8.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./throttle-yBEImYyh.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./index-BnccS2yU.js";import"./axisSelectors-D59_Gagr.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./CartesianAxis-D1s41LT1.js";import"./Layer-CRq3eSZM.js";import"./types-PJaZpOTb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CnankNoj.js";import"./step-BWmIUyya.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHXks09V.js";import"./useAnimationId-T5o_BkmZ.js";import"./ActivePoints-XOhn4AON.js";import"./Dot-CXtOSde0.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getRadiusAndStrokeWidthFromDot-aTO7lmXX.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./PolarChart-CvwlG2Wu.js";import"./Polygon-BHuMAI9h.js";import"./maxBy-sIO1Urxj.js";import"./iteratee-Bc7fw8nQ.js";import"./polarScaleSelectors-C2JZfBxS.js";import"./polarSelectors-D2v1ApaL.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Be={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ie=["API","PolarPositions"];export{r as API,o as PolarPositions,Ie as __namedExportsOrder,Be as default};
