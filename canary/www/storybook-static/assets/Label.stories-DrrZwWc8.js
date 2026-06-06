import{R as e}from"./iframe-CLfZCDGm.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-D3bkn6cZ.js";import{R as g}from"./zIndexSlice-CA_idCig.js";import{L as y}from"./LineChart-CoJwYRW-.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Ch4Y-2GW.js";import{L as h}from"./Line-DeRPzJVR.js";import{Y as b}from"./YAxis-DF5Jxdkx.js";import{X as x}from"./XAxis-BYpmzEP_.js";import{R}from"./RadarChart-SzUfv4qW.js";import{R as v}from"./Radar-CBBnJfwH.js";import{P as w}from"./PolarGrid-j5j6DL9q.js";import{P as A}from"./PolarAngleAxis-sA8XKnqw.js";import{P}from"./PolarRadiusAxis-D_DdJXRI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DkSz9-jm.js";import"./Text-CGIrE8uN.js";import"./resolveDefaultProps-x0HcBOxj.js";import"./DOMUtils-BuwrxSLS.js";import"./isWellBehavedNumber-COd4_fF0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyKLPJQn.js";import"./index-DnUMf4Cl.js";import"./index-CDzW5wMM.js";import"./immer-QRpJ3co-.js";import"./RechartsWrapper-atPiLOuE.js";import"./index-DssGAL0P.js";import"./index-BOf2N6VY.js";import"./renderedTicksSlice-Chi1ci-p.js";import"./axisSelectors-DMG299p3.js";import"./d3-scale-Xh1lphWt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0jH1uhv.js";import"./chartDataContext-BNkTUWKr.js";import"./CategoricalChart-BbsCvjmJ.js";import"./CartesianAxis-CvEaQSy2.js";import"./Layer-Byvx6_V4.js";import"./types-Dbi5OTiB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CEx7pPNr.js";import"./step-BvrgBlnG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2Sc0l-_O.js";import"./useAnimationId-vAkCmZi7.js";import"./ActivePoints-DxCVVL9F.js";import"./Dot-B2U87Uh_.js";import"./RegisterGraphicalItemId-BL3S-b5-.js";import"./ErrorBarContext-ltXyVCQ2.js";import"./GraphicalItemClipPath-DB3DHpQ4.js";import"./SetGraphicalItem-MghETS_R.js";import"./getRadiusAndStrokeWidthFromDot-Du9ACRIL.js";import"./ActiveShapeUtils-CmBRxm29.js";import"./PolarChart-DzDWq4eg.js";import"./Polygon-D8m_ALXT.js";import"./polarScaleSelectors-q3Yndtn8.js";import"./polarSelectors-B4FnD2yQ.js";import"./maxBy-D-TYfXsi.js";import"./iteratee-BdSYYQdu.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ve={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ke=["API","PolarPositions"];export{r as API,o as PolarPositions,ke as __namedExportsOrder,Ve as default};
