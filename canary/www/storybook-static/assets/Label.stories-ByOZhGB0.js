import{e}from"./iframe-BpuHkxzv.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DXexZu28.js";import{g as f}from"./arrayEqualityCheck-D3NbzucA.js";import{L as y}from"./LineChart-DbHE3aJ7.js";import{p as u}from"./Page-DPte-9pC.js";import{C as h}from"./CartesianGrid-B8Emn2Id.js";import{L as b}from"./Line-CgHPqU2o.js";import{Y as x}from"./YAxis-Di_DA3y5.js";import{X as R}from"./XAxis-DAM5aOqn.js";import{R as g}from"./RechartsHookInspector-AaKfh7uA.js";import{R as v}from"./RadarChart-Boi1lSpL.js";import{R as w}from"./Radar-Lz_iRF63.js";import{P as A}from"./PolarGrid-D7AhSqW7.js";import{P}from"./PolarAngleAxis-BuACUtFO.js";import{P as T}from"./PolarRadiusAxis-CkRvsnm8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CQDQNrmI.js";import"./DOMUtils-CJA5o4Wn.js";import"./resolveDefaultProps-B_sB-kQg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DB_dF6Ce.js";import"./zIndexSlice-CmLQD4Hj.js";import"./immer-OyT0OiEL.js";import"./RechartsWrapper-PymVavj3.js";import"./index-B2w93Cnl.js";import"./hooks-B1cGBeOq.js";import"./axisSelectors-BJZ14qKk.js";import"./d3-scale-BeDrD5FO.js";import"./renderedTicksSlice-BdwSoJ9a.js";import"./CartesianChart-zmg0JzJu.js";import"./chartDataContext-8upaOC_y.js";import"./CategoricalChart-BFAw-aMI.js";import"./CartesianAxis-C7ZsdIQA.js";import"./Layer-BqE9-RFh.js";import"./types-EV6wLq9J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CBMG8s0Y.js";import"./step-BD2V_DAB.js";import"./path-DyVhHtw_.js";import"./ReactUtils-eZNJAb5x.js";import"./ActivePoints-BAZZqzbw.js";import"./Dot-DpxQTaWX.js";import"./RegisterGraphicalItemId-DWnLfZVy.js";import"./ErrorBarContext-C3BTG3j_.js";import"./GraphicalItemClipPath-alzdk-Y9.js";import"./SetGraphicalItem-D6w_4jw8.js";import"./useAnimationId-ObzFSifI.js";import"./getRadiusAndStrokeWidthFromDot-CfvNKrul.js";import"./ActiveShapeUtils-CT-qLZ85.js";import"./index-DNW34nIA.js";import"./ChartSizeDimensions-BVyFPlkv.js";import"./OffsetShower-opK80ySX.js";import"./PlotAreaShower-CqZ4IRUd.js";import"./PolarChart-DmyeHW-x.js";import"./Polygon-DlXYrvCW.js";import"./polarScaleSelectors-BpFK4koi.js";import"./polarSelectors-DdOash3i.js";import"./maxBy-BFcpiRgM.js";import"./iteratee-Dy8tB5bU.js";const i={angle:{description:`Text rotation angle in degrees.
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
