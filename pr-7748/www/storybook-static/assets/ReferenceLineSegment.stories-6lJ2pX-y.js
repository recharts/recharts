import{R as e}from"./iframe-C2FiVbx6.js";import{R as i}from"./zIndexSlice-CIwOLMY2.js";import{C as n}from"./ComposedChart-Bj-Vd15E.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D1Z1SWnN.js";import{X as s}from"./XAxis-BpwUAM2i.js";import{Y as c}from"./YAxis-H-bG_GIE.js";import{L as d}from"./Line-S0l6mAcw.js";import{R as g}from"./ReferenceLine-CoY1hJIk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./throttle-Cf_mfeUw.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./RechartsWrapper-CzRJf9wd.js";import"./axisSelectors-DzJ8Skeq.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dmh-LY51.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./CartesianAxis-LjFWWnk2.js";import"./Layer-BbCOnDJZ.js";import"./Text-DUuV2-iR.js";import"./ZIndexLayer-CyqrJVrU.js";import"./Label-oSfspIu2.js";import"./types-CTWOnDaX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-0SqF3Wbd.js";import"./Curve-r64DCwYW.js";import"./step-CFQC-oeW.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Cr8Jhwhl.js";import"./ActivePoints-BoBRdB0i.js";import"./Dot-CKxlSMqI.js";import"./activeStyles-Cz6uJME2.js";import"./useAnimationId-DeWO3OMz.js";import"./Symbols-D3G4ac0V.js";import"./symbol-By85hRRg.js";import"./ErrorBarContext-Bl0bf3v5.js";import"./SetGraphicalItem-CdikQP2n.js";import"./ActiveShapeUtils-xS0QhUpf.js";import"./useEffectiveDataKey-pHEaOl4p.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
