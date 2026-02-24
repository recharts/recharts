import{e as t}from"./iframe-BlrnuDjf.js";import{R as n}from"./arrayEqualityCheck-BTXXQX4n.js";import{L as s}from"./LineChart-uBMgsK0X.js";import{L as c}from"./Line-HvOmBeSi.js";import{X as d}from"./XAxis-BYp_HR9V.js";import{R as l}from"./RechartsHookInspector-BAQjFSl6.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1DdFNclr.js";import"./immer-BI9UFPL2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bw-KSP5T.js";import"./index-CKL3N-6v.js";import"./hooks-Yl-LcXas.js";import"./axisSelectors-DHIQ-7_W.js";import"./d3-scale-CFGK5P70.js";import"./zIndexSlice-CqZHWfc6.js";import"./renderedTicksSlice-ULPEEzAa.js";import"./CartesianChart-CnkTC8bW.js";import"./chartDataContext-ihmINbbo.js";import"./CategoricalChart-DiwHthGG.js";import"./Layer-XHhRDzId.js";import"./ReactUtils-BjQ30mBr.js";import"./Label-D_q5FUVB.js";import"./Text-Cu_8uwrn.js";import"./DOMUtils-Cq-iC6tL.js";import"./ZIndexLayer-7Hmap2eH.js";import"./ActivePoints-DAQMurwf.js";import"./Dot-BorEmCO3.js";import"./types-DB_0tejV.js";import"./RegisterGraphicalItemId-Bh07AqU-.js";import"./ErrorBarContext-BsqB8Oyr.js";import"./GraphicalItemClipPath-EkcAQ3H7.js";import"./SetGraphicalItem-B1RMw4_v.js";import"./useAnimationId-DbkCLx7t.js";import"./getRadiusAndStrokeWidthFromDot-mkjXuMoL.js";import"./ActiveShapeUtils-Dv40rWK2.js";import"./isPlainObject-BwE05GU9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXu9YO7w.js";import"./Trapezoid-DnTBSn7u.js";import"./Sector-Dv5PvvRm.js";import"./Symbols-DUfoVivI.js";import"./symbol-C5z5ai8y.js";import"./step-oX00aiZd.js";import"./Curve-BlGAAnP8.js";import"./CartesianAxis-edOWbwOR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Cy5kt_9j.js";import"./ChartSizeDimensions-Igo4L2HP.js";import"./OffsetShower-BEEi0iU5.js";import"./PlotAreaShower-BeUubBWZ.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
