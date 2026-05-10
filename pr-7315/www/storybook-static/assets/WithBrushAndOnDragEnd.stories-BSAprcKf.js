import{e as t}from"./iframe-yOl7ebEO.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-UuJDb-yR.js";import{B as p}from"./BarChart-C3DeBHCo.js";import{X as l}from"./XAxis-DD4YWjFw.js";import{Y as h}from"./YAxis-BW20z882.js";import{B as c}from"./Brush-BOWdp2aJ.js";import{B as x}from"./Bar-C8JmNaYE.js";import{R as u}from"./RechartsHookInspector-DtC7uthn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Gw_jyAz4.js";import"./immer-CYF84rOh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1ybgTyA.js";import"./index-D-Did3Jy.js";import"./hooks-BE8JLfvF.js";import"./axisSelectors-B5yQSsls.js";import"./d3-scale-CZWGMAWB.js";import"./zIndexSlice-PEvl5-9d.js";import"./renderedTicksSlice-CnX-tuq-.js";import"./CartesianChart-CI8VxjgA.js";import"./chartDataContext-DWA37a9L.js";import"./CategoricalChart-DTvKZB6u.js";import"./CartesianAxis-CqiimSqN.js";import"./Layer-DB7JxVnT.js";import"./Text-s8nxqTbU.js";import"./DOMUtils-Co3lMGfS.js";import"./Label-CDk0YY7H.js";import"./ZIndexLayer-WvT2N6Nx.js";import"./types-DQaZd2AR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cexn3L6Y.js";import"./ReactUtils-BYuoIEUf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-aPgWLWZ7.js";import"./isPlainObject-DJR91lAO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D1lQKzhS.js";import"./useAnimationId-Fp-fdxRQ.js";import"./Trapezoid-Bo-P1Ks9.js";import"./Sector-ZE6eqjpU.js";import"./Symbols-h-bSBTN1.js";import"./symbol-Djg7BpVR.js";import"./step-MC0Zc_ls.js";import"./Curve-zYBm6Ox7.js";import"./RegisterGraphicalItemId-yywJB84l.js";import"./ErrorBarContext-CKGldT3Z.js";import"./GraphicalItemClipPath-BM3B2Cex.js";import"./SetGraphicalItem-BACVcxKo.js";import"./getZIndexFromUnknown-9NG5ClqC.js";import"./graphicalItemSelectors-B4GkUJpL.js";import"./index-CeoEhrnk.js";import"./ChartSizeDimensions-B292NXgO.js";import"./OffsetShower-DAwTp_Xz.js";import"./PlotAreaShower-BJre87Gs.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
