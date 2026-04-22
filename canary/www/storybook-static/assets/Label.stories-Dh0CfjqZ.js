import{e}from"./iframe-BoQTj_5t.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-_o7tKgSJ.js";import{R as f}from"./arrayEqualityCheck-h4HF4x_W.js";import{L as y}from"./LineChart-Cbr8LfAS.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-DDawkQoj.js";import{L as b}from"./Line-BLk097ix.js";import{Y as x}from"./YAxis-C-30AhxJ.js";import{X as R}from"./XAxis-Bw8NdzWJ.js";import{R as g}from"./RechartsHookInspector-LBDhOt6e.js";import{R as v}from"./RadarChart-vKwGiIJZ.js";import{R as w}from"./Radar-DhXgwY6M.js";import{P as A}from"./PolarGrid-D97QTw-F.js";import{P}from"./PolarAngleAxis-CVd1u0DS.js";import{P as T}from"./PolarRadiusAxis-DB3-0YIe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-BztroWIo.js";import"./DOMUtils-DmRwSly6.js";import"./resolveDefaultProps-Cuq7Ey8b.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BO_vi_Q6.js";import"./zIndexSlice-CJZLZTJ5.js";import"./immer-LK4juX8g.js";import"./RechartsWrapper-CJottPx3.js";import"./index-BJ1s4j4a.js";import"./hooks-CxCFhuYH.js";import"./axisSelectors-vijQZibc.js";import"./d3-scale-Dvc-KAkv.js";import"./renderedTicksSlice-js0QwYAy.js";import"./CartesianChart-DLPrj-Eg.js";import"./chartDataContext-BrW6BV92.js";import"./CategoricalChart-CT1UCyKb.js";import"./CartesianAxis-B91cAptM.js";import"./Layer-D7Wm7_P-.js";import"./types-DLJuN5NY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-lu7EU6Kj.js";import"./ActivePoints-Dc2MnlRg.js";import"./Dot-D0_1FxKW.js";import"./RegisterGraphicalItemId-DvNGZwGO.js";import"./ErrorBarContext-pL12W9Rt.js";import"./GraphicalItemClipPath-BjwS4X8D.js";import"./SetGraphicalItem-Ce9evxpu.js";import"./useAnimationId-DbFh8KcE.js";import"./getRadiusAndStrokeWidthFromDot-CwRGrakx.js";import"./ActiveShapeUtils-7MZP2Iwm.js";import"./isPlainObject-cxYRvyg9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA5R7yHr.js";import"./Trapezoid-D4ZIub8Z.js";import"./Sector-Bxrfj806.js";import"./Symbols-DDT-2ywb.js";import"./symbol-DzG-jnmU.js";import"./step-BjXHarJ0.js";import"./Curve-CKkto3Op.js";import"./index-DDs3_BL6.js";import"./ChartSizeDimensions-BZhCWEAS.js";import"./OffsetShower-C-R2nTqO.js";import"./PlotAreaShower-d-TVNynX.js";import"./PolarChart-DW9KtgH1.js";import"./Polygon-BUDqDuuB.js";import"./polarScaleSelectors-DLcd0uO0.js";import"./polarSelectors-ByH_HBLJ.js";import"./maxBy-BHqknGMI.js";import"./iteratee-Cs4_s7eF.js";const i={angle:{description:`Text rotation angle in degrees.
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
