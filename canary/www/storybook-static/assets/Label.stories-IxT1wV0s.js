import{R as e}from"./iframe-Bva2xGHH.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Dki1vWaX.js";import{R as g}from"./zIndexSlice-DeikvbmU.js";import{L as y}from"./LineChart-D2T_XP6Z.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-TRCTuU41.js";import{L as h}from"./Line-CogWmZIW.js";import{Y as b}from"./YAxis-B36u7uIT.js";import{X as x}from"./XAxis-CsoDjkEh.js";import{R}from"./RadarChart-C-wP6sc0.js";import{R as v}from"./Radar-1LlwJ7Kb.js";import{P as w}from"./PolarGrid-Bdck_Bo5.js";import{P as A}from"./PolarAngleAxis-CjGWmtBE.js";import{P}from"./PolarRadiusAxis-DY8eKZnn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-D8IJbXoV.js";import"./resolveDefaultProps-BuBoAocm.js";import"./DOMUtils-CMvwzHzQ.js";import"./isWellBehavedNumber-D9_2opJl.js";import"./useId-Bwx6_eZW.js";import"./useBackwardsCompatibleTheme-3vkLTFmK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B1sYnbf5.js";import"./index-Bo6z76Fs.js";import"./index-DT3MRaoS.js";import"./throttle-CFyzV36U.js";import"./RechartsWrapper-DkrfE3IH.js";import"./index-VUoyG6xU.js";import"./index-EwtDjp0y.js";import"./axisSelectors-1RAYR2bl.js";import"./d3-scale-CJSi8F9P.js";import"./renderedTicksSlice-CmjvxnPV.js";import"./CartesianChart-KP50bz7-.js";import"./chartDataContext-DHJzh3Cw.js";import"./CategoricalChart-DYOSFUHe.js";import"./CartesianAxis-aOVQqLXO.js";import"./Layer-PgPW5wj-.js";import"./types-CDHj9Y5Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C5PYz-5A.js";import"./step-C1KJzklo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dw2l639N.js";import"./useAnimationId-DDHow2US.js";import"./ActivePoints-DDTXKmxX.js";import"./Dot-TiF0MySe.js";import"./RegisterGraphicalItemId-CycuLbwA.js";import"./ErrorBarContext-tOF5cXSF.js";import"./GraphicalItemClipPath-D8nHpKQ-.js";import"./SetGraphicalItem-482J7PRy.js";import"./getRadiusAndStrokeWidthFromDot-D-WW1Ids.js";import"./ActiveShapeUtils-zdhhOiSb.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./PolarChart-D3NGiU7w.js";import"./Polygon-DvHKsJrB.js";import"./maxBy-B-u1Hvcx.js";import"./iteratee-WIaZd5o8.js";import"./polarScaleSelectors-CPwuOccI.js";import"./polarSelectors-jC-PGFAB.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ie={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Se=["API","PolarPositions"];export{r as API,o as PolarPositions,Se as __namedExportsOrder,Ie as default};
