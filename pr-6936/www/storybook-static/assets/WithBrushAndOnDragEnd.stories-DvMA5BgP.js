import{e as t}from"./iframe-BRGG-JoH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-mIQ5hzOq.js";import{B as p}from"./BarChart-DfNA0-LO.js";import{X as l}from"./XAxis-Cdr81EpX.js";import{Y as h}from"./YAxis-Dr8aURmX.js";import{B as c}from"./Brush-Bsc6pPyb.js";import{B as x}from"./Bar-Cqvo0cE_.js";import{R as u}from"./RechartsHookInspector-Ctx1w3em.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-9pcaaxwh.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./zIndexSlice-DL-y9Kvz.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./CartesianAxis-BoArf1fz.js";import"./Layer-Da-YNOyz.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./Label-cR9E2h9U.js";import"./ZIndexLayer-D0IJam7I.js";import"./types-BKK4rjEh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BgeYg4JW.js";import"./ReactUtils-Dc8DAnTF.js";import"./ActiveShapeUtils-CgJmUR31.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DW4Clnem.js";import"./useAnimationId-CqPKjgNu.js";import"./Trapezoid-Dhytgh39.js";import"./Sector-RG4HwYfK.js";import"./Symbols-Bp7HaOpu.js";import"./Curve-D65O9kIu.js";import"./RegisterGraphicalItemId-LuL983mQ.js";import"./ErrorBarContext-v-g5O0yz.js";import"./GraphicalItemClipPath-BV-kiuzA.js";import"./SetGraphicalItem-B1ZRN0m0.js";import"./getZIndexFromUnknown-DkUvDB3y.js";import"./graphicalItemSelectors-Bw2zOLDM.js";import"./index-D8mL5N4x.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./OffsetShower-BMRMJ2Vb.js";import"./PlotAreaShower-DTP32oyl.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
