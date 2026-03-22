import{e}from"./iframe-DsUMSIoB.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DJgqAx1l.js";import{R as f}from"./arrayEqualityCheck-CZsQnfge.js";import{L as y}from"./LineChart-ByHPdVaM.js";import{C as h}from"./CartesianGrid-Ca1R71M9.js";import{L as b}from"./Line-CB6y22ET.js";import{Y as x}from"./YAxis-CTnSzHcV.js";import{X as R}from"./XAxis-BzmMsMrb.js";import{R as u}from"./RechartsHookInspector-DFkKDQjz.js";import{R as v}from"./RadarChart-C0QPB8Kd.js";import{R as w}from"./Radar-B-izRT69.js";import{P as A}from"./PolarGrid-m2zF9eLH.js";import{P}from"./PolarAngleAxis-DZr_Sa-u.js";import{P as T}from"./PolarRadiusAxis-BFzWjxLY.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-DgusKYHb.js";import"./DOMUtils-ByvJp_q1.js";import"./resolveDefaultProps-Dxu6XJ62.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tLtAagmx.js";import"./zIndexSlice-BDZOwce-.js";import"./immer-D_NmV9ya.js";import"./RechartsWrapper-mUXPQGkR.js";import"./index-BFxM37Jd.js";import"./hooks-VVLooFbP.js";import"./axisSelectors-BtEB30-b.js";import"./d3-scale-B0RJDOHU.js";import"./renderedTicksSlice-TGaTZgu3.js";import"./CartesianChart-Duzb9tyy.js";import"./chartDataContext-DJEsKFHL.js";import"./CategoricalChart-LslF1x-i.js";import"./CartesianAxis-CoMq3-ST.js";import"./Layer-CW99gOx_.js";import"./types-DN9VSCi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqswSBIq.js";import"./ActivePoints-CHYb11Tn.js";import"./Dot-D-uZOgZW.js";import"./RegisterGraphicalItemId-BclML1JJ.js";import"./ErrorBarContext-DPQTg4jn.js";import"./GraphicalItemClipPath-CgRDa1Kp.js";import"./SetGraphicalItem-k0XQScGi.js";import"./useAnimationId-DmBkD_4u.js";import"./getRadiusAndStrokeWidthFromDot-DpPgV3ut.js";import"./ActiveShapeUtils-Dj4smYQ8.js";import"./isPlainObject-DFvEMqvd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIwirMVx.js";import"./Trapezoid-tpniWtB4.js";import"./Sector-pL7nB78h.js";import"./Symbols-BAzW_gm6.js";import"./symbol-DKO9W9xf.js";import"./step-eBA07Zoi.js";import"./Curve-BkdTmnon.js";import"./index-CfUCN5Mt.js";import"./ChartSizeDimensions-CcoGZBL4.js";import"./OffsetShower-BdILJQRM.js";import"./PlotAreaShower-DssL7f_B.js";import"./PolarChart-DwhKx15D.js";import"./Polygon-utfnlob2.js";import"./polarScaleSelectors-I8i85bYz.js";import"./polarSelectors-Cmh3KG86.js";import"./maxBy-DOfUryuS.js";import"./iteratee-BnLCU3fu.js";const i={angle:{description:`Text rotation angle in degrees.
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
