import{R as e}from"./iframe-BKk44VOT.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-BPr6N2Q-.js";import{R as g}from"./zIndexSlice-BjWKOBUm.js";import{L as y}from"./LineChart-CD5nW8Y-.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CGCqXQ0o.js";import{L as h}from"./Line-BvewL5vb.js";import{Y as b}from"./YAxis-DPFxody7.js";import{X as x}from"./XAxis-2cJ7kaI0.js";import{R}from"./RadarChart-8he8clxi.js";import{R as v}from"./Radar-Drj3dPtT.js";import{P as w}from"./PolarGrid-BKW-AZfn.js";import{P as A}from"./PolarAngleAxis-CZ6p2O0n.js";import{P}from"./PolarRadiusAxis-DbLRE0dX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-BtR9CUIB.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./DOMUtils-Dil5o6Lr.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./throttle-BdnDrpLZ.js";import"./RechartsWrapper-CVGPHljF.js";import"./axisSelectors-BiJJw6in.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./index-CvfG5lr1.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./CartesianAxis-D8EUtvdL.js";import"./Layer-6OjQkfig.js";import"./types-CjNR6i_K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bl3ua7_T.js";import"./step-Dtmfv3UM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_iMVf6zS.js";import"./useAnimationId-DT580Fuf.js";import"./ActivePoints-RMI7wAiF.js";import"./Dot-CWbOoqzR.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getRadiusAndStrokeWidthFromDot-nIjLU3ma.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./PolarChart-D809ODbe.js";import"./Polygon-qsKgBpIV.js";import"./maxBy-tYAnZGT8.js";import"./iteratee-Dk_Av1Hh.js";import"./polarScaleSelectors-hr2oqHYL.js";import"./polarSelectors-aTZGPC7G.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Se={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ke=["API","PolarPositions"];export{r as API,o as PolarPositions,Ke as __namedExportsOrder,Se as default};
