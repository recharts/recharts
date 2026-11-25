import{R as e}from"./iframe-DC5T2GCj.js";import{R as i}from"./zIndexSlice-DOsx9V2z.js";import{C as n}from"./ComposedChart-Dc1csNHW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B28T3YID.js";import{X as s}from"./XAxis-CfQ_9fqW.js";import{Y as c}from"./YAxis-lqkl3rqG.js";import{L as d}from"./Line-BIGVkZPR.js";import{R as g}from"./ReferenceLine-DqicQNEy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-gSxbvbxj.js";import"./get-CjriyByo.js";import"./throttle-CU56JRf7.js";import"./index-CxhZ_jtS.js";import"./index-CuovNQzi.js";import"./RechartsWrapper-DYjSRCa_.js";import"./axisSelectors-B_BJB7t0.js";import"./polarAxisSelectors-ftiVMEmb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ccs_pA9m.js";import"./index-BzBudmwv.js";import"./index-Dg66RVOT.js";import"./renderedTicksSlice-B-kM46TD.js";import"./index-BFdMDMd2.js";import"./fillDefinitions-Bx7rUJI2.js";import"./CartesianChart-7SPsAfcZ.js";import"./chartDataContext-BhVo_C4q.js";import"./CategoricalChart-BjWBv8hx.js";import"./CartesianAxis-Ldc9waKq.js";import"./Layer-CPK-7NIh.js";import"./Text-agvS8xSD.js";import"./ZIndexLayer-CauVCDM2.js";import"./Label-CWyu9wCB.js";import"./types-Bpysv2Pn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DZMpjyXl.js";import"./Curve-xzcOD2X_.js";import"./step-dKzEEUk_.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-D7lSN93x.js";import"./ActivePoints-BGltZVX5.js";import"./Dot-BnGpEvHu.js";import"./activeStyles-CBtGMRGE.js";import"./useAnimationId-Do3keAzT.js";import"./Symbols-B7vEIcCD.js";import"./symbol-CpvxzB9V.js";import"./ErrorBarContext-CTMeRt95.js";import"./SetGraphicalItem-CgeoKwAC.js";import"./ActiveShapeUtils-09R3ENuC.js";import"./useEffectiveDataKey-CuDgyJop.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
