import{e}from"./iframe-BvixMVLJ.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-2bgwwMrL.js";import{R as f}from"./arrayEqualityCheck-9JafNuHb.js";import{L as y}from"./LineChart-xOkCIs0R.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-C3NbQITh.js";import{L as b}from"./Line-D2x4yot2.js";import{Y as x}from"./YAxis-CtSbpL5M.js";import{X as R}from"./XAxis-DccioUx7.js";import{R as g}from"./RechartsHookInspector-B7OCtou7.js";import{R as v}from"./RadarChart-IadTlyUy.js";import{R as w}from"./Radar-C6gRfvTF.js";import{P as A}from"./PolarGrid-BLQeguOH.js";import{P}from"./PolarAngleAxis-Dn9PSn62.js";import{P as T}from"./PolarRadiusAxis-kSZH4MKX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-eQ3pJOEs.js";import"./DOMUtils-DEgurZZA.js";import"./resolveDefaultProps-CPqr6DGH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQCBZf3p.js";import"./zIndexSlice-Dt-OH-0J.js";import"./immer-CaX280hR.js";import"./RechartsWrapper-B9hDtRNp.js";import"./index-4u6l2t3f.js";import"./hooks-CmxNexDu.js";import"./axisSelectors-CZAHgbVu.js";import"./d3-scale-DvCQBID5.js";import"./renderedTicksSlice-Bakbxnfn.js";import"./CartesianChart-C8rmaTr8.js";import"./chartDataContext-H28vHODo.js";import"./CategoricalChart-B9R3Zf2d.js";import"./CartesianAxis-Bc1lTLgz.js";import"./Layer-E6_PJRcD.js";import"./types-C4LPRE4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CX2Z3mNI.js";import"./ActivePoints-B9v85k-m.js";import"./Dot-BBC1jxnt.js";import"./RegisterGraphicalItemId-BfUUoebv.js";import"./ErrorBarContext-CY1gh6Fr.js";import"./GraphicalItemClipPath-CqZBK23Z.js";import"./SetGraphicalItem-D9gH1oTH.js";import"./useAnimationId-BG6xyOIZ.js";import"./getRadiusAndStrokeWidthFromDot-D5L1c2bL.js";import"./ActiveShapeUtils-DIK_h4fj.js";import"./isPlainObject-Bwvz8CoG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIrtZjOU.js";import"./Trapezoid-zjet3lxO.js";import"./Sector-CuxTQcgV.js";import"./Symbols-Bp2oN4pa.js";import"./symbol-I_8-paOM.js";import"./step-DGFNdhZX.js";import"./Curve-D-7l7mPW.js";import"./index-CWh6xOze.js";import"./ChartSizeDimensions-j35P-O-9.js";import"./OffsetShower-DT-VFUR7.js";import"./PlotAreaShower-v_ea9rYC.js";import"./PolarChart-BW3jEpsb.js";import"./Polygon-CbaKdfiL.js";import"./polarScaleSelectors-HyOa63Fg.js";import"./polarSelectors-0sS99Tu8.js";import"./maxBy-Bit9CQO8.js";import"./iteratee-CqaQO7ZM.js";const i={angle:{description:`Text rotation angle in degrees.
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
