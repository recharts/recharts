import{R as t}from"./iframe-D3OoUODQ.js";import{R as m}from"./zIndexSlice-COWEW-Xi.js";import{L as s}from"./LineChart-Blx2C6Rw.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DTJc0zlp.js";import{X as l}from"./XAxis-DxYJ1EU_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D7e-YcsR.js";import"./throttle-xK3Qigov.js";import"./index-BvJXc9H1.js";import"./index-DNUqbDgJ.js";import"./RechartsWrapper-DuOKGUDD.js";import"./axisSelectors-DItDxN6k.js";import"./polarAxisSelectors-BlC5408P.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bhy6LUlh.js";import"./index-CwGsCBa_.js";import"./index-E-9zXcGM.js";import"./renderedTicksSlice-Bv3FRj9F.js";import"./index-C8PiA1g3.js";import"./fillDefinitions-C2yGMN51.js";import"./CartesianChart-C7rzbaUy.js";import"./chartDataContext-BbEB-BoJ.js";import"./CategoricalChart-CKoarJJf.js";import"./getRadiusAndStrokeWidthFromDot-C3VB5n7j.js";import"./Layer-CUNP0nq5.js";import"./Curve-eYin-GPV.js";import"./types-CZJIyhtF.js";import"./step-FwrJA5dq.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-k3Cv11yP.js";import"./Label-DLZY1r_b.js";import"./Text-B7Tip8P2.js";import"./ZIndexLayer-pJsGLsvY.js";import"./ActivePoints-BDuWcJUa.js";import"./Dot-DopO49Vm.js";import"./activeStyles-DXsSD8Lh.js";import"./useAnimationId-z8xHYNfC.js";import"./Symbols-BcqMzhTU.js";import"./symbol-CCC5v9lz.js";import"./ErrorBarContext-Cw_znsk2.js";import"./SetGraphicalItem-BlH5pIAO.js";import"./ActiveShapeUtils--1e6XE9v.js";import"./useEffectiveDataKey-BHKjwOuj.js";import"./CartesianAxis-CVUrBvYb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
