import{R as e}from"./iframe-gpTdtb3o.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Dvu_EEFs.js";import{R as g}from"./zIndexSlice-B_W_5LRM.js";import{L as y}from"./LineChart-D2d2-OWm.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-3cymI0rY.js";import{L as h}from"./Line-B4xDYNCi.js";import{Y as b}from"./YAxis-CLFsfV71.js";import{X as x}from"./XAxis-DYu-ZOyv.js";import{R}from"./RadarChart-DoAno-rI.js";import{R as v}from"./Radar-B3vjf-u2.js";import{P as w}from"./PolarGrid-D3eXCnEk.js";import{P as A}from"./PolarAngleAxis-BVAQFP_s.js";import{P}from"./PolarRadiusAxis-DPx5QKLi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-ak0t_Bx4.js";import"./resolveDefaultProps-B1pv53Kz.js";import"./DOMUtils-Cn984pfG.js";import"./isWellBehavedNumber-Cw4jxBns.js";import"./useId-ByjeVVFt.js";import"./useBackwardsCompatibleTheme-DCuKeaT8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DtPhgAmh.js";import"./index-Ca1MAT9x.js";import"./index-6dylaplf.js";import"./throttle-hlhbAB_M.js";import"./RechartsWrapper-D3qcdzr8.js";import"./axisSelectors-CvE00xSD.js";import"./d3-scale-7NDnVj98.js";import"./index-nUwe86SZ.js";import"./index-DXV1xdLh.js";import"./renderedTicksSlice-DaEdYejM.js";import"./index-BMezmC1E.js";import"./CartesianChart-DPQqrhgz.js";import"./chartDataContext-BsKoSYgw.js";import"./CategoricalChart-f3aA9Jty.js";import"./CartesianAxis-CIlmhzaL.js";import"./Layer-D_tVd9Wv.js";import"./types-DEtafNZH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-lr3CvHTC.js";import"./step-Ywftl4vM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CmtCKI6D.js";import"./useAnimationId-BJpAmfdR.js";import"./ActivePoints-BZ5te_n2.js";import"./Dot-DOoS6SKx.js";import"./RegisterGraphicalItemId-D6ws7CHx.js";import"./ErrorBarContext-Cyjjr4ja.js";import"./GraphicalItemClipPath-BJM_h44F.js";import"./SetGraphicalItem-C_pU6L7b.js";import"./getRadiusAndStrokeWidthFromDot-BwkbZUgK.js";import"./ActiveShapeUtils-DjV0uxAo.js";import"./useGraphicalItemIdentity-DKbxUJti.js";import"./PolarChart-DOt8T9Jh.js";import"./Polygon-Ce7hruMb.js";import"./maxBy-4Vh3VfMA.js";import"./iteratee-CkkSmBRO.js";import"./polarScaleSelectors-CxEtjrYI.js";import"./polarSelectors-urusi5aP.js";const n={angle:{description:`Text rotation angle in degrees.
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
