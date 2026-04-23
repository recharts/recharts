import{e}from"./iframe-BF30cewz.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-CqAF8SIT.js";import{R as f}from"./arrayEqualityCheck-54E-EMHV.js";import{L as y}from"./LineChart-CXtkFSFK.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-BN1BW5YM.js";import{L as b}from"./Line-CM2lbnkw.js";import{Y as x}from"./YAxis-COwWoIRq.js";import{X as R}from"./XAxis-R3SRHTpu.js";import{R as g}from"./RechartsHookInspector-B0E9dfMt.js";import{R as v}from"./RadarChart-AojgiUUL.js";import{R as w}from"./Radar-B6DEuZm4.js";import{P as A}from"./PolarGrid-D41mEiWJ.js";import{P}from"./PolarAngleAxis-La7kcj-J.js";import{P as T}from"./PolarRadiusAxis-BBk_waqd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-Bj9a0rsl.js";import"./DOMUtils-CfR-oYDo.js";import"./resolveDefaultProps-CfzAmxrO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cm42983z.js";import"./zIndexSlice-Dzpaa8RG.js";import"./immer-1Y6b4ABg.js";import"./RechartsWrapper-Ds6-czPk.js";import"./index-C4aFfAFk.js";import"./hooks-DBaONgSL.js";import"./axisSelectors-BbIpa25b.js";import"./d3-scale-BQcoNVts.js";import"./renderedTicksSlice-DaQzOTaA.js";import"./CartesianChart-Cib6BDKJ.js";import"./chartDataContext-C-ltUYxq.js";import"./CategoricalChart-Ax6WUToq.js";import"./CartesianAxis-CRTXwVx1.js";import"./Layer-1B0B10df.js";import"./types-BtUrEkv_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-COSqs2Fw.js";import"./ActivePoints-7Ywr0SSF.js";import"./Dot-B_sEvCV-.js";import"./RegisterGraphicalItemId-DWRskJJq.js";import"./ErrorBarContext-ZqPrhrZR.js";import"./GraphicalItemClipPath-DbWDMhh-.js";import"./SetGraphicalItem-qm0_Djp4.js";import"./useAnimationId-CdSd8RaE.js";import"./getRadiusAndStrokeWidthFromDot-6mt_XejO.js";import"./ActiveShapeUtils-DE4EzjJ7.js";import"./isPlainObject-CJnQjQWE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Tp-Mj0iL.js";import"./Trapezoid-BEm6NDNW.js";import"./Sector-D-Bqj8eF.js";import"./Symbols-DMcSZqwV.js";import"./symbol-b3bNJW4O.js";import"./step-CE2o8WHd.js";import"./Curve-C-HPs5Cn.js";import"./index-Cmlct8zH.js";import"./ChartSizeDimensions-DqRU3Tup.js";import"./OffsetShower-Orj9RHn3.js";import"./PlotAreaShower-BaW8-cBL.js";import"./PolarChart-b5_8STwk.js";import"./Polygon-7Vsj9sku.js";import"./polarScaleSelectors-CL8AVnFW.js";import"./polarSelectors-B9_h0kKr.js";import"./maxBy-w0FKjqR0.js";import"./iteratee-BPgmGahy.js";const i={angle:{description:`Text rotation angle in degrees.
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
