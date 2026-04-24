import{e}from"./iframe-iXVZ0OWw.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DFdLWFZO.js";import{R as f}from"./arrayEqualityCheck-Bs7awETv.js";import{L as y}from"./LineChart-9MgFEhk7.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-C2nMAjLT.js";import{L as b}from"./Line-CCH_s4P0.js";import{Y as x}from"./YAxis-BONLIFGC.js";import{X as R}from"./XAxis-Y2bxQYNa.js";import{R as g}from"./RechartsHookInspector-QPfA1UiQ.js";import{R as v}from"./RadarChart-CjYMdcQX.js";import{R as w}from"./Radar-BgbfFRKp.js";import{P as A}from"./PolarGrid-BYHKgmzK.js";import{P}from"./PolarAngleAxis-D-avHw3H.js";import{P as T}from"./PolarRadiusAxis-CIkVn44G.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-BTO53QFq.js";import"./DOMUtils-BF1xhoe1.js";import"./resolveDefaultProps-DZrbJThI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bsv83kPu.js";import"./zIndexSlice-D699PQjh.js";import"./immer-D9XbeXAx.js";import"./RechartsWrapper-Al7ZScv5.js";import"./index-P8miOr9q.js";import"./hooks-hExiU42m.js";import"./axisSelectors-C0i3ctr0.js";import"./d3-scale-CKEOWdk4.js";import"./renderedTicksSlice-CFlbd-Pg.js";import"./CartesianChart-CmpgeL8p.js";import"./chartDataContext-BSmZPOfG.js";import"./CategoricalChart-C87NLSKj.js";import"./CartesianAxis-8r9ztVGp.js";import"./Layer-CGbljtJR.js";import"./types-BHwUrVE7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DHe6gE8g.js";import"./ActivePoints-DfTTcs7z.js";import"./Dot-CCBlTxNb.js";import"./RegisterGraphicalItemId-BvNsmO5D.js";import"./ErrorBarContext-Bl38LcUT.js";import"./GraphicalItemClipPath-CbkDaRj8.js";import"./SetGraphicalItem-BA2l-KDv.js";import"./useAnimationId-B_Uu5T7V.js";import"./getRadiusAndStrokeWidthFromDot-BSnUDXXs.js";import"./ActiveShapeUtils-DLIttevF.js";import"./isPlainObject-C5HoPG-J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSd4AbXR.js";import"./Trapezoid-CQSpJBVW.js";import"./Sector-BBLCd5Jd.js";import"./Symbols-vgP9iBxE.js";import"./symbol-C3fUoARJ.js";import"./step-C3QbnIY1.js";import"./Curve-8m_6XEtl.js";import"./index-czQzbvEN.js";import"./ChartSizeDimensions-iHbrzIWQ.js";import"./OffsetShower-dcduOxOC.js";import"./PlotAreaShower-BzP3r89Q.js";import"./PolarChart-Cvg7P__W.js";import"./Polygon-BREEfqOT.js";import"./polarScaleSelectors-DGnVTZ9N.js";import"./polarSelectors-Kai7ilB2.js";import"./maxBy-BioymO1Z.js";import"./iteratee-DJziDCBj.js";const i={angle:{description:`Text rotation angle in degrees.
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
