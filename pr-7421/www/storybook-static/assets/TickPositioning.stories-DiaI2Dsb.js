import{R as t}from"./iframe-D2mK0_SY.js";import{R as m}from"./zIndexSlice-CurYRJ-V.js";import{L as s}from"./LineChart-D-U2Bh0x.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-M_0qro2I.js";import{X as l}from"./XAxis-BpVV2nBf.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cds45GwY.js";import"./index-EKI16Vl3.js";import"./index-c7pUvxdZ.js";import"./get-gd89bvM7.js";import"./resolveDefaultProps-BDJLCGQq.js";import"./isWellBehavedNumber-PwrDSI0r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Da4b3ttl.js";import"./index-CTpZBZDJ.js";import"./index-DFlAh1f1.js";import"./renderedTicksSlice-Cv_tPpdR.js";import"./axisSelectors-BOYHxsHM.js";import"./d3-scale-D7S-A9mQ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dl9STlZO.js";import"./chartDataContext-DcfIEZUC.js";import"./CategoricalChart-DE8yrV95.js";import"./Layer-CVGFJ3pT.js";import"./Curve-ByDlF2jD.js";import"./types-CH3UhPbC.js";import"./step-CqVmJfXf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9-Gv8yfc.js";import"./Label-BWAfqYWX.js";import"./Text-Bc_u3T2m.js";import"./DOMUtils-DX7CaFR_.js";import"./ZIndexLayer-Cbwietl0.js";import"./useAnimationId-Bv48rb4m.js";import"./ActivePoints-Dt_rJbE_.js";import"./Dot-CZPOiTTM.js";import"./RegisterGraphicalItemId-DKtf33UE.js";import"./ErrorBarContext-ClEcDtft.js";import"./GraphicalItemClipPath-C_n5kW10.js";import"./SetGraphicalItem-2IunVx_0.js";import"./getRadiusAndStrokeWidthFromDot-3QY54_i-.js";import"./ActiveShapeUtils-C7mnGY80.js";import"./CartesianAxis-DT-BfhYh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
