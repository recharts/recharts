import{R as e}from"./iframe-DpDTD0JG.js";import{R as i}from"./zIndexSlice-DGwVx7BW.js";import{C as a}from"./ComposedChart-B51SS0m3.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B3XOwetY.js";import{X as s}from"./XAxis-DWjiAOFV.js";import{Y as c}from"./YAxis-tfWa7V5m.js";import{L as d}from"./Line-BDAu27yc.js";import{R as g}from"./ReferenceLine-BeG8Rb2o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoBh-DCx.js";import"./index-DWuIzRsj.js";import"./index-Knde-ajF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CxXNP2HM.js";import"./isWellBehavedNumber-DmMeAzDB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCxYcmRP.js";import"./index-B2s4Biye.js";import"./index-Cd_oQMUU.js";import"./renderedTicksSlice-BRwKivWp.js";import"./axisSelectors-Ck_lqLE7.js";import"./d3-scale-BfEaqYEJ.js";import"./CartesianChart-BR7vTuCF.js";import"./chartDataContext-DFDKJiUi.js";import"./CategoricalChart-C6CLVh4_.js";import"./CartesianAxis-C7YtKMNS.js";import"./Layer-lPi_1jCz.js";import"./Text-Bc5Ou4J8.js";import"./DOMUtils-3wivgqkH.js";import"./Label-BwbI5cJ6.js";import"./ZIndexLayer-DqWsyuzf.js";import"./types-C1vx5dmr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVSBj4p3.js";import"./isBuffer-BG75eWKN.js";import"./Curve-idp9_WLY.js";import"./step-7HWztNo7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DlouAWba.js";import"./useAnimationId-NxcyCMrj.js";import"./ActivePoints-iTKt_ZL7.js";import"./Dot-DB73TuWs.js";import"./RegisterGraphicalItemId-4knkFaEt.js";import"./ErrorBarContext-pGcuO8rw.js";import"./GraphicalItemClipPath-Bu8PaL2p.js";import"./SetGraphicalItem-BR_9ARmo.js";import"./graphicalItemIdentity-DOc93K5L.js";import"./ActiveShapeUtils-DCmpyR0n.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
