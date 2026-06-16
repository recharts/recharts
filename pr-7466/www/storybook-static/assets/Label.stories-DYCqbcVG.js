import{R as e}from"./iframe-D8_PwwQn.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DYAIx6Pc.js";import{R as g}from"./zIndexSlice-D3hIREVO.js";import{L as y}from"./LineChart-BrDOYw18.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cq-Nn9aG.js";import{L as h}from"./Line-Dtm97aFG.js";import{Y as b}from"./YAxis-B3qPS3l7.js";import{X as x}from"./XAxis-BMXTihse.js";import{R}from"./RadarChart-DTERdU_D.js";import{R as v}from"./Radar-Db8FAHRN.js";import{P as w}from"./PolarGrid-BtNyvtrg.js";import{P as A}from"./PolarAngleAxis-DaCiLB4H.js";import{P}from"./PolarRadiusAxis-D1eySUGv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VOiq-nzz.js";import"./Text-Dcw4f9im.js";import"./resolveDefaultProps-CDlH06hb.js";import"./DOMUtils-BuLBbKXn.js";import"./isWellBehavedNumber-I9OE6uzw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dhl_4keR.js";import"./index-ComLpA2A.js";import"./index-Bf27XMU5.js";import"./immer-B4u9UiQz.js";import"./RechartsWrapper-DSRWnM09.js";import"./index-BYYXq0C_.js";import"./index-DGMH0rdv.js";import"./renderedTicksSlice-Dazc5DIT.js";import"./axisSelectors-GpzB0aa8.js";import"./d3-scale-B_gxMkbZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-VfOncxQc.js";import"./chartDataContext-CFZ_6_Pd.js";import"./CategoricalChart-DVNyDBwI.js";import"./CartesianAxis-AGoux6hi.js";import"./Layer-DIbVHc_A.js";import"./types-C59kAQfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BnWchyuA.js";import"./step-ebfpa1zR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bi3B25M2.js";import"./useAnimationId-BP5XfAv2.js";import"./ActivePoints-C2Pj95p4.js";import"./Dot-BJ21P9KG.js";import"./RegisterGraphicalItemId-I3cDOhkS.js";import"./ErrorBarContext-uaJHV0aS.js";import"./GraphicalItemClipPath-DA-AqBBR.js";import"./SetGraphicalItem-Clhc-wET.js";import"./getRadiusAndStrokeWidthFromDot-B9utXb_M.js";import"./ActiveShapeUtils-TdP-NoHF.js";import"./PolarChart-B2pu5ejn.js";import"./Polygon-DeDXj_n0.js";import"./polarScaleSelectors-CsH01b82.js";import"./polarSelectors-52f3-oNE.js";import"./maxBy-KyUMsyn0.js";import"./iteratee-DoFufU5s.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ve={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ke=["API","PolarPositions"];export{r as API,o as PolarPositions,ke as __namedExportsOrder,Ve as default};
