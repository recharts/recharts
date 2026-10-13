import{R as t}from"./iframe-D3EjTtxy.js";import{R as m}from"./zIndexSlice-CR47Grm-.js";import{L as s}from"./LineChart-CQE65DWo.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BwJdDGaV.js";import{X as l}from"./XAxis-CBAr_26y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EojsqAtG.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CypR0Li3.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKqCmNei.js";import"./axisSelectors-2jJKhRaD.js";import"./d3-scale-Bcyj84u8.js";import"./index-CW2m-a8N.js";import"./index-D-PCy9lp.js";import"./renderedTicksSlice-DWYht6zE.js";import"./index-C-LGK5kE.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./Layer-CAR2aUbH.js";import"./Curve-DGfDXyXs.js";import"./types-OWn5Mrao.js";import"./step-BpQzdfyO.js";import"./path-DyVhHtw_.js";import"./activeStyles-Celt-13r.js";import"./Label-Cwzl5MfK.js";import"./Text-D8BNDsFW.js";import"./pageBackground-Bgbh54PU.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./ZIndexLayer-DYrhxp9-.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./ActivePoints-BFJ9lPgu.js";import"./Dot-B5LpJNu8.js";import"./ErrorBarContext-D2RzPC2k.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getRadiusAndStrokeWidthFromDot-O_fwqGez.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./useEffectiveDataKey-CruL2487.js";import"./CartesianAxis-Mzi-Pwf8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
