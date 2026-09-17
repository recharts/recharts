import{R as e}from"./iframe-D--BifOA.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-CFZdNolQ.js";import{R as g}from"./zIndexSlice-BS_bCBK-.js";import{L as y}from"./LineChart-dT_oqv1Z.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DdPhDV4c.js";import{L as h}from"./Line-qeb5AOli.js";import{Y as b}from"./YAxis-kT_Dhc9L.js";import{X as x}from"./XAxis-Csoi6tJo.js";import{R}from"./RadarChart-Cdx3lNfO.js";import{R as v}from"./Radar-B35ntpFs.js";import{P as w}from"./PolarGrid-CLcsoBYn.js";import{P as A}from"./PolarAngleAxis-ChQwYkkS.js";import{P}from"./PolarRadiusAxis-DiJmTREK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-DqGbkrCU.js";import"./resolveDefaultProps-lipkooEs.js";import"./DOMUtils-DY29CBKb.js";import"./isWellBehavedNumber-Dtp514zB.js";import"./useId-CApYJX2H.js";import"./useBackwardsCompatibleTheme-Bk9F9dU7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BREUw5RK.js";import"./index-BOkqGzp2.js";import"./index-CfjS_rv2.js";import"./throttle-CArjZiC0.js";import"./RechartsWrapper-CSj-zOMY.js";import"./axisSelectors-BukMemNW.js";import"./d3-scale-A0pa5PaW.js";import"./index-BU2LuEPQ.js";import"./index-w8XliPC1.js";import"./renderedTicksSlice-aSc_RQuV.js";import"./index-Bhmq51fs.js";import"./CartesianChart-CGnG6vua.js";import"./chartDataContext-DYtS61hX.js";import"./CategoricalChart-exrBt-zG.js";import"./CartesianAxis-C4H8T_Ld.js";import"./Layer-DyzQQGzG.js";import"./types-Ba9pm5hc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B6JdyyX2.js";import"./step-DWnGBeyO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dg7VLsKy.js";import"./useAnimationId-DR1fMTy4.js";import"./ActivePoints-BPt1O7jo.js";import"./Dot-BJReGaVO.js";import"./RegisterGraphicalItemId-BvCBLwbE.js";import"./ErrorBarContext-DfSUsFkF.js";import"./GraphicalItemClipPath-Bf92gQO6.js";import"./SetGraphicalItem-DcBb5qLP.js";import"./getRadiusAndStrokeWidthFromDot-CK_UfwUG.js";import"./ActiveShapeUtils-BVXEB5o6.js";import"./useGraphicalItemIdentity-pSJHNQYU.js";import"./PolarChart-q_dwsGDl.js";import"./Polygon-PC6jwKD9.js";import"./maxBy-BW3i9GGm.js";import"./iteratee-5n_c6cHV.js";import"./polarScaleSelectors-Bbb3sM2o.js";import"./polarSelectors-C0_P_B89.js";const n={angle:{description:`Text rotation angle in degrees.
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
