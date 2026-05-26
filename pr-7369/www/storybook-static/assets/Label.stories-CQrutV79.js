import{e}from"./iframe-D8sYifa2.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DJUogzP7.js";import{d as f}from"./arrayEqualityCheck-y2Q9GogF.js";import{L as y}from"./LineChart-D_YlS_3q.js";import{p as u}from"./Page-DPte-9pC.js";import{C as h}from"./CartesianGrid-Bb81pApp.js";import{L as b}from"./Line-CkUEu8v5.js";import{Y as x}from"./YAxis-BUVq_Z24.js";import{X as R}from"./XAxis-9biS9qcH.js";import{R as g}from"./RechartsHookInspector-DH476wIm.js";import{R as v}from"./RadarChart-iz7FSOdE.js";import{R as w}from"./Radar-fleIshKu.js";import{P as A}from"./PolarGrid-DggYv-al.js";import{P}from"./PolarAngleAxis-BuenO2wZ.js";import{P as T}from"./PolarRadiusAxis-RK-L6eCq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUx68t71.js";import"./Text-CGRq25Ok.js";import"./DOMUtils-DEL1f2E9.js";import"./svgPropertiesAndEvents-DLjmXQI2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BoxbsGwS.js";import"./zIndexSlice-_08NoE64.js";import"./immer-DGWVQIGE.js";import"./RechartsWrapper-DkonLtU6.js";import"./hooks-BU-t5LUJ.js";import"./axisSelectors-BhhfO0Ag.js";import"./d3-scale-Cclz1I6I.js";import"./renderedTicksSlice-4e9Z0x6u.js";import"./index-CMJrcCvs.js";import"./CartesianChart-DyRJBMNu.js";import"./chartDataContext-RIukKWW8.js";import"./CategoricalChart-Cy6OSvk9.js";import"./CartesianAxis-k72kWN9A.js";import"./Layer-D0lgb40K.js";import"./types-C-x3ql1e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-D7_AU4BE.js";import"./step-Cv8kCHVT.js";import"./path-DyVhHtw_.js";import"./graphicalItemTheme-BorrGmPK.js";import"./ActivePoints-DwTRXl_F.js";import"./Dot-IstG4xe6.js";import"./RegisterGraphicalItemId-qsbqe2qd.js";import"./ErrorBarContext-CMRjTkut.js";import"./GraphicalItemClipPath-BvTSVrR_.js";import"./SetGraphicalItem-y2OPpJ7-.js";import"./useAnimationId-W_naYXH9.js";import"./getRadiusAndStrokeWidthFromDot-E4UfAf03.js";import"./ActiveShapeUtils-gpKwZwuV.js";import"./index-DmeQCr0O.js";import"./ChartSizeDimensions-HlWxaGyg.js";import"./OffsetShower-BZMcKLdA.js";import"./PlotAreaShower-DYk3IhVP.js";import"./PolarChart-0CeqmD7h.js";import"./Polygon-Df8gq8rM.js";import"./polarScaleSelectors-Ykf__3hp.js";import"./polarSelectors-B0gQ1eNI.js";import"./maxBy-DSSErlNM.js";import"./iteratee-DhisUvfr.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Be={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(f,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(h,null),e.createElement(b,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(x,{tick:!1}),e.createElement(R,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(g,null))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(v,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(w,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(A,null),e.createElement(P,{dataKey:"name"}),e.createElement(T,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}),e.createElement(g,null)),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ke=["API","PolarPositions"];export{r as API,o as PolarPositions,Ke as __namedExportsOrder,Be as default};
