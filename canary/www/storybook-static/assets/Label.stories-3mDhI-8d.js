import{R as e}from"./iframe-CUSfJVGy.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-CA5pDLh0.js";import{R as g}from"./zIndexSlice-DHvlitAO.js";import{L as h}from"./LineChart-Dh8JSBmy.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dd4F1MTn.js";import{L as y}from"./Line-BkUDmjMa.js";import{Y as b}from"./YAxis-cM-Or_OG.js";import{X as x}from"./XAxis-93B4Nx5D.js";import{R as w}from"./RadarChart-BQCAB8Bc.js";import{R as v}from"./Radar-CQUwy1Aj.js";import{P as R}from"./PolarGrid-D0hiJpcP.js";import{P as k}from"./PolarAngleAxis-BHW9AGCz.js";import{P as A}from"./PolarRadiusAxis-_AyBv-xe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Text-D1HNj6gm.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./pageBackground-Cedpup01.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DS-kTeIC.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./dataEntryStyles-DaqIqY42.js";import"./throttle-Dw_3NXl9.js";import"./RechartsWrapper-DAlfJkzI.js";import"./axisSelectors-Ba-uagI8.js";import"./d3-scale-B5gueGek.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./index-BHb_Ppqj.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./CartesianAxis-DdmQm0Mb.js";import"./Layer-D3Rs15Eb.js";import"./types-CPjFjIqL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CVDIysdN.js";import"./step-DHG-DUf8.js";import"./path-DyVhHtw_.js";import"./activeStyles-D0GvvJcq.js";import"./useAnimationId-5nMvsn6t.js";import"./ActivePoints-DGPkFg2Z.js";import"./Dot-CuTOnkdw.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./ErrorBarContext-B4ne9aHr.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./getRadiusAndStrokeWidthFromDot-D3hEZZtv.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./useEffectiveDataKey-CoJRTSM6.js";import"./PolarChart-BALGiSIS.js";import"./Polygon-Blpkdt4M.js";import"./maxBy-DE91SbNE.js";import"./iteratee-BWlFYs6V.js";import"./isArguments-yB-y1yaH.js";import"./polarScaleSelectors-DKkq9j4Z.js";import"./polarSelectors-B6gPXif7.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a background behind the label, for example to keep it readable on top of a filled shape.\n\n- `true` draws the background with the styles from the theme's `label.background`.\n  If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n  It is merged over the theme styles key by key.\n- `false` draws no background, even if the theme turns backgrounds on.\n- `undefined` uses the theme's `label.background`, and draws no background without a theme.\n\nThe background is sized from the rendered text and follows curved label paths.\nIt is not drawn for custom `content`.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ke={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(h,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(y,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(w,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(R,null),e.createElement(k,{dataKey:"name"}),e.createElement(A,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},ze=["API","PolarPositions"];var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{r as API,o as PolarPositions,ze as __namedExportsOrder,Ke as default};
