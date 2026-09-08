import{R as e}from"./iframe-3h349717.js";import{R as i}from"./zIndexSlice-BzHS8zt2.js";import{C as n}from"./ComposedChart-DCVALNVc.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BTlx-uaS.js";import{X as s}from"./XAxis-Bw5xxXY1.js";import{Y as c}from"./YAxis-tMbI8NgR.js";import{L as d}from"./Line-CdkVEHcj.js";import{R as g}from"./ReferenceLine-BD1jeWLB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BlVp8HkD.js";import"./index-oX4N-tXs.js";import"./index-BRv0H6zV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJBK0DUa.js";import"./isWellBehavedNumber-D3Yo8GQB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUULyex2.js";import"./axisSelectors-CTBJiowg.js";import"./d3-scale-CLmVRDrj.js";import"./index-CsFq6h3I.js";import"./index-BbUWtFl0.js";import"./renderedTicksSlice-6SwbUeKS.js";import"./index-Bo8dIp4D.js";import"./CartesianChart-CFmcy4vR.js";import"./chartDataContext-Chtbdmd2.js";import"./CategoricalChart-Lt1wUyHP.js";import"./CartesianAxis-DyDK0v82.js";import"./Layer-BPJ6tmqq.js";import"./Text-DVnErtU5.js";import"./DOMUtils--0390Y1X.js";import"./useId-Ced_CVYT.js";import"./useBackwardsCompatibleTheme-BYrRaigu.js";import"./Label-Dtiya_7s.js";import"./ZIndexLayer-BTc3Y12q.js";import"./types-D64Ekh4L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bi3KcdO0.js";import"./step-DOsNm07K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DOjhrzsE.js";import"./useAnimationId-BzBuvVRV.js";import"./ActivePoints-BcO3Gsaw.js";import"./Dot-CUMV7p2u.js";import"./RegisterGraphicalItemId-Byw__Yoi.js";import"./ErrorBarContext-BtoBWPHm.js";import"./GraphicalItemClipPath-C24GD_Bh.js";import"./SetGraphicalItem-wGbg7zCS.js";import"./getRadiusAndStrokeWidthFromDot-qaKJk7YD.js";import"./ActiveShapeUtils-C78HHNIc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
