import{R as e}from"./iframe-TJn1iDy_.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DOD1E2dd.js";import{R as g}from"./zIndexSlice-DcxCrJas.js";import{L as h}from"./LineChart-Xi1CeoEm.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DZkiD9Lt.js";import{L as y}from"./Line-BFq-C2HM.js";import{Y as b}from"./YAxis-BwpngE3S.js";import{X as x}from"./XAxis-B_y5feDu.js";import{R as w}from"./RadarChart-PV_LlmZj.js";import{R as v}from"./Radar-COG2kc3K.js";import{P as R}from"./PolarGrid-L68fFg7_.js";import{P as k}from"./PolarAngleAxis-Dvs45bl2.js";import{P as A}from"./PolarRadiusAxis-AJfDwwxl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Text-Lhe6e02h.js";import"./resolveDefaultProps-B1uePsee.js";import"./pageBackground-CtZ35NZS.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qm_XHo-2.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./throttle-boe4gmWF.js";import"./RechartsWrapper-CGWm-04h.js";import"./axisSelectors-BRmQ6VbT.js";import"./d3-scale-VVBOPfYG.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-DfZWRiOw.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./CartesianAxis-D8sqtaMD.js";import"./Layer-tyJENV3V.js";import"./types-Bczg7GWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DyBM506c.js";import"./step-L1YHvbsX.js";import"./path-DyVhHtw_.js";import"./activeStyles-C-8W4HoU.js";import"./useAnimationId-BdprCSjI.js";import"./ActivePoints-BHSnIp6Z.js";import"./Dot-DGaRCVJg.js";import"./RegisterGraphicalItemId-BU8lHAsW.js";import"./ErrorBarContext-B5z72jnv.js";import"./GraphicalItemClipPath-CEc-GXor.js";import"./SetGraphicalItem-DSOEOPaP.js";import"./getRadiusAndStrokeWidthFromDot-uMuQLm3-.js";import"./ActiveShapeUtils-BTqqsbMk.js";import"./useEffectiveDataKey-7HT13U9Y.js";import"./PolarChart-BCBQmyCW.js";import"./Polygon-BzTbLY34.js";import"./maxBy-D9p3hNYB.js";import"./iteratee-uwfmLxFV.js";import"./isArguments-yB-y1yaH.js";import"./polarScaleSelectors-fNkTF_9E.js";import"./polarSelectors-BjSVzITd.js";const n={angle:{description:`Text rotation angle in degrees.
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
