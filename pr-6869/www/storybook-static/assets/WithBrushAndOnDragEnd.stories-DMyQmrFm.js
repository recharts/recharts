import{e}from"./iframe-YjsnRhKk.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BJwRC6MI.js";import{B as p}from"./BarChart-DlAbNgkC.js";import{X as l}from"./XAxis-B2tLltrx.js";import{Y as h}from"./YAxis-Dkcj0U0j.js";import{B as c}from"./Brush-D9vVEgNP.js";import{B as x}from"./Bar-D0JuwFH2.js";import{R as u}from"./RechartsHookInspector-B9NqqHZV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Z_TS6-YD.js";import"./PolarUtils-CY6yHRxS.js";import"./RechartsWrapper-D804dJFF.js";import"./hooks-ybSWjp7E.js";import"./axisSelectors-DDrqqiFr.js";import"./zIndexSlice-CrYhtLvr.js";import"./CartesianChart-BXbZQS9i.js";import"./chartDataContext-DdZy89Ic.js";import"./CategoricalChart-DshWcI8J.js";import"./CartesianAxis-B3Ooqwxn.js";import"./Layer-B5j-14SA.js";import"./Text-B-IGFYif.js";import"./DOMUtils-B8xMLIPn.js";import"./Label-CLhSutXl.js";import"./ZIndexLayer-B9GJT-1H.js";import"./types-B3ZyTjxE.js";import"./tooltipContext-DLROr6jm.js";import"./ReactUtils-DPXAlJoJ.js";import"./ActiveShapeUtils-BoZeuq2S.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuxV1NLN.js";import"./useAnimationId-BZSEvVKv.js";import"./Trapezoid-CBkMiRG-.js";import"./Sector-COEdyvE7.js";import"./Symbols-BEUnwuzy.js";import"./Curve-C9YHabA2.js";import"./RegisterGraphicalItemId-iR66q9wz.js";import"./ErrorBarContext-wiTCAurl.js";import"./GraphicalItemClipPath-Ctr3letV.js";import"./SetGraphicalItem-CpQPspCO.js";import"./getZIndexFromUnknown-TtLcOY0I.js";import"./graphicalItemSelectors-BtIB5oqM.js";import"./index-D4ADZzYF.js";import"./ChartSizeDimensions-pADZR5mB.js";import"./OffsetShower-BC6NiJ8x.js";import"./PlotAreaShower-B40cJmGZ.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
