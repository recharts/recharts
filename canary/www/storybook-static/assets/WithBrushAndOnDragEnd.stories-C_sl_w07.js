import{e as t}from"./iframe-BZbOzzTY.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D0qDv0Fd.js";import{B as p}from"./BarChart-CPFH97r4.js";import{X as l}from"./XAxis-D_0iXdcr.js";import{Y as h}from"./YAxis-Dya7AK5Z.js";import{B as c}from"./Brush-B9UCvlDi.js";import{B as x}from"./Bar-VTsXzd3L.js";import{R as u}from"./RechartsHookInspector-135t8dQu.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dw2Mrgq2.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Bx7P3ldu.js";import"./hooks-CeNJ-Qya.js";import"./axisSelectors-Cv1qfvr6.js";import"./zIndexSlice-J5rUHDmR.js";import"./CartesianChart-Bmuz99Xe.js";import"./chartDataContext-D5Kp386R.js";import"./CategoricalChart-BBkfjreJ.js";import"./CartesianAxis-B2T9DZ1W.js";import"./Layer-Ca1ZcU8K.js";import"./Text-Dp7XyQOy.js";import"./DOMUtils-vtRXHL3R.js";import"./Label-D9W5dwQ-.js";import"./ZIndexLayer-CLlHxURh.js";import"./types-CCRlLAaX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CEJlVqMU.js";import"./ReactUtils-BZBgIdmA.js";import"./ActiveShapeUtils-dkNue--z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkInrNvF.js";import"./useAnimationId-CbTMmgPX.js";import"./Trapezoid-vZxOp19A.js";import"./Sector-Cp2fRZg0.js";import"./Symbols-BeK0vgrh.js";import"./Curve-LGs6YPsX.js";import"./RegisterGraphicalItemId-DiEkoTQv.js";import"./ErrorBarContext-D7kGcYfA.js";import"./GraphicalItemClipPath-Cs5ZE868.js";import"./SetGraphicalItem-8hrJSJHb.js";import"./getZIndexFromUnknown-0zxBSWVr.js";import"./graphicalItemSelectors-BXArVv3q.js";import"./index--k4eFqf6.js";import"./ChartSizeDimensions-OWBI4sZr.js";import"./OffsetShower-BDJynaSn.js";import"./PlotAreaShower-DgtK3Nlq.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
