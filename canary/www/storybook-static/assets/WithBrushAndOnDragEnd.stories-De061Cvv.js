import{e as t}from"./iframe-3u-Q1UnB.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-4YdFFnIZ.js";import{B as p}from"./BarChart-CselHqCO.js";import{X as l}from"./XAxis-Djkeo-gr.js";import{Y as h}from"./YAxis-Dj18iK3G.js";import{B as c}from"./Brush-DaLzjBUj.js";import{B as x}from"./Bar-BYNUjB_e.js";import{R as u}from"./RechartsHookInspector-CGCoL2RB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cxetozbj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTxIwYKV.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./zIndexSlice-DFZrsegf.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./CartesianAxis-DNUlfq8v.js";import"./Layer-BUQITwlU.js";import"./Text-C0k6XBru.js";import"./DOMUtils-B1iHjA53.js";import"./Label-DEySkZO8.js";import"./ZIndexLayer-BBlPVpqD.js";import"./types-DeBO-UOQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CwZZ1zPR.js";import"./ReactUtils-BnoVNewt.js";import"./ActiveShapeUtils-CBZ4ZZvz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqAeg9eu.js";import"./useAnimationId-BDwu_fLm.js";import"./Trapezoid-Bk16eIfi.js";import"./Sector-Qrf6gufC.js";import"./Symbols-D9T0VuzY.js";import"./Curve-BQlmvtvx.js";import"./RegisterGraphicalItemId-C95CQYm2.js";import"./ErrorBarContext-CW31PIa7.js";import"./GraphicalItemClipPath-Cj9n1sb1.js";import"./SetGraphicalItem-BCGPdk9x.js";import"./getZIndexFromUnknown-esa7sR3B.js";import"./graphicalItemSelectors-NQ4w2H4q.js";import"./index-BW-nQ8nH.js";import"./ChartSizeDimensions-BtJ4zNfJ.js";import"./OffsetShower-CS2dm1Mz.js";import"./PlotAreaShower-DAGea8GQ.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
