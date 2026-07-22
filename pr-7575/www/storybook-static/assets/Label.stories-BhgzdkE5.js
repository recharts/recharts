import{R as e}from"./iframe-DzzybHr3.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Yw7Q0JfB.js";import{R as g}from"./zIndexSlice-APm024yE.js";import{L as y}from"./LineChart-D1ikP5A7.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BFcPkEHE.js";import{L as h}from"./Line-B14pcOUO.js";import{Y as b}from"./YAxis-CKuS-Mr_.js";import{X as x}from"./XAxis-C2N3vX2E.js";import{R}from"./RadarChart-DsKMERaR.js";import{R as v}from"./Radar-B_C6ENIA.js";import{P as w}from"./PolarGrid-DuW70ztl.js";import{P as A}from"./PolarAngleAxis-BzSanRfl.js";import{P}from"./PolarRadiusAxis-pqrJOn8z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Text-CKYGhwj_.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./DOMUtils-CofpyxHf.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B65O7Oyl.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./throttle-DXJQ7qa7.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./axisSelectors-DxliL3D-.js";import"./d3-scale-ikjFpXkq.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./CartesianAxis-Bp9IVHGC.js";import"./Layer-DBuOEsC-.js";import"./types-Ck7x6Nhk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-CgifKxr5.js";import"./step-CE07F2xj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJCL0mBl.js";import"./useAnimationId--dSVNcdm.js";import"./ActivePoints-gO5Bi9Sm.js";import"./Dot-BL6lif_-.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getRadiusAndStrokeWidthFromDot-40lXrNs0.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./PolarChart-DL3-OyTT.js";import"./Polygon-DGK-9VFP.js";import"./polarScaleSelectors-CrUFVQFs.js";import"./polarSelectors-DY5Pl_Uq.js";import"./maxBy-k7dU-G4H.js";import"./iteratee-B57Un0sM.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ee={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ke=["API","PolarPositions"];export{r as API,o as PolarPositions,ke as __namedExportsOrder,Ee as default};
