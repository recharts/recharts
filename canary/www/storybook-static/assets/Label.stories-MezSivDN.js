import{e}from"./iframe-m8q5t3md.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-JUKbE3JW.js";import{R as f}from"./arrayEqualityCheck-DrSDqkLD.js";import{L as y}from"./LineChart-mgGb9-n0.js";import{C as h}from"./CartesianGrid-DiF0WVwX.js";import{L as b}from"./Line-D8kr-aJg.js";import{Y as x}from"./YAxis-3rVJTeb7.js";import{X as R}from"./XAxis-D9s1UdL9.js";import{R as u}from"./RechartsHookInspector-BuC1LeAm.js";import{R as v}from"./RadarChart-Bf1jHnD2.js";import{R as w}from"./Radar-D9BgdEcq.js";import{P as A}from"./PolarGrid-YMkD_olG.js";import{P}from"./PolarAngleAxis-CulznWWv.js";import{P as T}from"./PolarRadiusAxis-QpC1udjo.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CGYPmi9L.js";import"./DOMUtils-BVQX-RMY.js";import"./resolveDefaultProps-CRYHZjsP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMbN4Jmp.js";import"./zIndexSlice-BFsJzxfG.js";import"./immer-DMxbvvOq.js";import"./RechartsWrapper-CZ3jmele.js";import"./index-BL9S6rdM.js";import"./hooks-nzhcMf4x.js";import"./axisSelectors-DSejHMOb.js";import"./d3-scale-CmP5dk1L.js";import"./renderedTicksSlice-2vEKdn9I.js";import"./CartesianChart-B3HJKIVC.js";import"./chartDataContext-CB7kvdLo.js";import"./CategoricalChart-CgU5MazA.js";import"./CartesianAxis-B_P6O2DK.js";import"./Layer-C2TdqJIe.js";import"./types-C2IIvjb3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dcz365jx.js";import"./ActivePoints-D3DuYUxN.js";import"./Dot--mgd1LbI.js";import"./RegisterGraphicalItemId-QDXXrpkb.js";import"./ErrorBarContext-ExRYnIf4.js";import"./GraphicalItemClipPath-JhKOKnEz.js";import"./SetGraphicalItem-DTrTlaD3.js";import"./useAnimationId-Cp-1L-xj.js";import"./getRadiusAndStrokeWidthFromDot-xB2-LwJw.js";import"./ActiveShapeUtils-BuaI6NWG.js";import"./isPlainObject-glNQFXom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-HTdxKaWE.js";import"./Trapezoid-YBhqI0fM.js";import"./Sector-CqOCHMeq.js";import"./Symbols-Dl-fcwHF.js";import"./symbol-Cmq7mipq.js";import"./step-BQd-JXh1.js";import"./Curve-Clnct1hH.js";import"./index-B_d56yGA.js";import"./ChartSizeDimensions-IBUPmonY.js";import"./OffsetShower-qDjcRr8n.js";import"./PlotAreaShower-CM2PEioy.js";import"./PolarChart-CMovdM0O.js";import"./Polygon-XgkXkjib.js";import"./polarScaleSelectors-SQg3mkdQ.js";import"./polarSelectors-BLB7Wu77.js";import"./maxBy-hyBLG1Em.js";import"./iteratee-F2kSi97o.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Oe={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(f,{width:"100%",height:400},e.createElement(y,{data:g,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(h,null),e.createElement(b,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(x,{tick:!1}),e.createElement(R,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(u,null))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(v,{width:800,height:800,data:g,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(w,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(A,null),e.createElement(P,{dataKey:"name"}),e.createElement(T,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(u,null)),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
