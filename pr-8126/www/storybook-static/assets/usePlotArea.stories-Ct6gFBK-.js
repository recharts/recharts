import{R as t}from"./iframe-CpWBjTvp.js";import{z as a}from"./RechartsWrapper-DxDmVade.js";import{R as p}from"./zIndexSlice-DUDjamRK.js";import{C as n}from"./ComposedChart-BVHJhCwJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-P1M0af3R.js";import{X as l}from"./XAxis-WebSLI5n.js";import{Y as h}from"./YAxis-3eU4T95U.js";import{L as c}from"./Legend-DfE89ulZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DP-Cq8x3.js";import"./throttle-D3Uoll6g.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9EE4QQRc.js";import"./index-BKdflUfl.js";import"./index-mAc_XfwU.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./Layer-DcRKRX6x.js";import"./Curve-DzwEiiyx.js";import"./types-BKpcX7F2.js";import"./step-D2PoiFak.js";import"./path-DyVhHtw_.js";import"./LabelList-B0vE2GKD.js";import"./Label-BHRweOLu.js";import"./Text-BafsCBcm.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./ActivePoints-CWRCwq-4.js";import"./Dot-D1fFPcbO.js";import"./activeStyles-CPrr7d0w.js";import"./useAnimationId-qe3YUtTg.js";import"./dataEntryStyles-BMyxGDVI.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./ErrorBarContext-Bmj1TjNN.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getRadiusAndStrokeWidthFromDot-BkVlgOSF.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";import"./CartesianAxis-CgwFl8Jq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BB9lz8UY.js";import"./uniqBy-BEMNrNmR.js";import"./iteratee-NM3yHH-L.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
