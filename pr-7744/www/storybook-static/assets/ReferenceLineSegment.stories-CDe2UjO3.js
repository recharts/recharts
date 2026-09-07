import{R as e}from"./iframe-CnWp8UDJ.js";import{R as i}from"./zIndexSlice-Bxeoa1fM.js";import{C as n}from"./ComposedChart-DhJ0H7PO.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bu8k57f3.js";import{X as s}from"./XAxis-ChzUm0qK.js";import{Y as c}from"./YAxis-1jz_kHbZ.js";import{L as d}from"./Line-B_yZhlkz.js";import{R as g}from"./ReferenceLine-Dmtw8NVl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-aLzKR_Gj.js";import"./index-39D9i7_F.js";import"./index-Data0V-G.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-omDmhEQP.js";import"./isWellBehavedNumber-B6aemPPP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLeW-6qK.js";import"./axisSelectors-LX60wKXF.js";import"./d3-scale-C7Jq6zIj.js";import"./index-gtYqs59B.js";import"./index-Dehtp_44.js";import"./renderedTicksSlice-BKgb7qhp.js";import"./index-Doynhu3_.js";import"./CartesianChart-DsDmw2jX.js";import"./chartDataContext-CO0CX1GC.js";import"./CategoricalChart-CM4dP2j4.js";import"./CartesianAxis-CwBaIU9L.js";import"./Layer-C_mDLxAs.js";import"./Text-B0OOyN3r.js";import"./DOMUtils-CiASkXFs.js";import"./useId-EGP6ZE8R.js";import"./useBackwardsCompatibleTheme-UXRLdwDp.js";import"./Label-WwV9YhCJ.js";import"./ZIndexLayer-BZ4idX5Z.js";import"./types-BIFao3Et.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BQDaiCsn.js";import"./step-4VYt7eZC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dbq_Hz9T.js";import"./useAnimationId-Maj24DOj.js";import"./ActivePoints-C5ifQD97.js";import"./Dot-CVjhwEFH.js";import"./RegisterGraphicalItemId-F3i4J8HM.js";import"./ErrorBarContext-CnG1miAN.js";import"./GraphicalItemClipPath-BoXmuKsm.js";import"./SetGraphicalItem-BDu63G4F.js";import"./getRadiusAndStrokeWidthFromDot-DT21Og_Z.js";import"./ActiveShapeUtils-BhVsu49r.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
