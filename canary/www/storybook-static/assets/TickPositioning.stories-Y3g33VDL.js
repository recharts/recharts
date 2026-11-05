import{R as t}from"./iframe-7ITK_SeI.js";import{R as m}from"./zIndexSlice-Bfez01E7.js";import{L as s}from"./LineChart-lcSHWK2P.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CaFC4Px9.js";import{X as l}from"./XAxis-B6K6oeNG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./throttle-DZAxS36c.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./RechartsWrapper-Bg4i1fRK.js";import"./axisSelectors-BYlSNMl6.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgbIH62T.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";import"./Layer-x5ioE0yr.js";import"./Curve-SIwN0AJD.js";import"./types-CwLExx_V.js";import"./step-DDoJ0d0M.js";import"./path-DyVhHtw_.js";import"./LabelList-DyQMPI8I.js";import"./Label-CsN2_Owm.js";import"./Text-uEM3tCf7.js";import"./DOMUtils-B8HJjEQc.js";import"./ZIndexLayer-CUOO17YZ.js";import"./ActivePoints-CfvU-oNA.js";import"./Dot-H1TfH3hy.js";import"./activeStyles-CTNWVDS5.js";import"./useAnimationId-DKK7KP9l.js";import"./dataEntryStyles-Dd39-khT.js";import"./Symbols-CGGO5VAJ.js";import"./symbol-CV73IRCS.js";import"./ErrorBarContext-Ch69wvN-.js";import"./SetGraphicalItem-DVqvqVag.js";import"./getRadiusAndStrokeWidthFromDot-Cev_FaPT.js";import"./ActiveShapeUtils-CkUaBVCr.js";import"./useEffectiveDataKey-EiVngFCy.js";import"./CartesianAxis-P1lu35Vw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const ct={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},dt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,dt as __namedExportsOrder,ct as default};
