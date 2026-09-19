import{R as e}from"./iframe-RJgsiaPL.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DPnPk4i3.js";import{R as g}from"./zIndexSlice-CaPb3BS1.js";import{L as y}from"./LineChart-D5z6XZDg.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DdILdtqv.js";import{L as h}from"./Line-DaDTKpZD.js";import{Y as b}from"./YAxis-BC94qFyI.js";import{X as x}from"./XAxis-D1NHLWzc.js";import{R}from"./RadarChart-Cti60H8y.js";import{R as v}from"./Radar-UzT2VOLd.js";import{P as w}from"./PolarGrid-C5VObyTb.js";import{P as A}from"./PolarAngleAxis-hDybqmTB.js";import{P}from"./PolarRadiusAxis-DSnZy1h4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-DZ5ZEdji.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./DOMUtils-BwBerndY.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BoWVhfOi.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./throttle-2XjV57Y3.js";import"./RechartsWrapper-rp6dEN_z.js";import"./axisSelectors-BvLTD4U6.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./CartesianAxis-BXFp-lIC.js";import"./Layer-CDx7YXT6.js";import"./types-C_mapbFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CFCl1kCW.js";import"./step-K1SJUhGX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ct76uSB6.js";import"./useAnimationId-DsRwG-rm.js";import"./ActivePoints-B4kNxET0.js";import"./Dot-RwYGEtPS.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./ErrorBarContext-CV0SzBCK.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./getRadiusAndStrokeWidthFromDot-BnbceeR1.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";import"./PolarChart-BRBirZEj.js";import"./Polygon-By_sjzF2.js";import"./maxBy-C4-cQAVp.js";import"./iteratee-DLy57EFC.js";import"./polarScaleSelectors-D_t2saDV.js";import"./polarSelectors-GrkwGPwc.js";const n={angle:{description:`Text rotation angle in degrees.
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
