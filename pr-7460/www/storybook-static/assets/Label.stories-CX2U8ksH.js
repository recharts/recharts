import{R as e}from"./iframe-Bwb61Kb3.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-C3p-lZQP.js";import{R as g}from"./zIndexSlice-D31yQesP.js";import{L as y}from"./LineChart-Do6cJwgo.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-sNGzwy0s.js";import{L as h}from"./Line-C4AjvgS0.js";import{Y as b}from"./YAxis-CFeDU12P.js";import{X as x}from"./XAxis-CSW3SlTU.js";import{R}from"./RadarChart-C0oS3uRd.js";import{R as v}from"./Radar-yc9v8uxc.js";import{P as w}from"./PolarGrid-Bx9NvByu.js";import{P as A}from"./PolarAngleAxis-CQr0xaOJ.js";import{P}from"./PolarRadiusAxis-CWYa35H1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cnvgfe2T.js";import"./Text-DNg8TFYr.js";import"./resolveDefaultProps-BSJiJTDh.js";import"./DOMUtils-ChqDP5B4.js";import"./isWellBehavedNumber-BUfCnJUB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Djnma_X0.js";import"./index-u4qnc4RM.js";import"./index-DHxQl28E.js";import"./immer-_NZCx9ap.js";import"./RechartsWrapper-BmkLmt4T.js";import"./index-VoBgttoT.js";import"./index-CQ8V2YYj.js";import"./renderedTicksSlice-DltxEF0x.js";import"./axisSelectors-C6KxvASB.js";import"./d3-scale-jv5Gnb2-.js";import"./CartesianChart-BNE4fepl.js";import"./chartDataContext-D41xMC5d.js";import"./CategoricalChart-BUwoY-M8.js";import"./CartesianAxis-BPlmGRVp.js";import"./Layer-Ci9WruQM.js";import"./types-Bi-bjjeC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BGl8TuYV.js";import"./step-CnKejACU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-4rj5S85S.js";import"./useAnimationId-h0tb0wwo.js";import"./ActivePoints-oLE2SAgh.js";import"./Dot-Bt6enifh.js";import"./RegisterGraphicalItemId-BzHAnQiR.js";import"./ErrorBarContext-CyOyQ4I7.js";import"./GraphicalItemClipPath-CxkydB3y.js";import"./SetGraphicalItem-BRIRFn2y.js";import"./getRadiusAndStrokeWidthFromDot-CF1gEAgf.js";import"./ActiveShapeUtils-ZkpQ4WD_.js";import"./PolarChart-fZ6KdBCW.js";import"./Polygon-B_redOTs.js";import"./polarScaleSelectors-DT8fKs57.js";import"./polarSelectors-yu-0FLrY.js";import"./maxBy-8FdHcD9z.js";import"./iteratee-BFWaDkBd.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ee={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelArgs),
    position: 'center'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ve=["API","PolarPositions"];export{r as API,o as PolarPositions,Ve as __namedExportsOrder,Ee as default};
