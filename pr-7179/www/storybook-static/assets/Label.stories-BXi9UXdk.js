import{e}from"./iframe-C27-mxY1.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-B6Z4EDvc.js";import{R as f}from"./arrayEqualityCheck-D-5eU_dz.js";import{L as y}from"./LineChart-C6gtMSpp.js";import{C as h}from"./CartesianGrid-BenP0TUi.js";import{L as b}from"./Line-BOC_LYzJ.js";import{Y as x}from"./YAxis-CPvAYGY0.js";import{X as R}from"./XAxis-Bkm5Gu7p.js";import{R as u}from"./RechartsHookInspector-C_T85NFo.js";import{R as v}from"./RadarChart-CmdPcVl9.js";import{R as w}from"./Radar-C8MpG55W.js";import{P as A}from"./PolarGrid-RVg8pOcr.js";import{P}from"./PolarAngleAxis-BRevwes2.js";import{P as T}from"./PolarRadiusAxis-D1iujgaA.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CElC0_ua.js";import"./DOMUtils-D5gfPOoi.js";import"./resolveDefaultProps-B1dYXzyb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-pky4ZU.js";import"./zIndexSlice-BLW0sC1L.js";import"./immer-CWybgQyF.js";import"./RechartsWrapper-BXh7or_8.js";import"./index-Cipx1Q0g.js";import"./hooks-DsYJGE2Z.js";import"./axisSelectors-DwTIaSff.js";import"./d3-scale-OsBLx27H.js";import"./renderedTicksSlice-CUE3MGhg.js";import"./CartesianChart-D9sILVKg.js";import"./chartDataContext-YAUKbSg3.js";import"./CategoricalChart-CJAeAbHf.js";import"./CartesianAxis-DZAE-TXK.js";import"./Layer-DIVtJdsU.js";import"./types-DbJv915h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DuG0Tdq5.js";import"./ActivePoints-h9H1Ebnw.js";import"./Dot-DiMYf5U7.js";import"./RegisterGraphicalItemId-CuWJpCyW.js";import"./ErrorBarContext-2LiDJnsG.js";import"./GraphicalItemClipPath-CJlc_ulB.js";import"./SetGraphicalItem-1mG4wi13.js";import"./useAnimationId-TcKlRMa1.js";import"./getRadiusAndStrokeWidthFromDot-BW0gjx4V.js";import"./ActiveShapeUtils-BMqQzPng.js";import"./isPlainObject-Cs6ajyZL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D88V661C.js";import"./Trapezoid-DPganyo-.js";import"./Sector-BBijWEml.js";import"./Symbols-ygUKGMj2.js";import"./symbol-Bcxorr4O.js";import"./step-DPeTeJhQ.js";import"./Curve-C3fWZnPx.js";import"./index-B878aojC.js";import"./ChartSizeDimensions-DFVuZGv4.js";import"./OffsetShower-r-mNA0Bt.js";import"./PlotAreaShower-ulVkY6PA.js";import"./PolarChart-CG1DwP_n.js";import"./Polygon-DYkbohoU.js";import"./polarScaleSelectors-Mks4xorn.js";import"./polarSelectors-D5hzHZKE.js";import"./maxBy-COhjTN2v.js";import"./iteratee-BVOByGiD.js";const i={angle:{description:`Text rotation angle in degrees.
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
