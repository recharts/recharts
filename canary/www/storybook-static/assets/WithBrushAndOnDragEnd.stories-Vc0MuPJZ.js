import{R as t}from"./iframe-CMzJyxaT.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dud0JIgm.js";import{B as p}from"./BarChart-DcwTvTUR.js";import{X as l}from"./XAxis-IIW9Jscf.js";import{Y as h}from"./YAxis-fzMCOkqh.js";import{B as x}from"./Brush-Df07co_X.js";import{B as c}from"./Bar-DZbtTm0K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D90TgEnc.js";import"./throttle-BTIGJM4c.js";import"./index-CHmRWuG6.js";import"./index-CsXUOZ6h.js";import"./RechartsWrapper-CfktXOMD.js";import"./axisSelectors-Bq81Ao7M.js";import"./polarAxisSelectors-DrN1Djr4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRT9BUPN.js";import"./index-BuF3Ul7s.js";import"./index-Ihh44ZOg.js";import"./renderedTicksSlice-DM-R4GMo.js";import"./index-CNV21azp.js";import"./fillDefinitions-BTSqEgwz.js";import"./CartesianChart-BO8uDP04.js";import"./chartDataContext-CDPuAaqS.js";import"./CategoricalChart-DPQZGg1m.js";import"./CartesianAxis-CqeHr0V2.js";import"./Layer-AKX63atr.js";import"./Text-RRbVz4t0.js";import"./ZIndexLayer-D9_6vJMt.js";import"./Label-BnlLNWzo.js";import"./types-Dl8VwStK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-bJA9yLxO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CL2UaBeU.js";import"./useAnimationId-CAh3JWUx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-q9dSSXz9.js";import"./tooltipContext-C2OQudlt.js";import"./ErrorBarContext-DaqV69Oh.js";import"./activeStyles-D3ZF14ZM.js";import"./SetGraphicalItem-DihoZDul.js";import"./getZIndexFromUnknown-Bu9TAlE3.js";import"./useEffectiveDataKey-DeMvidhj.js";import"./omit-2jZwnNDB.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
