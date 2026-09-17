import{R as e}from"./iframe-CCA1dLWD.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-C7jyVHZg.js";import{R as g}from"./zIndexSlice-Bqs-eJ8p.js";import{L as y}from"./LineChart-BGONc8N4.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DNUfTvW9.js";import{L as h}from"./Line-DzXrLh5M.js";import{Y as b}from"./YAxis-DVlxFbm5.js";import{X as x}from"./XAxis-B02ZLuLQ.js";import{R}from"./RadarChart-DBoFSUAv.js";import{R as v}from"./Radar-DQQzCzSV.js";import{P as w}from"./PolarGrid-C98fhBn6.js";import{P as A}from"./PolarAngleAxis-C5fjQt4n.js";import{P}from"./PolarRadiusAxis-CqCs1Nu2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-Cxmc4hoL.js";import"./resolveDefaultProps-DAFAxP68.js";import"./DOMUtils-B9q-UHbd.js";import"./isWellBehavedNumber-CUTtCnYO.js";import"./useId-C-4rQrJ2.js";import"./useBackwardsCompatibleTheme-B-BtV5HU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BsYZhZ4O.js";import"./index-C97djya6.js";import"./index-BTapAtmF.js";import"./throttle-D3xpLLdH.js";import"./RechartsWrapper-Ci54jWLi.js";import"./axisSelectors-ueWwuThv.js";import"./d3-scale-BdepyZ_B.js";import"./index-Cyg8bGg4.js";import"./index-CVq5gi49.js";import"./renderedTicksSlice-CuWBxFlw.js";import"./index-Cah2JXyu.js";import"./CartesianChart-CTE6kj-2.js";import"./chartDataContext-CLCJusst.js";import"./CategoricalChart-mUCs8Qny.js";import"./CartesianAxis-ClD0AQ8W.js";import"./Layer-CmH8ISrU.js";import"./types-B2426EfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-6_pS1I8Z.js";import"./step-pmX9eUCr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bwhxgw5t.js";import"./useAnimationId-BZsPKArS.js";import"./ActivePoints-D5cnScbI.js";import"./Dot-PvcySOeb.js";import"./RegisterGraphicalItemId-BRUpoP9Q.js";import"./ErrorBarContext-C-MqMGv0.js";import"./GraphicalItemClipPath-DcQmHX6S.js";import"./SetGraphicalItem-6HsvsmQk.js";import"./getRadiusAndStrokeWidthFromDot-CgH2ac05.js";import"./ActiveShapeUtils-zvjqERUF.js";import"./useGraphicalItemIdentity-CJ147Nvu.js";import"./PolarChart-D3zVhAvC.js";import"./Polygon-BSqHCP0a.js";import"./maxBy-C3sPMgo2.js";import"./iteratee-D0uU7ZFx.js";import"./polarScaleSelectors-D4eamj0k.js";import"./polarSelectors-DuD3P8_9.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Se={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},Ke=["API","PolarPositions"];var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{r as API,o as PolarPositions,Ke as __namedExportsOrder,Se as default};
