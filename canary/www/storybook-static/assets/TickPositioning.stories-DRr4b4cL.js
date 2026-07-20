import{R as t}from"./iframe-txLfFnZC.js";import{R as m}from"./zIndexSlice-BxlfArAG.js";import{L as s}from"./LineChart-BfGf2KFD.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-D0hoDC_i.js";import{X as l}from"./XAxis-CUKDl1yE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-q2TDx7Oc.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BBYfN4li.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./index-CTiUFbNZ.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./axisSelectors-ClpNZRSK.js";import"./d3-scale-C2Ev96_0.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./Layer-DgCStFRG.js";import"./Curve-C5z8NQ6L.js";import"./types-DBwOBb8v.js";import"./step-Ca4h6n57.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXTzwQHr.js";import"./Label-Bg0xf_F2.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./ZIndexLayer-CgOQ9duv.js";import"./useAnimationId-BBZuCs7J.js";import"./ActivePoints-CFI3c4jj.js";import"./Dot-BIm_l5LV.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./ErrorBarContext-g-_09_Lv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getRadiusAndStrokeWidthFromDot-B1a7F3Ip.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./CartesianAxis-Bpg83Llu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
