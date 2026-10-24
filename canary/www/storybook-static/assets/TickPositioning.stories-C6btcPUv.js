import{R as t}from"./iframe-02jumC35.js";import{R as m}from"./zIndexSlice-Dh2CbWTc.js";import{L as s}from"./LineChart-YlDplJdV.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-qAcnYglM.js";import{X as l}from"./XAxis-CnRK3wsv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3YzeAkV.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClpzkpkH.js";import"./axisSelectors-M7ebD7ER.js";import"./d3-scale-cjemRmDN.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-3m7_l-7v.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./Layer-BluUqzQG.js";import"./Curve-sD1K-_o7.js";import"./types-BU7rhtDT.js";import"./step-DZxAeMnC.js";import"./path-DyVhHtw_.js";import"./activeStyles-BV4ZXPNg.js";import"./Label-DdA7iutk.js";import"./Text-CUWOvwAb.js";import"./pageBackground-hJZbYU9A.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./ZIndexLayer-Usgx4vbu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./useAnimationId-BlDuhaIC.js";import"./ActivePoints-p_qQIX4t.js";import"./Dot-DmS4t6aH.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getRadiusAndStrokeWidthFromDot-C-prUT-T.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./CartesianAxis-BreAXyHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
