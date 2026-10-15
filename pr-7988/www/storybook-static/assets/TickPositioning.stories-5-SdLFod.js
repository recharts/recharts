import{R as t}from"./iframe-mtYsn-79.js";import{R as m}from"./zIndexSlice-495T_9tR.js";import{L as s}from"./LineChart-D_bismg7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BRvqCftx.js";import{X as l}from"./XAxis-DraxbeeJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BhAErOUJ.js";import"./index-D6LBQYE7.js";import"./index-DsrHO_6p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dv9djRbQ.js";import"./isWellBehavedNumber-CUExMovG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Lhej2phZ.js";import"./axisSelectors-tcQjfxXW.js";import"./d3-scale-7ZjrAl0H.js";import"./index-NJ5U5ys4.js";import"./index-BrIo2_bc.js";import"./renderedTicksSlice-C9Id8AHg.js";import"./index-UWH5XZiD.js";import"./CartesianChart-C2MjyFSz.js";import"./chartDataContext-BlAChyFk.js";import"./CategoricalChart-DBrto0w2.js";import"./Layer-K-lH1pk5.js";import"./Curve-BJLIKK7P.js";import"./types-Bj-sAee4.js";import"./step-CZN-eu_K.js";import"./path-DyVhHtw_.js";import"./activeStyles-BxgBaa2U.js";import"./Label-L2ne4D-Q.js";import"./Text-BJaxenL8.js";import"./pageBackground-CdPwgquz.js";import"./useId-DbxZMBee.js";import"./useBackwardsCompatibleTheme-C2I2obbb.js";import"./ZIndexLayer-C6VGe1nr.js";import"./useAnimationId-BOXwxaVr.js";import"./dataEntryStyles-CD4KrGW2.js";import"./ActivePoints-BdGZ5cYI.js";import"./Dot-YCXBT1pk.js";import"./ErrorBarContext-Ek123Dcx.js";import"./GraphicalItemClipPath-c13meIZR.js";import"./SetGraphicalItem-Cc0cHCgq.js";import"./getRadiusAndStrokeWidthFromDot-Fba4Z4SE.js";import"./ActiveShapeUtils-CXyzmERA.js";import"./useEffectiveDataKey-CmlhkQvR.js";import"./CartesianAxis-BWxlG7ih.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
