import{e}from"./iframe-u6iaaRfQ.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DK4_THpm.js";import{R as f}from"./arrayEqualityCheck-CLYylJu6.js";import{L as y}from"./LineChart-Bl6ZNbva.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-BY6Zx_xc.js";import{L as b}from"./Line-BT8py2Um.js";import{Y as x}from"./YAxis-DOArs6LY.js";import{X as R}from"./XAxis-CafeDi3k.js";import{R as g}from"./RechartsHookInspector-ChFSzWj0.js";import{R as v}from"./RadarChart-Dfm6Nt9L.js";import{R as w}from"./Radar-BBEjFvZV.js";import{P as A}from"./PolarGrid-BlWwoZeP.js";import{P}from"./PolarAngleAxis-DR1nbri6.js";import{P as T}from"./PolarRadiusAxis-DFxgB2af.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CgS9yB44.js";import"./DOMUtils-Nlbt7DfZ.js";import"./resolveDefaultProps-IMCpx0Yt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D67zVttg.js";import"./zIndexSlice-DWVvwkZr.js";import"./immer-2VVJTBUN.js";import"./RechartsWrapper-BxKNS5Rk.js";import"./index-CIiFpIIw.js";import"./hooks-Dssc-Fg7.js";import"./axisSelectors-krUy4F6I.js";import"./d3-scale-Bj-ttDNW.js";import"./renderedTicksSlice-B-DvccZo.js";import"./CartesianChart-Dljgkd1w.js";import"./chartDataContext-CfRwcYbq.js";import"./CategoricalChart-CFZJD47L.js";import"./CartesianAxis-D9B34M5E.js";import"./Layer-CT2CAOks.js";import"./types-BdeQdTqa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BAv5fhiw.js";import"./ActivePoints-BaaXz2oX.js";import"./Dot-CTvFv7nE.js";import"./RegisterGraphicalItemId-C8o_81FM.js";import"./ErrorBarContext-qXy6_5PW.js";import"./GraphicalItemClipPath-PPuT3qYL.js";import"./SetGraphicalItem-CnqUUVpy.js";import"./useAnimationId-BD3P1pqn.js";import"./getRadiusAndStrokeWidthFromDot-PqQ1H61_.js";import"./ActiveShapeUtils-DdZUdvs2.js";import"./isPlainObject-B8BtVZgq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqG21RYU.js";import"./Trapezoid-CNfti2nG.js";import"./Sector-Cd7r1-lt.js";import"./Symbols-Bxoc8kEL.js";import"./symbol-BgXEUeDH.js";import"./step-0mVlQoKY.js";import"./Curve-5QbieyFV.js";import"./index-BOENtfhc.js";import"./ChartSizeDimensions-CsL5LAMT.js";import"./OffsetShower-D3fuh2M8.js";import"./PlotAreaShower-FynNvHOc.js";import"./PolarChart-DHGcXLtu.js";import"./Polygon-DjqLFK-7.js";import"./polarScaleSelectors-Bv9WjeAW.js";import"./polarSelectors-BPZ4xaHk.js";import"./maxBy-B3vF42gI.js";import"./iteratee-Dv-ztwy4.js";const i={angle:{description:`Text rotation angle in degrees.
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
