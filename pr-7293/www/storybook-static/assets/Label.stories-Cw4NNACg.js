import{e}from"./iframe-CPMBPDiW.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DxWyVNuC.js";import{R as f}from"./arrayEqualityCheck-BuDnjzUV.js";import{L as y}from"./LineChart-B6pBYkzl.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-CfdD4djh.js";import{L as b}from"./Line-CLQAlcVC.js";import{Y as x}from"./YAxis-Bk6_l7JM.js";import{X as R}from"./XAxis-CjRYfiQ4.js";import{R as g}from"./RechartsHookInspector-DxdSXL0K.js";import{R as v}from"./RadarChart-BT3bm2x1.js";import{R as w}from"./Radar-DszJSY_C.js";import{P as A}from"./PolarGrid-BV7TUOZM.js";import{P}from"./PolarAngleAxis-bF-dSokA.js";import{P as T}from"./PolarRadiusAxis-C-bEpgQu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-3lL52T9r.js";import"./DOMUtils-DD4Lzq5B.js";import"./resolveDefaultProps-x-xJryKY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5fxgLpy.js";import"./zIndexSlice-Dr6oT2qB.js";import"./immer-vUXr1xyy.js";import"./RechartsWrapper-D7X0iTSa.js";import"./index-41kzo7-f.js";import"./hooks-CZjbEOHJ.js";import"./axisSelectors-DS_oX4Yb.js";import"./d3-scale-DxZ452bO.js";import"./renderedTicksSlice-BJAXzV77.js";import"./CartesianChart-DH2v7K23.js";import"./chartDataContext-CV0cJvXm.js";import"./CategoricalChart-Cbmwan-l.js";import"./CartesianAxis-FhEMhfrS.js";import"./Layer-BU-6_6Kb.js";import"./types-BEArBsqN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CfsI_UnC.js";import"./ActivePoints-wTJjK4Ig.js";import"./Dot-C0mRoZzJ.js";import"./RegisterGraphicalItemId-BB9O0Mjy.js";import"./ErrorBarContext-BfN3k9v-.js";import"./GraphicalItemClipPath-qTNWK1mm.js";import"./SetGraphicalItem-33kMbvyx.js";import"./useAnimationId-B2ugAfTp.js";import"./getRadiusAndStrokeWidthFromDot-DuRb3MXi.js";import"./ActiveShapeUtils-D0GMXNQW.js";import"./isPlainObject-fYFHA2eI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DB5NbiB2.js";import"./Trapezoid-Dxi0_3Ju.js";import"./Sector-BiA4y5xt.js";import"./Symbols-B62UJk0p.js";import"./symbol-CmO941Mh.js";import"./step-CaCTG7D1.js";import"./Curve-JHKdodnE.js";import"./index-B8_wGQ9D.js";import"./ChartSizeDimensions-DELo0r0O.js";import"./OffsetShower-HzHsLlkW.js";import"./PlotAreaShower-BJ8q8bHN.js";import"./PolarChart-DHGfDgEf.js";import"./Polygon-BT8DDi5U.js";import"./polarScaleSelectors-DLmftyih.js";import"./polarSelectors-48e-zCYl.js";import"./maxBy-AueheYRw.js";import"./iteratee-ZHRQA0Hg.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Oe={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(f,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(h,null),e.createElement(b,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(x,{tick:!1}),e.createElement(R,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(g,null))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(v,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(w,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(A,null),e.createElement(P,{dataKey:"name"}),e.createElement(T,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(g,null)),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
        <RechartsHookInspector />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const je=["API","PolarPositions"];export{r as API,o as PolarPositions,je as __namedExportsOrder,Oe as default};
