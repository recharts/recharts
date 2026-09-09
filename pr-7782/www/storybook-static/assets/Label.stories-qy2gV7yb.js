import{R as e}from"./iframe-SqguF_NX.js";import{g as c}from"./utils-ePvtT4un.js";import{L as a}from"./Label-Ln0updaQ.js";import{R as g}from"./zIndexSlice-BkiV0otE.js";import{L as y}from"./LineChart-CX6fFVTH.js";import{p as u}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Bt3LKIpL.js";import{L as h}from"./Line-D3r5tZJE.js";import{Y as b}from"./YAxis-BezMzOf0.js";import{X as x}from"./XAxis-P_and3Qh.js";import{R}from"./RadarChart-BYQ29dA7.js";import{R as v}from"./Radar-B1DGMeTU.js";import{P as w}from"./PolarGrid-CYcV6G90.js";import{P as A}from"./PolarAngleAxis-CPGVdm3-.js";import{P}from"./PolarRadiusAxis-BIPvg_z4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Text-CGVR5o-9.js";import"./resolveDefaultProps-BXjF7TxP.js";import"./DOMUtils-C7uSFAMW.js";import"./isWellBehavedNumber-BVNp7Lfk.js";import"./useId-DDimChZF.js";import"./useBackwardsCompatibleTheme-Csth7N6u.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2JAxRQj0.js";import"./index-B3GChKJN.js";import"./index-DZzaZipo.js";import"./throttle-BK_PPAk1.js";import"./RechartsWrapper-DtX1Azw0.js";import"./axisSelectors-zCi_DHLv.js";import"./d3-scale-HQIXvxJU.js";import"./index-GGoi087z.js";import"./index-BzPNjXR5.js";import"./renderedTicksSlice-CMNm7EBg.js";import"./index-BH7LBhiS.js";import"./CartesianChart-0Tm9s_Qh.js";import"./chartDataContext-Cw_Hfd-o.js";import"./CategoricalChart--bg0gB1r.js";import"./CartesianAxis-IyngpyO5.js";import"./Layer-DMTzFJJY.js";import"./types-C4DG-fsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-TumiDsb0.js";import"./step-DI1tw62n.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVudD1tP.js";import"./useAnimationId-Cnc3ou0l.js";import"./ActivePoints-BdsoqPbh.js";import"./Dot-D7HgwkXZ.js";import"./RegisterGraphicalItemId-B2ssVdOY.js";import"./ErrorBarContext-CKOKE4j7.js";import"./GraphicalItemClipPath-DQVG9W_P.js";import"./SetGraphicalItem-DnieI-cg.js";import"./getRadiusAndStrokeWidthFromDot-C8zV7Km-.js";import"./ActiveShapeUtils-C8315rjX.js";import"./useGraphicalItemIdentity-CEMH6EIi.js";import"./PolarChart-ByRcM7wq.js";import"./Polygon-BTN4TL0j.js";import"./maxBy-DChGNYHp.js";import"./iteratee-qNi8Ps_g.js";import"./polarScaleSelectors-BC6aZoym.js";import"./polarSelectors-BG0Sk0GW.js";const n={angle:{description:`Text rotation angle in degrees.
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
