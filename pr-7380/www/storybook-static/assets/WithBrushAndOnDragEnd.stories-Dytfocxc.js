import{e as t}from"./iframe-OJf-GSLb.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-2_Nd0mNT.js";import{B as p}from"./BarChart-HcIZwweu.js";import{X as l}from"./XAxis-CUozMhVT.js";import{Y as h}from"./YAxis-DlvLAsVD.js";import{B as c}from"./Brush-FSzZXBHO.js";import{B as x}from"./Bar-CjlNP4mB.js";import{R as u}from"./RechartsHookInspector-DjyNDFMe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhVQCFaS.js";import"./immer-fAzYVHYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3Zay038b.js";import"./index-DjZjz4Db.js";import"./hooks-CH3cPIGX.js";import"./axisSelectors-kxctmjqQ.js";import"./d3-scale-DxGCPbiE.js";import"./zIndexSlice-CRdCk5dL.js";import"./renderedTicksSlice-DYga_drD.js";import"./CartesianChart-CJkqFERC.js";import"./chartDataContext-NT00FYUd.js";import"./CategoricalChart-BCcW9_uy.js";import"./CartesianAxis-Bqyi-QIr.js";import"./Layer-DtNuGt5z.js";import"./Text-ArxOC8oM.js";import"./DOMUtils-CMlg3GAM.js";import"./Label-B3MBaUXp.js";import"./ZIndexLayer-BJFmSDw9.js";import"./types-DpddDWMl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DOsS-G8m.js";import"./ReactUtils-CyupdVou.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xuYXul5.js";import"./useAnimationId-Dwrr6l_F.js";import"./ActiveShapeUtils-CU2HJa4X.js";import"./RegisterGraphicalItemId-BFbrCMwR.js";import"./ErrorBarContext-A27a6g1h.js";import"./GraphicalItemClipPath-QzIzaY2E.js";import"./SetGraphicalItem-B_Nz5Xvt.js";import"./getZIndexFromUnknown-DZ34GgUD.js";import"./graphicalItemSelectors-C__wdMz-.js";import"./index-DD4xdMms.js";import"./ChartSizeDimensions-CdI027Rl.js";import"./OffsetShower-BkR-_nsI.js";import"./PlotAreaShower-BECDt9HM.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
