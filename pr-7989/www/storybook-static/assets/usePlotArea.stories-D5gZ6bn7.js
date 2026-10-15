import{R as t}from"./iframe-DjRBpX_P.js";import{e as a}from"./RechartsWrapper-Ckb52kl2.js";import{R as p}from"./zIndexSlice-iVSWW5BV.js";import{C as n}from"./ComposedChart-CsK6iTFT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cy3PGKP5.js";import{X as l}from"./XAxis-Y0oUf3sW.js";import{Y as h}from"./YAxis-B51h7pP8.js";import{L as c}from"./Legend-BLRADEwo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D79DWiWx.js";import"./throttle-DnOef0ju.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./d3-scale-FJpOhRlp.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./index-CvqQYFRa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./Layer-C9YefTas.js";import"./Curve-CdVM2yHm.js";import"./types-BdVZogP6.js";import"./step-CX_rIxxT.js";import"./path-DyVhHtw_.js";import"./activeStyles-D2vPCQTd.js";import"./Label-CnRbgzX5.js";import"./Text-yVr7Mz0m.js";import"./pageBackground-GeoRz0Dn.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./ZIndexLayer-Dbtf4y40.js";import"./useAnimationId-DPppjou0.js";import"./dataEntryStyles-CrSg03Wv.js";import"./ActivePoints-CPY1nzmN.js";import"./Dot-C0cfWCUu.js";import"./ErrorBarContext-4DLGaDei.js";import"./GraphicalItemClipPath-Dm-UOdIc.js";import"./SetGraphicalItem-BKY1gJK1.js";import"./getRadiusAndStrokeWidthFromDot-CkoSzgY_.js";import"./ActiveShapeUtils-tgtgWXQ1.js";import"./useEffectiveDataKey-Tusm1QhA.js";import"./CartesianAxis-D3pH7M3P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CNnoj2D4.js";import"./symbol-DsS9qHk8.js";import"./useElementOffset-CNPJvaJQ.js";import"./uniqBy-BbsWZnIf.js";import"./iteratee-aih5jQ4Q.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
