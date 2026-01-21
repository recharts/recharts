import{e}from"./iframe-DNZpCyoe.js";import{R as i}from"./arrayEqualityCheck-szoTsszl.js";import{C as a}from"./ComposedChart-7iyELzg6.js";import{C as p}from"./CartesianGrid-Dcjh4S5F.js";import{X as n}from"./XAxis-BWyuZPtw.js";import{Y as s}from"./YAxis-qzfDCcGS.js";import{L as c}from"./Line-Cib4R8ji.js";import{R as d}from"./ReferenceLine-qd2WsTHS.js";import{R as g}from"./RechartsHookInspector-PStiuiJe.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-2DomDO9e.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BQVorp6g.js";import"./hooks-BoDBEmNZ.js";import"./axisSelectors-BPOUZfxz.js";import"./zIndexSlice-CbXQpeLy.js";import"./CartesianChart-ClznBUcn.js";import"./chartDataContext-IoENa7_Q.js";import"./CategoricalChart-BcCxfWo7.js";import"./CartesianAxis-CbYE_e4I.js";import"./Layer-CrRkJfyu.js";import"./Text-XEpcAul9.js";import"./DOMUtils-DNR30RXa.js";import"./Label-DtNzO2lD.js";import"./ZIndexLayer-eq4dVVjm.js";import"./types-Dxz_CRdn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DE6T7IjU.js";import"./ActivePoints-z3WdP_zi.js";import"./Dot-BY0l9Z0V.js";import"./RegisterGraphicalItemId-BH87LWyT.js";import"./ErrorBarContext-CuMQg8zm.js";import"./GraphicalItemClipPath-DI-Q4qpn.js";import"./SetGraphicalItem-DkQhVMnS.js";import"./useAnimationId-CRV9WByP.js";import"./getRadiusAndStrokeWidthFromDot-BN7Lzvck.js";import"./ActiveShapeUtils-QhjeEfk1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DfjjH4Oz.js";import"./Trapezoid-CI8djX1t.js";import"./Sector-bkG1qaK_.js";import"./Symbols-D3jTalrW.js";import"./Curve-CA7wgxde.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CZ8HrsbR.js";import"./ChartSizeDimensions-Cev-F566.js";import"./OffsetShower-DlkB9H2-.js";import"./PlotAreaShower-DJtLg1j7.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
