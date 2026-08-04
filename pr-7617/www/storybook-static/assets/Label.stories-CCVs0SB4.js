import{R as e}from"./iframe-COvR6m4y.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DL7W3oea.js";import{R as g}from"./zIndexSlice-ou7P1k4B.js";import{L as y}from"./LineChart-CkFIiRMm.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cy9ZO17O.js";import{L as h}from"./Line-A2N_Jj9W.js";import{Y as b}from"./YAxis-BmBZe_s0.js";import{X as x}from"./XAxis-Dko6EwLt.js";import{R}from"./RadarChart-Kl4c_Cbq.js";import{R as v}from"./Radar-C-0rt3yr.js";import{P as w}from"./PolarGrid-CrakIsLF.js";import{P as A}from"./PolarAngleAxis-GQhqSYPY.js";import{P}from"./PolarRadiusAxis-DDowAbFa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-CVNPXLFS.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./DOMUtils-CI2tOPO2.js";import"./isWellBehavedNumber-BMFlPjoz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-fZm6clI3.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./throttle-CwSdkZJ2.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./d3-scale-BKhMit0q.js";import"./CartesianChart-B3NTwVXz.js";import"./chartDataContext-BtNlXKIo.js";import"./CategoricalChart-dbTixxWK.js";import"./CartesianAxis-BfSFkfBG.js";import"./Layer-BxScpKop.js";import"./types-C40QwNfk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C1YATuiv.js";import"./step-CeMcQkHX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DVdwO1UF.js";import"./useAnimationId-Cb3gVBxS.js";import"./ActivePoints-BCa4N9Pu.js";import"./Dot-COu3_HTT.js";import"./RegisterGraphicalItemId-DqoHzEMf.js";import"./ErrorBarContext-SLrJh98L.js";import"./GraphicalItemClipPath-BFgUMlnl.js";import"./SetGraphicalItem-CQMRhEff.js";import"./graphicalItemIdentity-KbS-c8wy.js";import"./ActiveShapeUtils-crCTkC1S.js";import"./PolarChart-Bw3NiLEk.js";import"./Polygon-Dum2Rcg-.js";import"./maxBy-C19o5DW_.js";import"./iteratee-C7AvrAG1.js";import"./polarScaleSelectors-Br1oEthe.js";import"./polarSelectors-Cqc4AaFq.js";const i={angle:{description:`Text rotation angle in degrees.
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
