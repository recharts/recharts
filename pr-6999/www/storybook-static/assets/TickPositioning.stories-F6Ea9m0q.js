import{e as t}from"./iframe-CMiM_Qgn.js";import{R as s}from"./arrayEqualityCheck-_vyoivmV.js";import{L as m}from"./LineChart-CM90tniu.js";import{L as c}from"./Line-ByFuaooi.js";import{X as d}from"./XAxis-DaiKeapO.js";import{R as l}from"./RechartsHookInspector-DmT1dtLd.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-41R1n5JW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NJ0Ez51E.js";import"./hooks-BePoF5l4.js";import"./axisSelectors-Cx7ZtEIH.js";import"./zIndexSlice-BExtdyub.js";import"./CartesianChart-CauNMHrH.js";import"./chartDataContext-By2fKgIb.js";import"./CategoricalChart-O0vVyZYM.js";import"./Layer-CgUnyU8v.js";import"./ReactUtils-BtLAWZFM.js";import"./Label-gyqygLIm.js";import"./Text-BCzzepAd.js";import"./DOMUtils-DDwkXkUm.js";import"./ZIndexLayer-BI90jm2U.js";import"./ActivePoints-BMo7GV7Z.js";import"./Dot-B0Edv62r.js";import"./types-CyIMtLrt.js";import"./RegisterGraphicalItemId-ChahBClM.js";import"./ErrorBarContext-DTmAcjw7.js";import"./GraphicalItemClipPath-DrjjmV4D.js";import"./SetGraphicalItem-DFpoPkFf.js";import"./useAnimationId-Cub4YggD.js";import"./getRadiusAndStrokeWidthFromDot-guaPTICv.js";import"./ActiveShapeUtils-DqPdrrUk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-PYLd1R2f.js";import"./Trapezoid-BG55ZEGY.js";import"./Sector-D5UzUxjZ.js";import"./Symbols-BXDeECV7.js";import"./Curve-BXAMzxgI.js";import"./CartesianAxis-BZUH34_W.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-1Y0M71Of.js";import"./ChartSizeDimensions-DBnJjpf_.js";import"./OffsetShower-D9-0tfso.js";import"./PlotAreaShower-Dq9EyHFw.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
