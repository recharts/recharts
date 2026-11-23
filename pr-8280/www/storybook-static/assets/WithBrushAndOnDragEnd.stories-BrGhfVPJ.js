import{R as t}from"./iframe-B3Q9BieZ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-sqFd1bzt.js";import{B as p}from"./BarChart-BsBT7gz0.js";import{X as l}from"./XAxis-D2lT-EVr.js";import{Y as h}from"./YAxis-DvVjGCkX.js";import{B as x}from"./Brush-CKvs11xM.js";import{B as c}from"./Bar-D2P5vE9X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BfktPE_A.js";import"./throttle-D7B_fzZD.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./RechartsWrapper-Cfrbgio_.js";import"./axisSelectors-DvTAFEOk.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C94aTEcE.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./CartesianAxis-COGs4upa.js";import"./Layer-CM6IL6TI.js";import"./Text-vJxvkBMX.js";import"./ZIndexLayer-D273i2uL.js";import"./Label-DqBOaUXK.js";import"./types-D4j33x05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DvvOVUEP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uE9FLPYH.js";import"./useAnimationId-2VJaNjeA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./tooltipContext-DrUQbg9p.js";import"./ErrorBarContext-B613I2F5.js";import"./activeStyles-BLYIXqri.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./getZIndexFromUnknown-CaJBxPdw.js";import"./useEffectiveDataKey-CELfbHpr.js";import"./omit-DiesSGF7.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
