import{e}from"./iframe-Bz2Qn6Q0.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Cx92zGqb.js";import{R as f}from"./arrayEqualityCheck-SrtJKTr1.js";import{L as y}from"./LineChart-BS78pBch.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-CM-4ACqT.js";import{L as b}from"./Line-B0FBW4kU.js";import{Y as x}from"./YAxis-B5cQ30-7.js";import{X as R}from"./XAxis-0rcliQLc.js";import{R as g}from"./RechartsHookInspector-CRp0734Q.js";import{R as v}from"./RadarChart-AFF9Jrer.js";import{R as w}from"./Radar-Cb-iWXC0.js";import{P as A}from"./PolarGrid-Dg4IC_-M.js";import{P}from"./PolarAngleAxis-b5LPCBs3.js";import{P as T}from"./PolarRadiusAxis-_p6MS4DW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-BeGwGDIw.js";import"./DOMUtils-CfBuJ7pA.js";import"./resolveDefaultProps-Bw6mkRAu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ci1J2GEs.js";import"./zIndexSlice-MM57jocS.js";import"./immer-Bf1ANpdG.js";import"./RechartsWrapper-BxgxCr4x.js";import"./index-XEi-vt0m.js";import"./hooks-Bn0YkRzT.js";import"./axisSelectors-Dn0P--3Q.js";import"./d3-scale-Cj0fhoc6.js";import"./renderedTicksSlice-KjJl__e1.js";import"./CartesianChart-JAhvkHqp.js";import"./chartDataContext-DBTgugHo.js";import"./CategoricalChart-M6gnVyEJ.js";import"./CartesianAxis-BokQwd-n.js";import"./Layer-Bp-alVkQ.js";import"./types-Bq1ywEo3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BKN20BZR.js";import"./ActivePoints-BoxMP4wY.js";import"./Dot-H2-aVAZo.js";import"./RegisterGraphicalItemId-BDNbOxSF.js";import"./ErrorBarContext-s59o9x04.js";import"./GraphicalItemClipPath-DmsPoL2A.js";import"./SetGraphicalItem-DmI1gY5l.js";import"./useAnimationId-C0d16Qdx.js";import"./getRadiusAndStrokeWidthFromDot-9Je4pShm.js";import"./ActiveShapeUtils-Cw4OmDCr.js";import"./isPlainObject-C7eNr1WD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZ4j4B1r.js";import"./Trapezoid-BI8cfUTU.js";import"./Sector-DlNvRyQv.js";import"./Symbols-CBkGZNC5.js";import"./symbol-CWNMfYRI.js";import"./step-Dly43UW-.js";import"./Curve-DWJn7QSQ.js";import"./index-6agPL1sG.js";import"./ChartSizeDimensions-DcrFs19n.js";import"./OffsetShower-CKOTZiON.js";import"./PlotAreaShower-SYizFfd0.js";import"./PolarChart-C7-xf7XM.js";import"./Polygon-CCN7LerI.js";import"./polarScaleSelectors-BpRtsnVz.js";import"./polarSelectors-BpqarvjY.js";import"./maxBy-BZD43do7.js";import"./iteratee-C2xaFs01.js";const i={angle:{description:`Text rotation angle in degrees.
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
