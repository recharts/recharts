import{R as t}from"./iframe-Cohm3Mgw.js";import{j as a}from"./RechartsWrapper-BRBo2AAI.js";import{R as p}from"./zIndexSlice-B9ueg08S.js";import{C as n}from"./ComposedChart-NgaAeXu7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CSUvTs5t.js";import{X as l}from"./XAxis-CVOvqpzX.js";import{Y as h}from"./YAxis-CL7XnP-K.js";import{L as c}from"./Legend-DdnPtxq-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C0M5TZCe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CjhsklJ0.js";import"./throttle-yX9WQlUu.js";import"./index-D7CetYi-.js";import"./index-S5rsC3Tw.js";import"./isWellBehavedNumber-gcpDVDB0.js";import"./d3-scale-DvRyM4Sf.js";import"./index-DvtaYKH7.js";import"./index-BauJCgFC.js";import"./renderedTicksSlice-BCr9iPCV.js";import"./index-Cm_kbqdK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cpw2D3LX.js";import"./chartDataContext-H3bm4v7q.js";import"./CategoricalChart-Df9xH4Hr.js";import"./Layer-0g-9u_Rw.js";import"./Curve-BoBL6qva.js";import"./types-DRz-ZInT.js";import"./step-DcnLL6eP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CnXe2R42.js";import"./Label-CjpZErbZ.js";import"./Text-YiVIU37_.js";import"./DOMUtils-txvPDt5R.js";import"./useId-C6wOq3r0.js";import"./useBackwardsCompatibleTheme-VM02li75.js";import"./ZIndexLayer-CYwij2WM.js";import"./useAnimationId-Cli-i2xG.js";import"./ActivePoints-D3t_JlJ4.js";import"./Dot-bF3RsuDa.js";import"./RegisterGraphicalItemId-zE1kxnUQ.js";import"./ErrorBarContext-CroV_pde.js";import"./GraphicalItemClipPath-C_0K_X_g.js";import"./SetGraphicalItem-Cu_GzdoF.js";import"./getRadiusAndStrokeWidthFromDot-BzpvHiho.js";import"./ActiveShapeUtils-Vqel86XU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ayk5133x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-TKWw2euB.js";import"./symbol-DN1AI-xQ.js";import"./useElementOffset-CIa7YSgL.js";import"./uniqBy-DMinejVi.js";import"./iteratee-Cno2h-aJ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
