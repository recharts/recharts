import{R as e}from"./iframe-BVidFuBg.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Dkr2cH3E.js";import{R as g}from"./zIndexSlice-BVu_VJKn.js";import{L as f}from"./LineChart-6wRhXT5W.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as h}from"./CartesianGrid-CE1nnXHn.js";import{L as y}from"./Line-BwWsnMpN.js";import{Y as b}from"./YAxis-CAK7lAdx.js";import{X as x}from"./XAxis-D6ghc140.js";import{R as w}from"./RadarChart-wwG72KYe.js";import{R}from"./Radar-qKhiNB9U.js";import{P as v}from"./PolarGrid-DP5UC3o3.js";import{P as A}from"./PolarAngleAxis-Bcrb-3w2.js";import{P}from"./PolarRadiusAxis-BCgwutE6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Text-B-jeJZdK.js";import"./resolveDefaultProps-BnMAchLG.js";import"./pageBackground-DWUaDsTL.js";import"./isWellBehavedNumber-Bgrep7-b.js";import"./useId-B-SrM2oo.js";import"./useBackwardsCompatibleTheme-CdbVLEqd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Diklw-mz.js";import"./index-qH4-zIlS.js";import"./index-DBJQpaC5.js";import"./throttle-BSCmJhty.js";import"./RechartsWrapper-7A4GvPw3.js";import"./axisSelectors-7sszg3SW.js";import"./d3-scale-n9zBPjXr.js";import"./index-BiOB95Co.js";import"./index-k6xKkYdd.js";import"./renderedTicksSlice-X2qP0nh3.js";import"./index-CYZL9Ecm.js";import"./CartesianChart-BVao4mhK.js";import"./chartDataContext-KRrlptML.js";import"./CategoricalChart-B9oBZckD.js";import"./CartesianAxis-B6O3GOLV.js";import"./Layer-BamX7bDZ.js";import"./types-d1h9D5Nt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DADC3Qn9.js";import"./step-DQ_5Whcs.js";import"./path-DyVhHtw_.js";import"./activeStyles-DLYfLCId.js";import"./useAnimationId-DUX3gKYN.js";import"./dataEntryStyles-doFW0jSZ.js";import"./ActivePoints-CkjWSogS.js";import"./Dot-08nNQsA3.js";import"./ErrorBarContext-DCSMt2xY.js";import"./GraphicalItemClipPath-BHt5dg8Z.js";import"./SetGraphicalItem-COgSsKbs.js";import"./getRadiusAndStrokeWidthFromDot-DtsjXIq5.js";import"./ActiveShapeUtils-OFRSQ0pw.js";import"./useEffectiveDataKey-BG2pu5J2.js";import"./PolarChart-DDeO00fU.js";import"./Polygon-BUB6SQwS.js";import"./maxBy-DACmDOYV.js";import"./iteratee-BSh9UVJS.js";import"./isArguments-yB-y1yaH.js";import"./polarScaleSelectors-BWJctQ0i.js";import"./polarSelectors-B4VyPU_R.js";const n={angle:{description:`Text rotation angle in degrees.
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
