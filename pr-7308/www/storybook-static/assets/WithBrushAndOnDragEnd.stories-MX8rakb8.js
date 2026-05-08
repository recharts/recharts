import{e as t}from"./iframe-BCIyDy2y.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cf245WJn.js";import{B as p}from"./BarChart-B7Ayv4-d.js";import{X as l}from"./XAxis-DV5Xkww9.js";import{Y as h}from"./YAxis-CnRlmuzM.js";import{B as c}from"./Brush-uXkFVTN3.js";import{B as x}from"./Bar-SXFFonQy.js";import{R as u}from"./RechartsHookInspector-Z2OccCn4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-lVM9sbuz.js";import"./immer-C2RICBwb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bdd2O_oM.js";import"./index-CtknXjDa.js";import"./hooks-BTsBRBHp.js";import"./axisSelectors-yCT-Higf.js";import"./d3-scale-CI4AiR3w.js";import"./zIndexSlice-DSrTTGma.js";import"./renderedTicksSlice-Cz2vx4zM.js";import"./CartesianChart-DrswP_Ob.js";import"./chartDataContext-CXwTcmro.js";import"./CategoricalChart-up_sq5JM.js";import"./CartesianAxis-DQMQkFuk.js";import"./Layer-BI55N2-G.js";import"./Text-DkhCuMky.js";import"./DOMUtils-BAzLlmnO.js";import"./Label-BLeLqCLV.js";import"./ZIndexLayer-OXXPiSY6.js";import"./types-lt17_KuZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-tXpmtW_g.js";import"./ReactUtils-xGOtO2-g.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-jGAWG3IP.js";import"./isPlainObject-whMXKUZx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SMe0MBtT.js";import"./useAnimationId-BkfXIhqW.js";import"./Trapezoid-RcGRNOCe.js";import"./Sector-Ck7ah4lL.js";import"./Symbols-BB8IGNYJ.js";import"./symbol-BWsdZnbp.js";import"./step-C8nuQph-.js";import"./Curve-CewalY2f.js";import"./RegisterGraphicalItemId-UqraLzmZ.js";import"./ErrorBarContext-BoyyOct_.js";import"./GraphicalItemClipPath-DTR4rFg9.js";import"./SetGraphicalItem-D1XFyIIN.js";import"./getZIndexFromUnknown-BotphnTD.js";import"./graphicalItemSelectors-DKTJ6Z3E.js";import"./index-DwfpJ5JJ.js";import"./ChartSizeDimensions-DA9WuIbb.js";import"./OffsetShower-DxUIrgLH.js";import"./PlotAreaShower-DU-Wc0h4.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
