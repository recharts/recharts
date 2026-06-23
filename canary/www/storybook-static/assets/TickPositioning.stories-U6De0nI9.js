import{R as t}from"./iframe-CGx2OEYg.js";import{R as m}from"./zIndexSlice-pdvjw9VY.js";import{L as s}from"./LineChart-Btih9Pj2.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CifdSMqw.js";import{X as l}from"./XAxis-DIPoApAz.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BdXE1DYA.js";import"./index-C4Z_dumW.js";import"./index-BL6WHaeN.js";import"./get-CzV2OpXY.js";import"./resolveDefaultProps-D3B6MFw_.js";import"./isWellBehavedNumber-CKQRWs7o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnFoLhZv.js";import"./index-CIdFwa8F.js";import"./index-Cey4EIAC.js";import"./renderedTicksSlice-CWw-Qe8F.js";import"./axisSelectors-B0UwcuKI.js";import"./d3-scale-DUV6_L5z.js";import"./CartesianChart-BiUQ--Jb.js";import"./chartDataContext-BDew7MkD.js";import"./CategoricalChart-DuzT5byy.js";import"./Layer-CdlD8-Bq.js";import"./Curve-DLzFalE6.js";import"./types-C4QX8ert.js";import"./step-BRyMFbya.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZpkkXdAG.js";import"./Label-CkpiET6q.js";import"./Text-JACEtH7g.js";import"./DOMUtils-Ccjd7ivz.js";import"./ZIndexLayer-DGG-pQT2.js";import"./useAnimationId-DrQktf3K.js";import"./ActivePoints-N3tMfhSo.js";import"./Dot-CeKZXbQB.js";import"./RegisterGraphicalItemId-xU42uzR6.js";import"./ErrorBarContext-Gbubk7c-.js";import"./GraphicalItemClipPath-CIDK8z3L.js";import"./SetGraphicalItem-CM0l2hGK.js";import"./getRadiusAndStrokeWidthFromDot-2cj_fDMP.js";import"./ActiveShapeUtils-BMsaHZ8h.js";import"./CartesianAxis-CmH7UKiI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
