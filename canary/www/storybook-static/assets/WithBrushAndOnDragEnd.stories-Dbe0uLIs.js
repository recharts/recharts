import{R as t}from"./iframe-BMarL12M.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C3zFoeWv.js";import{B as p}from"./BarChart-C0LQ_rM8.js";import{X as l}from"./XAxis-HDWpUUwS.js";import{Y as h}from"./YAxis-hUo2hZ05.js";import{B as x}from"./Brush-BLKpvawt.js";import{B as c}from"./Bar-Bv-ZPq1t.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-szqIxzqv.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./axisSelectors-DONKf7kg.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./CategoricalChart-D3itWTr1.js";import"./CartesianAxis-CxMr6rDg.js";import"./Layer-DPtUoMDp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./Label-wMX0Bukp.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./types-B-ESMolm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BsByAcaR.js";import"./useAnimationId-W_lOfRkr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C589zoI3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_BzuEdws.js";import"./tooltipContext-DTTJjkWg.js";import"./RegisterGraphicalItemId-CxNs_80A.js";import"./ErrorBarContext-GzARO3dP.js";import"./GraphicalItemClipPath-CUFqqD93.js";import"./SetGraphicalItem-B6tJU4_Z.js";import"./getZIndexFromUnknown-Bc7pPkaa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BqDrOfHf.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
