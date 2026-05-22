import{e as t}from"./iframe-wPjdlMkh.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-C2qrry8R.js";import{B as p}from"./BarChart-CTWCWn91.js";import{X as l}from"./XAxis-_OYHLA6K.js";import{Y as h}from"./YAxis-CALSYCDu.js";import{B as c}from"./Brush-CfCHaeLx.js";import{B as x}from"./Bar-DphLeeKq.js";import{R as u}from"./RechartsHookInspector-Bh7Xd8ps.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRV1yjEG.js";import"./immer-BpPfFNPI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-jo2qpq.js";import"./index-CRU-lK14.js";import"./hooks-DMKFe6xQ.js";import"./axisSelectors-BeV9utXI.js";import"./d3-scale-NFHY5pWC.js";import"./zIndexSlice-CfQuOadn.js";import"./renderedTicksSlice-DSJJKDzx.js";import"./CartesianChart-TFHKXQrQ.js";import"./chartDataContext-Ds7D7t0h.js";import"./CategoricalChart-C7FeICx9.js";import"./CartesianAxis-BzSAAt9Y.js";import"./Layer-Cueh5NkG.js";import"./Text-D_Ir2n4d.js";import"./DOMUtils-CiWWI4hV.js";import"./Label-BRKSm8Ce.js";import"./ZIndexLayer-D9w89N_j.js";import"./types-D-aEIpto.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-f7sFM_aI.js";import"./ReactUtils-DkGkgP-m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2oO3kmO.js";import"./useAnimationId-FpSV_Xeh.js";import"./ActiveShapeUtils-Dm52jN-p.js";import"./RegisterGraphicalItemId-CMP7i145.js";import"./ErrorBarContext-C8p1ky5C.js";import"./GraphicalItemClipPath-Iqn3z8Uo.js";import"./SetGraphicalItem-FTMP51O8.js";import"./getZIndexFromUnknown-CDNkcekP.js";import"./graphicalItemSelectors-CxS-ntMf.js";import"./index-88IFfxfH.js";import"./ChartSizeDimensions-CSliTc3n.js";import"./OffsetShower-C85nEH-b.js";import"./PlotAreaShower-DrRr8S-w.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
