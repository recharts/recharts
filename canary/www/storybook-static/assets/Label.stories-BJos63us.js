import{R as e}from"./iframe-DgKiVndY.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Dw6GSad7.js";import{R as g}from"./zIndexSlice-dNuJcHRn.js";import{L as y}from"./LineChart-brxuZr2w.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Ccdp-eQd.js";import{L as h}from"./Line-BTleYBWw.js";import{Y as b}from"./YAxis-DbeD2sP7.js";import{X as x}from"./XAxis-BLbqPkVx.js";import{R}from"./RadarChart-CU5EV24x.js";import{R as v}from"./Radar-CtAKB-e2.js";import{P as w}from"./PolarGrid-B69qNFyE.js";import{P as A}from"./PolarAngleAxis-BKSbYAKu.js";import{P}from"./PolarRadiusAxis-CGt4it67.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-CbY3j4Ck.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./DOMUtils-DDi-aYdE.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CiPL_m_c.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./throttle-C4KEmVOQ.js";import"./RechartsWrapper-CVLdrR-G.js";import"./axisSelectors-IaZq8uO9.js";import"./d3-scale-DcAUA4PB.js";import"./index-DtVHhaCV.js";import"./index-DmBw5bKk.js";import"./renderedTicksSlice-RB0exVxa.js";import"./index-CkxJWCtX.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./CartesianAxis-O82DChWw.js";import"./Layer-CitR-d8V.js";import"./types-BGF6RwMG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Pc89hUhq.js";import"./step-1uXQ1327.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-t-O5cYrN.js";import"./useAnimationId-Df1EENv3.js";import"./ActivePoints-CK7oXB-L.js";import"./Dot-0PmoZJ73.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./ErrorBarContext-D4mtJzrM.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getRadiusAndStrokeWidthFromDot-CJC1hcgF.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";import"./PolarChart-qBXldxD5.js";import"./Polygon-l1z_2Kdm.js";import"./maxBy-ldiUCrPe.js";import"./iteratee-CxgRG3tb.js";import"./polarScaleSelectors-DkU3pxZU.js";import"./polarSelectors-3qDblilU.js";const n={angle:{description:`Text rotation angle in degrees.
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
