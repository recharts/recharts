import{e}from"./iframe-BsuuU2ac.js";import{R as i}from"./arrayEqualityCheck-BjO3Er2E.js";import{C as a}from"./ComposedChart-CPJ4puZ0.js";import{C as p}from"./CartesianGrid-CmOXpYee.js";import{X as n}from"./XAxis-CsIw1iGz.js";import{Y as s}from"./YAxis-BTKigBpk.js";import{L as c}from"./Line-DjevUKl6.js";import{R as d}from"./ReferenceLine-DvXvtHKT.js";import{R as g}from"./RechartsHookInspector-BGkLBTS7.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-saNtUn-1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BH32z_Kk.js";import"./hooks-k3ZaWThG.js";import"./axisSelectors-jwf3irWh.js";import"./zIndexSlice-Bir2u6Kx.js";import"./CartesianChart-CfWYFhMG.js";import"./chartDataContext-C2F3ksi1.js";import"./CategoricalChart-nOJreIrp.js";import"./CartesianAxis-CECRCtr2.js";import"./Layer-DM57kvBs.js";import"./Text-Bg2YicUS.js";import"./DOMUtils-oSkPNF4I.js";import"./Label-DXc_GGWc.js";import"./ZIndexLayer-DAoCiEXG.js";import"./types-DmRJx57M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D7uw0LSD.js";import"./ActivePoints-C8qSTMe2.js";import"./Dot-C89l6B9O.js";import"./RegisterGraphicalItemId-DrCtvza9.js";import"./ErrorBarContext-CA3TWQkR.js";import"./GraphicalItemClipPath-CSReekSQ.js";import"./SetGraphicalItem-asJ_Ikn_.js";import"./useAnimationId-WGg8-jRM.js";import"./getRadiusAndStrokeWidthFromDot-Dsdre15A.js";import"./ActiveShapeUtils-Drd0OeIB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D5Cka5hS.js";import"./Trapezoid-Ds5p844S.js";import"./Sector-CZIlwJfI.js";import"./Symbols-CcIdb3bs.js";import"./Curve-C6_JEQin.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BhAql3N3.js";import"./ChartSizeDimensions-DrD8f1Su.js";import"./OffsetShower-BRn6lv3J.js";import"./PlotAreaShower-C1V0JDKa.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
