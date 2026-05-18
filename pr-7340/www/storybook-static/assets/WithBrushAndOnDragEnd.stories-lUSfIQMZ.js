import{e as t}from"./iframe-CVCS2awI.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-BScHcl7E.js";import{B as p}from"./BarChart-DW2VrB_m.js";import{X as l}from"./XAxis-DEoN5sn7.js";import{Y as h}from"./YAxis-ofBsFmOO.js";import{B as c}from"./Brush-5iWhq00_.js";import{B as x}from"./Bar-BnlxcmWI.js";import{R as u}from"./RechartsHookInspector-3dEt4e8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ByXJQ66f.js";import"./immer-BGDSirDa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYjkcUu.js";import"./index-DBY1MSkk.js";import"./hooks-DdU_FuUR.js";import"./axisSelectors-Ci1MJvZY.js";import"./d3-scale-BXP4l8lb.js";import"./zIndexSlice-CYiE3KZh.js";import"./renderedTicksSlice-DEe4uQXq.js";import"./CartesianChart-g3EB1H8Z.js";import"./chartDataContext-CE4uM-kC.js";import"./CategoricalChart-DjXgWEwo.js";import"./CartesianAxis-PbPLy1Ao.js";import"./Layer-ByxoiXYR.js";import"./Text-CDmz-7H5.js";import"./DOMUtils-DM2Mtfvr.js";import"./Label-DaKOoJ3c.js";import"./ZIndexLayer-qvuGpwS0.js";import"./types-Dgqt75FW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-3_9FdrlK.js";import"./ReactUtils-rjXWPyV6.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B0Gi97Qx.js";import"./isPlainObject-C1Vy2OK5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLDHpE0T.js";import"./useAnimationId-B8F28VZa.js";import"./Trapezoid-Drv7mFxs.js";import"./Sector-C1cGt--Q.js";import"./Symbols-Dz4m2MlL.js";import"./symbol-DdzOPpJh.js";import"./step-3E9Doowe.js";import"./Curve-CrfOdonX.js";import"./RegisterGraphicalItemId-DdbYzmem.js";import"./ErrorBarContext-DiMABLnG.js";import"./GraphicalItemClipPath-_oXfIigP.js";import"./SetGraphicalItem-2oqi_YeH.js";import"./getZIndexFromUnknown-MJ3xxZ0v.js";import"./graphicalItemSelectors-CGc9iKmK.js";import"./index-D6BiGzwv.js";import"./ChartSizeDimensions-Cz6I6g2_.js";import"./OffsetShower-mSbEp68m.js";import"./PlotAreaShower-Bh-nVQY_.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
