import{R as t}from"./iframe-D0yOAL3n.js";import{R as m}from"./zIndexSlice-Dn2Ys6gV.js";import{L as s}from"./LineChart-C6NNLH-m.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CO6xWWXS.js";import{X as l}from"./XAxis-ntZPF60e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./throttle-BrS_cZCp.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./RechartsWrapper-DwTnzypz.js";import"./axisSelectors-DATXyQCy.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-n2sBsRY0.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./Layer-CY7a4PGZ.js";import"./Curve-DzBXGra2.js";import"./types-IRHz2iGt.js";import"./step-C1lWuIkW.js";import"./path-DyVhHtw_.js";import"./LabelList-CZmttjyK.js";import"./Label-BzBQuB2T.js";import"./Text-z-sERxAx.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./dataEntryStyles-BNyFarFk.js";import"./ActivePoints-BljR9_g2.js";import"./Dot-lux40cEN.js";import"./activeStyles-BHH3u2ze.js";import"./useAnimationId-CKYg8A0e.js";import"./Symbols-BGu4wd_L.js";import"./symbol-C_vPW6X7.js";import"./RegisterGraphicalItemId-DVCLPf9f.js";import"./ErrorBarContext-Dnk3UGdS.js";import"./SetGraphicalItem-Co3HUPOs.js";import"./getRadiusAndStrokeWidthFromDot-DLGQUjjw.js";import"./ActiveShapeUtils-CLWTEHLV.js";import"./useEffectiveDataKey-DqoTIDte.js";import"./CartesianAxis-dbcozJzz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
