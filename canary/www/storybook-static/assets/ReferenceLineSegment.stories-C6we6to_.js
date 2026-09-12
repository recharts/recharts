import{R as e}from"./iframe-BS2EKBCb.js";import{R as i}from"./zIndexSlice-DgCHBsPF.js";import{C as n}from"./ComposedChart-B5I1ESDC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B1O4jZ2O.js";import{X as s}from"./XAxis-BjDgsza5.js";import{Y as c}from"./YAxis-BOuW76NE.js";import{L as d}from"./Line-Cy9qkYsp.js";import{R as g}from"./ReferenceLine-CyxCJGTf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-N5ne0m8p.js";import"./index-DqlRD72w.js";import"./index-CV_3LUuL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-TcviW97c.js";import"./isWellBehavedNumber-DC3UycXE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMyz7hVE.js";import"./axisSelectors-CyWNF9Af.js";import"./d3-scale-Weld_qs_.js";import"./index-Bzi9FVcX.js";import"./index-CzKnnb1A.js";import"./renderedTicksSlice-F9VbCDyF.js";import"./index-D5fLjVxw.js";import"./CartesianChart-qCzL_6hu.js";import"./chartDataContext-CO5JDURO.js";import"./CategoricalChart-C5K9SC6Q.js";import"./CartesianAxis-CKj7lC_q.js";import"./Layer-GWt7eqqf.js";import"./Text-mzbpVVI1.js";import"./DOMUtils-WOBZE1NB.js";import"./useId-caAF7v61.js";import"./useBackwardsCompatibleTheme-qcvR2xn0.js";import"./Label-DXa6-y8E.js";import"./ZIndexLayer-B7lLwLGi.js";import"./types-BQYuG1d5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B-5JJSds.js";import"./step-C_EYK6G6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CyRMeM58.js";import"./useAnimationId-DT-PTug0.js";import"./ActivePoints-Cjbzc0M8.js";import"./Dot-DU7ZcKmK.js";import"./RegisterGraphicalItemId-B1R9LLxS.js";import"./ErrorBarContext-Cw8TKYFj.js";import"./GraphicalItemClipPath-1wc1zrjW.js";import"./SetGraphicalItem-0zivWSPx.js";import"./getRadiusAndStrokeWidthFromDot-B5PCEdLb.js";import"./ActiveShapeUtils-ZcrlVc5g.js";import"./useGraphicalItemIdentity-D12-TlkG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
