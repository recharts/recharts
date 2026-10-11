import{R as e}from"./iframe-CwCc9vh-.js";import{R as i}from"./zIndexSlice-Cze2qQ6L.js";import{C as n}from"./ComposedChart-CBS_Pqtt.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CdE1ddqd.js";import{X as s}from"./XAxis-Ck9YwMSg.js";import{Y as c}from"./YAxis-5QleAohG.js";import{L as d}from"./Line-B99RZhj7.js";import{R as g}from"./ReferenceLine-DCS-sN0a.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_lHGrg8X.js";import"./index-iNTF2uXo.js";import"./index-DH3c4tMg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C0sTGtoa.js";import"./isWellBehavedNumber-C8Zfj1Nz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJt_1m2P.js";import"./axisSelectors-CpT7QqC8.js";import"./d3-scale-QIRFRCXO.js";import"./index-CI9Eu4p_.js";import"./index-BLCS5Ged.js";import"./renderedTicksSlice-BhImPZzn.js";import"./index-DQ_TsVb-.js";import"./CartesianChart-BLB-Ua7j.js";import"./chartDataContext-DHHqBQtJ.js";import"./CategoricalChart-a-9gkYtz.js";import"./CartesianAxis-DXF_4xE6.js";import"./Layer-DOFh0lwh.js";import"./Text-BJucpPtg.js";import"./pageBackground-BpRJwl3U.js";import"./useId-DJcNFVPz.js";import"./useBackwardsCompatibleTheme-pKoGpidZ.js";import"./Label-BR9Px2Ae.js";import"./ZIndexLayer-DyEPtPYc.js";import"./types-CQwCfrQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-nSJilM-Q.js";import"./step-njiuEB0s.js";import"./path-DyVhHtw_.js";import"./activeStyles-PzRACl7b.js";import"./useAnimationId-DnYkrRJp.js";import"./dataEntryStyles-YnhjRNXA.js";import"./ActivePoints-CX_PcgP1.js";import"./Dot-CD_kBVmM.js";import"./ErrorBarContext-B0-6gfmu.js";import"./GraphicalItemClipPath-DVsVu3E2.js";import"./SetGraphicalItem-0C32PbV4.js";import"./getRadiusAndStrokeWidthFromDot-LnlHxG9T.js";import"./ActiveShapeUtils-BUtkHcUW.js";import"./useEffectiveDataKey-CMqBM7fj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
