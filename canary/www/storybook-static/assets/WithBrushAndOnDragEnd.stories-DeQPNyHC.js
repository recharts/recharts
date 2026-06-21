import{R as t}from"./iframe-Dv2mkDD6.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-2fg2g2Dp.js";import{B as p}from"./BarChart-DGRyOX_-.js";import{X as l}from"./XAxis-CXyJf7fo.js";import{Y as h}from"./YAxis-CqyybjBv.js";import{B as x}from"./Brush-CEqsNfq0.js";import{B as c}from"./Bar-C4QQbTtV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CP6W9K53.js";import"./index-9bEp3bq8.js";import"./index-Ds7CCKWE.js";import"./get-EiM4K4Yy.js";import"./resolveDefaultProps-pfm2KtVH.js";import"./isWellBehavedNumber-DWptWa3e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CkEfkKBB.js";import"./index-CbNA4IYq.js";import"./index-CX6QVWJd.js";import"./renderedTicksSlice-COLD4oXN.js";import"./axisSelectors-BxD9EJGH.js";import"./d3-scale-DIID899h.js";import"./CartesianChart-NBwPQSms.js";import"./chartDataContext-BOvLrxST.js";import"./CategoricalChart-CYR6VSGv.js";import"./CartesianAxis-DFbvktXE.js";import"./Layer-BkXvHIXh.js";import"./Text-CEJxHZH-.js";import"./DOMUtils-CJIsN_cb.js";import"./Label-Cr9zsE7b.js";import"./ZIndexLayer-pZIzemBm.js";import"./types-CH3zmrHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-gIRAXb4Q.js";import"./AnimatedItems-D9UxuFUl.js";import"./useAnimationId-eauTaXpl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DendxdxL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZxftlok.js";import"./RegisterGraphicalItemId-CjWM_Bfz.js";import"./ErrorBarContext-D_yXcxuv.js";import"./GraphicalItemClipPath-BtBW0RWE.js";import"./SetGraphicalItem-LAI4OSkO.js";import"./getZIndexFromUnknown-DY9XqzRJ.js";import"./graphicalItemSelectors-Zjg8Zcv4.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
