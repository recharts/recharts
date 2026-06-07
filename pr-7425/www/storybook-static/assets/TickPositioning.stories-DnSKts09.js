import{R as t}from"./iframe-DsrD6wpT.js";import{R as m}from"./zIndexSlice-DkgP7dBP.js";import{L as s}from"./LineChart-DFHmcXCC.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-dtEvmWP5.js";import{X as l}from"./XAxis-DizM2ccM.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BAPcb6RO.js";import"./index-Z0dAwhZH.js";import"./index-CKvlhhLQ.js";import"./get-C10pg2Pt.js";import"./resolveDefaultProps-DQfgYWkZ.js";import"./isWellBehavedNumber-CgPFccj7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIY-yJrq.js";import"./index-D23QGT2y.js";import"./index-DLTbKQJZ.js";import"./renderedTicksSlice-VRajnlWn.js";import"./axisSelectors-CJUUuARo.js";import"./d3-scale-CqXFZCr9.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgP_pNrE.js";import"./chartDataContext-CD2wssdB.js";import"./CategoricalChart-BwGaQnIJ.js";import"./Layer-Cn-q1z5M.js";import"./Curve-CpP-gaVa.js";import"./types-B5JJF1dm.js";import"./step-7WGc90nH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-8lESwhOr.js";import"./Label-TNDcrVM2.js";import"./Text-BEnCKmcO.js";import"./DOMUtils-Cn9VGpSS.js";import"./ZIndexLayer-D3qjSsRd.js";import"./useAnimationId-BDJzCpgi.js";import"./ActivePoints-Bk2Pfh1p.js";import"./Dot-Cd38Ah6o.js";import"./RegisterGraphicalItemId-Ch7WvGaf.js";import"./ErrorBarContext-H2sebB4O.js";import"./GraphicalItemClipPath-CeOkm8u8.js";import"./SetGraphicalItem-DZD_Etrn.js";import"./getRadiusAndStrokeWidthFromDot-BIBWddww.js";import"./ActiveShapeUtils-BxUohkw2.js";import"./CartesianAxis-CiwuyPTT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
