import{R as e}from"./iframe-DSGjjpNU.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-BCa7jxpl.js";import{R as g}from"./zIndexSlice-CA6E8vFi.js";import{L as y}from"./LineChart-D0j0IUaw.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DwPMXtVv.js";import{L as h}from"./Line-_u_cC6u5.js";import{Y as b}from"./YAxis-CHK17H-d.js";import{X as x}from"./XAxis-CyP8TOeF.js";import{R}from"./RadarChart-CelG6oIS.js";import{R as v}from"./Radar-DGCm4_l5.js";import{P as w}from"./PolarGrid-Dw7zBbcN.js";import{P as A}from"./PolarAngleAxis-Pib8IOcL.js";import{P}from"./PolarRadiusAxis-CtY9kxr2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DWY5eETe.js";import"./Text-CzUj4xGW.js";import"./resolveDefaultProps-C7JBpnaB.js";import"./DOMUtils-91PmpcqE.js";import"./isWellBehavedNumber-DJkwFvMJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BY8ImL1x.js";import"./index-zgKj8xSX.js";import"./index-BP6oFGIz.js";import"./immer-Py-Ymz2c.js";import"./RechartsWrapper-DLTVJ7et.js";import"./index-BppypMuk.js";import"./index-BXnOwVVg.js";import"./renderedTicksSlice-Dt_MkN4R.js";import"./axisSelectors-ChSlicBm.js";import"./d3-scale-DFnee9kt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dc9cHP3f.js";import"./chartDataContext-dw-RuqgE.js";import"./CategoricalChart-4qFfYNuc.js";import"./CartesianAxis-Cj3_cZt6.js";import"./Layer-CQXD14hs.js";import"./types-C1TBc4OL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-gomJXmPu.js";import"./step-MzBMmcWb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmxYIflg.js";import"./useAnimationId-Da38KlFl.js";import"./ActivePoints-CI7vIZx0.js";import"./Dot-BA1tdqH4.js";import"./RegisterGraphicalItemId-Cr8a7rd9.js";import"./ErrorBarContext-LCSn87i7.js";import"./GraphicalItemClipPath-JjCltWFk.js";import"./SetGraphicalItem-CMSYXoAN.js";import"./getRadiusAndStrokeWidthFromDot-B6xtN6Lv.js";import"./ActiveShapeUtils-c7K_sKfu.js";import"./PolarChart-B8Ro4j3r.js";import"./Polygon-BXZGKJb3.js";import"./polarScaleSelectors-C_dKPINo.js";import"./polarSelectors-CTF3ncUG.js";import"./maxBy-DtY97BlU.js";import"./iteratee-BfP38f8d.js";const i={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:`If set a React element, the option is the custom react element of rendering label.
If set a function, the function will be called to render label content.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ve={argTypes:i,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(i),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(i),position:"center"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ke=["API","PolarPositions"];export{r as API,o as PolarPositions,ke as __namedExportsOrder,Ve as default};
