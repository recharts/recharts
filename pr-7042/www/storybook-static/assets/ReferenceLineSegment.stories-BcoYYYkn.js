import{e}from"./iframe-CJQnRCN7.js";import{R as i}from"./arrayEqualityCheck-DcQtyVca.js";import{C as p}from"./ComposedChart-DY1EoIsB.js";import{C as a}from"./CartesianGrid-BWHoKEcJ.js";import{X as n}from"./XAxis-DGEO6QJA.js";import{Y as s}from"./YAxis-Bx_UxG-b.js";import{L as c}from"./Line-CK6_c6B6.js";import{R as d}from"./ReferenceLine-fgACOlrJ.js";import{R as g}from"./RechartsHookInspector-DQZJ1VRL.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bn42vmR1.js";import"./immer-pCuW_8mX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEeMF7CZ.js";import"./index-D1Dxg2z1.js";import"./hooks-D3GLo4z9.js";import"./axisSelectors-CBcJoGrJ.js";import"./d3-scale-AQeZIKmR.js";import"./zIndexSlice-D7pH0QjK.js";import"./renderedTicksSlice-6is9WC9q.js";import"./CartesianChart-pu1Q9M14.js";import"./chartDataContext-DYHRLxlR.js";import"./CategoricalChart-DZh5W8ZS.js";import"./CartesianAxis-CA-DoWhq.js";import"./Layer-B-568WrD.js";import"./Text-8oP5Jeys.js";import"./DOMUtils-CpcfJsF7.js";import"./Label-C1IYMHDK.js";import"./ZIndexLayer-DBz_ncGo.js";import"./types-Bb5s1IIN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BMRDQSQL.js";import"./ActivePoints-0FO4QfDc.js";import"./Dot-DVt8NYvp.js";import"./RegisterGraphicalItemId-CErdNO5K.js";import"./ErrorBarContext-WcfhBNrP.js";import"./GraphicalItemClipPath-BMpRvZ7r.js";import"./SetGraphicalItem-oTp0Feor.js";import"./useAnimationId-Btjbf-3C.js";import"./getRadiusAndStrokeWidthFromDot-27Jzsgzj.js";import"./ActiveShapeUtils-Al5O4_0X.js";import"./isPlainObject-Cy53febZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIClz7bW.js";import"./Trapezoid-DO_o8qI8.js";import"./Sector-DPKTnHdo.js";import"./Symbols-BqZb3kY5.js";import"./symbol-CVXqLImo.js";import"./step-xPk2jUCK.js";import"./Curve-ClJjpRlb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BmBTwCFz.js";import"./ChartSizeDimensions-BxOAeUa_.js";import"./OffsetShower-Bp1qc7mw.js";import"./PlotAreaShower-DPY3URo4.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
