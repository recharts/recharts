import{R as e}from"./iframe-DfzMHjuD.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-DHYmqyDD.js";import{R as g}from"./zIndexSlice-D65nx7n2.js";import{L as y}from"./LineChart-DLRunsTX.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-wori74zY.js";import{L as h}from"./Line-CXIUk8YQ.js";import{Y as b}from"./YAxis-CYvNJGV-.js";import{X as x}from"./XAxis-CcmvQ4-M.js";import{R}from"./RadarChart-_TQXgCeI.js";import{R as v}from"./Radar-BTRSbpZh.js";import{P as w}from"./PolarGrid-lPkAmM6s.js";import{P as A}from"./PolarAngleAxis-2k4Hhn9F.js";import{P}from"./PolarRadiusAxis-h_FZF4qO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-KIvPk-oI.js";import"./resolveDefaultProps-BhiSE-fR.js";import"./DOMUtils-DZvMhBn7.js";import"./isWellBehavedNumber-B84GX6Iq.js";import"./useId-jHWdyPm9.js";import"./useBackwardsCompatibleTheme-BN8Sccns.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjEP4vsT.js";import"./index-DQvdEvgc.js";import"./index-CHbvF_w5.js";import"./throttle-B4jaia1x.js";import"./RechartsWrapper-Btc41qHc.js";import"./axisSelectors-Dv8-JHab.js";import"./d3-scale-DkoGb7PH.js";import"./index-CrtWwB5P.js";import"./index-CHqtXhJ0.js";import"./renderedTicksSlice-YMBm5Aq7.js";import"./index-D-FQmlHp.js";import"./CartesianChart-CgfuN-gF.js";import"./chartDataContext-BU-za_rr.js";import"./CategoricalChart-BaFSqBAh.js";import"./CartesianAxis-B2_CRuSv.js";import"./Layer-BgMBl2n9.js";import"./types-BoXpTlVd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BLtOpFAf.js";import"./step-9PcWzaJ_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D8ukjbdC.js";import"./useAnimationId-BwLSFp-D.js";import"./ActivePoints-CQoPkIu-.js";import"./Dot-CVblHFHD.js";import"./RegisterGraphicalItemId-FhHKtG3E.js";import"./ErrorBarContext-CbViVQBZ.js";import"./GraphicalItemClipPath-qYVsG-0u.js";import"./SetGraphicalItem-CfEkxgRj.js";import"./getRadiusAndStrokeWidthFromDot-BDWnIHrh.js";import"./ActiveShapeUtils-CUP96Mlj.js";import"./useGraphicalItemIdentity-CnOmH2BL.js";import"./PolarChart-BtB_O6ny.js";import"./Polygon-Cg86S8aj.js";import"./maxBy-Ba-rEGLt.js";import"./iteratee-Biw9ni9t.js";import"./polarScaleSelectors-CKqIkR9M.js";import"./polarSelectors-DxBTzA3X.js";const n={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},children:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},content:{description:"If set a React element, the option is the custom React element of rendering label.\nUse an SVG element or component, such as `<text>` or `<g>`.\nHTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\nIf set a function, the function will be called to render label content.",table:{type:{summary:"Function | ReactNode"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},index:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},labelRef:{table:{type:{summary:"React.RefObject<SVGTextElement> | null"},category:"General"}},offset:{description:'The offset to the specified "position". Direction of the offset depends on the position.',table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},parentViewBox:{table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},value:{description:"The value of label can be set as children or as the `value` prop",table:{type:{summary:"false | null | number | string | true"},category:"General"}},viewBox:{description:`The box of viewing area. Used for positioning.
If undefined, viewBox will be calculated based on surrounding context.`,table:{type:{summary:"Required<CartesianViewBox> | Required<PolarViewBox>"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},Se={argTypes:n,component:a},r={name:"CartesianPositions",render:t=>e.createElement(g,{width:"100%",height:400},e.createElement(y,{data:u,margin:{top:100,bottom:100,left:100,right:100}},e.createElement(f,null),e.createElement(h,{type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(b,{tick:!1}),e.createElement(x,{dataKey:"name",tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t}))),args:{...c(n),position:"center"}},o={render:t=>e.createElement(R,{width:800,height:800,data:u,margin:{top:30,bottom:30,left:100,right:100}},e.createElement(v,{type:"monotone",dataKey:"uv",fill:"rgba(0, 200, 200, 0.2)"}),e.createElement(w,null),e.createElement(A,{dataKey:"name"}),e.createElement(P,{tick:!1}),e.createElement(a,{value:`Position: ${t.position}`,...t})),args:{...c(n),position:"center"}},Ke=["API","PolarPositions"];var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};export{r as API,o as PolarPositions,Ke as __namedExportsOrder,Se as default};
