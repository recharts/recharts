import{R as t}from"./iframe-DSGjjpNU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CA6E8vFi.js";import{B as p}from"./BarChart-BZ8uxanK.js";import{X as l}from"./XAxis-CyP8TOeF.js";import{Y as h}from"./YAxis-CHK17H-d.js";import{B as x}from"./Brush-CscKHuHb.js";import{B as c}from"./Bar-C2AnMH-A.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Py-Ymz2c.js";import"./index-zgKj8xSX.js";import"./index-BP6oFGIz.js";import"./get-DWY5eETe.js";import"./resolveDefaultProps-C7JBpnaB.js";import"./isWellBehavedNumber-DJkwFvMJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DLTVJ7et.js";import"./index-BppypMuk.js";import"./index-BXnOwVVg.js";import"./renderedTicksSlice-Dt_MkN4R.js";import"./axisSelectors-ChSlicBm.js";import"./d3-scale-DFnee9kt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dc9cHP3f.js";import"./chartDataContext-dw-RuqgE.js";import"./CategoricalChart-4qFfYNuc.js";import"./CartesianAxis-Cj3_cZt6.js";import"./Layer-CQXD14hs.js";import"./Text-CzUj4xGW.js";import"./DOMUtils-91PmpcqE.js";import"./Label-BCa7jxpl.js";import"./ZIndexLayer-BY8ImL1x.js";import"./types-C1TBc4OL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-D_kHfyr0.js";import"./AnimatedItems-DmxYIflg.js";import"./useAnimationId-Da38KlFl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkHbTKKp.js";import"./ActiveShapeUtils-c7K_sKfu.js";import"./RegisterGraphicalItemId-Cr8a7rd9.js";import"./ErrorBarContext-LCSn87i7.js";import"./GraphicalItemClipPath-JjCltWFk.js";import"./SetGraphicalItem-CMSYXoAN.js";import"./getZIndexFromUnknown-BaNAKj8h.js";import"./graphicalItemSelectors-VMcvjSe7.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
