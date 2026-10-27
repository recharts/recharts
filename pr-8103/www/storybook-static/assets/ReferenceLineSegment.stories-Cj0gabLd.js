import{R as e}from"./iframe-B87OnEHe.js";import{R as i}from"./zIndexSlice-CayLxsD5.js";import{C as n}from"./ComposedChart-CPmtdHf0.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-2Uj5TCaq.js";import{X as s}from"./XAxis-P4dvE_Lf.js";import{Y as c}from"./YAxis-CIV2IRSG.js";import{L as d}from"./Line-CNmt-EGB.js";import{R as g}from"./ReferenceLine-BgY1ro1C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./throttle-DxXe2fSX.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./RechartsWrapper-C4kU4M5n.js";import"./axisSelectors-DZJywaTf.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoPllMsy.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./CartesianAxis-O93eF2fQ.js";import"./Layer-B5mZFZkh.js";import"./Text-DwFYMnaM.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./Label-CCuY2Era.js";import"./dataEntryStyles-B54Iq7xi.js";import"./types-CvQS_eYG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CzFk349I.js";import"./step-Dlj9Cqyz.js";import"./path-DyVhHtw_.js";import"./LabelList-DteE4Y6d.js";import"./ActivePoints-Bws5v7as.js";import"./Dot-5T458_dG.js";import"./activeStyles-gtCHrDIH.js";import"./useAnimationId-DHS0idNw.js";import"./Symbols-C5l9Kmbi.js";import"./symbol-Bou66IFx.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./ErrorBarContext-DgiLcLgY.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getRadiusAndStrokeWidthFromDot-tXoAwvPO.js";import"./ActiveShapeUtils-KYdt019M.js";import"./useEffectiveDataKey-D32F3nXW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
