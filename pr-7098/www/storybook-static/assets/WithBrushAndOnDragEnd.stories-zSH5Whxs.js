import{e as t}from"./iframe-BheSPRxC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DTJTJDIZ.js";import{B as p}from"./BarChart-BUJzZAAx.js";import{X as l}from"./XAxis-w4I0Dz-P.js";import{Y as h}from"./YAxis-Co--vqpb.js";import{B as c}from"./Brush-BlVZqbrg.js";import{B as x}from"./Bar-CyBbNNtV.js";import{R as u}from"./RechartsHookInspector-BuIPrOmw.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YxfO8nVM.js";import"./immer-Bk3tlmFk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BReu-8p6.js";import"./index-BTAK_CzP.js";import"./hooks-D7thV8Yx.js";import"./axisSelectors-Bt_ndlyL.js";import"./d3-scale-Bi7kPPR-.js";import"./zIndexSlice-RIxi073z.js";import"./renderedTicksSlice-B7gUlO0Z.js";import"./CartesianChart-oljUKRjY.js";import"./chartDataContext-CTcUXfN7.js";import"./CategoricalChart-BxAT78Yw.js";import"./CartesianAxis-BNiz-eqI.js";import"./Layer-Dnr25hkA.js";import"./Text-BUur2DfR.js";import"./DOMUtils-qoxeJE6c.js";import"./Label-DvFgjn-2.js";import"./ZIndexLayer-BR-xGhiB.js";import"./types-Ig8fwHS7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BchO8CMc.js";import"./ReactUtils-eBHsRDRZ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CEbptTt-.js";import"./isPlainObject-DdlnvCr2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLKGSdHG.js";import"./useAnimationId-CA-fcZvu.js";import"./Trapezoid-8ylyG2hR.js";import"./Sector-GkU_9DAY.js";import"./Symbols-DnaEJ_wk.js";import"./symbol-BrB1FpAX.js";import"./step-BEEMHEX_.js";import"./Curve-D5XGZpaq.js";import"./RegisterGraphicalItemId-CfZTXmBZ.js";import"./ErrorBarContext-CYeurdws.js";import"./GraphicalItemClipPath-CyqMb0de.js";import"./SetGraphicalItem-vkl4WKoz.js";import"./getZIndexFromUnknown-DWaGDBOO.js";import"./graphicalItemSelectors-BKYERbNk.js";import"./index-NavELH2p.js";import"./ChartSizeDimensions-Dbu0-vjG.js";import"./OffsetShower-DiJ1X-2O.js";import"./PlotAreaShower-CtIhvInc.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
