import{e as t}from"./iframe-C04w6IgM.js";import{R as s}from"./arrayEqualityCheck-CbUGNhnJ.js";import{L as m}from"./LineChart-zZG9H035.js";import{L as c}from"./Line-CyTxFKog.js";import{X as d}from"./XAxis-BLBsMt8p.js";import{R as l}from"./RechartsHookInspector-B7Jr2nYf.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W7dKz5yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFnGMsu4.js";import"./hooks-Cld4lrxT.js";import"./axisSelectors-BYq9-SUS.js";import"./zIndexSlice-BbE5d2nx.js";import"./CartesianChart-enHf794Z.js";import"./chartDataContext-Cjixp2uN.js";import"./CategoricalChart-PYyhSed2.js";import"./Layer-DCya1uir.js";import"./ReactUtils-C2UklmlD.js";import"./Label-B7VXzhwV.js";import"./Text-BJaKJCkK.js";import"./DOMUtils-BGMw9OAN.js";import"./ZIndexLayer-HIOEAvam.js";import"./ActivePoints-BaLEk5hj.js";import"./Dot-FCeRraIm.js";import"./types-D-OVIK3i.js";import"./RegisterGraphicalItemId-DHraWFR-.js";import"./ErrorBarContext-vRJZfYBF.js";import"./GraphicalItemClipPath-Do9yu51T.js";import"./SetGraphicalItem-vjtDhulh.js";import"./useAnimationId-DPZtvNGp.js";import"./getRadiusAndStrokeWidthFromDot-DFtLqJEr.js";import"./ActiveShapeUtils-BwfeuSce.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXVXA4zS.js";import"./Trapezoid-C_oXf8hs.js";import"./Sector-Cbb0SBJZ.js";import"./Symbols-DPND5ycq.js";import"./Curve-BQk4xMcU.js";import"./CartesianAxis-02lidDov.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Demzea1L.js";import"./ChartSizeDimensions-BMKfYLeY.js";import"./OffsetShower-RZSmdjyo.js";import"./PlotAreaShower-BeZsrL7O.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
