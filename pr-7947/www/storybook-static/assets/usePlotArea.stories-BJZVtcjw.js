import{R as t}from"./iframe-B91k2IcJ.js";import{j as a}from"./RechartsWrapper-BMFvDMkV.js";import{R as p}from"./zIndexSlice-DPjnHRkm.js";import{C as n}from"./ComposedChart-SUsOIgRZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B6diu4jO.js";import{X as l}from"./XAxis-Kxgks0Q-.js";import{Y as h}from"./YAxis-MGmz2Csl.js";import{L as c}from"./Legend-DWZcC7PQ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D3docOoh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CcYA9DrF.js";import"./throttle-BM2gK96G.js";import"./index-BbCiI-kx.js";import"./index-C5xeHmjj.js";import"./isWellBehavedNumber-TAwJ2tp1.js";import"./d3-scale-C4mP0o3d.js";import"./index-DlE4la4O.js";import"./index-DagyI5pu.js";import"./renderedTicksSlice-C1MLxybq.js";import"./index-D5HKNOOG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7_E8FCz.js";import"./chartDataContext-DjizePAa.js";import"./CategoricalChart-CUc2SRJ3.js";import"./Layer-mmJAUotg.js";import"./Curve-BM89L-Dm.js";import"./types-DevBWE8M.js";import"./step-BZw5QhTt.js";import"./path-DyVhHtw_.js";import"./activeStyles-U0RfMPfz.js";import"./Label-BsntnuTl.js";import"./Text-CiRRF6pE.js";import"./pageBackground-BjpY-vWv.js";import"./useId-DkzElDsG.js";import"./useBackwardsCompatibleTheme-CU4zQS7V.js";import"./ZIndexLayer-GgF7R--c.js";import"./useAnimationId-CRCBGZGy.js";import"./dataEntryStyles-yNODtHFO.js";import"./ActivePoints-BkA-bCTx.js";import"./Dot-D09SInS_.js";import"./ErrorBarContext-C_xJpakb.js";import"./GraphicalItemClipPath-C22168NG.js";import"./SetGraphicalItem-BDS20UwV.js";import"./getRadiusAndStrokeWidthFromDot-leGQ2dWC.js";import"./ActiveShapeUtils-djGvUgMr.js";import"./useGraphicalItemIdentity-WURDsQ2E.js";import"./CartesianAxis-D1fr-7So.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BR-UUylu.js";import"./symbol-4FZOpY9N.js";import"./useElementOffset-DCd6qDJl.js";import"./uniqBy-BohUdtb5.js";import"./iteratee-iijREnPj.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
