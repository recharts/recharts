import{e as t}from"./iframe-BVH8UecD.js";import{R as s}from"./arrayEqualityCheck-vgKGXjJg.js";import{L as m}from"./LineChart-B_Sc0VG4.js";import{L as c}from"./Line-CbRNLOzP.js";import{X as d}from"./XAxis-DOmXqRCS.js";import{R as l}from"./RechartsHookInspector-Dq3yykk5.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cdk0Kr5w.js";import"./PolarUtils-D3PpCgED.js";import"./RechartsWrapper-BZaLp-vS.js";import"./hooks-EmSSg1xf.js";import"./axisSelectors-CdzAnCbl.js";import"./zIndexSlice-BoigZ-y7.js";import"./CartesianChart-nAdRozku.js";import"./chartDataContext-DfFz62HT.js";import"./CategoricalChart-361vez3Q.js";import"./Layer-CdphaBoS.js";import"./ReactUtils-CPhzqwNY.js";import"./Label-DbioSpEE.js";import"./Text-B5hVuEjR.js";import"./DOMUtils-Awr9GIGy.js";import"./ZIndexLayer-Qipy46x2.js";import"./ActivePoints-ieJlvJa7.js";import"./Dot-DwrES-GQ.js";import"./types-iQF7hC2M.js";import"./RegisterGraphicalItemId-BvvWKN3n.js";import"./ErrorBarContext-B2FM21nb.js";import"./GraphicalItemClipPath-Ds_tmloi.js";import"./SetGraphicalItem-B2OXJLzy.js";import"./useAnimationId-B1orywOS.js";import"./getRadiusAndStrokeWidthFromDot-JL7PoPEV.js";import"./ActiveShapeUtils-BkZUQSXK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWlX6cPO.js";import"./Trapezoid-BHTAQ8Mn.js";import"./Sector-DWTAjqin.js";import"./Symbols-Bx3sDerM.js";import"./Curve-5Yzr7IBn.js";import"./CartesianAxis-DndSeeNX.js";import"./index-C-t36GsJ.js";import"./ChartSizeDimensions-C0bbugJp.js";import"./OffsetShower-CgbwF9et.js";import"./PlotAreaShower-HC6koTfx.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
