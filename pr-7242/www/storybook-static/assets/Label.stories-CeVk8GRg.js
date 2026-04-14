import{e}from"./iframe-DvnDov4A.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DplSYrhy.js";import{R as f}from"./arrayEqualityCheck-C9lnY2Jk.js";import{L as y}from"./LineChart-uEECgumD.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-DBBND29e.js";import{L as b}from"./Line-CMGNV9p3.js";import{Y as x}from"./YAxis-6mOD6R15.js";import{X as R}from"./XAxis-C1tPrrXX.js";import{R as g}from"./RechartsHookInspector-4zpoQdEh.js";import{R as v}from"./RadarChart-Cyv8p25W.js";import{R as w}from"./Radar-xi_tZQ6x.js";import{P as A}from"./PolarGrid-D9rNayTi.js";import{P}from"./PolarAngleAxis-DtaaiDjA.js";import{P as T}from"./PolarRadiusAxis-DdWj2kaL.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-spNYJ-qR.js";import"./DOMUtils-DdQ6eDLq.js";import"./resolveDefaultProps-G5H4W-ZU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CM0jcixQ.js";import"./zIndexSlice-SWDQ-CoV.js";import"./immer-sZpCrch2.js";import"./RechartsWrapper-TcHv2uQV.js";import"./index-C2oOJWkO.js";import"./hooks-BvQWUlQP.js";import"./axisSelectors-CqBaekTZ.js";import"./d3-scale-BcO2Qy0K.js";import"./renderedTicksSlice-031iG6wN.js";import"./CartesianChart-B_ZS3e1w.js";import"./chartDataContext-i-tilv0W.js";import"./CategoricalChart-D_33J7_3.js";import"./CartesianAxis-DShCHaKT.js";import"./Layer-nkTMaplG.js";import"./types-TD_Bh_Hf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CIfEwxbL.js";import"./ActivePoints-Bp_xfLdA.js";import"./Dot-1PiERTp-.js";import"./RegisterGraphicalItemId-BIRi2jKj.js";import"./ErrorBarContext-CvFDt4Lo.js";import"./GraphicalItemClipPath-kvMDTclB.js";import"./SetGraphicalItem-tfmCk3IV.js";import"./useAnimationId-6CABSB-X.js";import"./getRadiusAndStrokeWidthFromDot-ZR3HPK81.js";import"./ActiveShapeUtils-lzwBTbm9.js";import"./isPlainObject-Bm-7eQPN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7q3XGzAF.js";import"./Trapezoid-D2p22PjP.js";import"./Sector-bYTZ9FBx.js";import"./Symbols-D2whzrea.js";import"./symbol-B4kl7GNn.js";import"./step-hQY7d3_H.js";import"./Curve-BY4G9kL5.js";import"./index-DCGexNIF.js";import"./ChartSizeDimensions-CTHGO4oG.js";import"./OffsetShower-DvcNQrDC.js";import"./PlotAreaShower-DoBolyp8.js";import"./PolarChart-DgVNUGNj.js";import"./Polygon-ChIjcpPk.js";import"./polarScaleSelectors-B2-Mu8qd.js";import"./polarSelectors-CHWl31nz.js";import"./maxBy-Dm7Yg065.js";import"./iteratee-CEA0pmlV.js";const i={angle:{description:`Text rotation angle in degrees.
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
