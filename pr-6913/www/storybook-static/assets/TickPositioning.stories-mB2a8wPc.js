import{e as t}from"./iframe-DNZpCyoe.js";import{R as s}from"./arrayEqualityCheck-szoTsszl.js";import{L as m}from"./LineChart-BYA_UKv7.js";import{L as c}from"./Line-Cib4R8ji.js";import{X as d}from"./XAxis-BWyuZPtw.js";import{R as l}from"./RechartsHookInspector-PStiuiJe.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-2DomDO9e.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BQVorp6g.js";import"./hooks-BoDBEmNZ.js";import"./axisSelectors-BPOUZfxz.js";import"./zIndexSlice-CbXQpeLy.js";import"./CartesianChart-ClznBUcn.js";import"./chartDataContext-IoENa7_Q.js";import"./CategoricalChart-BcCxfWo7.js";import"./Layer-CrRkJfyu.js";import"./ReactUtils-DE6T7IjU.js";import"./Label-DtNzO2lD.js";import"./Text-XEpcAul9.js";import"./DOMUtils-DNR30RXa.js";import"./ZIndexLayer-eq4dVVjm.js";import"./ActivePoints-z3WdP_zi.js";import"./Dot-BY0l9Z0V.js";import"./types-Dxz_CRdn.js";import"./RegisterGraphicalItemId-BH87LWyT.js";import"./ErrorBarContext-CuMQg8zm.js";import"./GraphicalItemClipPath-DI-Q4qpn.js";import"./SetGraphicalItem-DkQhVMnS.js";import"./useAnimationId-CRV9WByP.js";import"./getRadiusAndStrokeWidthFromDot-BN7Lzvck.js";import"./ActiveShapeUtils-QhjeEfk1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DfjjH4Oz.js";import"./Trapezoid-CI8djX1t.js";import"./Sector-bkG1qaK_.js";import"./Symbols-D3jTalrW.js";import"./Curve-CA7wgxde.js";import"./CartesianAxis-CbYE_e4I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CZ8HrsbR.js";import"./ChartSizeDimensions-Cev-F566.js";import"./OffsetShower-DlkB9H2-.js";import"./PlotAreaShower-DJtLg1j7.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
