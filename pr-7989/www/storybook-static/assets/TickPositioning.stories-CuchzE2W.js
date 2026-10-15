import{R as t}from"./iframe-DjRBpX_P.js";import{R as m}from"./zIndexSlice-iVSWW5BV.js";import{L as s}from"./LineChart-BX_dDeTp.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cy3PGKP5.js";import{X as l}from"./XAxis-Y0oUf3sW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DnOef0ju.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ckb52kl2.js";import"./axisSelectors-D79DWiWx.js";import"./d3-scale-FJpOhRlp.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./index-CvqQYFRa.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./Layer-C9YefTas.js";import"./Curve-CdVM2yHm.js";import"./types-BdVZogP6.js";import"./step-CX_rIxxT.js";import"./path-DyVhHtw_.js";import"./activeStyles-D2vPCQTd.js";import"./Label-CnRbgzX5.js";import"./Text-yVr7Mz0m.js";import"./pageBackground-GeoRz0Dn.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./ZIndexLayer-Dbtf4y40.js";import"./useAnimationId-DPppjou0.js";import"./dataEntryStyles-CrSg03Wv.js";import"./ActivePoints-CPY1nzmN.js";import"./Dot-C0cfWCUu.js";import"./ErrorBarContext-4DLGaDei.js";import"./GraphicalItemClipPath-Dm-UOdIc.js";import"./SetGraphicalItem-BKY1gJK1.js";import"./getRadiusAndStrokeWidthFromDot-CkoSzgY_.js";import"./ActiveShapeUtils-tgtgWXQ1.js";import"./useEffectiveDataKey-Tusm1QhA.js";import"./CartesianAxis-D3pH7M3P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
