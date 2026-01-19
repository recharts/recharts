import{e}from"./iframe-DwwP6BDm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CXp0SSuS.js";import{B as p}from"./BarChart-CVRzS86K.js";import{X as l}from"./XAxis-CWc7NM0U.js";import{Y as h}from"./YAxis-BtN4txUd.js";import{B as c}from"./Brush-p5-9Xujb.js";import{B as x}from"./Bar-W7kr5YLC.js";import{R as u}from"./RechartsHookInspector-CJI_KtjH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-fclRL42w.js";import"./PolarUtils-Dg8SPN1d.js";import"./RechartsWrapper-DfwiyTzK.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./zIndexSlice-B2wHCWq0.js";import"./CartesianChart-CSvI-_HL.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./CartesianAxis-eabYiytD.js";import"./Layer-CFoQxLn1.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./Label-DDS3-7t-.js";import"./ZIndexLayer-BDklLudV.js";import"./types-B_qGOwmF.js";import"./tooltipContext-HXLRqA2y.js";import"./ReactUtils-DUdaZBrS.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./useAnimationId-DSGl_EXu.js";import"./Trapezoid-D_UTfuwy.js";import"./Sector-CBezTXxj.js";import"./Symbols-C6tHIL3l.js";import"./Curve-CYEqd5kN.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./ErrorBarContext-CdRKq8JD.js";import"./GraphicalItemClipPath-CGcYTlQM.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./getZIndexFromUnknown-ZTxR44GJ.js";import"./graphicalItemSelectors-CufL_txW.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
