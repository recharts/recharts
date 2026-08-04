import{R as t}from"./iframe-C5hmF0To.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BixfUK5V.js";import{B as p}from"./BarChart-BxYLcDf7.js";import{X as l}from"./XAxis-C0QI0HXh.js";import{Y as h}from"./YAxis-8wMoNgQN.js";import{B as x}from"./Brush-Wtbumebu.js";import{B as c}from"./Bar-DMRz1YNp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-teWCo3kp.js";import"./index-DPASLuit.js";import"./index-BrQaS3a5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CdkFEDnC.js";import"./isWellBehavedNumber-DY0MczIS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2jsJsE5.js";import"./index-CJFfs8Zx.js";import"./index-B_hHrNFX.js";import"./renderedTicksSlice-Cp2rYryV.js";import"./axisSelectors-3ticTacJ.js";import"./d3-scale-B4bxyqZp.js";import"./CartesianChart-luY4Ugiw.js";import"./chartDataContext-BtJuej3V.js";import"./CategoricalChart-B7M_pOAg.js";import"./CartesianAxis-Co52JpOx.js";import"./Layer-CDmGCMyH.js";import"./Text-C5taNjiE.js";import"./DOMUtils-BTnNVt5T.js";import"./Label-Du636Igd.js";import"./ZIndexLayer-CCu8NHHi.js";import"./types-CeFfhpIK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oPpqoGy7.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-6ft3c5Lu.js";import"./AnimatedItems-BcG4wu47.js";import"./useAnimationId-WdLJ0TXq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcdSdsCc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfj9ZkEg.js";import"./RegisterGraphicalItemId-Db5IkoaQ.js";import"./ErrorBarContext-BXXzJsD_.js";import"./GraphicalItemClipPath-DzTwh4wM.js";import"./SetGraphicalItem-CGZeJBQo.js";import"./getZIndexFromUnknown-D7_bSQ98.js";import"./graphicalItemSelectors-Dvd0v0Xk.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
