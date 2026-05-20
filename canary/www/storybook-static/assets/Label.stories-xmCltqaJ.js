import{e}from"./iframe-HCWlV7eT.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Cz3tNLpR.js";import{g as f}from"./arrayEqualityCheck-Cf1iFAtr.js";import{L as y}from"./LineChart-BY8BgNw4.js";import{p as u}from"./Page-DPte-9pC.js";import{C as h}from"./CartesianGrid-CkVEYY7L.js";import{L as b}from"./Line-CKD_CZ72.js";import{Y as x}from"./YAxis-D1dMwbfR.js";import{X as R}from"./XAxis-Cvv7ki52.js";import{R as g}from"./RechartsHookInspector-DiUR5-Rd.js";import{R as v}from"./RadarChart-D-QlOIf8.js";import{R as w}from"./Radar-BA2eDlot.js";import{P as A}from"./PolarGrid-CliaZZOM.js";import{P}from"./PolarAngleAxis-Kgk-6Mae.js";import{P as T}from"./PolarRadiusAxis-Bklhyw6d.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-Sb1Xn8CY.js";import"./DOMUtils-Bqm3Lq_z.js";import"./resolveDefaultProps-CKTz6CIA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYTZmJpE.js";import"./zIndexSlice-BUPMHSoM.js";import"./immer-CyT7MAhj.js";import"./RechartsWrapper-B3_OF8yL.js";import"./index-CG6p6UQd.js";import"./hooks-Bu1aMOxG.js";import"./axisSelectors-kc4WL651.js";import"./d3-scale-DGA5oTTZ.js";import"./renderedTicksSlice-DNGVWtDy.js";import"./CartesianChart-CIcvcNyp.js";import"./chartDataContext-C29Qu4zj.js";import"./CategoricalChart-DsLokalm.js";import"./CartesianAxis-Br883KRe.js";import"./Layer-BieoRt7-.js";import"./types-BVJNSeSn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C2TKIy08.js";import"./ActivePoints-cTIowq9F.js";import"./Dot-CSOnHbFY.js";import"./RegisterGraphicalItemId-S6JUBuqk.js";import"./ErrorBarContext-D9407eJA.js";import"./GraphicalItemClipPath-BdouDh12.js";import"./SetGraphicalItem-C9MUiNjo.js";import"./useAnimationId-BbyheOhI.js";import"./getRadiusAndStrokeWidthFromDot-ClmLFBR-.js";import"./ActiveShapeUtils-DMoSdW99.js";import"./isPlainObject-DzHCCxCs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsPKVDyM.js";import"./Trapezoid-CtygYOR4.js";import"./Sector-BWvy9RzL.js";import"./Symbols-Eaix-2lc.js";import"./symbol-DfBAaUU7.js";import"./step-BzEMV51B.js";import"./Curve-B-66MxCQ.js";import"./index-BHZHrA64.js";import"./ChartSizeDimensions-DdWY1IL4.js";import"./OffsetShower-XZyi8iCL.js";import"./PlotAreaShower-KC6xEH0b.js";import"./PolarChart-CrhczRnt.js";import"./Polygon-WHBCP9m8.js";import"./polarScaleSelectors-Dg_FjLVr.js";import"./polarSelectors-r08ueX7G.js";import"./maxBy-BifIlUJa.js";import"./iteratee-AiWfzrMQ.js";const i={angle:{description:`Text rotation angle in degrees.
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
