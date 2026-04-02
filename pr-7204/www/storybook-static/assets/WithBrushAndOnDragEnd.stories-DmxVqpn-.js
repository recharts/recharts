import{e as t}from"./iframe-DMXQsXpg.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DpCaYOUy.js";import{B as p}from"./BarChart-BN4tMZYw.js";import{X as l}from"./XAxis-BHFgUjmQ.js";import{Y as h}from"./YAxis-Do7NKWVh.js";import{B as c}from"./Brush-D5UjhSIU.js";import{B as x}from"./Bar-CSGTG1ml.js";import{R as u}from"./RechartsHookInspector-DV0idGEz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BsNYhyCK.js";import"./immer-B5TQSQqr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChN5mZ6F.js";import"./index-DZj5OYW4.js";import"./hooks-C4vpoiWQ.js";import"./axisSelectors-X23Vd1nJ.js";import"./d3-scale-Bobv8k5F.js";import"./zIndexSlice-Dh14LjCV.js";import"./renderedTicksSlice-BIIBkKaJ.js";import"./CartesianChart-C5uIkm2y.js";import"./chartDataContext-B6GLUasA.js";import"./CategoricalChart-DG_cN0Ky.js";import"./CartesianAxis-VGpTBjEt.js";import"./Layer-CsEtKw3I.js";import"./Text-DQkAUreQ.js";import"./DOMUtils-DhuzsS5O.js";import"./Label-Bs69Id3P.js";import"./ZIndexLayer-DFpiev-3.js";import"./types-B0XKp7Ez.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BSggaHro.js";import"./ReactUtils-L5lhC8e-.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CvI69Krw.js";import"./isPlainObject-BMubJZbB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B4fRgx4g.js";import"./useAnimationId-VTFMqu0p.js";import"./Trapezoid-BZvlrAVr.js";import"./Sector-CxL9w9hl.js";import"./Symbols-CEd2p-EY.js";import"./symbol-Dzsckc01.js";import"./step-H2086VjI.js";import"./Curve-GkC_ASL4.js";import"./RegisterGraphicalItemId-oMcfFNkt.js";import"./ErrorBarContext-Bl-5rk6P.js";import"./GraphicalItemClipPath-D6CWKVU-.js";import"./SetGraphicalItem-Cl2qZBgg.js";import"./getZIndexFromUnknown-peywxPIz.js";import"./graphicalItemSelectors-DYCPftIy.js";import"./index-vcH36-MF.js";import"./ChartSizeDimensions-DEoCz00F.js";import"./OffsetShower-BjIJhAjd.js";import"./PlotAreaShower-DKns50Z6.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
