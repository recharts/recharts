import{R as t}from"./iframe-BofWz4pi.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DPHCingP.js";import{B as p}from"./BarChart-B3SMRlIh.js";import{X as l}from"./XAxis-7mtD4Kk1.js";import{Y as h}from"./YAxis-D1oxSTTV.js";import{B as x}from"./Brush-DYejMv0Q.js";import{B as c}from"./Bar-5dLPkDhq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./throttle-CD21hIR0.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./RechartsWrapper-uhVYqXCO.js";import"./axisSelectors-BlRUD72R.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBiuonxv.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./CartesianAxis-DEogGjPj.js";import"./Layer-bLQQfVOZ.js";import"./Text-Cod3bNx5.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./Label-CCUawDng.js";import"./dataEntryStyles-EsxEhXM1.js";import"./types-Da0w2MOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-B7UPTptH.js";import"./useAnimationId-CM0h2zlX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNojMJrW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jlvddXY2.js";import"./tooltipContext-DcHtwD0Y.js";import"./RegisterGraphicalItemId-C_30UGno.js";import"./ErrorBarContext-D5pMarzn.js";import"./SetGraphicalItem-Cxhb9Qmq.js";import"./getZIndexFromUnknown-BONwhvkQ.js";import"./useEffectiveDataKey-CF-diEWF.js";import"./omit-B1JbUKAI.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
