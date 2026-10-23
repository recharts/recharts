import{R as e}from"./iframe-DWz-Q7D1.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DNBocu_e.js";import{R as g}from"./zIndexSlice-D4KjIdsO.js";import{L as f}from"./LineChart-Dcmc61bT.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-BoGhBG8e.js";import{L as y}from"./Line-DmDKrJpN.js";import{Y as b}from"./YAxis--VjP9Ce5.js";import{X as x}from"./XAxis-BZUBECrT.js";import{R as w}from"./RadarChart-B_q2hLlV.js";import{R}from"./Radar-BC5kRNaX.js";import{P as v}from"./PolarGrid-DQAEPcWv.js";import{P as A}from"./PolarAngleAxis-CfE4gKAA.js";import{P}from"./PolarRadiusAxis-BhtZXIWm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Text-Rsbaz2Nf.js";import"./resolveDefaultProps-CzYzgORH.js";import"./pageBackground-Bn_EUSju.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./throttle-CiqOC1ip.js";import"./RechartsWrapper-DTtBamZ0.js";import"./axisSelectors-Ce2rWziX.js";import"./d3-scale-B1h-c6nn.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-DXyt1obU.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./CartesianAxis-k4k8wY80.js";import"./Layer-0LCA68q2.js";import"./types-d8BMRC9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-57G7mADL.js";import"./step-CnBlCK_d.js";import"./path-DyVhHtw_.js";import"./activeStyles-cBdGFM1d.js";import"./useAnimationId-wagxbO9A.js";import"./dataEntryStyles-B5o6jV-U.js";import"./ActivePoints-BA6UWnZF.js";import"./Dot-DC9IrQq5.js";import"./ErrorBarContext-C2fYo0Zq.js";import"./GraphicalItemClipPath-CSYE-jHD.js";import"./SetGraphicalItem-D_zovdlO.js";import"./getRadiusAndStrokeWidthFromDot-Dqmrd8D2.js";import"./ActiveShapeUtils-C6nNN6Qs.js";import"./useEffectiveDataKey-kfwO5Jnl.js";import"./PolarChart-B4vZacjC.js";import"./Polygon-Bw-RfTSU.js";import"./maxBy-ChVc_jym.js";import"./iteratee-D2MvuXn3.js";import"./isArguments-yB-y1yaH.js";import"./polarScaleSelectors-C47bfaei.js";import"./polarSelectors-C3cy9Yeb.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a background behind the label, for example to keep it readable on top of a filled shape.\n\n- `true` draws the background with default styles.\n  The fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n- `false` or `undefined` draws no background.\n\nThe background is sized from the rendered text and follows curved label paths.\nIt is not drawn for custom `content`.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Ke={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(f,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(h,null),e.createElement(y,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(w,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(R,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(v,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},ze=["API","PolarPositions"];var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
