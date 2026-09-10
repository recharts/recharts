import{R as e}from"./iframe-BkEvAth1.js";import{R as i}from"./zIndexSlice-nf1W2Gc-.js";import{C as n}from"./ComposedChart-DoYpCRnR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Tz_AP_fP.js";import{X as s}from"./XAxis-RdR0TVxW.js";import{Y as c}from"./YAxis-DLVoYarI.js";import{L as d}from"./Line-BktN_626.js";import{R as g}from"./ReferenceLine-CGSvBC3j.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D101QSOu.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQMoxy31.js";import"./axisSelectors-Tv8O7Qi2.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./index-BRKc8NTQ.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./CartesianAxis-BTQZoIY0.js";import"./Layer-B86MwzYN.js";import"./Text-BZ3mS1RC.js";import"./DOMUtils-BcdnRDzA.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./Label-C6aq5sgc.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./types-CCpLRaHh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-oC0QJw4U.js";import"./step-2sMLUC-_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAE7yXHk.js";import"./useAnimationId-BXkgTCLA.js";import"./ActivePoints-BpS_UUeT.js";import"./Dot-DqgMg3tu.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./ErrorBarContext-TeZDWbxG.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getRadiusAndStrokeWidthFromDot-DpGWIpus.js";import"./ActiveShapeUtils-l5lysgay.js";import"./useGraphicalItemIdentity-C648VAOs.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
