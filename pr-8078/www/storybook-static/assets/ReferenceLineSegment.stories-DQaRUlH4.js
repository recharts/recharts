import{R as e}from"./iframe-DQVzMSYD.js";import{R as i}from"./zIndexSlice-COaPk7HG.js";import{C as n}from"./ComposedChart-C_Pl0aog.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D6V-fHLA.js";import{X as s}from"./XAxis-EcPa3Cb-.js";import{Y as c}from"./YAxis-C77qq_aV.js";import{L as d}from"./Line-D2xiXoDa.js";import{R as g}from"./ReferenceLine-BjnB1aMe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./throttle-RO9RTr3r.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./RechartsWrapper-C-LDIUUV.js";import"./axisSelectors-D2aZ2Nk7.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CB3Nn2aV.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./CartesianAxis-D4euaSSo.js";import"./Layer-Bj9bz4HQ.js";import"./Text-CPLLX1IN.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./Label-D0zJX0d_.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./types-DP1nwDJM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Bt3n70L8.js";import"./step-BQC9MPym.js";import"./path-DyVhHtw_.js";import"./activeStyles-BOapb_qi.js";import"./useAnimationId-BChg9XFS.js";import"./ActivePoints-rQZSXr73.js";import"./Dot-BkzLITlZ.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./ErrorBarContext-CI8iDnvM.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./getRadiusAndStrokeWidthFromDot-C00hbLzP.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./useEffectiveDataKey-CkAzTA5N.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
