import{e}from"./iframe-BBzssXFz.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-B9ZSBmHd.js";import{R as f}from"./arrayEqualityCheck-Bjl1KGHu.js";import{L as y}from"./LineChart-CBFiejd2.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-BQfmrOwT.js";import{L as b}from"./Line-otGxT1G3.js";import{Y as x}from"./YAxis-DM7CZp2-.js";import{X as R}from"./XAxis-BKkUGHg6.js";import{R as g}from"./RechartsHookInspector-Cq_u8Fnd.js";import{R as v}from"./RadarChart-Bv567Phy.js";import{R as w}from"./Radar-3eWHuFr-.js";import{P as A}from"./PolarGrid-Dc9FJkcq.js";import{P}from"./PolarAngleAxis-BC2jGzb6.js";import{P as T}from"./PolarRadiusAxis-E6obIdLF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-Boz5VXT5.js";import"./DOMUtils-DJmkFWFo.js";import"./resolveDefaultProps-Csr8SK85.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1_Q11sr.js";import"./zIndexSlice-BlJdEm2b.js";import"./immer-7XFVXXFB.js";import"./RechartsWrapper-CsBkMUfg.js";import"./index-CafXZux5.js";import"./hooks-Cdjbv1yZ.js";import"./axisSelectors-CFvd2CpI.js";import"./d3-scale-CV33LrVl.js";import"./renderedTicksSlice-D_eYSGtp.js";import"./CartesianChart-D4Tq8Mp4.js";import"./chartDataContext-DUrxX3r4.js";import"./CategoricalChart-B-bxACDj.js";import"./CartesianAxis-Dax8GbgD.js";import"./Layer-CAh1Kgp_.js";import"./types-CER3-J_V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CabJhVob.js";import"./ActivePoints-DCbS44DF.js";import"./Dot-BOUDlr0E.js";import"./RegisterGraphicalItemId-5EdXQ8V-.js";import"./ErrorBarContext-CM0hmmky.js";import"./GraphicalItemClipPath-DFMtaTzW.js";import"./SetGraphicalItem-C2_0J6B5.js";import"./useAnimationId-G1z57dIT.js";import"./getRadiusAndStrokeWidthFromDot-DBbOA2H8.js";import"./ActiveShapeUtils-C0KQrGSC.js";import"./isPlainObject-CwCFEtjI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnC0X1TR.js";import"./Trapezoid-CWYXYqYR.js";import"./Sector-DeNvZ5DZ.js";import"./Symbols-CoEYrWYs.js";import"./symbol-C10iTT4Z.js";import"./step-Dmy2-h0-.js";import"./Curve-Dzo1_9a0.js";import"./index-BMusN9RV.js";import"./ChartSizeDimensions-DX20IRBn.js";import"./OffsetShower-0ikHXz0q.js";import"./PlotAreaShower-ddoTAOnv.js";import"./PolarChart-DERdmdnP.js";import"./Polygon-BQCSEL-w.js";import"./polarScaleSelectors-DWApBThC.js";import"./polarSelectors-DOUQ8zQ4.js";import"./maxBy-BTLrP3Ju.js";import"./iteratee-41QGm2LS.js";const i={angle:{description:`Text rotation angle in degrees.
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
