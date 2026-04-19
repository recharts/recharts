import{e as t}from"./iframe-RBDhNuvY.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BS348k5r.js";import{B as p}from"./BarChart-DEIdNGTe.js";import{X as l}from"./XAxis-DanSQFXO.js";import{Y as h}from"./YAxis-C9mdY1Fl.js";import{B as c}from"./Brush-DJO0tEUt.js";import{B as x}from"./Bar-CsQ_1zHs.js";import{R as u}from"./RechartsHookInspector-DOfZr9C1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BY9krx0N.js";import"./immer-C4c_Wnmh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-pTvawuVp.js";import"./index-DTbqq10f.js";import"./hooks-CGOwSC0e.js";import"./axisSelectors-BWB9zPfa.js";import"./d3-scale-D1n_szfL.js";import"./zIndexSlice-D1BncfDi.js";import"./renderedTicksSlice-zElQoHGi.js";import"./CartesianChart-CvfrETq8.js";import"./chartDataContext-CHNtAjFy.js";import"./CategoricalChart-DfYiu2DH.js";import"./CartesianAxis-BomHuY_r.js";import"./Layer-u__8P6Sj.js";import"./Text-ksXr8HZ7.js";import"./DOMUtils-CPBkTdDQ.js";import"./Label-R4J1fJpi.js";import"./ZIndexLayer-Bft7LqoW.js";import"./types-bb6aQwNz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D1GnuKPo.js";import"./ReactUtils-2aoVptM5.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bog2Lcip.js";import"./isPlainObject-Do42GsO_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWX_qciT.js";import"./useAnimationId-Dwr1YxhS.js";import"./Trapezoid-DJVnFGas.js";import"./Sector-HpIE4-5_.js";import"./Symbols-CumYzi7M.js";import"./symbol-Dd7u_zBc.js";import"./step-B8I79wVl.js";import"./Curve-D-xIgRTC.js";import"./RegisterGraphicalItemId-Nj3D91YX.js";import"./ErrorBarContext-CdH3aE4v.js";import"./GraphicalItemClipPath-DADrCLWg.js";import"./SetGraphicalItem-n97qV-yJ.js";import"./getZIndexFromUnknown-Dxm_hxg_.js";import"./graphicalItemSelectors-DHrtocmr.js";import"./index-DrnbXucV.js";import"./ChartSizeDimensions-CoDDlzmV.js";import"./OffsetShower-CNAox3ML.js";import"./PlotAreaShower-BuNBetuA.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
