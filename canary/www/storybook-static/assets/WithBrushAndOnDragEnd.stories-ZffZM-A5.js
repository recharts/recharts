import{e as t}from"./iframe-6EykQKfG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CqC3jwM6.js";import{B as p}from"./BarChart-BC6XosZC.js";import{X as l}from"./XAxis-Bq0FFrPR.js";import{Y as h}from"./YAxis-EuersLOS.js";import{B as c}from"./Brush-B_lenj8s.js";import{B as x}from"./Bar-w0Cpi59m.js";import{R as u}from"./RechartsHookInspector-De58Dhu7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZLGh6RG.js";import"./immer-DZYxGOvJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-8Vi1YZ.js";import"./index-C5RNfFWo.js";import"./hooks-C3ySExDc.js";import"./axisSelectors-FAny2dXm.js";import"./d3-scale-ZR-RinUh.js";import"./zIndexSlice-C6kP2rU-.js";import"./renderedTicksSlice-ChlibOAb.js";import"./CartesianChart-yFNUOVem.js";import"./chartDataContext-vZs3YuCl.js";import"./CategoricalChart-B0C_vbjT.js";import"./CartesianAxis-DTiDbYgb.js";import"./Layer-DsfYNbWJ.js";import"./Text-ByiAR9HY.js";import"./DOMUtils-BptD102S.js";import"./Label-AanK--nR.js";import"./ZIndexLayer-Dj7WhaOm.js";import"./types-DI1ZOnYm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-jITfcRZK.js";import"./ReactUtils-CfLs9KKR.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BzU2hCU1.js";import"./isPlainObject-CAtj_e7X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--9HeXx83.js";import"./useAnimationId-SK1GTTks.js";import"./Trapezoid-DdvROJEh.js";import"./Sector-NFqcE7L7.js";import"./Symbols-DRjofMjK.js";import"./symbol-VuSYaHfl.js";import"./step-DU4Jxd72.js";import"./Curve-BHG7-tm7.js";import"./RegisterGraphicalItemId-SLc1E9Mg.js";import"./ErrorBarContext-BKEDiamV.js";import"./GraphicalItemClipPath-CyC67rpY.js";import"./SetGraphicalItem-D4EZqEL5.js";import"./getZIndexFromUnknown-BZ0DebkK.js";import"./graphicalItemSelectors-DOMUNDx9.js";import"./index-DoXoLnYR.js";import"./ChartSizeDimensions-4WehLi-t.js";import"./OffsetShower-DPGgRtYl.js";import"./PlotAreaShower-DJZyMIDk.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
