import{R as t}from"./iframe-B4BvLeme.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DyTYWVcs.js";import{B as p}from"./BarChart-BekVWFPY.js";import{X as l}from"./XAxis-T18YTghU.js";import{Y as h}from"./YAxis-T0QKWtDf.js";import{B as x}from"./Brush-BIKrFAEn.js";import{B as c}from"./Bar-CxnmACF7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-6IdFK7Ih.js";import"./throttle-DQNRL0AJ.js";import"./index-ClYdslLd.js";import"./index-59WpEyYi.js";import"./RechartsWrapper-B0OT4wWF.js";import"./axisSelectors-DS5uRUAA.js";import"./polarAxisSelectors-DqM84NZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DfUXkppW.js";import"./index-CwZtWez3.js";import"./index-Ba_PgChy.js";import"./renderedTicksSlice-D5gysmL5.js";import"./index-eMahtaOk.js";import"./fillDefinitions-CE1xVmK7.js";import"./CartesianChart-B8uUCQhO.js";import"./chartDataContext-DPDAwbOK.js";import"./CategoricalChart-gG_kR-cF.js";import"./CartesianAxis-reQTS2uW.js";import"./Layer-Bxh7arjC.js";import"./Text-B4NS4A04.js";import"./ZIndexLayer-Cb7Yxv7n.js";import"./Label-Bp5zUoNH.js";import"./types-UPHeghFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-n779GVpT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Wqh2w_9O.js";import"./useAnimationId-B1vlq9HU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXNsVwUA.js";import"./tooltipContext-D_p8bgOZ.js";import"./ErrorBarContext-BEP_BW62.js";import"./activeStyles-BtDPe58A.js";import"./SetGraphicalItem-WJo3C0-v.js";import"./getZIndexFromUnknown-DrpZLg6y.js";import"./useEffectiveDataKey-cN06FnCm.js";import"./omit-DUdB1-kG.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
