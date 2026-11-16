import{R as e}from"./iframe-CO23d3n1.js";import{R as i}from"./zIndexSlice-DMSZKiVC.js";import{C as n}from"./ComposedChart-D8Yj3pPk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D5AxC3LB.js";import{X as s}from"./XAxis-BoBOjjsH.js";import{Y as c}from"./YAxis-DVp-8yRY.js";import{L as d}from"./Line-9yhlogYr.js";import{R as g}from"./ReferenceLine-9qZaKef6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-q2NyX8vA.js";import"./throttle-B66_T3U8.js";import"./index-BxzZTuqI.js";import"./index-Del1ANZm.js";import"./RechartsWrapper-Bh8_r7fw.js";import"./axisSelectors-DJQVEMl6.js";import"./polarAxisSelectors-D8_om16C.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C9xcvLA3.js";import"./index-D4fJrATD.js";import"./index-D0uo_LWY.js";import"./renderedTicksSlice-DOtk_XFi.js";import"./index-BjQv-IHX.js";import"./fillDefinitions-B9Iskt95.js";import"./CartesianChart-BGvEgPGc.js";import"./chartDataContext-aToDcgxK.js";import"./CategoricalChart-DPCnYwF-.js";import"./CartesianAxis-Dnx0rUNa.js";import"./Layer-CYlWB893.js";import"./Text-DWIEtkwC.js";import"./ZIndexLayer-DcfMfyOV.js";import"./Label-2Fni25es.js";import"./types-BU4Ojrin.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-4EA_oLfz.js";import"./step-C-f981dl.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BB1e2MfD.js";import"./ActivePoints-DF4l2wc6.js";import"./Dot-DD8m7FDf.js";import"./activeStyles-Bl6Emzo4.js";import"./useAnimationId-DzTpCf5I.js";import"./Symbols-BjRa6Boz.js";import"./symbol-CniqeamR.js";import"./ErrorBarContext-Cmo7ZUB7.js";import"./SetGraphicalItem-CuLT1LeE.js";import"./getRadiusAndStrokeWidthFromDot-p6N7re72.js";import"./ActiveShapeUtils-B6AIFy1l.js";import"./useEffectiveDataKey-DjFvtGIK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
