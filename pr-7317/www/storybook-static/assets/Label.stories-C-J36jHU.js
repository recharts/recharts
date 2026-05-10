import{e}from"./iframe-Cl35quqC.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DLz8rNT7.js";import{R as f}from"./arrayEqualityCheck-D9UIghxi.js";import{L as y}from"./LineChart-TFB3n61O.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-BYNeB4aW.js";import{L as b}from"./Line-B6cjKV0J.js";import{Y as x}from"./YAxis-WP2I3lgo.js";import{X as R}from"./XAxis-FVKRUr2k.js";import{R as g}from"./RechartsHookInspector-BZ6jgrdq.js";import{R as v}from"./RadarChart-CqprXeqU.js";import{R as w}from"./Radar-BUQ-uRcZ.js";import{P as A}from"./PolarGrid-BlOLloiI.js";import{P}from"./PolarAngleAxis-D8KC0tfu.js";import{P as T}from"./PolarRadiusAxis-C2nB32v5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-DNnOYqaK.js";import"./DOMUtils-DIh1PeI4.js";import"./resolveDefaultProps-BhrqjrLa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-H1bn9xe9.js";import"./zIndexSlice-DkkJQXQO.js";import"./immer-CY0Lk3WW.js";import"./RechartsWrapper-jOGgq2Y2.js";import"./index-_ky2ePMv.js";import"./hooks-CNddY0Tb.js";import"./axisSelectors-DeCbtXoM.js";import"./d3-scale-BkxfZ9aI.js";import"./renderedTicksSlice-BLU8jnqb.js";import"./CartesianChart-CGp9HSBf.js";import"./chartDataContext-ZINcULtA.js";import"./CategoricalChart-0NzQu1bM.js";import"./CartesianAxis-Dg85fGZU.js";import"./Layer-CeD-uJbZ.js";import"./types-D677_BtS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DZzHwFX5.js";import"./ActivePoints-B4P09zpr.js";import"./Dot-BR2Bc69w.js";import"./RegisterGraphicalItemId-BLnqRJKY.js";import"./ErrorBarContext-BQ7AUjVv.js";import"./GraphicalItemClipPath-Dk-2dIcR.js";import"./SetGraphicalItem-CECI28wk.js";import"./useAnimationId-BL2H4qbR.js";import"./getRadiusAndStrokeWidthFromDot-BWrVeHgV.js";import"./ActiveShapeUtils-DPlGMvpt.js";import"./isPlainObject-DrB0XJwF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZCtg9qm.js";import"./Trapezoid-CB0ArsDb.js";import"./Sector-HEQQPb1w.js";import"./Symbols-oEtpWgQJ.js";import"./symbol-BZKabVvR.js";import"./step-BlMx9OF4.js";import"./Curve-hm8tQy1x.js";import"./index-BdngFJZK.js";import"./ChartSizeDimensions-Dc6hCc8f.js";import"./OffsetShower-DCGl5kEz.js";import"./PlotAreaShower-D3XS0cIi.js";import"./PolarChart-CoJ4QmjM.js";import"./Polygon-BnF268S2.js";import"./polarScaleSelectors-C4hKZuQq.js";import"./polarSelectors-obpkv8uP.js";import"./maxBy-CaiEB83Y.js";import"./iteratee-BgC_x1g5.js";const i={angle:{description:`Text rotation angle in degrees.
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
