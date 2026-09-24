import{R as e}from"./iframe-DNbvw14a.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-B7KQBAEU.js";import{R as g}from"./zIndexSlice-BHD22v5p.js";import{L as y}from"./LineChart-0m_-7LeG.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-SPB17rX4.js";import{L as h}from"./Line-9wgA81hF.js";import{Y as b}from"./YAxis-BGn7xsJM.js";import{X as x}from"./XAxis-DKCor6Yv.js";import{R}from"./RadarChart-Bhi5sXUZ.js";import{R as v}from"./Radar-BknlTX0P.js";import{P as w}from"./PolarGrid-CSe-zMfj.js";import{P as A}from"./PolarAngleAxis-CHP8fLnZ.js";import{P}from"./PolarRadiusAxis-C_ZaZAay.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-BgAYGcmu.js";import"./resolveDefaultProps-Dv9OS7x0.js";import"./DOMUtils-gpe3mW7P.js";import"./isWellBehavedNumber-B4X7Ovgo.js";import"./useId-BIiTcBjO.js";import"./useBackwardsCompatibleTheme-CUWrJJ-Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-aQMxqOVX.js";import"./index-ChGtG0Z1.js";import"./index-mPJfSQ4a.js";import"./throttle-TrQ-NrIz.js";import"./RechartsWrapper-vWLTzty1.js";import"./axisSelectors-B6LUaqOe.js";import"./d3-scale-DdoY8Kw0.js";import"./index-CiQ39v7Z.js";import"./index-CqQ_TYAw.js";import"./renderedTicksSlice-DnMPpzr7.js";import"./index-BcAi-B8x.js";import"./CartesianChart-D_zqHIPC.js";import"./chartDataContext-mj0-05pU.js";import"./CategoricalChart-DTINRHZI.js";import"./CartesianAxis-CQJhlqIf.js";import"./Layer-Ca0bY5rb.js";import"./types-BqFGOrry.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DfXzeARC.js";import"./step-DhjEjZzQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wgqiGiqn.js";import"./useAnimationId-DYgsmh0H.js";import"./ActivePoints-DVti48Uk.js";import"./Dot-DUpVpfPG.js";import"./RegisterGraphicalItemId-C8sRnX7V.js";import"./ErrorBarContext-BdE1Cthk.js";import"./GraphicalItemClipPath-CB7JJ2kx.js";import"./SetGraphicalItem-nJGBA7YQ.js";import"./getRadiusAndStrokeWidthFromDot-DuDTJHD_.js";import"./ActiveShapeUtils-Bvp6wNuu.js";import"./useGraphicalItemIdentity-CCeSwNH2.js";import"./PolarChart-B2H2lg4S.js";import"./Polygon-R6TELuIJ.js";import"./maxBy-CmLxGqC_.js";import"./iteratee-DgFx9-tJ.js";import"./polarScaleSelectors-DQlbxPw1.js";import"./polarSelectors-GXqfexhS.js";const n={angle:{description:`Text rotation angle in degrees.
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
