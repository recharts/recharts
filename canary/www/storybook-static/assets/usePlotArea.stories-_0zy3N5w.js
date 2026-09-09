import{R as t}from"./iframe-D3O6io8m.js";import{j as a}from"./RechartsWrapper-DlAcodG6.js";import{R as p}from"./zIndexSlice-DQB1nost.js";import{C as n}from"./ComposedChart-Cn_VV92w.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dt8Tbg_O.js";import{X as l}from"./XAxis-DUDfURVS.js";import{Y as h}from"./YAxis-BzpJJ7qL.js";import{L as c}from"./Legend-DR8u6wSa.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-kP9mtom1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DYaW_3kH.js";import"./throttle-CaEEZkOZ.js";import"./index-B0ONpcCM.js";import"./index-5LaKRWmN.js";import"./isWellBehavedNumber-B1sq1tTx.js";import"./d3-scale-CVKZtCyw.js";import"./index-emaHTIIt.js";import"./index-DdBSGBzR.js";import"./renderedTicksSlice-Do9cyu74.js";import"./index-kC31JoLB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rEbOxYKn.js";import"./chartDataContext-NUXFSw-S.js";import"./CategoricalChart-BslMClSv.js";import"./Layer-nZxEgPG5.js";import"./Curve-BqlJ0F26.js";import"./types-B4ar_Rgv.js";import"./step-BpERcgqV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B5d6Ob4T.js";import"./Label-CWCww6MW.js";import"./Text-De-f5jqv.js";import"./DOMUtils-Cvz_isR7.js";import"./useId-CrZafLfR.js";import"./useBackwardsCompatibleTheme-CHhEQzss.js";import"./ZIndexLayer-CNTWWRns.js";import"./useAnimationId-Cz9FmiXJ.js";import"./ActivePoints-gquoLNda.js";import"./Dot-bFsMR4tf.js";import"./RegisterGraphicalItemId-JcTZBT0j.js";import"./ErrorBarContext-CYOIqMSi.js";import"./GraphicalItemClipPath-B0houyvR.js";import"./SetGraphicalItem-DB0WYfC5.js";import"./getRadiusAndStrokeWidthFromDot-BFirVaXF.js";import"./ActiveShapeUtils-CaF-7U2y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B7axhf8y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CgmQggkW.js";import"./symbol-BkgXbFHN.js";import"./useElementOffset-fyOV3B1W.js";import"./uniqBy-D-toxyLD.js";import"./iteratee-BOVM6bQ2.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
