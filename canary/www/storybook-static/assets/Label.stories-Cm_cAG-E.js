import{e}from"./iframe-DOn8u-oa.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-BcScPf1_.js";import{R as f}from"./arrayEqualityCheck-DYxn46f5.js";import{L as y}from"./LineChart-Co12xYy2.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-Cc9CWBSh.js";import{L as b}from"./Line-Cuvi7l-9.js";import{Y as x}from"./YAxis-B0Wqs0qU.js";import{X as R}from"./XAxis-CWQtfYm8.js";import{R as g}from"./RechartsHookInspector-_EcWBN5R.js";import{R as v}from"./RadarChart-xFg6W70t.js";import{R as w}from"./Radar-D9hOxGWn.js";import{P as A}from"./PolarGrid-CiOipsx8.js";import{P}from"./PolarAngleAxis-xwUgq4vi.js";import{P as T}from"./PolarRadiusAxis-BSHu_NYU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-BwE_mk8T.js";import"./DOMUtils-CpIY6Kx5.js";import"./resolveDefaultProps-Dy27g2E0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-y8FotD-G.js";import"./zIndexSlice-B2AKnG3y.js";import"./immer-Bn8Wu2FH.js";import"./RechartsWrapper-Beeq_QLd.js";import"./index-TviLRVzQ.js";import"./hooks-DyTxkSEO.js";import"./axisSelectors-RYA-f3bs.js";import"./d3-scale-CBg01hSj.js";import"./renderedTicksSlice-DoBNzF3G.js";import"./CartesianChart-BOVmLEcH.js";import"./chartDataContext-dTDP7YNY.js";import"./CategoricalChart-Dpd8P6f3.js";import"./CartesianAxis-BlpnuS68.js";import"./Layer-05H6paB_.js";import"./types-CESDZ_aX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-PhcFEJ80.js";import"./ActivePoints-COmAN0pa.js";import"./Dot-CRgfPISn.js";import"./RegisterGraphicalItemId-DTK05cjv.js";import"./ErrorBarContext-CXzlZi78.js";import"./GraphicalItemClipPath-BB5-oLdp.js";import"./SetGraphicalItem-BPar8aEt.js";import"./useAnimationId-DEVWAil3.js";import"./getRadiusAndStrokeWidthFromDot-Ep1HaBq8.js";import"./ActiveShapeUtils-heWrq4Qu.js";import"./isPlainObject-c8PgY5v_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DPJuAdjj.js";import"./Trapezoid-Bqkv6n3S.js";import"./Sector-BDm--b9P.js";import"./Symbols-nNNN-42G.js";import"./symbol-DVcflbh7.js";import"./step-Cq5Zx23d.js";import"./Curve-woVlpOcO.js";import"./index-DQsTRZku.js";import"./ChartSizeDimensions-C0-3hV0F.js";import"./OffsetShower-CB8ZCxWG.js";import"./PlotAreaShower-B8Dg5b0X.js";import"./PolarChart-n8-8qRs1.js";import"./Polygon-Dt1jIF9v.js";import"./polarScaleSelectors-pLsNnTOm.js";import"./polarSelectors-BF5KRE3U.js";import"./maxBy-BTbxqq0Z.js";import"./iteratee-4veUQO7B.js";const i={angle:{description:`Text rotation angle in degrees.
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
