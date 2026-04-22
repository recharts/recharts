import{e as t}from"./iframe-CIRDBmnY.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Ccl-pv9u.js";import{B as p}from"./BarChart-CfYu2Qpa.js";import{X as l}from"./XAxis-Bxd0aLo-.js";import{Y as h}from"./YAxis-Cm87CNGN.js";import{B as c}from"./Brush-CUI3_wEW.js";import{B as x}from"./Bar-BDjfQMiK.js";import{R as u}from"./RechartsHookInspector-CW5oWR2W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-WvlII-Nx.js";import"./immer-CEyiSkJ_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-G6A0M6aO.js";import"./index-BtQYyCmS.js";import"./hooks-CXRZ7L0i.js";import"./axisSelectors-BG6ANmCy.js";import"./d3-scale-DeHMkDWI.js";import"./zIndexSlice-Dncpv5eL.js";import"./renderedTicksSlice-D7QGUU6q.js";import"./CartesianChart-DU23w57v.js";import"./chartDataContext-CjureaJk.js";import"./CategoricalChart-0dU2cdKG.js";import"./CartesianAxis-DDkNiZWI.js";import"./Layer-Ba8IePkn.js";import"./Text-DFNv1G75.js";import"./DOMUtils-U3UN3Upo.js";import"./Label-DBOJ1SQQ.js";import"./ZIndexLayer-BEbEcElf.js";import"./types-Tac8hqr1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BU_bn1Xe.js";import"./ReactUtils-B6lO7UVh.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils--5PkurDt.js";import"./isPlainObject-BNuWTbsi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSNMtd6V.js";import"./useAnimationId-8KJrDx3h.js";import"./Trapezoid-DXcU-3dd.js";import"./Sector-DxkSpspk.js";import"./Symbols-CshwXNPg.js";import"./symbol-BUAsdTvL.js";import"./step-Db3ooEEu.js";import"./Curve-D42dBTuL.js";import"./RegisterGraphicalItemId-CcpQzZXr.js";import"./ErrorBarContext-itdE-Ouz.js";import"./GraphicalItemClipPath-DsfyRwV1.js";import"./SetGraphicalItem-KCmHDaFB.js";import"./getZIndexFromUnknown-LYMeB3mz.js";import"./graphicalItemSelectors-BtmGdkTu.js";import"./index-CZZFGVCv.js";import"./ChartSizeDimensions-DXL_JkvM.js";import"./OffsetShower-BD7Cp3wL.js";import"./PlotAreaShower-lKDhtFbm.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
