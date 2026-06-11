import{R as e}from"./iframe-seguPege.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Bj9fNTdt.js";import{R as g}from"./zIndexSlice-Cb-1bZoU.js";import{L as y}from"./LineChart-Dio_wJ_d.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Be1ZTGJ9.js";import{L as h}from"./Line-B5wrNkVZ.js";import{Y as b}from"./YAxis-DMmP-D66.js";import{X as x}from"./XAxis-DUluPi7y.js";import{R}from"./RadarChart-DEBD4I6U.js";import{R as v}from"./Radar-BELSx04v.js";import{P as w}from"./PolarGrid-CukFhmKm.js";import{P as A}from"./PolarAngleAxis-Drlj9lT3.js";import{P}from"./PolarRadiusAxis-Dg3f5uMW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPoksESJ.js";import"./Text-DMr88uBj.js";import"./resolveDefaultProps-BPZN0bld.js";import"./DOMUtils-CAhJeY0i.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-E8T2jKop.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./immer-Ae2GGYT-.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CclsakCq.js";import"./chartDataContext-ZOJ8ES_m.js";import"./CategoricalChart-DsfEFljg.js";import"./CartesianAxis-CKcebKQz.js";import"./Layer-D0gi-KwG.js";import"./types-Dh_7L2tU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dy50jrXo.js";import"./step-CXbb4GLS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjEmPeVW.js";import"./useAnimationId-Bb_iGYOg.js";import"./ActivePoints-BGPZQ7DK.js";import"./Dot-JTIqjmcj.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./ErrorBarContext-CqxJy0tW.js";import"./GraphicalItemClipPath-D2QHuOb3.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getRadiusAndStrokeWidthFromDot-7f0lski4.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./PolarChart-DGUjWNZD.js";import"./Polygon-BJ_ff2QP.js";import"./polarScaleSelectors-BBM51pHk.js";import"./polarSelectors-BtD5y1BG.js";import"./maxBy-HmB3e_Gf.js";import"./iteratee-CGB8lHH8.js";const i={angle:{description:`Text rotation angle in degrees.
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
