import{R as e}from"./iframe-1fJ5z_WZ.js";import{R as i}from"./zIndexSlice-BJlX5T59.js";import{C as n}from"./ComposedChart-Ejf7RFZN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D1IgZnxk.js";import{X as s}from"./XAxis-Kvj5vG7_.js";import{Y as c}from"./YAxis-De-4AuvJ.js";import{L as d}from"./Line-CbRnIiBV.js";import{R as g}from"./ReferenceLine-CicxY-9d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./throttle-6GiZsFaS.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./RechartsWrapper-CR62a_mQ.js";import"./axisSelectors-V7mZ-cGP.js";import"./polarAxisSelectors-DJTK4O93.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqY1ZQ_w.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./chartDataContext-B7GlDzou.js";import"./CategoricalChart-DhN17CFo.js";import"./CartesianAxis-DL2qV91b.js";import"./Layer-6gV2DTZI.js";import"./Text-BeONQBVt.js";import"./ZIndexLayer-CrU6dYup.js";import"./Label-C7hOOLTD.js";import"./types-XVdAxFZ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-D2bzFbuS.js";import"./step-DaCSxOe-.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CqRs5fjI.js";import"./ActivePoints-D175dDtY.js";import"./Dot-B85RmoVX.js";import"./activeStyles-C3pl5b-R.js";import"./useAnimationId-BaNyc8zg.js";import"./Symbols-CPapFf10.js";import"./symbol-CvHFU9Z0.js";import"./ErrorBarContext-CHpXmxM4.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getRadiusAndStrokeWidthFromDot-BILnwdsR.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./useEffectiveDataKey-BB-f3APH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
