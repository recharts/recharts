import{R as t}from"./iframe-CvKbIuDU.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DW-S4til.js";import{B as p}from"./BarChart-NK6-7V7o.js";import{X as l}from"./XAxis-Dp4FSOnR.js";import{Y as h}from"./YAxis-DizKApNp.js";import{B as x}from"./Brush-DAgp22kc.js";import{B as c}from"./Bar-k9Sfc-WZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BTM8S8gx.js";import"./index-Z4qAt8Yv.js";import"./index-BVbsRhGr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DyOOAUIY.js";import"./isWellBehavedNumber-DlUs4F_M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Di3s7bBT.js";import"./axisSelectors-BV2JW9EX.js";import"./d3-scale-C5aBguhN.js";import"./index-BexOrbLc.js";import"./index-BIyuXW6c.js";import"./renderedTicksSlice-BomOCwRS.js";import"./index-B5qL6Iq2.js";import"./CartesianChart-CQJv70kz.js";import"./chartDataContext-CefKEXER.js";import"./CategoricalChart-BbjDOIaW.js";import"./CartesianAxis-BYZAVmga.js";import"./Layer-BNmLXrt-.js";import"./Text-B6N2t5jR.js";import"./pageBackground-ChMXawke.js";import"./useId-6H2iqgtd.js";import"./useBackwardsCompatibleTheme-CkVmHcf-.js";import"./Label-C9wGNRIk.js";import"./ZIndexLayer-C4jXpx6X.js";import"./types-ChWN3J9r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Cf2oumzq.js";import"./useAnimationId-DTylORVO.js";import"./dataEntryStyles-DpltKyOE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ca8NWDZ8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DkA-OS5a.js";import"./tooltipContext-Cr6CIjgJ.js";import"./ErrorBarContext-DAV26R-G.js";import"./GraphicalItemClipPath-BmBLy2cz.js";import"./SetGraphicalItem-fk9D7m_b.js";import"./getZIndexFromUnknown-v3HFmQ3v.js";import"./useEffectiveDataKey-DWaNxJOV.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
