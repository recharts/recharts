import{R as t}from"./iframe-Dckhh8TP.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DvqxU_fJ.js";import{B as p}from"./BarChart-C9I5H3gg.js";import{X as l}from"./XAxis-DZSKVUHO.js";import{Y as h}from"./YAxis-C2iUlU97.js";import{B as x}from"./Brush-BTxhlplz.js";import{B as c}from"./Bar-Bt74CXWa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoWt88Bk.js";import"./throttle-nSMGIYBk.js";import"./index-BTZnO4jD.js";import"./index-BZ7EiUeE.js";import"./RechartsWrapper-DN3bSeN0.js";import"./axisSelectors-iU-8zlMU.js";import"./polarAxisSelectors-ClcX1Sfv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVKSBoJ3.js";import"./index-Bf6cRldK.js";import"./index-DfEyCTx4.js";import"./renderedTicksSlice-BoRV-MuC.js";import"./index-BEi4ZfWK.js";import"./CartesianChart-ds3qEH6n.js";import"./chartDataContext-CqDlrvyh.js";import"./CategoricalChart-DiJWdssm.js";import"./CartesianAxis-B8NfN4oe.js";import"./Layer-Gqc-Z-cf.js";import"./Text-ixAKnQea.js";import"./pageBackground-Bsi5t8mD.js";import"./useId-BAdhA99P.js";import"./ZIndexLayer-DYLMgu3X.js";import"./Label-BPfiwVrc.js";import"./dataEntryStyles-C1y9indW.js";import"./types-orR6Wh5t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-DNDVPQVu.js";import"./useAnimationId-DwypxVGS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCB0dWGj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZclTza4.js";import"./tooltipContext-C_c7dwWf.js";import"./RegisterGraphicalItemId-jdQ-nkDB.js";import"./ErrorBarContext-D50rt7ip.js";import"./SetGraphicalItem-B5R69AhG.js";import"./getZIndexFromUnknown-BiGZnT5a.js";import"./useEffectiveDataKey-Dh_S8XsG.js";import"./omit-D41nXwZ-.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
