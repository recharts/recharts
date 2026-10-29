import{R as e}from"./iframe-CpWBjTvp.js";import{R as i}from"./zIndexSlice-DUDjamRK.js";import{C as n}from"./ComposedChart-BVHJhCwJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C8RHDb5i.js";import{X as s}from"./XAxis-WebSLI5n.js";import{Y as c}from"./YAxis-3eU4T95U.js";import{L as d}from"./Line-P1M0af3R.js";import{R as g}from"./ReferenceLine-Du-zXSoS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./throttle-D3Uoll6g.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./RechartsWrapper-DxDmVade.js";import"./axisSelectors-DP-Cq8x3.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9EE4QQRc.js";import"./index-BKdflUfl.js";import"./index-mAc_XfwU.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./CartesianAxis-CgwFl8Jq.js";import"./Layer-DcRKRX6x.js";import"./Text-BafsCBcm.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./Label-BHRweOLu.js";import"./types-BKpcX7F2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DzwEiiyx.js";import"./step-D2PoiFak.js";import"./path-DyVhHtw_.js";import"./LabelList-B0vE2GKD.js";import"./ActivePoints-CWRCwq-4.js";import"./Dot-D1fFPcbO.js";import"./activeStyles-CPrr7d0w.js";import"./useAnimationId-qe3YUtTg.js";import"./dataEntryStyles-BMyxGDVI.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./ErrorBarContext-Bmj1TjNN.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getRadiusAndStrokeWidthFromDot-BkVlgOSF.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
