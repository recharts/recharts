import{e}from"./iframe-DMXQsXpg.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Bs69Id3P.js";import{R as f}from"./arrayEqualityCheck-DpCaYOUy.js";import{L as y}from"./LineChart-DYYPTOHR.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-DbFmG4YY.js";import{L as b}from"./Line-NeLidJ-e.js";import{Y as x}from"./YAxis-Do7NKWVh.js";import{X as R}from"./XAxis-BHFgUjmQ.js";import{R as g}from"./RechartsHookInspector-DV0idGEz.js";import{R as v}from"./RadarChart-Cxv_2eFM.js";import{R as w}from"./Radar-CQGRYhRx.js";import{P as A}from"./PolarGrid-BUK-9ews.js";import{P}from"./PolarAngleAxis-CSDkW1EO.js";import{P as T}from"./PolarRadiusAxis-IPBmBo7o.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-DQkAUreQ.js";import"./DOMUtils-DhuzsS5O.js";import"./resolveDefaultProps-BsNYhyCK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DFpiev-3.js";import"./zIndexSlice-Dh14LjCV.js";import"./immer-B5TQSQqr.js";import"./RechartsWrapper-ChN5mZ6F.js";import"./index-DZj5OYW4.js";import"./hooks-C4vpoiWQ.js";import"./axisSelectors-X23Vd1nJ.js";import"./d3-scale-Bobv8k5F.js";import"./renderedTicksSlice-BIIBkKaJ.js";import"./CartesianChart-C5uIkm2y.js";import"./chartDataContext-B6GLUasA.js";import"./CategoricalChart-DG_cN0Ky.js";import"./CartesianAxis-VGpTBjEt.js";import"./Layer-CsEtKw3I.js";import"./types-B0XKp7Ez.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-L5lhC8e-.js";import"./ActivePoints-DFVFlhAU.js";import"./Dot-CxhIYeV3.js";import"./RegisterGraphicalItemId-oMcfFNkt.js";import"./ErrorBarContext-Bl-5rk6P.js";import"./GraphicalItemClipPath-D6CWKVU-.js";import"./SetGraphicalItem-Cl2qZBgg.js";import"./useAnimationId-VTFMqu0p.js";import"./getRadiusAndStrokeWidthFromDot-ng_fUBoa.js";import"./ActiveShapeUtils-CvI69Krw.js";import"./isPlainObject-BMubJZbB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B4fRgx4g.js";import"./Trapezoid-BZvlrAVr.js";import"./Sector-CxL9w9hl.js";import"./Symbols-CEd2p-EY.js";import"./symbol-Dzsckc01.js";import"./step-H2086VjI.js";import"./Curve-GkC_ASL4.js";import"./index-vcH36-MF.js";import"./ChartSizeDimensions-DEoCz00F.js";import"./OffsetShower-BjIJhAjd.js";import"./PlotAreaShower-DKns50Z6.js";import"./PolarChart-CWwCgdx_.js";import"./Polygon-C599XZeF.js";import"./polarScaleSelectors-D9kvKV3Q.js";import"./polarSelectors-Cg5hestZ.js";import"./maxBy-yOnk3tNW.js";import"./iteratee-BAEyg1_s.js";const i={angle:{description:`Text rotation angle in degrees.
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
