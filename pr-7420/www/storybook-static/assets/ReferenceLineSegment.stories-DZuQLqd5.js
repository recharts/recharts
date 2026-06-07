import{R as e}from"./iframe-ebWVliJd.js";import{R as i}from"./zIndexSlice-BrrGtknp.js";import{C as a}from"./ComposedChart-BOJ1HV40.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BSR6Azjm.js";import{X as s}from"./XAxis-BweeNrXM.js";import{Y as c}from"./YAxis-CXtDAlyU.js";import{L as d}from"./Line-BIWAc-1H.js";import{R as g}from"./ReferenceLine-C1-Qq6qG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u2yF5cyx.js";import"./index-CMkBnQa6.js";import"./index-Ca07HsLe.js";import"./get-D4k_mNx-.js";import"./resolveDefaultProps-B5O-6-WI.js";import"./isWellBehavedNumber-DRTDdH6f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUxjIduK.js";import"./index-DF02JQD9.js";import"./index-r7VIACUV.js";import"./renderedTicksSlice-Ba1ooYto.js";import"./axisSelectors-BiXUDLnL.js";import"./d3-scale-BkusLtz6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BJML043z.js";import"./chartDataContext-DV3K9IA2.js";import"./CategoricalChart-DdVMa29B.js";import"./CartesianAxis-R8Sp45dD.js";import"./Layer-CrSVK8w0.js";import"./Text-C6J-h8kC.js";import"./DOMUtils-D1VV_WMD.js";import"./Label-CEbu9yOv.js";import"./ZIndexLayer-DymXXG8t.js";import"./types-DIjbaJzk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Cnpigwxh.js";import"./step-CrKVzxVu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-VPYkwJ4F.js";import"./index-BPJnJB5S.js";import"./useAnimationId-n62HywHx.js";import"./ActivePoints-B8szihic.js";import"./Dot-DBDb90gK.js";import"./RegisterGraphicalItemId-YmUQslDz.js";import"./ErrorBarContext-4bUYjOjX.js";import"./GraphicalItemClipPath-CLalv2k5.js";import"./SetGraphicalItem-DrFDycKg.js";import"./getRadiusAndStrokeWidthFromDot-viuhEb9q.js";import"./ActiveShapeUtils-WXdDf590.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
