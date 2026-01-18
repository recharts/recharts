import{e}from"./iframe-HE4l6gpY.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-zbhzaWLf.js";import{B as p}from"./BarChart-DbgKM2ON.js";import{X as l}from"./XAxis-DdaPXuK0.js";import{Y as h}from"./YAxis-WQBuKMWe.js";import{B as c}from"./Brush-BQjQkaeB.js";import{B as x}from"./Bar-BOtmOARW.js";import{R as u}from"./RechartsHookInspector-JJmqV01h.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ycHCQ38b.js";import"./PolarUtils-DtB8lpuj.js";import"./RechartsWrapper-rscDC45n.js";import"./hooks-CAMR9gDE.js";import"./axisSelectors-BlI41Nqe.js";import"./zIndexSlice-CDFEuO1j.js";import"./CartesianChart-Dff8VYzG.js";import"./chartDataContext-HKU5YHU8.js";import"./CategoricalChart-b_wn2d-T.js";import"./CartesianAxis-DHNzlHQb.js";import"./Layer-BUJF1xKh.js";import"./Text-CEFvmxgj.js";import"./DOMUtils-BzGtJFJB.js";import"./Label-D3UA2eyA.js";import"./ZIndexLayer-C9xwCaJR.js";import"./types-CN_ngcpa.js";import"./tooltipContext-BsYYO75B.js";import"./ReactUtils-DzgF8jcH.js";import"./ActiveShapeUtils-OiiVmCWc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C42JoSoA.js";import"./useAnimationId-CIwDHleW.js";import"./Trapezoid-DAtsx-SU.js";import"./Sector-CwzJgIqc.js";import"./Symbols-DoDZ9cAV.js";import"./Curve-B2qa_Fpt.js";import"./RegisterGraphicalItemId-D8pM0yYi.js";import"./ErrorBarContext-CKHDFfpn.js";import"./GraphicalItemClipPath-BnkYT85w.js";import"./SetGraphicalItem-bFi_wPR4.js";import"./getZIndexFromUnknown-DmUPlY1R.js";import"./graphicalItemSelectors-CrTBi9mh.js";import"./index-CuPLL4UF.js";import"./ChartSizeDimensions-AwnLO8b3.js";import"./OffsetShower-B5Y-lcHm.js";import"./PlotAreaShower-Cx476p9R.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
