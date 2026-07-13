import{R as t}from"./iframe-BLb3YVtb.js";import{R as m}from"./zIndexSlice-DJkgkDD9.js";import{L as s}from"./LineChart-CmHIaU7F.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CqqpJna2.js";import{X as l}from"./XAxis-DkAVE8hF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-6auUp_qF.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CnVWahPK.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./axisSelectors-DadMFlsr.js";import"./d3-scale-Bikema70.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";import"./Layer-BK8zFmi3.js";import"./Curve-gD93iCPz.js";import"./types-45FMQ0ZC.js";import"./step-DW4vIB3R.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-VUSNP4y9.js";import"./Label-DW72PY7h.js";import"./Text-IRDE_cDN.js";import"./DOMUtils-_5JDSOjo.js";import"./ZIndexLayer-5e79PAf2.js";import"./useAnimationId-nzk_I_IH.js";import"./ActivePoints-Bm_TZ0P6.js";import"./Dot-D_39xHUo.js";import"./RegisterGraphicalItemId-Byl2Zyfr.js";import"./ErrorBarContext-CdfKpXhM.js";import"./GraphicalItemClipPath-gmGdN2WI.js";import"./SetGraphicalItem-BWF_fkaR.js";import"./getRadiusAndStrokeWidthFromDot-erroBPpZ.js";import"./ActiveShapeUtils-2WDiJcdZ.js";import"./CartesianAxis-BbjeI4ni.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
