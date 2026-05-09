import{e as t}from"./iframe-LVl3b4xQ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-TRBYdTbW.js";import{B as p}from"./BarChart-BYcKU23v.js";import{X as l}from"./XAxis-S2uC6fKQ.js";import{Y as h}from"./YAxis-D2De-1fU.js";import{B as c}from"./Brush-hvSQCSKx.js";import{B as x}from"./Bar-Cjx3Az8m.js";import{R as u}from"./RechartsHookInspector-CoEhmUtx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sS_sTty7.js";import"./immer-BbMxIj75.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bu4njem6.js";import"./index-DpK2I5Z8.js";import"./hooks-M6iVHT7c.js";import"./axisSelectors-DOBrNYLg.js";import"./d3-scale-DZf6r7Db.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-bvE0U60U.js";import"./renderedTicksSlice-C1IOrkRp.js";import"./CartesianChart-B4Aoe2Gv.js";import"./chartDataContext-C_HtZ8Jd.js";import"./CategoricalChart-BY9PLUYv.js";import"./CartesianAxis-B7v1DDAM.js";import"./Layer-BDK9FNAf.js";import"./Text-ByeLUm9f.js";import"./DOMUtils-DEoaEH8S.js";import"./Label-Jb4Mxx6L.js";import"./ZIndexLayer-BcAyFnZg.js";import"./types-C5WHI9Oq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Boti4Y59.js";import"./AnimatedItems-u-a6HbBD.js";import"./useAnimationId-aZVu4KkL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BFF6hf2y.js";import"./isPlainObject-B64torjy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUhT-B0R.js";import"./Trapezoid-ZdBmwUBu.js";import"./Sector-zScvcglH.js";import"./Symbols-Fu_kPQSr.js";import"./symbol-hh9GMAPc.js";import"./step-Fn6xoHVy.js";import"./Curve-BuzdDAXz.js";import"./RegisterGraphicalItemId-msSYtbNf.js";import"./ErrorBarContext-C1aiTzSR.js";import"./GraphicalItemClipPath-DJ_qeJGz.js";import"./SetGraphicalItem-C3QtaGQ_.js";import"./getZIndexFromUnknown-DeMaLHM6.js";import"./graphicalItemSelectors-UOGAUwPm.js";import"./index-CZHbmvmq.js";import"./ChartSizeDimensions-Bx00VSUB.js";import"./OffsetShower-DPJMHPD2.js";import"./PlotAreaShower-DoIFP8gZ.js";const vt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Bt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,Bt as __namedExportsOrder,vt as default};
