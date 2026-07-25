import{R as t}from"./iframe-DtpJQkSw.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dy2ZfcaY.js";import{B as p}from"./BarChart-WHRh6I1d.js";import{X as l}from"./XAxis-BDLA9mvH.js";import{Y as h}from"./YAxis-7KC79Jwd.js";import{B as x}from"./Brush-CHRjZOuz.js";import{B as c}from"./Bar-nY2TF4Rx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYLsUs0w.js";import"./index-CVik1Y94.js";import"./index-qBeIIgbT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Cjc4ovdW.js";import"./isWellBehavedNumber-BvF_giMt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GuBZSFZ_.js";import"./index-Vvo-Q6um.js";import"./index-CFRYfm15.js";import"./renderedTicksSlice-C4FsNrs6.js";import"./axisSelectors-BtA0yFqg.js";import"./d3-scale-BbQAu0RB.js";import"./CartesianChart-DwY-VUV4.js";import"./chartDataContext-CkSWHG6R.js";import"./CategoricalChart-B6Np4ceD.js";import"./CartesianAxis-xTL6XmTN.js";import"./Layer-A5fdUiAt.js";import"./Text-CTFoNHWc.js";import"./DOMUtils-Cb4JkhR_.js";import"./Label-C9iRyFHw.js";import"./ZIndexLayer-BnsLSc-b.js";import"./types-D6abfmrW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-GY6HBjLg.js";import"./AnimatedItems-EBWp9peZ.js";import"./useAnimationId-B_99W7UQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0kyo6e1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DirzpQmC.js";import"./RegisterGraphicalItemId-Bw3Bvi6g.js";import"./ErrorBarContext-CjSCr-ku.js";import"./GraphicalItemClipPath-DeNzzcHV.js";import"./SetGraphicalItem-x1medb7e.js";import"./getZIndexFromUnknown-Gcw-V9Nf.js";import"./graphicalItemSelectors-3hFJ8itx.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
