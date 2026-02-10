import{e as t}from"./iframe-D1NCNqUw.js";import{R as s}from"./arrayEqualityCheck-CQjIdQCx.js";import{L as m}from"./LineChart-s_0C4HOc.js";import{L as c}from"./Line-6NLHKn5o.js";import{X as d}from"./XAxis-u0hdrjRw.js";import{R as l}from"./RechartsHookInspector-ZreWXCAw.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Djsbq22w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHOsEYDB.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./Layer-BCRy6dX1.js";import"./ReactUtils-BB1Bvtm-.js";import"./Label-BNrwDKuI.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./ZIndexLayer-DGrkiEgC.js";import"./ActivePoints-B3fzw2dP.js";import"./Dot-Cs7zSf6c.js";import"./types-gvwBC4-3.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./ErrorBarContext-DeYCKUhW.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./useAnimationId-CaRLwgfn.js";import"./getRadiusAndStrokeWidthFromDot-CMWXAyTc.js";import"./ActiveShapeUtils-5Ae3vqBy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNiHE16P.js";import"./Trapezoid-BR4vRuXB.js";import"./Sector-TTqZtEvI.js";import"./Symbols-DMX5HiXT.js";import"./Curve-C3pHY6tL.js";import"./CartesianAxis-C56nwzMo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BmYae47F.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
