import{R as e}from"./iframe-DnfWaB1B.js";import{R as i}from"./zIndexSlice-BT6q8CVb.js";import{C as n}from"./ComposedChart-BozjqNdW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DCble6tw.js";import{X as s}from"./XAxis-CRu44DAQ.js";import{Y as c}from"./YAxis-CTXcpKsn.js";import{L as d}from"./Line-S15yyNv0.js";import{R as g}from"./ReferenceLine-DuAv0koF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BlHdMJGb.js";import"./index-CMtaCruM.js";import"./index-B-M-aHgw.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-8EGHXmvb.js";import"./isWellBehavedNumber-B2TPiKzz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0Y2iFV1.js";import"./axisSelectors-BzBwCDwa.js";import"./d3-scale-Br-96nR7.js";import"./index-CNOFauDT.js";import"./index-DwRvwf7P.js";import"./renderedTicksSlice-Diudvbk0.js";import"./index-BcjfqUW0.js";import"./CartesianChart-C9GO6rC8.js";import"./chartDataContext-C2BaT0xy.js";import"./CategoricalChart-m_cFhWGU.js";import"./CartesianAxis-CiEPj5kn.js";import"./Layer-CESakEtd.js";import"./Text-18vmCMJW.js";import"./pageBackground-BZcgsdhX.js";import"./useId-EMQHPSSh.js";import"./useBackwardsCompatibleTheme-Csjmt-9c.js";import"./Label-DErBiWtx.js";import"./ZIndexLayer-CVLoryN8.js";import"./types-vzKdATLY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-g0mln-5B.js";import"./step-CKvXTTBh.js";import"./path-DyVhHtw_.js";import"./activeStyles-yEksTLCx.js";import"./useAnimationId-CAjA_jBW.js";import"./dataEntryStyles-7Y85MSUL.js";import"./ActivePoints-CILYAqb7.js";import"./Dot-_SxShMFA.js";import"./ErrorBarContext-D9Sd4BvK.js";import"./GraphicalItemClipPath-CEAKjsCJ.js";import"./SetGraphicalItem-Me2AFJoT.js";import"./getRadiusAndStrokeWidthFromDot-D2lPL6Sa.js";import"./ActiveShapeUtils-DcV5jonr.js";import"./useEffectiveDataKey-Dum6ZVs0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
