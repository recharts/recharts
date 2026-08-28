import{R as t}from"./iframe-D3n-qa3v.js";import{R as n}from"./zIndexSlice-URMJGlQl.js";import{L as s}from"./LineChart-Btvgs1Lw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-UgcJB4CE.js";import{X as l}from"./XAxis-BvFg4s2o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DN7vm2uB.js";import"./index-C_ri2ApK.js";import"./index-Dd3rxVYb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cvq-kyHH.js";import"./isWellBehavedNumber-CrERG1s-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDHIckB2.js";import"./axisSelectors-DaB7yAHm.js";import"./d3-scale-CaZKGVIZ.js";import"./index-C_Wrm-XW.js";import"./index-CZCnJbjp.js";import"./renderedTicksSlice-CPTSo4fz.js";import"./index-C1lTKvWo.js";import"./CartesianChart-DUso81Db.js";import"./chartDataContext-CZa0hGfr.js";import"./CategoricalChart-CGaW84Rd.js";import"./Layer-oKfk3hYA.js";import"./Curve-5zGakvVQ.js";import"./types-DvyNYfPW.js";import"./step-CxhIdSSF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CRkuoQfP.js";import"./Label-CpaVgYY8.js";import"./Text-70ucIKSF.js";import"./DOMUtils-CcpQZ2_k.js";import"./useId-B_N_AB1U.js";import"./useBackwardsCompatibleTheme-BAQfNZQf.js";import"./ZIndexLayer-hb7j23f9.js";import"./useAnimationId-CKWjvm6q.js";import"./ActivePoints-BFpUc-QU.js";import"./Dot-DbNEtbef.js";import"./RegisterGraphicalItemId-DsY94qP2.js";import"./ErrorBarContext-DijZHKAW.js";import"./GraphicalItemClipPath-Ch9sm1k7.js";import"./SetGraphicalItem-BmMhxnaz.js";import"./getRadiusAndStrokeWidthFromDot-0WjElrhg.js";import"./ActiveShapeUtils-0ntRQ4Qt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Cx3S-3lL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const nt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70}))))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const st=["TickPositioning"];export{r as TickPositioning,st as __namedExportsOrder,nt as default};
