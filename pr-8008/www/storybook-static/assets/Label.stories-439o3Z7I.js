import{R as e}from"./iframe-R8qakbXa.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-KdqZDMP0.js";import{R as g}from"./zIndexSlice-CpW5IUCm.js";import{L as f}from"./LineChart-R_vEBtgH.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-B-hfSGh5.js";import{L as y}from"./Line-C0UZrz4D.js";import{Y as b}from"./YAxis-ByXOMKUb.js";import{X as x}from"./XAxis-C4Jew8Rv.js";import{R as w}from"./RadarChart-E9Tima60.js";import{R}from"./Radar-DTrb3jys.js";import{P as v}from"./PolarGrid-C2SrPttK.js";import{P as A}from"./PolarAngleAxis-Cv0m9D0D.js";import{P}from"./PolarRadiusAxis-Dirv-KNU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-DWNopLVO.js";import"./resolveDefaultProps-CKR1Qcev.js";import"./pageBackground-C5CyBpzw.js";import"./isWellBehavedNumber-B09TyYXX.js";import"./useId-bPLq3L_8.js";import"./useBackwardsCompatibleTheme-qV0asEjz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BembMDFS.js";import"./index-BFIsGGpk.js";import"./index-igt8webG.js";import"./throttle-B9oD6XZ1.js";import"./RechartsWrapper-ClWcdPE7.js";import"./axisSelectors-DMTHYW2V.js";import"./d3-scale-aDQi0991.js";import"./index-BFytD52I.js";import"./index-CMthufc-.js";import"./renderedTicksSlice-BQVB4poR.js";import"./index-Di16hjPT.js";import"./CartesianChart-PED4jNlL.js";import"./chartDataContext-BSaHGzuI.js";import"./CategoricalChart-DaUIhj12.js";import"./CartesianAxis-D_UchkJi.js";import"./Layer-CmAPD_t-.js";import"./types-D_TtzLi3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C-kAiHcE.js";import"./step-BfWCr2W6.js";import"./path-DyVhHtw_.js";import"./activeStyles-B3GTJvDM.js";import"./useAnimationId-CjllIhER.js";import"./dataEntryStyles-DI0HDDLL.js";import"./ActivePoints-Bp8whF8k.js";import"./Dot-BkoFNCjF.js";import"./ErrorBarContext-0rDV8hpt.js";import"./GraphicalItemClipPath-BVAEKKRa.js";import"./SetGraphicalItem-Bvw8mbwf.js";import"./getRadiusAndStrokeWidthFromDot-CMshxAsh.js";import"./ActiveShapeUtils-D6A65k3S.js";import"./useEffectiveDataKey-DI06uwcg.js";import"./PolarChart-CNlNd8FF.js";import"./Polygon-Ci6h2mRp.js";import"./maxBy-BgSrD2Vj.js";import"./iteratee-CNuCkrqA.js";import"./polarScaleSelectors-Drtmg879.js";import"./polarSelectors-CBj74k9F.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a rectangle behind the label, for example to keep it readable on top of a filled shape.\n\n- `true` draws the background with default styles.\n  The fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n- `false` or `undefined` draws no background.\n\nThe background is sized from the rendered text.\nIt is not drawn for labels that follow a curved path (`insideStart`, `insideEnd` and `end` in polar charts),\nnor for custom `content`.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ie={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(f,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(h,null),e.createElement(y,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(w,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(R,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(v,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},Ke=["API","PolarPositions"];var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{r as API,o as PolarPositions,Ke as __namedExportsOrder,Ie as default};
