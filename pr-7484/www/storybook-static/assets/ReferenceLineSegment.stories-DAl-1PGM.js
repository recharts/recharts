import{R as e}from"./iframe-DX1vtGMO.js";import{R as i}from"./zIndexSlice-CBHqXPZu.js";import{C as a}from"./ComposedChart-DrTtv4BR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-339ME1w1.js";import{X as s}from"./XAxis-DLegRWnR.js";import{Y as c}from"./YAxis-oQ2494Ky.js";import{L as d}from"./Line-BeNVFQ-c.js";import{R as g}from"./ReferenceLine-C7nxwl6Z.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CyjJLdoY.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./get-Cgjumwe9.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./Label-D5WIiRBw.js";import"./ZIndexLayer-DdHbybrS.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B-MgiVxo.js";import"./step-d6ptEm-b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D5gtlj3g.js";import"./useAnimationId-3wGGsZoS.js";import"./ActivePoints-4qRZgwnO.js";import"./Dot-UykzmigB.js";import"./RegisterGraphicalItemId-BdvIWiM6.js";import"./ErrorBarContext-BR5rkK2A.js";import"./GraphicalItemClipPath-CtH8IX0c.js";import"./SetGraphicalItem-DJ3AMYhJ.js";import"./getRadiusAndStrokeWidthFromDot-CigRqL_g.js";import"./ActiveShapeUtils-C5uepk-V.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
