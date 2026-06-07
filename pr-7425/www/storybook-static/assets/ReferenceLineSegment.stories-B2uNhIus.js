import{R as e}from"./iframe-DsrD6wpT.js";import{R as i}from"./zIndexSlice-DkgP7dBP.js";import{C as a}from"./ComposedChart-qq8cl2VI.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-36WiabID.js";import{X as s}from"./XAxis-DizM2ccM.js";import{Y as c}from"./YAxis-C8AD80e7.js";import{L as d}from"./Line-dtEvmWP5.js";import{R as g}from"./ReferenceLine-DlxGMsHw.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BAPcb6RO.js";import"./index-Z0dAwhZH.js";import"./index-CKvlhhLQ.js";import"./get-C10pg2Pt.js";import"./resolveDefaultProps-DQfgYWkZ.js";import"./isWellBehavedNumber-CgPFccj7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIY-yJrq.js";import"./index-D23QGT2y.js";import"./index-DLTbKQJZ.js";import"./renderedTicksSlice-VRajnlWn.js";import"./axisSelectors-CJUUuARo.js";import"./d3-scale-CqXFZCr9.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgP_pNrE.js";import"./chartDataContext-CD2wssdB.js";import"./CategoricalChart-BwGaQnIJ.js";import"./CartesianAxis-CiwuyPTT.js";import"./Layer-Cn-q1z5M.js";import"./Text-BEnCKmcO.js";import"./DOMUtils-Cn9VGpSS.js";import"./Label-TNDcrVM2.js";import"./ZIndexLayer-D3qjSsRd.js";import"./types-B5JJF1dm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CpP-gaVa.js";import"./step-7WGc90nH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-8lESwhOr.js";import"./useAnimationId-BDJzCpgi.js";import"./ActivePoints-Bk2Pfh1p.js";import"./Dot-Cd38Ah6o.js";import"./RegisterGraphicalItemId-Ch7WvGaf.js";import"./ErrorBarContext-H2sebB4O.js";import"./GraphicalItemClipPath-CeOkm8u8.js";import"./SetGraphicalItem-DZD_Etrn.js";import"./getRadiusAndStrokeWidthFromDot-BIBWddww.js";import"./ActiveShapeUtils-BxUohkw2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
