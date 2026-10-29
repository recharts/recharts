import{R as e}from"./iframe-qOFEdJsq.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Cllq2PGv.js";import{R as h}from"./zIndexSlice-4ZilFo_n.js";import{L as g}from"./LineChart-Dl529CfE.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BF4MkUzS.js";import{L as y}from"./Line-DRa6L9kk.js";import{Y as b}from"./YAxis-W_URYSZS.js";import{X as w}from"./XAxis-BLPVblQP.js";import{R as x}from"./RadarChart-a9YmUB7A.js";import{R as k}from"./Radar-DpGe9wPs.js";import{P as v}from"./PolarGrid-Kbcvwg5y.js";import{P as R}from"./PolarAngleAxis-CyTmWAWO.js";import{P as A}from"./PolarRadiusAxis-TLWeHHaz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Text-D4Or0m3K.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./throttle-Bx7bNNV1.js";import"./RechartsWrapper-BNMPtHnU.js";import"./axisSelectors-CB4lGYL3.js";import"./d3-scale-DLjhRaU2.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./CartesianAxis-B9ZixuFu.js";import"./Layer-p7tl0Obh.js";import"./types-vee7x0Qx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-C8MPZPAo.js";import"./Curve-DB3f0x8T.js";import"./step-5jiFn3Gv.js";import"./path-DyVhHtw_.js";import"./LabelList-CNqM2k92.js";import"./ActivePoints-B9VIFtI9.js";import"./Dot-Cx_dxYvu.js";import"./activeStyles-B7bZlFHp.js";import"./useAnimationId-DRvHP31x.js";import"./dataEntryStyles-BpwMOC9F.js";import"./Symbols-DU4y3lGd.js";import"./symbol-Cc7ZDpSQ.js";import"./ErrorBarContext-CScUCP7Y.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getRadiusAndStrokeWidthFromDot-B-7643QY.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./useEffectiveDataKey-Y8Iowmfi.js";import"./PolarChart-ze2n5tiB.js";import"./Polygon-CTdUXnZI.js";import"./maxBy-D_hCqyZY.js";import"./iteratee-bC8XKX9j.js";import"./isArguments-yB-y1yaH.js";import"./polarScaleSelectors-BU8_iG4z.js";import"./polarSelectors-Cd3XhuHz.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},background:{description:"Draws a background behind the label, for example to keep it readable on top of a filled shape.\n\n- `true` draws the background with the styles from the theme's `label.background`.\n  If neither sets a `fill`, the fill is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts SVG `<rect>` attributes such as `fill`, `stroke` and `rx`, and a `padding`.\n  It is merged over the theme styles key by key.\n- `false` draws no background, even if the theme turns backgrounds on.\n- `undefined` uses the theme's `label.background`, and draws no background without a theme.\n\nThe background is sized from the rendered text and follows curved label paths.\nIt is not drawn for custom `content`.\n\nIn a chart, the rectangle renders in a zIndex layer below the label,\nso overlapping labels never cover each other's text.",table:{type:{summary:"TextBackgroundProps | false | true"},category:"General"}},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},halo:{description:"Draws an outline around the letters of the label, as a lighter alternative to `background`.\n\n- `true` draws the halo with default styles.\n  The stroke is the `pageBackground` color from the theme, or white when no theme is set.\n- An object accepts `stroke`, `strokeWidth`, `strokeOpacity` and `strokeLinejoin` to set them explicitly.\n- `false` or `undefined` draws no halo.\n\nUnlike `background`, a halo needs no measurement, works during server-side rendering, and works for\nlabels that follow a curved path (`insideStart`, `insideEnd` and `end` in polar charts).",table:{type:{summary:"TextHaloProps | false | true"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},ze={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(y,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(w,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(x,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(k,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(v,null),e.createElement(R,{dataKey:"name"}),e.createElement(A,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},De=["API","PolarPositions"];var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{r as API,o as PolarPositions,De as __namedExportsOrder,ze as default};
