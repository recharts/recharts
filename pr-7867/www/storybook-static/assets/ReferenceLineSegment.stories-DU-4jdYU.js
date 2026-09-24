import{R as e}from"./iframe-oenQDkae.js";import{R as i}from"./zIndexSlice-BolP6taR.js";import{C as n}from"./ComposedChart-CTlu4MhW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DORjFfnI.js";import{X as s}from"./XAxis-BAapT_j6.js";import{Y as c}from"./YAxis-DxjcPAu-.js";import{L as d}from"./Line-DmgKRVbq.js";import{R as g}from"./ReferenceLine-C7da4cib.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-MDW_1VLh.js";import"./index-BSFq4RG1.js";import"./index-MHyjaTC8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMJPtlp2.js";import"./isWellBehavedNumber-D7fX2EcX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzSj_Srx.js";import"./axisSelectors-DouK1BqP.js";import"./d3-scale-DtmS-GpC.js";import"./index-BMWVfK_z.js";import"./index-ZmrPVgl6.js";import"./renderedTicksSlice-CXVO1QKM.js";import"./index-CZXeDDYw.js";import"./CartesianChart-Chu1Jshw.js";import"./chartDataContext-CJ85p7Fi.js";import"./CategoricalChart-BmbR8bdU.js";import"./CartesianAxis-DeqFFLVl.js";import"./Layer-IdKk3EZa.js";import"./Text-D5ThFr-V.js";import"./DOMUtils-Cj13ECRs.js";import"./useId-CdRDsFJI.js";import"./useBackwardsCompatibleTheme-BdI5Azyq.js";import"./Label-BCANxpap.js";import"./ZIndexLayer-D9GKmy2X.js";import"./types-DhnB6M_7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BSb99er_.js";import"./step-Bev09Hzp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDFphvv3.js";import"./useAnimationId-BXnU9mnj.js";import"./ActivePoints-BSQAnEDd.js";import"./Dot-C-Nopngh.js";import"./RegisterGraphicalItemId-CysjmqkX.js";import"./ErrorBarContext-D1o9R7Ud.js";import"./GraphicalItemClipPath-D7deAvGW.js";import"./SetGraphicalItem-BPqapuvy.js";import"./getRadiusAndStrokeWidthFromDot-D9taOjnP.js";import"./ActiveShapeUtils-C5gHJrTE.js";import"./useGraphicalItemIdentity-ygWefbro.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
