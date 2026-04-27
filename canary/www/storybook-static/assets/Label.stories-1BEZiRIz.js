import{e}from"./iframe-DPQQART2.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-C8kv474W.js";import{R as f}from"./arrayEqualityCheck-BDVhVf-C.js";import{L as y}from"./LineChart-R1i5j8mE.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-XP1WOD4G.js";import{L as b}from"./Line-DOKzQF_j.js";import{Y as x}from"./YAxis-BOA_nsSD.js";import{X as R}from"./XAxis-Dg1K6_fH.js";import{R as g}from"./RechartsHookInspector-BY990p5J.js";import{R as v}from"./RadarChart-BJf0_Q4V.js";import{R as w}from"./Radar-BU0_M4d1.js";import{P as A}from"./PolarGrid-Bq8cxraD.js";import{P}from"./PolarAngleAxis-iZfJg0gl.js";import{P as T}from"./PolarRadiusAxis-AD_ATzUA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CViQHWzm.js";import"./DOMUtils-6osebbE8.js";import"./resolveDefaultProps-Cd3pKSWq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cp0zJDZz.js";import"./zIndexSlice-BUoZyNAT.js";import"./immer-dq55Rz5k.js";import"./RechartsWrapper-DC_xWfRE.js";import"./index-nGRWTrxk.js";import"./hooks-DXcftTpV.js";import"./axisSelectors-B504aTlT.js";import"./d3-scale-C2yFoO5R.js";import"./renderedTicksSlice-C1JV7OFv.js";import"./CartesianChart-CLNhkIDU.js";import"./chartDataContext-0uWjrM7s.js";import"./CategoricalChart-7Dzr-wy0.js";import"./CartesianAxis-CKdFXiLA.js";import"./Layer-BYcIhrnl.js";import"./types-DnHa4Bsr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D4DJGTqa.js";import"./ActivePoints-CNiBL0AU.js";import"./Dot-CndRCnyF.js";import"./RegisterGraphicalItemId-DOISCJhn.js";import"./ErrorBarContext-CyeM8Knn.js";import"./GraphicalItemClipPath-CE5KwO2y.js";import"./SetGraphicalItem-CxDeYlaA.js";import"./useAnimationId-DxUodg7H.js";import"./getRadiusAndStrokeWidthFromDot-CI-CHUDp.js";import"./ActiveShapeUtils-DelvD5C5.js";import"./isPlainObject-Cbsg7i00.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D56HZ_ik.js";import"./Trapezoid-BQHGElUM.js";import"./Sector-QSKBV-oi.js";import"./Symbols-DyAchY7x.js";import"./symbol-Dha6D-sP.js";import"./step-De3ZEy02.js";import"./Curve-D9PoEc7H.js";import"./index-OSeNAWG6.js";import"./ChartSizeDimensions-BOwpJgjF.js";import"./OffsetShower-DcT1D_xb.js";import"./PlotAreaShower-DM7QkzGT.js";import"./PolarChart-Ca8LkF89.js";import"./Polygon-BMCHgQ89.js";import"./polarScaleSelectors-CGsIhIG9.js";import"./polarSelectors-B9QrZieA.js";import"./maxBy-CT-k-99K.js";import"./iteratee-CLdQ3gon.js";const i={angle:{description:`Text rotation angle in degrees.
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
