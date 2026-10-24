import{R as e}from"./iframe-CwjnBdPJ.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DUPKJ4wq.js";import{R as g}from"./zIndexSlice-DCK0oMjs.js";import{L as h}from"./LineChart-78NyXzRo.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Bt64PR7p.js";import{L as y}from"./Line-BtP8MguI.js";import{Y as b}from"./YAxis-BJPBUcLn.js";import{X as x}from"./XAxis-DGiS1jyS.js";import{R as w}from"./RadarChart-DMiYr80A.js";import{R as v}from"./Radar-B0AR8czW.js";import{P as R}from"./PolarGrid-NUMOZ2t3.js";import{P as k}from"./PolarAngleAxis-C0BR3aJF.js";import{P as A}from"./PolarRadiusAxis-CgwftYIL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Text-CkJvnqMb.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./pageBackground-CPZsdU6n.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cf72LToz.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./dataEntryStyles-MXIeXXjf.js";import"./throttle-NOTipQ48.js";import"./RechartsWrapper-DssFoHZN.js";import"./axisSelectors-yVNmvCZQ.js";import"./d3-scale-B8EUKI5D.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-Bgw_dChb.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./CartesianAxis-BCC92CcD.js";import"./Layer-mPZxMc5S.js";import"./types-Bf6WAwuG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-_mg3fY-T.js";import"./step-_ilYVkYV.js";import"./path-DyVhHtw_.js";import"./activeStyles-Dq37JbhA.js";import"./useAnimationId-CsReVCtf.js";import"./ActivePoints-B-LCBBeH.js";import"./Dot-j5DVnIjt.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./ErrorBarContext-Dx-lWvRW.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getRadiusAndStrokeWidthFromDot-B0N-TNeB.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./useEffectiveDataKey-Cb7tOd6S.js";import"./PolarChart-BZCUOE8b.js";import"./Polygon-C9RyCFyL.js";import"./maxBy-YMvCr8-e.js";import"./iteratee-BCmgj2Iv.js";import"./isArguments-yB-y1yaH.js";import"./polarScaleSelectors-oAnYoC4j.js";import"./polarSelectors-8uHB3-Xo.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a background behind the label, for example to keep it readable on top of a filled shape.\n\n- `true` draws the background with the styles from the theme's `label.background`.\n  If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n  It is merged over the theme styles key by key.\n- `false` draws no background, even if the theme turns backgrounds on.\n- `undefined` uses the theme's `label.background`, and draws no background without a theme.\n\nThe background is sized from the rendered text and follows curved label paths.\nIt is not drawn for custom `content`.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},ze={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(h,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(y,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(w,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(R,null),e.createElement(k,{dataKey:"name"}),e.createElement(A,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},De=["API","PolarPositions"];var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{r as API,o as PolarPositions,De as __namedExportsOrder,ze as default};
