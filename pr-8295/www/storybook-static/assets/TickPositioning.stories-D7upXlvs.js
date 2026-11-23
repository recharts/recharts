import{R as t}from"./iframe-kLrggBpZ.js";import{R as m}from"./zIndexSlice-CKCGde2F.js";import{L as s}from"./LineChart-Bs_-nMun.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D-PTgy1R.js";import{X as l}from"./XAxis-B-2vEHb0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./throttle-BkTfx27C.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./RechartsWrapper-DVOP9mMm.js";import"./axisSelectors-D6wM5g8f.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DE-4LfFJ.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./getRadiusAndStrokeWidthFromDot-D72Rn_78.js";import"./Layer-DQPijciL.js";import"./Curve-CYSM8Ubv.js";import"./types-jTiWDmD0.js";import"./step-Be-YYOOJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DxslDEhK.js";import"./Label-CpspZ4dp.js";import"./Text-DNntKRRw.js";import"./ZIndexLayer-CZ_FttOi.js";import"./ActivePoints-B3OB9PGr.js";import"./Dot-D134Eke9.js";import"./activeStyles-BevLUsk4.js";import"./useAnimationId-CEVcGH0v.js";import"./Symbols-CW8iQe4i.js";import"./symbol-BFiK-Ghx.js";import"./ErrorBarContext-MaEtcn-S.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./CartesianAxis-Dfi_5bxP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
