import{R as t}from"./iframe-CwCc9vh-.js";import{R as m}from"./zIndexSlice-Cze2qQ6L.js";import{L as s}from"./LineChart-CFXd1s_a.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B99RZhj7.js";import{X as l}from"./XAxis-Ck9YwMSg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_lHGrg8X.js";import"./index-iNTF2uXo.js";import"./index-DH3c4tMg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C0sTGtoa.js";import"./isWellBehavedNumber-C8Zfj1Nz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJt_1m2P.js";import"./axisSelectors-CpT7QqC8.js";import"./d3-scale-QIRFRCXO.js";import"./index-CI9Eu4p_.js";import"./index-BLCS5Ged.js";import"./renderedTicksSlice-BhImPZzn.js";import"./index-DQ_TsVb-.js";import"./CartesianChart-BLB-Ua7j.js";import"./chartDataContext-DHHqBQtJ.js";import"./CategoricalChart-a-9gkYtz.js";import"./Layer-DOFh0lwh.js";import"./Curve-nSJilM-Q.js";import"./types-CQwCfrQn.js";import"./step-njiuEB0s.js";import"./path-DyVhHtw_.js";import"./activeStyles-PzRACl7b.js";import"./Label-BR9Px2Ae.js";import"./Text-BJucpPtg.js";import"./pageBackground-BpRJwl3U.js";import"./useId-DJcNFVPz.js";import"./useBackwardsCompatibleTheme-pKoGpidZ.js";import"./ZIndexLayer-DyEPtPYc.js";import"./useAnimationId-DnYkrRJp.js";import"./dataEntryStyles-YnhjRNXA.js";import"./ActivePoints-CX_PcgP1.js";import"./Dot-CD_kBVmM.js";import"./ErrorBarContext-B0-6gfmu.js";import"./GraphicalItemClipPath-DVsVu3E2.js";import"./SetGraphicalItem-0C32PbV4.js";import"./getRadiusAndStrokeWidthFromDot-LnlHxG9T.js";import"./ActiveShapeUtils-BUtkHcUW.js";import"./useEffectiveDataKey-CMqBM7fj.js";import"./CartesianAxis-DXF_4xE6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
