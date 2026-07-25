import{R as t}from"./iframe-jpw6hTzP.js";import{R as m}from"./zIndexSlice-0hywYSss.js";import{L as s}from"./LineChart-BGtcFPtp.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C57CrOO0.js";import{X as l}from"./XAxis-i-qKaY8p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyRNR61p.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DETDaPtv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./axisSelectors-fmgxI94T.js";import"./d3-scale-DRfhHoT1.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./Layer-DBhjUf2v.js";import"./Curve-CvVzTtSx.js";import"./types-Q9eva-kl.js";import"./step-DQBQyc1L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-QuI77x2Z.js";import"./Label-Ddiq2mWQ.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./ZIndexLayer-qT8qrsoe.js";import"./useAnimationId-BDRU6NIW.js";import"./ActivePoints-Byy_7u33.js";import"./Dot-C9R0P-ig.js";import"./RegisterGraphicalItemId-BKfVpYlc.js";import"./ErrorBarContext-TSI08DrR.js";import"./GraphicalItemClipPath-BtpdwkC7.js";import"./SetGraphicalItem-B7bXtFbE.js";import"./getRadiusAndStrokeWidthFromDot-DOVdep_g.js";import"./ActiveShapeUtils-CdjeeMGu.js";import"./CartesianAxis-hrtgNZzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
