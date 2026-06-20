import{R as t}from"./iframe-CFGBW6xJ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-XhnqXoNc.js";import{B as p}from"./BarChart-BglYW8KR.js";import{X as l}from"./XAxis-B5InI_Kd.js";import{Y as h}from"./YAxis-DzdfuxTR.js";import{B as x}from"./Brush-FIPKz62d.js";import{B as c}from"./Bar-Dll3ItHb.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DtmFdOpm.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./get-mKIhZXA3.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeVvleXl.js";import"./index-Ce00Lp11.js";import"./index-DR9UVvVc.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";import"./CartesianAxis-B6GxQRPi.js";import"./Layer-DZ-_1tbp.js";import"./Text-DdBs_uLw.js";import"./DOMUtils-DpRJCm6O.js";import"./Label-Dw9n6-WD.js";import"./ZIndexLayer-DWvdc9Et.js";import"./types-CFb2awxA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Bxk-h1zQ.js";import"./AnimatedItems-SqXWEHcu.js";import"./useAnimationId-nIrPYsqA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cx3fMF7b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CwRTe6Q2.js";import"./RegisterGraphicalItemId-D7MzpaGX.js";import"./ErrorBarContext-qfoo4UXw.js";import"./GraphicalItemClipPath-CKVLZrRA.js";import"./SetGraphicalItem-Bj9a8OJ5.js";import"./getZIndexFromUnknown-DudEWojl.js";import"./graphicalItemSelectors-Bk5rE5PR.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
