import{R as e}from"./iframe-C0xznG0O.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-CdEwuWhi.js";import{R as g}from"./zIndexSlice-DJPgYMzR.js";import{L as y}from"./LineChart-U1g15pC4.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BpTIkxJ-.js";import{L as h}from"./Line-Dnaet704.js";import{Y as b}from"./YAxis-B6DY9sl9.js";import{X as x}from"./XAxis-3Gc-ze43.js";import{R}from"./RadarChart-L3mfnEDc.js";import{R as v}from"./Radar-iL1KYRal.js";import{P as w}from"./PolarGrid-BBtYY3CJ.js";import{P as A}from"./PolarAngleAxis-B-ATzEeA.js";import{P}from"./PolarRadiusAxis-CsH6VmPH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-DqaiwO2M.js";import"./resolveDefaultProps-BUVviTw0.js";import"./DOMUtils-CfITjNXH.js";import"./isWellBehavedNumber-LB6DsCms.js";import"./useId-CG9ImVhA.js";import"./useBackwardsCompatibleTheme-Dw2k0O31.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dqy54YGG.js";import"./index-3uxIGkdF.js";import"./index-D3C5hy7v.js";import"./throttle-ca9JXI34.js";import"./RechartsWrapper-CVCjkFWi.js";import"./axisSelectors-KY5G3glE.js";import"./d3-scale-D_nuk9af.js";import"./index-_lyS6R2I.js";import"./index-DGO5Pcl1.js";import"./renderedTicksSlice-Bn386d_U.js";import"./index-BsyGVjbB.js";import"./CartesianChart-BilL1rox.js";import"./chartDataContext-r0-EMCxL.js";import"./CategoricalChart-AELfSP8z.js";import"./CartesianAxis-CXWr6EGM.js";import"./Layer-DEw218Et.js";import"./types-CAt-4Uam.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BhnG6nXS.js";import"./step-GNpLhVcs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ykdNzwWW.js";import"./useAnimationId-DxkHkn8_.js";import"./ActivePoints-sJpS3tVi.js";import"./Dot-BWAKHyTE.js";import"./RegisterGraphicalItemId-CHswFd-U.js";import"./ErrorBarContext-BMmbs1Vg.js";import"./GraphicalItemClipPath-BwjkPZ9S.js";import"./SetGraphicalItem-BcdUc_t-.js";import"./getRadiusAndStrokeWidthFromDot-MXaDMjOJ.js";import"./ActiveShapeUtils-s_Kx4tDI.js";import"./useGraphicalItemIdentity-BPVVk20a.js";import"./PolarChart-apYdDFtD.js";import"./Polygon-B1nCAUWa.js";import"./maxBy-CimqgjRX.js";import"./iteratee-B2v99DCQ.js";import"./polarScaleSelectors-CzURt2Po.js";import"./polarSelectors-Bt8S1XoX.js";const n={angle:{description:`Text rotation angle in degrees.
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
