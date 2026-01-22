import{e}from"./iframe-DZKc3wlS.js";import{R as i}from"./arrayEqualityCheck-DjWYx_fN.js";import{C as a}from"./ComposedChart-B72QYvLv.js";import{C as p}from"./CartesianGrid-CHpJW8RT.js";import{X as n}from"./XAxis-kwyNZCQz.js";import{Y as s}from"./YAxis-BIjjeUdJ.js";import{L as c}from"./Line-Dedd9k3r.js";import{R as d}from"./ReferenceLine-t_gzJpjr.js";import{R as g}from"./RechartsHookInspector-Co_Fh5Fl.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVgEU2hP.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CFmROmVB.js";import"./hooks-DW00eoGN.js";import"./axisSelectors-D0TaSUJl.js";import"./zIndexSlice-B0ARFS3L.js";import"./CartesianChart-EIvq8INt.js";import"./chartDataContext-DWjoQixe.js";import"./CategoricalChart-CckqKMR_.js";import"./CartesianAxis-zQUlpkZ2.js";import"./Layer-DH-WpK_h.js";import"./Text-D1upxTDv.js";import"./DOMUtils-32kvDN7M.js";import"./Label-CCWjKoRR.js";import"./ZIndexLayer-DokrlvR2.js";import"./types-CL0cTInA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-rr4vsGZe.js";import"./ActivePoints-BuT4hzZo.js";import"./Dot-COwBL4NX.js";import"./RegisterGraphicalItemId-DnhKaSZS.js";import"./ErrorBarContext-DvKtKMAK.js";import"./GraphicalItemClipPath-7NYVrtJx.js";import"./SetGraphicalItem-DvZbVWHx.js";import"./useAnimationId-NX8Gitos.js";import"./getRadiusAndStrokeWidthFromDot-CDBmxzKc.js";import"./ActiveShapeUtils-BkixNy1s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BC7Fny-7.js";import"./Trapezoid-B-GT8XQC.js";import"./Sector-Bdu3v8S8.js";import"./Symbols-CqfdXGpW.js";import"./Curve-gwVQ8PMT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ZKZvtgb5.js";import"./ChartSizeDimensions-Dn532-gh.js";import"./OffsetShower-2bIokmPy.js";import"./PlotAreaShower-FcIufD8Q.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
