import{e}from"./iframe-CnJUGyj2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DS-98WmY.js";import{B as p}from"./BarChart-ts1U8JCP.js";import{X as l}from"./XAxis-BXjKhibu.js";import{Y as h}from"./YAxis-BOMJi5bn.js";import{B as c}from"./Brush-Bo6fC7AJ.js";import{B as x}from"./Bar-vt5BK0Y3.js";import{R as u}from"./RechartsHookInspector-D9NSExUN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BzjH9Fll.js";import"./PolarUtils-DUXYMnUd.js";import"./RechartsWrapper-CvN69gVe.js";import"./hooks-DtPou_4w.js";import"./axisSelectors-B3UBVlXk.js";import"./zIndexSlice-BtlphbRl.js";import"./CartesianChart-DarKL8UC.js";import"./chartDataContext-BL3jGdF-.js";import"./CategoricalChart-3iTekVlo.js";import"./CartesianAxis-DVo4bkjd.js";import"./Layer-BsUJcQkF.js";import"./Text-sLuusAcx.js";import"./DOMUtils-CjNSxgDj.js";import"./Label-DpPDMM47.js";import"./ZIndexLayer-Dc_RcEv2.js";import"./types-D9HbD0yL.js";import"./tooltipContext-DNUYsW3p.js";import"./ReactUtils-BNR-lOsN.js";import"./ActiveShapeUtils-DTauRdeB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAmamxSx.js";import"./useAnimationId-CPv9iP46.js";import"./Trapezoid-B9_fPQiM.js";import"./Sector-CiIkZPTJ.js";import"./Symbols-kQyDCWDP.js";import"./Curve-B_FGldsa.js";import"./RegisterGraphicalItemId-BM4OoSas.js";import"./ErrorBarContext-5qx9m8qh.js";import"./GraphicalItemClipPath-FClbaDV6.js";import"./SetGraphicalItem-BuXMx1_s.js";import"./getZIndexFromUnknown-fkpVB-BX.js";import"./graphicalItemSelectors-vDvn6JDD.js";import"./index-CeIzyUzp.js";import"./ChartSizeDimensions-CoD815Xi.js";import"./OffsetShower-QmDVJyKt.js";import"./PlotAreaShower-CTJ4RF1E.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
