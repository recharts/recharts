import{R as t}from"./iframe-CXZlrf2U.js";import{R as m}from"./zIndexSlice-BjX2jCNd.js";import{L as s}from"./LineChart-CNNuq4hN.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dlj8YF05.js";import{X as l}from"./XAxis-CiwCXYrG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./throttle-CeMcgCrB.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./axisSelectors-CXSRT8oe.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmN7CMF4.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./Layer-cEFsn6Cd.js";import"./Curve-DIPpxfHS.js";import"./types-BoOwr3-k.js";import"./step-CMXLmVWU.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CAbAzZrW.js";import"./Label-DMZfCKi2.js";import"./Text-ypQmpcnA.js";import"./ZIndexLayer-oMBe6LXA.js";import"./ActivePoints-BSxRgFzT.js";import"./Dot-jYZs8or3.js";import"./activeStyles-guaYkALv.js";import"./useAnimationId-Bvdrz9cO.js";import"./Symbols-BDMCO_-i.js";import"./symbol-BZ1H3BIy.js";import"./ErrorBarContext-Bx2AhXHF.js";import"./SetGraphicalItem-GFUHKXGI.js";import"./getRadiusAndStrokeWidthFromDot-CwxjjF24.js";import"./ActiveShapeUtils-DAjhd_ui.js";import"./useEffectiveDataKey-ojW0Z0fn.js";import"./CartesianAxis-BaftQfIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},mt=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
