import{e}from"./iframe-BlWijLqW.js";import{R as i}from"./arrayEqualityCheck-wpbGPGp4.js";import{C as a}from"./ComposedChart-Bvywwt59.js";import{C as p}from"./CartesianGrid-DlT4qS99.js";import{X as n}from"./XAxis-OLUbmSHc.js";import{Y as s}from"./YAxis-DCz5GEme.js";import{L as c}from"./Line--NudrrhR.js";import{R as d}from"./ReferenceLine-BXmMUwb3.js";import{R as g}from"./RechartsHookInspector-DmBYfqJt.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXixkRdf.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DVoFofdD.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./zIndexSlice-CAH7mPZ1.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./CartesianAxis-Bh0UbraM.js";import"./Layer-3MYXWHxJ.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./Label-Df_5RPeD.js";import"./ZIndexLayer-CJd84X-g.js";import"./types-CMl5R0ed.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CbcjOK7p.js";import"./ActivePoints-JWw26lZk.js";import"./Dot-D4efsgOa.js";import"./RegisterGraphicalItemId-CGPZoT1R.js";import"./ErrorBarContext-uU_zcojk.js";import"./GraphicalItemClipPath-C9wWAhjz.js";import"./SetGraphicalItem-UAqbhtt1.js";import"./useAnimationId-B1CL6Xpk.js";import"./getRadiusAndStrokeWidthFromDot-CWn6u2wW.js";import"./ActiveShapeUtils-CPx9BhWQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IDnxfDb1.js";import"./Trapezoid-B75mUvLe.js";import"./Sector-BYlteXBh.js";import"./Symbols-BEH-AFaJ.js";import"./Curve-DR-_MvJg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BlR-9DJp.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
