import{R as e}from"./iframe-BpT5bjyP.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-BW7muwsN.js";import{R as g}from"./zIndexSlice-6ZjUmd8N.js";import{L as y}from"./LineChart-DdSVdZwc.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B1jIu4dz.js";import{L as h}from"./Line-DAOOXY1c.js";import{Y as b}from"./YAxis-Bw_20RiP.js";import{X as x}from"./XAxis-D1H3iiMu.js";import{R}from"./RadarChart-CmtWIp3_.js";import{R as v}from"./Radar-Mxv9IyQ5.js";import{P as w}from"./PolarGrid-CteknuTw.js";import{P as A}from"./PolarAngleAxis-BhK3kt3k.js";import{P}from"./PolarRadiusAxis-D3KojbB8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-HFJbCo1I.js";import"./resolveDefaultProps-DDabcDAr.js";import"./DOMUtils-DLC4sCDo.js";import"./isWellBehavedNumber-C47drcC6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeMfDg3A.js";import"./index-D8dxtA6W.js";import"./index-BdWqmQ-h.js";import"./throttle-DrtrRvnQ.js";import"./RechartsWrapper-CU2X_CAJ.js";import"./index-DEeMmmG_.js";import"./index-rBmp_rAe.js";import"./renderedTicksSlice-DruWQWhq.js";import"./axisSelectors-DSgRntKH.js";import"./d3-scale-CxG8NgTa.js";import"./CartesianChart-BHxGC6l9.js";import"./chartDataContext-vyuuOWQ4.js";import"./CategoricalChart-B5HQoLMh.js";import"./CartesianAxis-3XWkAM0R.js";import"./Layer-JsFzk0bC.js";import"./types-TjqF4iRF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BtlbTq9b.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BfRxDj3b.js";import"./step-BYJgq2pg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJc5QMM0.js";import"./useAnimationId-C2b5i1-K.js";import"./ActivePoints-C2xP28N-.js";import"./Dot-C23HV8Lj.js";import"./RegisterGraphicalItemId-rnVsHys1.js";import"./ErrorBarContext-DwESbJwv.js";import"./GraphicalItemClipPath-B_g_u1qL.js";import"./SetGraphicalItem-Bi4oedQq.js";import"./graphicalItemIdentity-N_badT-U.js";import"./ActiveShapeUtils-BtBl96a6.js";import"./PolarChart-0tcEMuWW.js";import"./Polygon-BQPxeBlG.js";import"./maxBy-BP-4IbBv.js";import"./iteratee-DXhAWmJ8.js";import"./polarScaleSelectors-CO4D1u2t.js";import"./polarSelectors-B33s6dJD.js";const i={angle:{description:`Text rotation angle in degrees.
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
