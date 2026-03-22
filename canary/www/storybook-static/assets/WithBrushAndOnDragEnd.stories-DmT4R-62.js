import{e as t}from"./iframe-CiMhD8Yi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C4O-CzLw.js";import{B as p}from"./BarChart-Cm6sSfQx.js";import{X as l}from"./XAxis-D-t29Sci.js";import{Y as h}from"./YAxis-BH2fpgYY.js";import{B as c}from"./Brush-qAPXwx1z.js";import{B as x}from"./Bar-IQSvaKq9.js";import{R as u}from"./RechartsHookInspector-DxnuxuTf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B6aPzm2T.js";import"./immer-BJk0N9d3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ls9LAbQq.js";import"./index-CPsAC65v.js";import"./hooks-DSwKjRVl.js";import"./axisSelectors-B3rHRVnt.js";import"./d3-scale-DI-LuBEQ.js";import"./zIndexSlice-CiVq3vLn.js";import"./renderedTicksSlice-Bf1zdGqK.js";import"./CartesianChart-DO4e4HPA.js";import"./chartDataContext-DSmgJVpn.js";import"./CategoricalChart-BZ0q9dh3.js";import"./CartesianAxis-CW_epPWP.js";import"./Layer-C8wFYCI6.js";import"./Text-DqREd9W9.js";import"./DOMUtils-g-POG1C4.js";import"./Label-CI8CQ0nH.js";import"./ZIndexLayer-BkTc8o4k.js";import"./types-Dhvr5bGX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-wTrBqtHX.js";import"./ReactUtils-DRjJkC3p.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-SHiIggQV.js";import"./isPlainObject-B44yGdGL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDjbeOfv.js";import"./useAnimationId-BtEj36rQ.js";import"./Trapezoid-D3spGrIN.js";import"./Sector-CizUgWtz.js";import"./Symbols-BFS1edpX.js";import"./symbol-DXdYs-sB.js";import"./step-CCWyWrm4.js";import"./Curve-HKI06HW2.js";import"./RegisterGraphicalItemId-CiaBhgsv.js";import"./ErrorBarContext-La6ve25h.js";import"./GraphicalItemClipPath-BcJMjVwL.js";import"./SetGraphicalItem-CYrsSIGQ.js";import"./getZIndexFromUnknown-DgE9bBo2.js";import"./graphicalItemSelectors-BQWjxMFm.js";import"./index-DJX1_Qw4.js";import"./ChartSizeDimensions-0tNXvVd7.js";import"./OffsetShower-Cmsq4yeV.js";import"./PlotAreaShower-BWgVdI6o.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
