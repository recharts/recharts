import{R as e}from"./iframe-qeJRbQC_.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-IJrwe4z6.js";import{R as g}from"./zIndexSlice-7202Aouk.js";import{L as y}from"./LineChart-SK0JI0QU.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D-AsCndx.js";import{L as h}from"./Line-gjOGxWIr.js";import{Y as b}from"./YAxis-BZzCIX-v.js";import{X as x}from"./XAxis-u_1Q5fGR.js";import{R}from"./RadarChart-Dd4fpzMv.js";import{R as v}from"./Radar-D3hh2oJL.js";import{P as w}from"./PolarGrid-bsUtA0gu.js";import{P as A}from"./PolarAngleAxis-1BC70-OG.js";import{P}from"./PolarRadiusAxis-7yi-9r-d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-CGxsVVX7.js";import"./resolveDefaultProps-DeRAgm8x.js";import"./DOMUtils-DzJTCa9O.js";import"./isWellBehavedNumber-CEbP45d6.js";import"./useId-BP7tb9fo.js";import"./useBackwardsCompatibleTheme-DmTHavmp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D8LlaNHN.js";import"./index-BD72gC8i.js";import"./index-DyUeFg7T.js";import"./throttle-Bm7TlndJ.js";import"./RechartsWrapper-CI86w_cv.js";import"./axisSelectors-D3Tk6yw2.js";import"./d3-scale-DPqZAioL.js";import"./index-DfrLYgMZ.js";import"./index-COOVNst_.js";import"./renderedTicksSlice-BMyK9gC5.js";import"./index-BOsshKUN.js";import"./CartesianChart-D9mK1Hr2.js";import"./chartDataContext-BPJsRsvJ.js";import"./CategoricalChart-DXUZLIpB.js";import"./CartesianAxis-BByvFPIV.js";import"./Layer-DnfYbRaC.js";import"./types-CQ8TW7B4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-u1NUazY3.js";import"./step-m8FbBLvj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ba5qFTnf.js";import"./useAnimationId-Dc0yoLfA.js";import"./ActivePoints-zmt_Feef.js";import"./Dot-BTyyD634.js";import"./RegisterGraphicalItemId-C6fN5b4g.js";import"./ErrorBarContext-Brj2ZIP_.js";import"./GraphicalItemClipPath-wv7NC4zW.js";import"./SetGraphicalItem-BpzaqcDs.js";import"./getRadiusAndStrokeWidthFromDot-8Ne4VOFo.js";import"./ActiveShapeUtils-DKEMCySD.js";import"./useGraphicalItemIdentity-DtcgFGn-.js";import"./PolarChart-BcCtpxqI.js";import"./Polygon-swvKbBm8.js";import"./maxBy-BbwVm86W.js";import"./iteratee-Dnr_1A58.js";import"./polarScaleSelectors-i6zqXx0C.js";import"./polarSelectors-DanlYHh-.js";const n={angle:{description:`Text rotation angle in degrees.
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
