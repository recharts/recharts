import{R as t}from"./iframe-BVidFuBg.js";import{R as m}from"./zIndexSlice-BVu_VJKn.js";import{L as s}from"./LineChart-6wRhXT5W.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BwWsnMpN.js";import{X as l}from"./XAxis-D6ghc140.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSCmJhty.js";import"./index-qH4-zIlS.js";import"./index-DBJQpaC5.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BnMAchLG.js";import"./isWellBehavedNumber-Bgrep7-b.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7A4GvPw3.js";import"./axisSelectors-7sszg3SW.js";import"./d3-scale-n9zBPjXr.js";import"./index-BiOB95Co.js";import"./index-k6xKkYdd.js";import"./renderedTicksSlice-X2qP0nh3.js";import"./index-CYZL9Ecm.js";import"./CartesianChart-BVao4mhK.js";import"./chartDataContext-KRrlptML.js";import"./CategoricalChart-B9oBZckD.js";import"./Layer-BamX7bDZ.js";import"./Curve-DADC3Qn9.js";import"./types-d1h9D5Nt.js";import"./step-DQ_5Whcs.js";import"./path-DyVhHtw_.js";import"./activeStyles-DLYfLCId.js";import"./Label-Dkr2cH3E.js";import"./Text-B-jeJZdK.js";import"./pageBackground-DWUaDsTL.js";import"./useId-B-SrM2oo.js";import"./useBackwardsCompatibleTheme-CdbVLEqd.js";import"./ZIndexLayer-Diklw-mz.js";import"./useAnimationId-DUX3gKYN.js";import"./dataEntryStyles-doFW0jSZ.js";import"./ActivePoints-CkjWSogS.js";import"./Dot-08nNQsA3.js";import"./ErrorBarContext-DCSMt2xY.js";import"./GraphicalItemClipPath-BHt5dg8Z.js";import"./SetGraphicalItem-COgSsKbs.js";import"./getRadiusAndStrokeWidthFromDot-DtsjXIq5.js";import"./ActiveShapeUtils-OFRSQ0pw.js";import"./useEffectiveDataKey-BG2pu5J2.js";import"./CartesianAxis-B6O3GOLV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
