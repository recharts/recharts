import{e}from"./iframe-ChNOinEW.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-toG1Bdw3.js";import{g as f}from"./arrayEqualityCheck-ejHXznq4.js";import{L as y}from"./LineChart-CPon-J0Z.js";import{p as u}from"./Page-DPte-9pC.js";import{C as h}from"./CartesianGrid-B3MqC3fX.js";import{L as b}from"./Line-o244vEU5.js";import{Y as x}from"./YAxis-CSVKIBm8.js";import{X as R}from"./XAxis-BNsMzyt5.js";import{R as g}from"./RechartsHookInspector-BOE9KQVD.js";import{R as v}from"./RadarChart-Rp-8WqfH.js";import{R as w}from"./Radar-DuMj0Ra2.js";import{P as A}from"./PolarGrid-DVkTTiyj.js";import{P}from"./PolarAngleAxis-CL-G43GR.js";import{P as T}from"./PolarRadiusAxis-C1adgj9X.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-D9d9Y4NZ.js";import"./DOMUtils-DGZ4THTA.js";import"./resolveDefaultProps-CrKZ3yHb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8mCWzZh.js";import"./zIndexSlice-BFRT_l82.js";import"./immer-C-_4yaFF.js";import"./RechartsWrapper-e8IcX7Ky.js";import"./index-DMHtEqPw.js";import"./hooks-DZ4AuhfW.js";import"./axisSelectors-Wf-uHVWr.js";import"./d3-scale-B3SHfU9r.js";import"./renderedTicksSlice-P1hbw2J7.js";import"./CartesianChart-C54kEOmP.js";import"./chartDataContext-DjEoDELK.js";import"./CategoricalChart-CaEOI484.js";import"./CartesianAxis-B1qSIHlZ.js";import"./Layer-C5r2D5eL.js";import"./types-o0HcDoUt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-o5S5hG9f.js";import"./step-CtDorYUy.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Ck9hJUMi.js";import"./ActivePoints-DQV8XJKb.js";import"./Dot-el16A6Be.js";import"./RegisterGraphicalItemId-DDUKZo60.js";import"./ErrorBarContext-kJOKaxmw.js";import"./GraphicalItemClipPath-BEGDR4Eg.js";import"./SetGraphicalItem-DSKSTIyc.js";import"./useAnimationId-Dtq79URZ.js";import"./getRadiusAndStrokeWidthFromDot-DnG891GK.js";import"./ActiveShapeUtils-LTcw4Xsa.js";import"./index-OCCX1cWv.js";import"./ChartSizeDimensions-Cm_TkHUI.js";import"./OffsetShower-TftFluvn.js";import"./PlotAreaShower-zOTWVw7t.js";import"./PolarChart-CPsZk540.js";import"./Polygon-CPG3paIV.js";import"./polarScaleSelectors-D7XGt-gT.js";import"./polarSelectors-B0XFBkw4.js";import"./maxBy-BCay9cc0.js";import"./iteratee-BuSwAxym.js";const i={angle:{description:`Text rotation angle in degrees.
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
