import{e as t}from"./iframe-D8sYifa2.js";import{a}from"./Time-D4Einjlh.js";import{d as s}from"./arrayEqualityCheck-y2Q9GogF.js";import{B as p}from"./BarChart-CRL7L20F.js";import{X as l}from"./XAxis-9biS9qcH.js";import{Y as h}from"./YAxis-BUVq_Z24.js";import{B as c}from"./Brush-C_bKyyrn.js";import{B as x}from"./Bar-RKywuh5p.js";import{R as u}from"./RechartsHookInspector-DH476wIm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUx68t71.js";import"./svgPropertiesAndEvents-DLjmXQI2.js";import"./immer-DGWVQIGE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkonLtU6.js";import"./hooks-BU-t5LUJ.js";import"./axisSelectors-BhhfO0Ag.js";import"./d3-scale-Cclz1I6I.js";import"./zIndexSlice-_08NoE64.js";import"./renderedTicksSlice-4e9Z0x6u.js";import"./index-CMJrcCvs.js";import"./CartesianChart-DyRJBMNu.js";import"./chartDataContext-RIukKWW8.js";import"./CategoricalChart-Cy6OSvk9.js";import"./CartesianAxis-k72kWN9A.js";import"./Layer-D0lgb40K.js";import"./Text-CGRq25Ok.js";import"./DOMUtils-DEL1f2E9.js";import"./Label-DJUogzP7.js";import"./ZIndexLayer-BoxbsGwS.js";import"./types-C-x3ql1e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cf_INVZ7.js";import"./graphicalItemTheme-BorrGmPK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-WKQjNyd_.js";import"./useAnimationId-W_naYXH9.js";import"./ActiveShapeUtils-gpKwZwuV.js";import"./RegisterGraphicalItemId-qsbqe2qd.js";import"./ErrorBarContext-CMRjTkut.js";import"./GraphicalItemClipPath-BvTSVrR_.js";import"./SetGraphicalItem-y2OPpJ7-.js";import"./getZIndexFromUnknown-xrqU4cHc.js";import"./graphicalItemSelectors-DMIY_pKH.js";import"./index-DmeQCr0O.js";import"./ChartSizeDimensions-HlWxaGyg.js";import"./OffsetShower-BZMcKLdA.js";import"./PlotAreaShower-DYk3IhVP.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
