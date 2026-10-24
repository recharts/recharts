import{R as t}from"./iframe-DIZ3O37q.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BQzkuVGb.js";import{B as p}from"./BarChart-DDWgXhRW.js";import{X as l}from"./XAxis-B7HByjhZ.js";import{Y as h}from"./YAxis-DKMrz6bp.js";import{B as x}from"./Brush-BKH59iTm.js";import{B as c}from"./Bar-BTuM_D30.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CmJg4BXK.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./isWellBehavedNumber-C03WQupV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCqN-I2W.js";import"./axisSelectors-CgxEqo8X.js";import"./d3-scale-BsLoKPkH.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./index-DJHqlgJe.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./CartesianAxis-DyfvpSiZ.js";import"./Layer-dog9ZdZ9.js";import"./Text-CxShOurV.js";import"./pageBackground-RtZmpZCV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./Label-BKiGyQaq.js";import"./ZIndexLayer-DpnduxRR.js";import"./dataEntryStyles-DEoRHL3P.js";import"./types-DIw8xebl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-heSOU5tv.js";import"./useAnimationId-1Ju_H0cm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CN_u7Ffv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./tooltipContext-BsZQFKFL.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./ErrorBarContext-ttnhO46D.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getZIndexFromUnknown-BwBDoaYK.js";import"./useEffectiveDataKey-CsQCtOFi.js";import"./omit-DJK5XhUl.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
