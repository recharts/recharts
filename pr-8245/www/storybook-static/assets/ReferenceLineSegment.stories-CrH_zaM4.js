import{R as e}from"./iframe-B7zNIrOO.js";import{R as i}from"./zIndexSlice-BrXa08HH.js";import{C as n}from"./ComposedChart-CwA4XzeT.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Brg9M3zm.js";import{X as s}from"./XAxis-vwLDX7Ct.js";import{Y as c}from"./YAxis-DDLRqqCt.js";import{L as d}from"./Line-CDQvgmS5.js";import{R as g}from"./ReferenceLine-_KIaoW_k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DItvlha8.js";import"./throttle-eF_Q2QNr.js";import"./index-DPky1fKm.js";import"./index-DeW5qBsv.js";import"./RechartsWrapper-BpqvgZcQ.js";import"./axisSelectors-BpHmVUrQ.js";import"./polarAxisSelectors-DMv2prKV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctmq2SXE.js";import"./index-DvJGiIdF.js";import"./index-CSG1xziR.js";import"./renderedTicksSlice-BaWHA44G.js";import"./index-Bmy_tuVE.js";import"./fillDefinitions-BcvXO95l.js";import"./CartesianChart-DD-p_bEO.js";import"./chartDataContext-BXscOHGM.js";import"./CategoricalChart-eJZPSIID.js";import"./CartesianAxis-_HHYfvE8.js";import"./Layer-_oO_qD0a.js";import"./Text-RcA031Tp.js";import"./ZIndexLayer-wE65zH98.js";import"./Label-Chg26k5h.js";import"./types-Byak9pOA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CzZYT27h.js";import"./step-BjjeCzgq.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-m9rMNboQ.js";import"./ActivePoints-hyEey0jz.js";import"./Dot-CPebMAD4.js";import"./activeStyles-CDe2Kb4I.js";import"./useAnimationId-kE9HxpHZ.js";import"./Symbols-FG4gFplx.js";import"./symbol-DWqvgSCA.js";import"./ErrorBarContext-Dk6Rlq45.js";import"./SetGraphicalItem-CoOgwPlc.js";import"./getRadiusAndStrokeWidthFromDot-BxhyxoF6.js";import"./ActiveShapeUtils-CLU25TzO.js";import"./useEffectiveDataKey-CezGQrGJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
