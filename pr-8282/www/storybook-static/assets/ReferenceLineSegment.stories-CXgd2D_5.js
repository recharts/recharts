import{R as e}from"./iframe-B3TE-nU3.js";import{R as i}from"./zIndexSlice-CTTS6cFj.js";import{C as n}from"./ComposedChart-CoUJ-8Kk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-tLBHG-0r.js";import{X as s}from"./XAxis-h5fh4YlR.js";import{Y as c}from"./YAxis-DsQMJ5Zr.js";import{L as d}from"./Line-C9ocvs2A.js";import{R as g}from"./ReferenceLine-CyGhQ7ao.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZyWFquG.js";import"./throttle-CbHIruzi.js";import"./index-CwYGoluT.js";import"./index-BdYXEAEl.js";import"./RechartsWrapper-Cj-eh_A9.js";import"./axisSelectors-DZCqrQSM.js";import"./polarAxisSelectors-Du86AxQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXmLRtz9.js";import"./index-DGF3N8N0.js";import"./index-QNAAg88T.js";import"./renderedTicksSlice-CnKrAq7k.js";import"./index-j8tkVAM0.js";import"./fillDefinitions-ExsKJJdV.js";import"./CartesianChart-BlnVLBxP.js";import"./chartDataContext-CdnFs56-.js";import"./CategoricalChart-ZasnE1da.js";import"./CartesianAxis-98BHMJXj.js";import"./Layer-ChziGKVJ.js";import"./Text-Dg5b12Q4.js";import"./ZIndexLayer-CcszVre3.js";import"./Label-CBnDrrJb.js";import"./types-DiSBkFzd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-sWaZWzqd.js";import"./Curve-DakK0sdO.js";import"./step-DFLs3YCD.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DR0RxE_5.js";import"./ActivePoints-Ds08HXXd.js";import"./Dot-AAIkJYcq.js";import"./activeStyles-P5uz91Wl.js";import"./useAnimationId-CxiMpo3b.js";import"./Symbols-BSwXR0zr.js";import"./symbol-DheZZ-vM.js";import"./ErrorBarContext-CAoDHE0Y.js";import"./SetGraphicalItem-H8Hr2AbP.js";import"./ActiveShapeUtils-Bxv-7xaq.js";import"./useEffectiveDataKey-DPfqIOjF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
