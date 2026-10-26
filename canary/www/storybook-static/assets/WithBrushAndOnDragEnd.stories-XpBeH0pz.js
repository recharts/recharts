import{R as t}from"./iframe-nnpNEl0c.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BIxplyvp.js";import{B as p}from"./BarChart-DrERW-u5.js";import{X as l}from"./XAxis-DmxowzrZ.js";import{Y as h}from"./YAxis-EeSB_m0u.js";import{B as x}from"./Brush-Cik3Oicc.js";import{B as c}from"./Bar-BUH7Dk3-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./throttle-CIO-2ra4.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./RechartsWrapper-VFnYK8V7.js";import"./axisSelectors-DWnmhIgM.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WiXCw0il.js";import"./index-Db30zo8R.js";import"./index-DcZvMf-G.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./CartesianAxis-BqAJOGeS.js";import"./Layer-CzHD4ald.js";import"./Text-D0rrhxSu.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./Label-tyPo7vJI.js";import"./dataEntryStyles-BmV4LTxI.js";import"./types-BmjMrM54.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BNO7oHuM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bTnZwyFx.js";import"./useAnimationId-CJPhZ8Cq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./tooltipContext-CNUm5XLj.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./ErrorBarContext-BjOiJE8k.js";import"./activeStyles-iZJvEVBW.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getZIndexFromUnknown-DnFkOJYD.js";import"./useEffectiveDataKey-DTKrhjFl.js";import"./omit-ZiBFwhNr.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
