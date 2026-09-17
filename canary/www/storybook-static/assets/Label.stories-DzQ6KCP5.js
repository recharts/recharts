import{R as e}from"./iframe-DwjhlfMW.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-CDX3QCgQ.js";import{R as g}from"./zIndexSlice-B1eqx357.js";import{L as y}from"./LineChart-nPcwnsGL.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-jvsmUCUA.js";import{L as h}from"./Line-LIz09oAh.js";import{Y as b}from"./YAxis-DCYSznIj.js";import{X as x}from"./XAxis-BypJb1q6.js";import{R}from"./RadarChart-ZiYZDlKf.js";import{R as v}from"./Radar-fk1AJDAI.js";import{P as w}from"./PolarGrid-CkX8soCQ.js";import{P as A}from"./PolarAngleAxis-C5jDOLM2.js";import{P}from"./PolarRadiusAxis-CippzZ6M.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-Fn7sKK4t.js";import"./resolveDefaultProps-CEwq-pLy.js";import"./DOMUtils-DNcH8Otg.js";import"./isWellBehavedNumber-Ck5vetYF.js";import"./useId-CjpXrJxi.js";import"./useBackwardsCompatibleTheme-B5uR-87m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D63gMRTb.js";import"./index-DEuGyOjS.js";import"./index-BGwBnv2j.js";import"./throttle-KAp-qu0T.js";import"./RechartsWrapper-DfYeCvHJ.js";import"./axisSelectors-BLfWrXUN.js";import"./d3-scale-ONQE_M5R.js";import"./index-1dx-TPak.js";import"./index-u7UrDuUK.js";import"./renderedTicksSlice-CYiI8XB-.js";import"./index-Di1osVNT.js";import"./CartesianChart-nX1tU7iU.js";import"./chartDataContext-CIXOSwbU.js";import"./CategoricalChart-C8RwzjmY.js";import"./CartesianAxis-_QUC34Jt.js";import"./Layer-Pu2wX4UR.js";import"./types-BUORd8J7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CZFfEwwz.js";import"./step-DEQntpmi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0LuF_asA.js";import"./useAnimationId-AvDok9ug.js";import"./ActivePoints-CmID2-UK.js";import"./Dot-_dbDJcAj.js";import"./RegisterGraphicalItemId-LQahHGMW.js";import"./ErrorBarContext-D4j3Tcrr.js";import"./GraphicalItemClipPath-HnyZhYrt.js";import"./SetGraphicalItem-Ci5JV0yp.js";import"./getRadiusAndStrokeWidthFromDot-01qAW-aB.js";import"./ActiveShapeUtils-CRTLiydv.js";import"./useGraphicalItemIdentity-DLGtb43T.js";import"./PolarChart-B1_Q7_jW.js";import"./Polygon-Bneobi-0.js";import"./maxBy-DifQ3Xlv.js";import"./iteratee-Bva8E26b.js";import"./polarScaleSelectors-B1Wbzx5C.js";import"./polarSelectors-CmDQpRN9.js";const n={angle:{description:`Text rotation angle in degrees.
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
