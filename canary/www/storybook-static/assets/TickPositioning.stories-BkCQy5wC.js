import{R as t}from"./iframe-AEyLiqgG.js";import{R as m}from"./zIndexSlice-D63QIr0o.js";import{L as s}from"./LineChart-BsYiJGST.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CatYAh6P.js";import{X as l}from"./XAxis-DSCoP0BT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bat5tgt5.js";import"./index-C1HLBiKP.js";import"./index-DRegLE30.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DP3BTRCk.js";import"./isWellBehavedNumber-CgqhIRbA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-r-JuCoEl.js";import"./axisSelectors-Drhca-__.js";import"./d3-scale-BLrrudvV.js";import"./index-qjC2aIyR.js";import"./index-BZWHGH__.js";import"./renderedTicksSlice-CAIsZf4o.js";import"./index-DlIzpnmQ.js";import"./CartesianChart-DnWnPxAf.js";import"./chartDataContext-D_5ADK7F.js";import"./CategoricalChart-h7ez30w9.js";import"./Layer-vEMMDrrH.js";import"./Curve-XYWVXy9Z.js";import"./types-C4U-Yuut.js";import"./step-Dc7t_wqW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Du4BhFIJ.js";import"./Label-dgv50JbQ.js";import"./Text-CjbzIRNa.js";import"./DOMUtils-D23knL3w.js";import"./useId-CE7L0gFR.js";import"./useBackwardsCompatibleTheme-BeLYcOfU.js";import"./ZIndexLayer-CKKDdXeu.js";import"./useAnimationId-DhGl4rOB.js";import"./ActivePoints-DgZdabsv.js";import"./Dot-DYEfFyl7.js";import"./RegisterGraphicalItemId-CBHkDVSs.js";import"./ErrorBarContext-BCLiwnce.js";import"./GraphicalItemClipPath-TjZaHmNz.js";import"./SetGraphicalItem-D3eOc8Q8.js";import"./getRadiusAndStrokeWidthFromDot-BJa_7REZ.js";import"./ActiveShapeUtils-Cns3WvQL.js";import"./useGraphicalItemIdentity-Cs1UF85t.js";import"./CartesianAxis-NrPVgzth.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
