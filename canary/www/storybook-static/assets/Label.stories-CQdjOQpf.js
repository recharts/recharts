import{e}from"./iframe-BUUPGxKW.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-C0y-OKmx.js";import{R as f}from"./arrayEqualityCheck-uAaGhnkl.js";import{L as y}from"./LineChart-Csy6lkeg.js";import{C as h}from"./CartesianGrid-DwseK7AT.js";import{L as b}from"./Line-CtLW08yR.js";import{Y as x}from"./YAxis-B2sJZ_bt.js";import{X as R}from"./XAxis-DpsztnP2.js";import{R as u}from"./RechartsHookInspector-Bw28QuEh.js";import{R as v}from"./RadarChart-Bb2pBqf4.js";import{R as w}from"./Radar-BV3UVJrR.js";import{P as A}from"./PolarGrid-C4pQkAv8.js";import{P}from"./PolarAngleAxis-Diovtgwt.js";import{P as T}from"./PolarRadiusAxis-B2gwtzPI.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CHP1LCbq.js";import"./DOMUtils-z8uKMvkf.js";import"./resolveDefaultProps-DyTAkq0H.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CiKkYojy.js";import"./zIndexSlice-DsPDLjCa.js";import"./immer-kqZDXGZE.js";import"./RechartsWrapper-DdW9qina.js";import"./index-oLTRUqnU.js";import"./hooks-BNCSk-QW.js";import"./axisSelectors-CQVyKxdV.js";import"./d3-scale-b1qoVJWC.js";import"./renderedTicksSlice-GPCqPVlj.js";import"./CartesianChart-npq1asZ9.js";import"./chartDataContext-D2ei2EEV.js";import"./CategoricalChart-BjzN8N8f.js";import"./CartesianAxis-CFdsXoNd.js";import"./Layer-DlNKk7f2.js";import"./types-DBwevUA7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BaDlyhyr.js";import"./ActivePoints-oTNshfX-.js";import"./Dot-3oFAy5A0.js";import"./RegisterGraphicalItemId-F7IP_4jr.js";import"./ErrorBarContext-CwmlQaa8.js";import"./GraphicalItemClipPath-D_imBHSf.js";import"./SetGraphicalItem-BXWccnGO.js";import"./useAnimationId-CMTrGaHR.js";import"./getRadiusAndStrokeWidthFromDot-CPj_WkC-.js";import"./ActiveShapeUtils-yXhTLdG6.js";import"./isPlainObject-BGZcR8iC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-3zO8wV20.js";import"./Trapezoid-BV5ztp3S.js";import"./Sector-DdslfAV3.js";import"./Symbols-xIV2Z4Ym.js";import"./symbol-BvvTpJyA.js";import"./step-C9wD-hig.js";import"./Curve-C5yOoaqn.js";import"./index-ByfBPDju.js";import"./ChartSizeDimensions-Db9Stn-A.js";import"./OffsetShower-Di7UReX2.js";import"./PlotAreaShower-BDM2L963.js";import"./PolarChart-DMlOeXgr.js";import"./Polygon-BKAie5qu.js";import"./polarScaleSelectors-DIFb2OW3.js";import"./polarSelectors-BESqqFHh.js";import"./maxBy-Dz9UIFtj.js";import"./iteratee-D8peaFHS.js";const i={angle:{description:`Text rotation angle in degrees.
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
