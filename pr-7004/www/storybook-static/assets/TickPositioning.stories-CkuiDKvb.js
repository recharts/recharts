import{e as t}from"./iframe-8rINPBCK.js";import{R as s}from"./arrayEqualityCheck-C3wBHH11.js";import{L as m}from"./LineChart-D7nyU6p6.js";import{L as c}from"./Line-Cdkk60tb.js";import{X as d}from"./XAxis-rjkohJgP.js";import{R as l}from"./RechartsHookInspector-DhGNdH08.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_hkcN4D.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./Layer-rS2qKox4.js";import"./ReactUtils-BygGLMXM.js";import"./Label-CPR5zbup.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./ZIndexLayer-BIlvRP3G.js";import"./ActivePoints-BLBDxNan.js";import"./Dot-DDl1biMb.js";import"./types-BtRlzhwr.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./ErrorBarContext-CL1XlF2D.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./useAnimationId-D141hJYN.js";import"./getRadiusAndStrokeWidthFromDot-K8DspZJi.js";import"./ActiveShapeUtils-BOQsXSI9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeeZo8YN.js";import"./Trapezoid-CwrzKYaP.js";import"./Sector-C71MUP7Q.js";import"./Symbols-CLShZ5Ps.js";import"./Curve-D7sQ6QWi.js";import"./CartesianAxis-DTB3wekJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index--Y6JWCN_.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
