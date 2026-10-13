import{R as t}from"./iframe-DUnkgIOQ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-r-fMsMuk.js";import{B as p}from"./BarChart-Ponnhhh4.js";import{X as l}from"./XAxis-CsNzSfhq.js";import{Y as h}from"./YAxis-CvXueHp_.js";import{B as x}from"./Brush-tGqJynmZ.js";import{B as c}from"./Bar-CG9kSf3Q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvBsSQNH.js";import"./index-Bi2SJwnS.js";import"./index-DrITryDs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DLNxblaS.js";import"./isWellBehavedNumber-dou1peGm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cnrgjbh6.js";import"./axisSelectors-zqyiWpFa.js";import"./d3-scale-D5X6Q4ub.js";import"./index-BneZVI-r.js";import"./index-B4osSD3q.js";import"./renderedTicksSlice-B8EBEqyh.js";import"./index-CsDFOcOo.js";import"./CartesianChart-5Wn1_YAG.js";import"./chartDataContext-jAnWnb0r.js";import"./CategoricalChart-CgAmM9Jo.js";import"./CartesianAxis-DLgiES_b.js";import"./Layer-B-Hy8zN7.js";import"./Text-2AgJvCRv.js";import"./pageBackground-DK5qsHYc.js";import"./useId-NTbtm6dC.js";import"./useBackwardsCompatibleTheme-BSnNSNn_.js";import"./Label-C4zX0cwX.js";import"./ZIndexLayer-BhOOp4BW.js";import"./types-BzNQj-ku.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BaanO1pI.js";import"./useAnimationId-Dm7GmgCn.js";import"./dataEntryStyles-YmAEtIi5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DHAGZRq2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jD8IoLvy.js";import"./tooltipContext-DEVxnfsx.js";import"./ErrorBarContext-CpGIL_Og.js";import"./GraphicalItemClipPath-YZJU-iu_.js";import"./SetGraphicalItem-C8kjqmoZ.js";import"./getZIndexFromUnknown-noQiCkYq.js";import"./useEffectiveDataKey-BUAhKumu.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
