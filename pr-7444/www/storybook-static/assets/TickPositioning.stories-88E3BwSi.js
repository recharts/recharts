import{R as t}from"./iframe-DlHhS40N.js";import{R as m}from"./zIndexSlice-BvmXOpzL.js";import{L as s}from"./LineChart-eUDRVEov.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BBnKM9O3.js";import{X as l}from"./XAxis-BYYxNJmZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C3uuw8B2.js";import"./index-BUtjLbCz.js";import"./index-eOMfBDqm.js";import"./get-BPDhRHlu.js";import"./resolveDefaultProps-4rQlADP4.js";import"./isWellBehavedNumber-BWgZXzoO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQ3sg0O8.js";import"./index-BvgD5YGJ.js";import"./index-BmuILyMJ.js";import"./renderedTicksSlice-DXDO0JDp.js";import"./axisSelectors-pVGzxNLo.js";import"./d3-scale-Be18i-DH.js";import"./CartesianChart-DhGeGokB.js";import"./chartDataContext-DsGTg2xD.js";import"./CategoricalChart-CoJqtrPl.js";import"./Layer-DqnJz-la.js";import"./Curve-2z5qlXH8.js";import"./types-CJTuBoPn.js";import"./step-CzcXqax1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaDDpUgR.js";import"./Label-CKxxcWab.js";import"./Text-C8e4MCrJ.js";import"./DOMUtils-BzX9kZMs.js";import"./ZIndexLayer-BO_RiOSE.js";import"./useAnimationId-BsYp4mlV.js";import"./ActivePoints-Bbf_RAsZ.js";import"./Dot-C-4HVrb7.js";import"./RegisterGraphicalItemId-CerVMuzL.js";import"./ErrorBarContext-CwPwud_C.js";import"./GraphicalItemClipPath-DrafemYl.js";import"./SetGraphicalItem-SnNwrY5U.js";import"./getRadiusAndStrokeWidthFromDot-CEpeo8VH.js";import"./ActiveShapeUtils-BvZP5z0J.js";import"./CartesianAxis-CWmejQ4H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
