import{e}from"./iframe-C389UKKQ.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-BsU6QA-m.js";import{g as f}from"./arrayEqualityCheck-Cu2SMg-k.js";import{L as y}from"./LineChart-D8QJGyP4.js";import{p as u}from"./Page-DPte-9pC.js";import{C as h}from"./CartesianGrid-CruiBcA5.js";import{L as b}from"./Line-CTNqbcwQ.js";import{Y as x}from"./YAxis-DdPwtx1e.js";import{X as R}from"./XAxis-CkTpgH_L.js";import{R as g}from"./RechartsHookInspector-CxbWCB6n.js";import{R as v}from"./RadarChart-94MqfE1s.js";import{R as w}from"./Radar-BnK-nWai.js";import{P as A}from"./PolarGrid-pP5CRlh_.js";import{P}from"./PolarAngleAxis-Du8ki1yt.js";import{P as T}from"./PolarRadiusAxis-B9hxfNJj.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OX2yCAej.js";import"./zIndexSlice-DHdgWlAr.js";import"./immer-4pDlWF5t.js";import"./RechartsWrapper-De-O4PZ_.js";import"./index-CDhhJ3He.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./CategoricalChart-C8H-MuO4.js";import"./CartesianAxis-BfjJ9MKk.js";import"./Layer-BRJkvvA0.js";import"./types-9ii6Ug_u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DBcCTjlE.js";import"./step-DbNUII7N.js";import"./path-DyVhHtw_.js";import"./ReactUtils-B3LU80BF.js";import"./ActivePoints-CgiRv0IS.js";import"./Dot-BzYUQbpy.js";import"./RegisterGraphicalItemId-e2Xsds3X.js";import"./ErrorBarContext-BnMue-Vz.js";import"./GraphicalItemClipPath-CCvWImiO.js";import"./SetGraphicalItem-DcN0Hr85.js";import"./useAnimationId-CxUXlcSZ.js";import"./getRadiusAndStrokeWidthFromDot-DD7Lnopo.js";import"./ActiveShapeUtils-FSjQNWDr.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";import"./PolarChart-BmsLwM4l.js";import"./Polygon-DwyGotCV.js";import"./polarScaleSelectors-BLE7laM2.js";import"./polarSelectors-jfbO8P6J.js";import"./maxBy-DpHOjs1i.js";import"./iteratee-DHpBDbpq.js";const i={angle:{description:`Text rotation angle in degrees.
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
