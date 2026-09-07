import{R as e}from"./iframe-oSm8ncin.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DPyx96_s.js";import{R as g}from"./zIndexSlice-DvT_amFo.js";import{L as y}from"./LineChart-CRAJ5Pja.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-cmL_ACSA.js";import{L as h}from"./Line-DROjObTD.js";import{Y as b}from"./YAxis-BivtkPP6.js";import{X as x}from"./XAxis-rWMx021r.js";import{R}from"./RadarChart-B8seAmJR.js";import{R as v}from"./Radar-Bxpx7y0T.js";import{P as w}from"./PolarGrid-DdbJdoG2.js";import{P as A}from"./PolarAngleAxis-CziUI7wu.js";import{P}from"./PolarRadiusAxis-DiTzwMav.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-BWvwrxPl.js";import"./resolveDefaultProps-CiTJI47d.js";import"./DOMUtils-BGxUAFyQ.js";import"./isWellBehavedNumber-CCMQKmI-.js";import"./useId-BLP9z_DT.js";import"./useBackwardsCompatibleTheme-B6W0Pzfd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Csw-EOMR.js";import"./index-BcLgASAz.js";import"./index-DhJ936Cx.js";import"./throttle-Cx1ccipN.js";import"./RechartsWrapper-DD_spGc2.js";import"./axisSelectors-CKiFWBK6.js";import"./d3-scale-VuQaHR8V.js";import"./index-BEgTYoe2.js";import"./index-Bu5ia8Fq.js";import"./renderedTicksSlice-DvZXVX5V.js";import"./index-b9HoDQHW.js";import"./CartesianChart-kW9NXKsO.js";import"./chartDataContext-Bj9GKAto.js";import"./CategoricalChart-_S_x7otk.js";import"./CartesianAxis-DnYW7AG9.js";import"./Layer-DyWXZatW.js";import"./types-DFgJchiK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-0eRV3Tfk.js";import"./step-NYzyT-_J.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BqDLnMl8.js";import"./useAnimationId-Bxm77g86.js";import"./ActivePoints-BDnVkWFc.js";import"./Dot-R8_RPRPn.js";import"./RegisterGraphicalItemId-BjlJzRIf.js";import"./ErrorBarContext--MZg4-Ns.js";import"./GraphicalItemClipPath-B4m_JP2k.js";import"./SetGraphicalItem-3c27uR51.js";import"./getRadiusAndStrokeWidthFromDot-CJie2LqZ.js";import"./ActiveShapeUtils-C_Yr1SfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./PolarChart-YWAc-3ln.js";import"./Polygon-B7eCNldG.js";import"./maxBy-DkbQHaox.js";import"./iteratee-CvG7v8HH.js";import"./polarScaleSelectors-Dj91ZcYM.js";import"./polarSelectors-DItlTzEY.js";const n={angle:{description:`Text rotation angle in degrees.
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
