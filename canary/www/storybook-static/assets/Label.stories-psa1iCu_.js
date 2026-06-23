import{R as e}from"./iframe-CGx2OEYg.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-CkpiET6q.js";import{R as g}from"./zIndexSlice-pdvjw9VY.js";import{L as y}from"./LineChart-Btih9Pj2.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B0E-iVsf.js";import{L as h}from"./Line-CifdSMqw.js";import{Y as b}from"./YAxis-BsBoxekz.js";import{X as x}from"./XAxis-DIPoApAz.js";import{R}from"./RadarChart-Buc4JNBg.js";import{R as v}from"./Radar-DWgi5oQu.js";import{P as w}from"./PolarGrid-Du7XqE21.js";import{P as A}from"./PolarAngleAxis-BgIBLlbu.js";import{P}from"./PolarRadiusAxis-BgayQz4d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CzV2OpXY.js";import"./Text-JACEtH7g.js";import"./resolveDefaultProps-D3B6MFw_.js";import"./DOMUtils-Ccjd7ivz.js";import"./isWellBehavedNumber-CKQRWs7o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGG-pQT2.js";import"./index-C4Z_dumW.js";import"./index-BL6WHaeN.js";import"./immer-BdXE1DYA.js";import"./RechartsWrapper-CnFoLhZv.js";import"./index-CIdFwa8F.js";import"./index-Cey4EIAC.js";import"./renderedTicksSlice-CWw-Qe8F.js";import"./axisSelectors-B0UwcuKI.js";import"./d3-scale-DUV6_L5z.js";import"./CartesianChart-BiUQ--Jb.js";import"./chartDataContext-BDew7MkD.js";import"./CategoricalChart-DuzT5byy.js";import"./CartesianAxis-CmH7UKiI.js";import"./Layer-CdlD8-Bq.js";import"./types-C4QX8ert.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DLzFalE6.js";import"./step-BRyMFbya.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZpkkXdAG.js";import"./useAnimationId-DrQktf3K.js";import"./ActivePoints-N3tMfhSo.js";import"./Dot-CeKZXbQB.js";import"./RegisterGraphicalItemId-xU42uzR6.js";import"./ErrorBarContext-Gbubk7c-.js";import"./GraphicalItemClipPath-CIDK8z3L.js";import"./SetGraphicalItem-CM0l2hGK.js";import"./getRadiusAndStrokeWidthFromDot-2cj_fDMP.js";import"./ActiveShapeUtils-BMsaHZ8h.js";import"./PolarChart-D4RQGosG.js";import"./Polygon-BWfB1MSZ.js";import"./polarScaleSelectors-BsWVOJp5.js";import"./polarSelectors-C4R0uvAX.js";import"./maxBy-pYGFQSS4.js";import"./iteratee-QFBEUu-H.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ve=["API","PolarPositions"];export{r as API,o as PolarPositions,Ve as __namedExportsOrder,Ee as default};
