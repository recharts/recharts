import{R as e}from"./iframe-CbiyPpOQ.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Bqdiqqm9.js";import{R as g}from"./zIndexSlice-CpGqLNgf.js";import{L as y}from"./LineChart-D1dXGo6k.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BVt8BIlH.js";import{L as h}from"./Line-CX19U38B.js";import{Y as b}from"./YAxis-DQOVOwqz.js";import{X as x}from"./XAxis-DS8USeJo.js";import{R}from"./RadarChart-Cin4hbEo.js";import{R as v}from"./Radar-BJDEyThj.js";import{P as w}from"./PolarGrid-DeyfA8f9.js";import{P as A}from"./PolarAngleAxis-Dp968N_7.js";import{P}from"./PolarRadiusAxis-BMSpwI7M.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Text-6JPkC2Bj.js";import"./resolveDefaultProps-BWAgYfPV.js";import"./DOMUtils-Db0o8Zdl.js";import"./isWellBehavedNumber-CgYUMQU-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdQyI4NS.js";import"./index-DN_zLXSU.js";import"./index-DyGRF9jX.js";import"./throttle-qq70w1DA.js";import"./RechartsWrapper-TOXK1lwb.js";import"./index-Bca_d3DG.js";import"./index-D-fswtUu.js";import"./renderedTicksSlice-lYU8ut4F.js";import"./axisSelectors-CCqDM7T-.js";import"./d3-scale-Bap3CkU2.js";import"./CartesianChart-DS8MRKt-.js";import"./chartDataContext-Bznw4op9.js";import"./CategoricalChart-l1FuTysV.js";import"./CartesianAxis-DdhiMqO2.js";import"./Layer-DqgjT4E-.js";import"./types-CzM6FhOK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B54n4LWH.js";import"./step-CAX9qAEt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DRdB4DWi.js";import"./useAnimationId-BzqZ1CPr.js";import"./ActivePoints-BcBYuZ18.js";import"./Dot-CrmxLVmG.js";import"./RegisterGraphicalItemId-DWEdhGSI.js";import"./ErrorBarContext-BC0_okWx.js";import"./GraphicalItemClipPath-Bzcd_Jhp.js";import"./SetGraphicalItem-DrfGre3X.js";import"./getRadiusAndStrokeWidthFromDot-CcpM4ut6.js";import"./ActiveShapeUtils-CSCl1dIf.js";import"./PolarChart-CcAOS5F1.js";import"./Polygon-CmlLYQx_.js";import"./polarScaleSelectors-Bj10xowL.js";import"./polarSelectors-CyB1kfu5.js";import"./maxBy-g0HAVah5.js";import"./iteratee-B4yI5Ocl.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ve={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ee=["API","PolarPositions"];export{r as API,o as PolarPositions,Ee as __namedExportsOrder,Ve as default};
