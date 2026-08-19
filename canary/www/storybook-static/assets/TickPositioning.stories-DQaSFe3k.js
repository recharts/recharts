import{R as t}from"./iframe-BxezfZww.js";import{R as m}from"./zIndexSlice-HcjonX2F.js";import{L as s}from"./LineChart-aWjC-aDe.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C7LVm8Rz.js";import{X as l}from"./XAxis-CiqbzTox.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-kDZpq7hG.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./index-jirKooN3.js";import"./axisSelectors-Cqbxg7Vx.js";import"./d3-scale-D269iDuq.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./CategoricalChart-BhuBu3pE.js";import"./Layer-B7Lou8N3.js";import"./Curve-D-Z_q46N.js";import"./types-CqtRzysP.js";import"./step-Dc9pogTJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-szXuAxdz.js";import"./Label-Cwi7qDe-.js";import"./Text-BDhYhtIl.js";import"./DOMUtils-DML8OagK.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./ZIndexLayer-DCAxC-a3.js";import"./useAnimationId-DlB6WviS.js";import"./ActivePoints-B8-Z2u2e.js";import"./Dot-_cBoNrM4.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./ErrorBarContext-1IA4vt79.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getRadiusAndStrokeWidthFromDot-BQG6lvrP.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DN3oreA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,n)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:n,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,pt as default};
