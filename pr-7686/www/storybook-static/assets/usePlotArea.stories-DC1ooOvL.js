import{R as t}from"./iframe-DY5yIkq2.js";import{u as a}from"./CategoricalChart-xf3XNLGA.js";import{R as p}from"./zIndexSlice-BJ9sbnI3.js";import{C as s}from"./ComposedChart-Qtg4qpHf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D8pVJeO2.js";import{X as l}from"./XAxis-DqmgH3_K.js";import{Y as h}from"./YAxis-DKNkaL0G.js";import{L as c}from"./Legend-BU2Y_G38.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-fiPqbXet.js";import"./index-CqtRrj2-.js";import"./index-BgsJFNTR.js";import"./index-6CL2Bs_1.js";import"./index-Cl8EGK2P.js";import"./throttle-ClrYp41z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BA6Z_Ork.js";import"./resolveDefaultProps-CD9o0rsG.js";import"./isWellBehavedNumber-DqVPPSXs.js";import"./d3-scale-L5elDZ4E.js";import"./renderedTicksSlice-CkTe5jVw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BYEGQZkF.js";import"./chartDataContext-CpL7gfA0.js";import"./Layer-sQPOBB7C.js";import"./Curve-CFlple2Z.js";import"./types-CYQx7sGq.js";import"./step-3W0WqQC-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0mJPdXUD.js";import"./Label-DF-ljJas.js";import"./Text-CbUk5Nnj.js";import"./DOMUtils-PzmIv2NH.js";import"./useId-s6AFE7pi.js";import"./useBackwardsCompatibleTheme-CQzhlAGv.js";import"./ZIndexLayer-BUoXCop5.js";import"./useAnimationId-bV9tA_xy.js";import"./ActivePoints-DO3E4C9p.js";import"./Dot-CFTB-H51.js";import"./RegisterGraphicalItemId-uvsWx-K_.js";import"./ErrorBarContext-DeFkaPs_.js";import"./GraphicalItemClipPath-pdIKb4VD.js";import"./SetGraphicalItem-CQx7YnIu.js";import"./getRadiusAndStrokeWidthFromDot-9lBJp0HG.js";import"./ActiveShapeUtils-D2cfX5ZD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dkt1u38S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BDBGTJa7.js";import"./symbol-BV3D7xmY.js";import"./useElementOffset-C44gFBr0.js";import"./uniqBy-CrTJkdgV.js";import"./iteratee-5kgpLf6w.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
