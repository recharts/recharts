import{e as t}from"./iframe-BXZsi3ZJ.js";import{R as s}from"./arrayEqualityCheck-Cr28DIq7.js";import{L as m}from"./LineChart-DGJxQw4h.js";import{L as c}from"./Line-1az24r_p.js";import{X as d}from"./XAxis-vWhvLlJA.js";import{R as l}from"./RechartsHookInspector-BcsNAcT5.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbqalEnK.js";import"./hooks-CeRNCNPw.js";import"./axisSelectors-DViO6aT3.js";import"./zIndexSlice-47t4gEct.js";import"./CartesianChart-34kvrnIo.js";import"./chartDataContext-RNK-qzkr.js";import"./CategoricalChart-Cfh0DMKR.js";import"./Layer-CHngc-aq.js";import"./ReactUtils-Cp6NqBbj.js";import"./Label-BOPAlXUc.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./ZIndexLayer-BN0SI8Of.js";import"./ActivePoints-C2rwBq_Q.js";import"./Dot-BSyucR2X.js";import"./types-5-uOdbL9.js";import"./RegisterGraphicalItemId-BjUtGevU.js";import"./ErrorBarContext-a8MR5IC4.js";import"./GraphicalItemClipPath-BTERSkFA.js";import"./SetGraphicalItem-C1CwePg9.js";import"./useAnimationId-DdIT7cjj.js";import"./getRadiusAndStrokeWidthFromDot-h-LXgdKb.js";import"./ActiveShapeUtils-LYXTR8UQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C086hGgA.js";import"./Trapezoid-CgIXwzIx.js";import"./Sector-CiJ5MIJx.js";import"./Symbols-CywLz0nT.js";import"./Curve-CD_JBQwm.js";import"./CartesianAxis-D3TuOOex.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
