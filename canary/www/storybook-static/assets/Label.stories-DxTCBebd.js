import{R as e}from"./iframe-IXBD7Hhe.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-COpsAeG1.js";import{R as g}from"./zIndexSlice-Bx8LfIjs.js";import{L as y}from"./LineChart-DC73wMG6.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CO0Gigqi.js";import{L as h}from"./Line-CBDt_Hjf.js";import{Y as b}from"./YAxis-BVu4beHD.js";import{X as x}from"./XAxis-XUByFPwA.js";import{R}from"./RadarChart-DiGcPnAH.js";import{R as v}from"./Radar-c3shVIRl.js";import{P as w}from"./PolarGrid-CC5cDtNo.js";import{P as A}from"./PolarAngleAxis-Btkk967P.js";import{P}from"./PolarRadiusAxis-uZwStahB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-CKl7HfzI.js";import"./resolveDefaultProps-LMM2s1w5.js";import"./DOMUtils-CIca5pvR.js";import"./isWellBehavedNumber-DuIg09Ee.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDgiHtX6.js";import"./index-BH3ea_oR.js";import"./index-CLS2dsqf.js";import"./throttle-Cb9pxaut.js";import"./RechartsWrapper-C6CdKiKJ.js";import"./index-DHkJVPjU.js";import"./index-P0vZTmxc.js";import"./axisSelectors-Cllx2Xbl.js";import"./d3-scale-DP7A7DdQ.js";import"./renderedTicksSlice-DFEnKLGW.js";import"./CartesianChart-GzQbM-WD.js";import"./chartDataContext-TL9Jhgyo.js";import"./CategoricalChart-CsZZ-_Ww.js";import"./CartesianAxis-vF0DZ8PI.js";import"./Layer-CznxcDV0.js";import"./types-ootxRHuI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Dmq8UOW5.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BH0BT-1U.js";import"./step-CYiGRfb_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C0wExScK.js";import"./useAnimationId-DKTTaUff.js";import"./ActivePoints-CHxp0sMa.js";import"./Dot-CqTh5SAj.js";import"./RegisterGraphicalItemId-c9Yy-XmY.js";import"./ErrorBarContext-Bg5OE5lB.js";import"./GraphicalItemClipPath-DnF330yG.js";import"./SetGraphicalItem-D7LoeNCT.js";import"./getRadiusAndStrokeWidthFromDot-CdGZqJil.js";import"./ActiveShapeUtils-DQ7ehDLd.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./PolarChart-DoNcV2pD.js";import"./Polygon-CjYkaN76.js";import"./maxBy-wcmQUKzE.js";import"./iteratee-MNxXH5z8.js";import"./polarScaleSelectors-DjGofC3O.js";import"./polarSelectors-BAN6YX53.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Be={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ie=["API","PolarPositions"];export{r as API,o as PolarPositions,Ie as __namedExportsOrder,Be as default};
