import{R as t}from"./iframe-zwg8Ck3J.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-NosrfnoV.js";import{B as p}from"./BarChart-C6atfRo5.js";import{X as l}from"./XAxis-DImn2N-Q.js";import{Y as h}from"./YAxis-DeKq7CDg.js";import{B as x}from"./Brush-DlMgx64j.js";import{B as c}from"./Bar-B9khMBXm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ba88YkIO.js";import"./index-IvyDBjKP.js";import"./index-OSBoZXok.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DG88vi2D.js";import"./isWellBehavedNumber-CwtCjuBS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJ_EMk4a.js";import"./index-CbO-5G1T.js";import"./index-DgDwqqQh.js";import"./axisSelectors-B51wYZzi.js";import"./d3-scale-BoLYoZ-J.js";import"./renderedTicksSlice-Df0H0Vcu.js";import"./CartesianChart-DJ82atYN.js";import"./chartDataContext-BLU5FY0s.js";import"./CategoricalChart-COKLxFKu.js";import"./CartesianAxis-B8LFrX_I.js";import"./Layer-BMjk1XnO.js";import"./Text-B5wvjkWp.js";import"./DOMUtils-DeVFgjhY.js";import"./useId-BhnbWZv2.js";import"./useBackwardsCompatibleTheme-CUoFrMEf.js";import"./Label-Bd61VRBp.js";import"./ZIndexLayer-B0otcv7p.js";import"./types-Cw6qbFf6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-m2rS7Ine.js";import"./useAnimationId-CNfugt_c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EFaYZ8RA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CVVSTnC5.js";import"./tooltipContext-Cpqtm_CN.js";import"./RegisterGraphicalItemId-BdhGFYIv.js";import"./ErrorBarContext-DQaSvvRh.js";import"./GraphicalItemClipPath-DzwEZpNn.js";import"./SetGraphicalItem-C-Nezax8.js";import"./getZIndexFromUnknown-BbuVgB_5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C86WNwJ9.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
