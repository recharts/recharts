import{R as e}from"./iframe-CSurJGXt.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-B_q4DRvh.js";import{R as h}from"./zIndexSlice-DeOoXCvu.js";import{L as g}from"./LineChart-BuoPKvKI.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-rdzWyvjA.js";import{L as y}from"./Line-D3qfJJbK.js";import{Y as b}from"./YAxis-COz_c9GE.js";import{X as w}from"./XAxis-DPspp0Rg.js";import{R as x}from"./RadarChart-1KA3gxRh.js";import{R as k}from"./Radar-DPoiTKfm.js";import{P as v}from"./PolarGrid-IoOWYrwg.js";import{P as R}from"./PolarAngleAxis-CWFQzD2R.js";import{P as A}from"./PolarRadiusAxis-SIN8MGRF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Text-D1wUWC9f.js";import"./resolveDefaultProps-CLiXTxMl.js";import"./DOMUtils-Ch0i58SB.js";import"./ZIndexLayer-7wO-Br8Q.js";import"./index-BLu4PMPi.js";import"./index-DXQ1HyAX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8qEX0kp.js";import"./throttle-BimBWg8F.js";import"./RechartsWrapper-C5uJkji8.js";import"./axisSelectors-BTded_EU.js";import"./d3-scale-wNVR4pxp.js";import"./index-DL-0zMUZ.js";import"./index-By1e8KSj.js";import"./renderedTicksSlice-BulAjXaG.js";import"./index-BUjegfsF.js";import"./fillDefinitions-Dy2IhL03.js";import"./CartesianChart-BYJBOySk.js";import"./ZIndexPortal-B_GPxKbG.js";import"./CategoricalChart-CMXRpEe-.js";import"./CartesianAxis-CCV5sIGf.js";import"./Layer-CuCaFJUW.js";import"./types-DAGGFXxQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BWOdKf-d.js";import"./step-CH-YMzWr.js";import"./path-DyVhHtw_.js";import"./LabelList-Dzy6Gaop.js";import"./ActivePoints-C03BB4pX.js";import"./Dot-B5x_6AZj.js";import"./activeStyles-DIe-HGPn.js";import"./useAnimationId-BxuBL60s.js";import"./dataEntryStyles-DMbzXUIb.js";import"./Symbols-C4saACxL.js";import"./symbol-XqakD_BN.js";import"./ErrorBarContext-ORq27qm1.js";import"./SetGraphicalItem-S8ZD9BPZ.js";import"./getRadiusAndStrokeWidthFromDot-BU1Ag6Bu.js";import"./ActiveShapeUtils-lYTYoEV1.js";import"./useEffectiveDataKey-DXY519D2.js";import"./PolarChart-BWgV3rv6.js";import"./Polygon-CBHlnCzd.js";import"./maxBy-C8MNQBPj.js";import"./iteratee-C1NgR1np.js";import"./isArguments-yB-y1yaH.js";import"./polarScaleSelectors-BSRIuTwa.js";import"./polarSelectors-CwAFy9ot.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a background behind the label, for example to keep it readable on top of a filled shape.\n\n- `true` draws the background with the styles from the theme's `label.background`.\n  If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n  It is merged over the theme styles key by key.\n- `false` draws no background, even if the theme turns backgrounds on.\n- `undefined` uses the theme's `label.background`, and draws no background without a theme.\n\nThe background is sized from the rendered text and follows curved label paths.\nIt is not drawn for custom `content`.\n\nIn a chart, the rectangle renders in a zIndex layer below the label,\nso overlapping labels never cover each other's text.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},halo:{description:"Draws an outline around the letters of the label, as a lighter alternative to `background`.\n\n- `true` draws the halo with default styles.\n  The stroke is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts `stroke`, `strokeWidth`, `strokeOpacity` and `strokeLinejoin` to set them explicitly.\n- `false` or `undefined` draws no halo.\n\nUnlike `background`, a halo needs no measurement, works during server-side rendering, and works for\nlabels that follow a curved path (`insideStart`, `insideEnd` and `end` in polar charts).",table:{type:{summary:"TextHaloProps | false | true"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},je={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(y,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(w,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(x,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(k,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(v,null),e.createElement(R,{dataKey:"name"}),e.createElement(A,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},ze=["API","PolarPositions"];var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{r as API,o as PolarPositions,ze as __namedExportsOrder,je as default};
