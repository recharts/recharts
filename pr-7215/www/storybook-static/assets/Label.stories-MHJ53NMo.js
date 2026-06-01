import{c as e}from"./iframe-CE1Ai-kZ.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DLrYniOW.js";import{g}from"./zIndexSlice-yWbeh4A5.js";import{L as y}from"./LineChart-BllyPn7k.js";import{p as u}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-ChTvHEsA.js";import{L as h}from"./Line-D6IA1_fT.js";import{Y as b}from"./YAxis-CtQfEX5v.js";import{X as x}from"./XAxis-b9Iy0H9I.js";import{R as v}from"./RadarChart-BN7BnJYG.js";import{R}from"./Radar-C8WgElPX.js";import{P as w}from"./PolarGrid-CXi9-8XV.js";import{P as A}from"./PolarAngleAxis-V4z1RSTT.js";import{P}from"./PolarRadiusAxis-D5R1zcgX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-mVWjURP_.js";import"./Text-DURDmivW.js";import"./resolveDefaultProps-CmEakyQ-.js";import"./DOMUtils-CSrHQ79m.js";import"./isWellBehavedNumber-Bxf6a22g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CqYRU3_E.js";import"./index-Gozxl0v8.js";import"./index-B1iIDv_0.js";import"./immer-DgYhOWDS.js";import"./RechartsWrapper-4e423j6r.js";import"./index-DaGE07U6.js";import"./index-DziNllj1.js";import"./renderedTicksSlice-BQLVMwTH.js";import"./axisSelectors-C9KJ0caj.js";import"./d3-scale-BHF3M1h_.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-Cs0xCG0T.js";import"./chartDataContext-Y7cA5Syy.js";import"./CategoricalChart-BlcXzgR0.js";import"./CartesianAxis-C_FQ4pG9.js";import"./Layer-IyK8O9Af.js";import"./types-Cms7mXxl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DK2ZODlA.js";import"./step-Beb-DqJL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-oYMoGio2.js";import"./useAnimationId-BY50CzGe.js";import"./ActivePoints-BjsJ7Hqi.js";import"./Dot-B4qxa7Y4.js";import"./RegisterGraphicalItemId-BjpF4fds.js";import"./ErrorBarContext-Cn2z2gOd.js";import"./GraphicalItemClipPath-CRxsA1xP.js";import"./SetGraphicalItem-DLzcOWdZ.js";import"./getRadiusAndStrokeWidthFromDot-B92ExxNA.js";import"./ActiveShapeUtils-BuWDNzFh.js";import"./PolarChart-CEGBhOuI.js";import"./Polygon-Bon_nOVf.js";import"./polarScaleSelectors-BKlD4NYR.js";import"./polarSelectors-5rnOKom5.js";import"./maxBy-DAjm4fPs.js";import"./iteratee-C1550tO-.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ve={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(v,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(R,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
