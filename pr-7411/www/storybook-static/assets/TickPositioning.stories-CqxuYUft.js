import{R as t}from"./iframe-BGobxEKW.js";import{R as m}from"./zIndexSlice-Eu6i6ngN.js";import{L as s}from"./LineChart-BbzTNOxw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-KzHLSfQZ.js";import{X as l}from"./XAxis-BN4bg1E5.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-xIHjc1iX.js";import"./index-DrKSi3Lf.js";import"./index-rlB0YW8A.js";import"./get-HFqD6QO2.js";import"./resolveDefaultProps-By8puQcs.js";import"./isWellBehavedNumber-MDkpYIMl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BSKC20h7.js";import"./index-DIRQu93S.js";import"./index-BKAHzbDT.js";import"./renderedTicksSlice-Cvi-Ak0I.js";import"./axisSelectors-DVavIP4x.js";import"./d3-scale-CR1rssfZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-M1doCtPT.js";import"./chartDataContext-CbiQTE76.js";import"./CategoricalChart-DpAQLfUl.js";import"./Layer-CV9gulhQ.js";import"./Curve-DlsAp4d1.js";import"./types-C3BGlWt6.js";import"./step-DH6ooie3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D2o6LGbd.js";import"./Label-DtowT6Ci.js";import"./Text-BJ-a4d_f.js";import"./DOMUtils-DfSC9jQB.js";import"./ZIndexLayer-BPvrQw9D.js";import"./useAnimationId-Q5RNzbJv.js";import"./ActivePoints-BB52StyY.js";import"./Dot-UipfwxJ_.js";import"./RegisterGraphicalItemId-DzMyHwfr.js";import"./ErrorBarContext-CDOOklnh.js";import"./GraphicalItemClipPath-CnUHFn7e.js";import"./SetGraphicalItem-DJfCNytO.js";import"./getRadiusAndStrokeWidthFromDot-Bt-t8NsX.js";import"./ActiveShapeUtils-CpkaJLOn.js";import"./CartesianAxis-DURAvNcs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
