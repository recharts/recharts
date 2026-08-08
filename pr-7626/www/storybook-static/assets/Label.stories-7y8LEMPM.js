import{R as e}from"./iframe-mg7UZdto.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Dkvvn7Fi.js";import{R as g}from"./zIndexSlice-DEfN8C0Z.js";import{L as y}from"./LineChart-BWgolCOG.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DN2LwA5f.js";import{L as h}from"./Line-CKKxuewC.js";import{Y as b}from"./YAxis-BMDO5XEp.js";import{X as x}from"./XAxis-BsNzvHKv.js";import{R}from"./RadarChart-CiKsy7Cx.js";import{R as v}from"./Radar-B8FFkFPr.js";import{P as w}from"./PolarGrid-B1_-oo1m.js";import{P as A}from"./PolarAngleAxis-Di6aW2Dw.js";import{P}from"./PolarRadiusAxis-DG9crMpa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-B1zEX4dn.js";import"./resolveDefaultProps-BbtnPTv-.js";import"./DOMUtils-L0wsUfkf.js";import"./isWellBehavedNumber-D_gpPOh3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwALprKR.js";import"./index-DZOBKqcM.js";import"./index-bFsd1KxH.js";import"./throttle-HD1NX84B.js";import"./RechartsWrapper-BkHp-MEf.js";import"./index-BUwgWfYf.js";import"./index-DeDE_LvF.js";import"./axisSelectors-BM8BDlXD.js";import"./d3-scale-BWztF9lr.js";import"./renderedTicksSlice-sYtIEKKa.js";import"./CartesianChart-B1jEcb3f.js";import"./chartDataContext-Dda0Eag5.js";import"./CategoricalChart-B1n3f5Qd.js";import"./CartesianAxis-DSGrP4Zf.js";import"./Layer-C85ssoby.js";import"./types-afGVOb_T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CO1IbQpv.js";import"./isBuffer-BG75eWKN.js";import"./Curve-k9Dj6G6o.js";import"./step-CmgtGEqA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1JY3m8f.js";import"./useAnimationId-B9PPVOgc.js";import"./ActivePoints-q5U2dg7Z.js";import"./Dot-Bxa-PMP9.js";import"./RegisterGraphicalItemId-k1fDZWtY.js";import"./ErrorBarContext-BlA0hFY9.js";import"./graphicalItemIdentity-C58faD0D.js";import"./SetGraphicalItem-Cs3-aGdX.js";import"./getRadiusAndStrokeWidthFromDot-DhEmmwnz.js";import"./ActiveShapeUtils-vQCoYSuM.js";import"./PolarChart-DSYn8spQ.js";import"./Polygon-B2Z9FHPd.js";import"./maxBy-DGjcsF5K.js";import"./iteratee-BYovAAOw.js";import"./polarScaleSelectors-B_NX2izH.js";import"./polarSelectors-H_QCbUSX.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},ke={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Be=["API","PolarPositions"];export{r as API,o as PolarPositions,Be as __namedExportsOrder,ke as default};
