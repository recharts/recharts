import{e}from"./iframe-BRqvrPpX.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-_Khr6uJ_.js";import{R as f}from"./arrayEqualityCheck-DDSezW49.js";import{L as y}from"./LineChart-D49ROi3p.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-fgn_vkOa.js";import{L as b}from"./Line-PCc0ofdp.js";import{Y as x}from"./YAxis-BG6xpwEo.js";import{X as R}from"./XAxis-DZXsqqUs.js";import{R as g}from"./RechartsHookInspector-DZUw7Ce3.js";import{R as v}from"./RadarChart-BfAnwibb.js";import{R as w}from"./Radar-DTYU2g6F.js";import{P as A}from"./PolarGrid-ChoERFsQ.js";import{P}from"./PolarAngleAxis-BC25g7P1.js";import{P as T}from"./PolarRadiusAxis-D4iYZkKq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-c5kux5xS.js";import"./DOMUtils-GlaEK2cB.js";import"./resolveDefaultProps-C4ONjF6w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cc4doPfJ.js";import"./zIndexSlice-DNL_rR3e.js";import"./immer-DXV4etqU.js";import"./RechartsWrapper-DbCr_zla.js";import"./index-DUtVgLrP.js";import"./hooks-rzyNGUcJ.js";import"./axisSelectors-DItQVmXo.js";import"./d3-scale-BRJXbGMx.js";import"./renderedTicksSlice-rp2kTmjY.js";import"./CartesianChart-BrkX4WEt.js";import"./chartDataContext-nwhDY5FS.js";import"./CategoricalChart-CODQ6PLu.js";import"./CartesianAxis-DUees9I8.js";import"./Layer-KJ5xksxy.js";import"./types-2nLFc4aE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BAJ1kPIP.js";import"./ActivePoints--bg5w8iT.js";import"./Dot-Db-uTVSA.js";import"./RegisterGraphicalItemId-RZfbywjl.js";import"./ErrorBarContext-AIawQg9l.js";import"./GraphicalItemClipPath-oDzU52PH.js";import"./SetGraphicalItem-BAyig2Fq.js";import"./useAnimationId-CvzXleYE.js";import"./getRadiusAndStrokeWidthFromDot-BeKpyACI.js";import"./ActiveShapeUtils-67P3d0pQ.js";import"./isPlainObject-CvjZW2FN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8ooKzu7.js";import"./Trapezoid-DFAAHI7b.js";import"./Sector-j7LTfnuF.js";import"./Symbols-D1A9jCkI.js";import"./symbol-Df8Q0jur.js";import"./step-G_hwVzeG.js";import"./Curve-CtnWwKXB.js";import"./index-BPkAalLa.js";import"./ChartSizeDimensions-DojjfuX5.js";import"./OffsetShower-Cx7s2ylo.js";import"./PlotAreaShower-CGKQg4jU.js";import"./PolarChart-VLvFlzVI.js";import"./Polygon-Bc47bp4m.js";import"./polarScaleSelectors-RBKRu-D1.js";import"./polarSelectors-CyF0DbiA.js";import"./maxBy-Cl0Uab8g.js";import"./iteratee-Csv6-nMU.js";const i={angle:{description:`Text rotation angle in degrees.
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
