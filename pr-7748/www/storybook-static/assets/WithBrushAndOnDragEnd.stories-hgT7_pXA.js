import{R as t}from"./iframe-BRuR_Aem.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bj7VXWF6.js";import{B as p}from"./BarChart-_1MtjEbS.js";import{X as l}from"./XAxis-DkgTjfQy.js";import{Y as h}from"./YAxis-CTNE1Ach.js";import{B as x}from"./Brush-DzhwGA_y.js";import{B as c}from"./Bar-CB33Zn9r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CB_4huk8.js";import"./throttle-Bze-tpN5.js";import"./index-Znq_MKKU.js";import"./index-S2_wvhlN.js";import"./RechartsWrapper-Bn4G8r7u.js";import"./axisSelectors-vJ_QG27E.js";import"./polarAxisSelectors-DF3qQGPW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D-1jLUlb.js";import"./index-EeleNYI7.js";import"./index-MJdD-hjQ.js";import"./renderedTicksSlice-CuUE0Rg9.js";import"./index-DsnM3Ye-.js";import"./fillDefinitions-Dqk7JYY7.js";import"./CartesianChart-DUDwKsIR.js";import"./chartDataContext-Mr4wo4TR.js";import"./CategoricalChart-COCgmgkq.js";import"./CartesianAxis-khCvplyM.js";import"./Layer-DH8vqzA_.js";import"./Text-DCSoJ6K5.js";import"./ZIndexLayer-BW9AtQ0o.js";import"./Label-BRU8Jowp.js";import"./types-LyIymARE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-D3durKHg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CuBia6p2.js";import"./useAnimationId-CqnKfWIo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ByuL4hdp.js";import"./tooltipContext-QS9D-yjw.js";import"./ErrorBarContext-BSmlh0M0.js";import"./activeStyles-ddHtcBjm.js";import"./SetGraphicalItem-hKkfdUSl.js";import"./getZIndexFromUnknown-V73OkGI2.js";import"./useEffectiveDataKey-CJ_E1q2F.js";import"./omit-Dwhz06lk.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
