import{R as e}from"./iframe-DkUPJ-sS.js";import{R as i}from"./zIndexSlice-12UiSTLm.js";import{C as n}from"./ComposedChart-3SzIkZlG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-wrIIvehP.js";import{X as s}from"./XAxis-BWwIFA6B.js";import{Y as c}from"./YAxis-DUp2X2GH.js";import{L as d}from"./Line-C2hOgETN.js";import{R as g}from"./ReferenceLine-j6X-eQ90.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./throttle-B27eHaYH.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./RechartsWrapper-mRcsep52.js";import"./axisSelectors-DXomLufj.js";import"./polarAxisSelectors-BXszvLGt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CycPPIVV.js";import"./index-C1Em399f.js";import"./index-Cvlsg4mt.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./chartDataContext-90C9fl16.js";import"./CategoricalChart-B3U5Ej9_.js";import"./CartesianAxis-CPfh-d6g.js";import"./Layer-Dz0e5F_f.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./Label-8ZjagO8_.js";import"./types-BwlCxTmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CiiVoAk9.js";import"./Curve-CbuCUFZQ.js";import"./step-BRslF1pk.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BCBCgPLo.js";import"./ActivePoints-D6Ig6JoZ.js";import"./Dot-1lM7GFo1.js";import"./activeStyles-DgOrLWSA.js";import"./useAnimationId-2gl_z5Fx.js";import"./Symbols-u4sk2XTY.js";import"./symbol-C2La0w81.js";import"./ErrorBarContext-MZRvuvrv.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./useEffectiveDataKey-CN20ww8a.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
