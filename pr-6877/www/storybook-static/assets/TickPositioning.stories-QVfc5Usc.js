import{e as t}from"./iframe-BIMs3Nj-.js";import{R as s}from"./arrayEqualityCheck-pDlZyWSR.js";import{L as m}from"./LineChart-hJwOdwQX.js";import{L as c}from"./Line-5CZALR-o.js";import{X as d}from"./XAxis-DGDhYE5R.js";import{R as l}from"./RechartsHookInspector-DBOIj4qW.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_VwJ3u_.js";import"./PolarUtils-BWV_hv32.js";import"./RechartsWrapper-Bo8-B70G.js";import"./hooks-Bc7hX-2Z.js";import"./axisSelectors-NKchjqRS.js";import"./zIndexSlice-Cnolt5PP.js";import"./CartesianChart-BUJVTvnU.js";import"./chartDataContext-Dko-7FeN.js";import"./CategoricalChart-DCejedhJ.js";import"./Layer-DBgzSzH_.js";import"./ReactUtils-3uFwj_TO.js";import"./Label-CIRwRBMZ.js";import"./Text-CgjsJcds.js";import"./DOMUtils-voeX-mFj.js";import"./ZIndexLayer-DJ3JTFRU.js";import"./ActivePoints-Dga_4R6z.js";import"./Dot-DH_B4APi.js";import"./types-CnKH5I-b.js";import"./RegisterGraphicalItemId-DeUg8eaE.js";import"./ErrorBarContext-87-HwFAI.js";import"./GraphicalItemClipPath-Bw0KLcwW.js";import"./SetGraphicalItem-D5C3EpbS.js";import"./useAnimationId-DJ77ibSq.js";import"./getRadiusAndStrokeWidthFromDot-Cc2fOwDf.js";import"./ActiveShapeUtils-CV_fg9r-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx9fcimO.js";import"./Trapezoid-B19U1HS5.js";import"./Sector-B3pSkdDH.js";import"./Symbols-BUMcrI7R.js";import"./Curve-DwuONHqE.js";import"./CartesianAxis-BteZhTH6.js";import"./index-CngAoIpS.js";import"./ChartSizeDimensions-C2UWIaZL.js";import"./OffsetShower-DVFE9F3Y.js";import"./PlotAreaShower-DBdBZo3w.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
