import{e as t}from"./iframe-DqbxrOnC.js";import{R as s}from"./arrayEqualityCheck-DDnB3yQJ.js";import{L as m}from"./LineChart-DL5hoslv.js";import{L as c}from"./Line-D1l4t5aa.js";import{X as d}from"./XAxis-Clh3r3oa.js";import{R as l}from"./RechartsHookInspector-nEoOxjIA.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-H2CuSuBD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpGZSQIF.js";import"./hooks-Bh4iEl2l.js";import"./axisSelectors-BhsfxkUf.js";import"./zIndexSlice-Be92tzJW.js";import"./CartesianChart-BmQRqUeT.js";import"./chartDataContext-DOwFKY9v.js";import"./CategoricalChart-BDtAQzJe.js";import"./Layer-DO_g1bne.js";import"./ReactUtils-CmTCn7uo.js";import"./Label-Dn_4yvvw.js";import"./Text-UMPVnpE1.js";import"./DOMUtils-DJjhPRNo.js";import"./ZIndexLayer-BLOQbcIf.js";import"./ActivePoints-DIeLUbLd.js";import"./Dot-CUa8yiZU.js";import"./types-DYQm65dh.js";import"./RegisterGraphicalItemId-BknrU22d.js";import"./ErrorBarContext-brGngOut.js";import"./GraphicalItemClipPath-BvpOtW2w.js";import"./SetGraphicalItem-D6JZdLch.js";import"./useAnimationId-CZrzdjIq.js";import"./getRadiusAndStrokeWidthFromDot-CsEgUo-q.js";import"./ActiveShapeUtils-CZKx7Ui-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DoZxp5Jb.js";import"./Trapezoid-CT_AsUkt.js";import"./Sector-BHLa0ImP.js";import"./Symbols-m2t7OCzL.js";import"./Curve-D1iAhDrw.js";import"./CartesianAxis-CBS5lhtQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DM8LAuhA.js";import"./ChartSizeDimensions-D5VWiq-O.js";import"./OffsetShower-BGmawGzl.js";import"./PlotAreaShower-Cv1rJPUW.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
