import{e}from"./iframe-BoXIVKpi.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DIzgOATL.js";import{R as f}from"./arrayEqualityCheck-dnQrzM2E.js";import{L as y}from"./LineChart-DWFHTKPM.js";import{C as h}from"./CartesianGrid-DbtkUh_J.js";import{L as b}from"./Line-BGsVM20O.js";import{Y as x}from"./YAxis-DHIy0H30.js";import{X as R}from"./XAxis-CkW7_vH7.js";import{R as u}from"./RechartsHookInspector-Bv_iW9cn.js";import{R as v}from"./RadarChart-DOsXMaur.js";import{R as w}from"./Radar-ZQH1yXp_.js";import{P as A}from"./PolarGrid-BDJU3AZz.js";import{P}from"./PolarAngleAxis-DaTnGvXh.js";import{P as T}from"./PolarRadiusAxis-PoSCHKr8.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-JI5xSkLa.js";import"./DOMUtils-CzHd8SEJ.js";import"./resolveDefaultProps-DSYkeoEk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiamzHbt.js";import"./zIndexSlice-DRRC13cr.js";import"./immer-DZ-IpPxl.js";import"./RechartsWrapper-NZG2vnSc.js";import"./index-B4sUR4aF.js";import"./hooks-CmrSpg0T.js";import"./axisSelectors-C3NEPGA0.js";import"./d3-scale-4wy_PNKp.js";import"./renderedTicksSlice-CJehQ3Y6.js";import"./CartesianChart-CVmBhOHu.js";import"./chartDataContext-BotxQRqQ.js";import"./CategoricalChart-CtSiGPzF.js";import"./CartesianAxis-UrQstO-Y.js";import"./Layer-LLMs1spv.js";import"./types-DGUHAYWi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D25zr5OD.js";import"./ActivePoints-B5Pf1vbB.js";import"./Dot-COyDptKo.js";import"./RegisterGraphicalItemId-DGJkdjw1.js";import"./ErrorBarContext-Da-s-Drd.js";import"./GraphicalItemClipPath-DEQZQieX.js";import"./SetGraphicalItem-b1pitorJ.js";import"./useAnimationId-CJqD-IcR.js";import"./getRadiusAndStrokeWidthFromDot-CvXSO0LX.js";import"./ActiveShapeUtils-yJwPYRY8.js";import"./isPlainObject-CJV2F3VY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CrG49jLS.js";import"./Trapezoid-HO8pmOVA.js";import"./Sector-ROnt6JN1.js";import"./Symbols-BdNjnJgs.js";import"./symbol-DuFkHlHY.js";import"./step-Dpvc6cK-.js";import"./Curve-4bfNPt84.js";import"./index-DaN_YDU6.js";import"./ChartSizeDimensions-xw94xbD8.js";import"./OffsetShower-Ci98_s2F.js";import"./PlotAreaShower-KIGO44Wy.js";import"./PolarChart-C-EBbtbG.js";import"./Polygon-Q1IgMdsJ.js";import"./polarScaleSelectors-Bf0sNE3w.js";import"./polarSelectors-BbMLoYAO.js";import"./maxBy-DMjsfjS1.js";import"./iteratee-br3ttoz_.js";const i={angle:{description:`Text rotation angle in degrees.
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
