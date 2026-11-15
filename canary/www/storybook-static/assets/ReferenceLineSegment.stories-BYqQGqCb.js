import{R as e}from"./iframe-BEGj1koH.js";import{R as i}from"./zIndexSlice-CEJVfddR.js";import{C as n}from"./ComposedChart-Bzc4T97f.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CnGKMMdf.js";import{X as s}from"./XAxis-A5l93qYr.js";import{Y as c}from"./YAxis-pWnSqNwD.js";import{L as d}from"./Line-wcAYZAbC.js";import{R as g}from"./ReferenceLine-CzRMJJih.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BYyXPZU-.js";import"./throttle-9RbVUj4o.js";import"./index-DDO4uWer.js";import"./index-DR0rd1FX.js";import"./RechartsWrapper-DyBgNckc.js";import"./axisSelectors-DNGVPDPw.js";import"./polarAxisSelectors-Bip_MddP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-80plsouy.js";import"./index-BjkAsnz4.js";import"./index-OAXr3uJt.js";import"./renderedTicksSlice-kRCXaW-h.js";import"./index-CMfsitJi.js";import"./fillDefinitions-CBOLnqU9.js";import"./CartesianChart-Ct1jbJB4.js";import"./chartDataContext-CTuyBUPX.js";import"./CategoricalChart-DExcD38L.js";import"./CartesianAxis-DbfSB8D9.js";import"./Layer-C55olOZb.js";import"./Text-DjwfkybI.js";import"./ZIndexLayer-DF1RNmQW.js";import"./Label-D38IadvQ.js";import"./types-DoIEZrXt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-hlvSyv9M.js";import"./step-Cc4Umos1.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D0L-GBmA.js";import"./ActivePoints-htAl9rci.js";import"./Dot-CF8XQTEk.js";import"./activeStyles-BAv2bBi7.js";import"./useAnimationId-Dz0dpT6V.js";import"./Symbols-B6OXEcw9.js";import"./symbol-Bug6GalK.js";import"./ErrorBarContext-DjI-jDw7.js";import"./SetGraphicalItem-CZ4dqLwM.js";import"./getRadiusAndStrokeWidthFromDot-CkygA61E.js";import"./ActiveShapeUtils-CbYiWbjj.js";import"./useEffectiveDataKey-Dgv3FRKU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
