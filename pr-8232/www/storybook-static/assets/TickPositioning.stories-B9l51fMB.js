import{R as t}from"./iframe-Ca1UrYHb.js";import{R as m}from"./zIndexSlice-DkJuOKqH.js";import{L as s}from"./LineChart-Bo4Ppac7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DA8d46P8.js";import{X as l}from"./XAxis-fyR759Im.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./throttle-CQ25M_Sr.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./RechartsWrapper-DpgD45ps.js";import"./axisSelectors-Dxz5Fo81.js";import"./polarAxisSelectors-BJjdmelv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BSpvxsSq.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./Layer-YpjF2SE4.js";import"./Curve-_7igEkPt.js";import"./types-DxtdvItD.js";import"./step-BwzpgB8P.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-HIGj4PG3.js";import"./Label-Df_VmgSa.js";import"./Text-CG61ars6.js";import"./ZIndexLayer-84bYvzQv.js";import"./ActivePoints-DFCTzNYL.js";import"./Dot-7od_5Z4B.js";import"./activeStyles-gkqlHaiP.js";import"./useAnimationId-Dpl0bF--.js";import"./Symbols-DCcF1Btd.js";import"./symbol-C0Dz9CIF.js";import"./ErrorBarContext-ChnkHwYk.js";import"./SetGraphicalItem-BYm76vy-.js";import"./getRadiusAndStrokeWidthFromDot-B4kLZYpF.js";import"./ActiveShapeUtils-83_vs6lS.js";import"./useEffectiveDataKey-mZIPn9UL.js";import"./CartesianAxis-C2LROGDs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
