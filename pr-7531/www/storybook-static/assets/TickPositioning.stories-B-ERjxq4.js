import{R as t}from"./iframe-CaZrduHG.js";import{R as m}from"./zIndexSlice-CvUTBx_8.js";import{L as s}from"./LineChart-BCVxfF6y.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BZzowOBE.js";import{X as l}from"./XAxis-CHaMVHb_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-x_arNXZJ.js";import"./index-CYnc97bp.js";import"./index-CdgMfIsn.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hTjQl1Jw.js";import"./isWellBehavedNumber-Ds6x18SL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6f4LgHbs.js";import"./index-dOcL02AF.js";import"./index-BkusJAc5.js";import"./renderedTicksSlice-CarnP_oQ.js";import"./axisSelectors-CbEPJ0ND.js";import"./d3-scale-EIFV6mVT.js";import"./CartesianChart-DiGyCZXM.js";import"./chartDataContext-BSaewpt8.js";import"./CategoricalChart-d16gVM5b.js";import"./Layer-DIgzKEwe.js";import"./Curve-jKjHUG6Y.js";import"./types-CJ_sW9YU.js";import"./step-C-Vvb7fY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DghnEQ9g.js";import"./Label-BWJz-33r.js";import"./Text-Rs_1_idd.js";import"./DOMUtils-CmlaPQx2.js";import"./ZIndexLayer-dEGCaPIX.js";import"./useAnimationId-Ddowgb5f.js";import"./ActivePoints-dA3071Q3.js";import"./Dot-CvRN0Hh7.js";import"./RegisterGraphicalItemId-pMJ6sSz4.js";import"./ErrorBarContext-B9ivevc9.js";import"./GraphicalItemClipPath-CRbchFTR.js";import"./SetGraphicalItem-0qDOjHM6.js";import"./getRadiusAndStrokeWidthFromDot-BNORI3ED.js";import"./ActiveShapeUtils-O1yKcLVj.js";import"./CartesianAxis-DB1Mym72.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
