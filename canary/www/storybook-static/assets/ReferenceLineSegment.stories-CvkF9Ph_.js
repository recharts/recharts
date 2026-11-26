import{R as e}from"./iframe-B8h9Wvr9.js";import{R as i}from"./zIndexSlice-CVCC3Ewl.js";import{C as n}from"./ComposedChart-CihGBoly.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CVHpL8qs.js";import{X as s}from"./XAxis-ClvsjJJf.js";import{Y as c}from"./YAxis-BfjaBbwl.js";import{L as d}from"./Line-BMLS-AKi.js";import{R as g}from"./ReferenceLine-CbP4zeyF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXlTd2CB.js";import"./get-CjriyByo.js";import"./throttle-BfhZgz01.js";import"./index-CKXNY2A8.js";import"./index-R2j1A_a7.js";import"./RechartsWrapper-G4SBGBL6.js";import"./axisSelectors-DxXHcDkW.js";import"./polarAxisSelectors-DvWUU3lc.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B3tlBIXY.js";import"./index-DoR62jFZ.js";import"./index-DqggoQHU.js";import"./renderedTicksSlice-CV8xyIus.js";import"./index-y0390T2N.js";import"./fillDefinitions-DTKKCxhO.js";import"./CartesianChart-Bkkx4Fnj.js";import"./chartDataContext-BVM5VACt.js";import"./CategoricalChart-CyVTcBSA.js";import"./CartesianAxis-CJ6VDRMk.js";import"./Layer-BE-J6P8G.js";import"./Text-DY2xd2YN.js";import"./ZIndexLayer-Bx5YOPf4.js";import"./Label-WZNKLfQt.js";import"./types-BVLhjsLl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BP6vPVdN.js";import"./Curve-Cp-haaTZ.js";import"./step-YyTtc-k1.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Ba3L9xmJ.js";import"./ActivePoints-Bhmc1IMZ.js";import"./Dot-CDhU4o_-.js";import"./activeStyles-DVd5xcPq.js";import"./useAnimationId-D5-dWWo1.js";import"./Symbols-F7LNdmbs.js";import"./symbol-DHr3iGUB.js";import"./ErrorBarContext-Dq6hu0_F.js";import"./SetGraphicalItem-CUEe1yBW.js";import"./ActiveShapeUtils-pnsLPMUZ.js";import"./useEffectiveDataKey-Bc62JqkW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
