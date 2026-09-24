import{R as t}from"./iframe-B5g3I7ev.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DGvgy2X6.js";import{B as p}from"./BarChart-BXXH1d9R.js";import{X as l}from"./XAxis-BhxgbA2b.js";import{Y as h}from"./YAxis-8glJaMk0.js";import{B as x}from"./Brush-DXZ1nEuA.js";import{B as c}from"./Bar-B2dhB0bF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DboQbEZw.js";import"./index-CUp993cz.js";import"./index-BAWIKs3X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNWhfhMM.js";import"./isWellBehavedNumber-C-qAxBmX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bo6Jfh5F.js";import"./axisSelectors-DjPo8MIe.js";import"./d3-scale-C7u8uwmP.js";import"./index-Z4LdU3de.js";import"./index-wrz3e8tU.js";import"./renderedTicksSlice-BmUG22gY.js";import"./index-DQOAurO-.js";import"./CartesianChart-CCYXF9ai.js";import"./chartDataContext-DiPBxGan.js";import"./CategoricalChart-BprHnfNJ.js";import"./CartesianAxis-CufURV0j.js";import"./Layer-BzSrPOIw.js";import"./Text-BYK6re_u.js";import"./DOMUtils-BBurC4Bd.js";import"./useId-BeJfkheV.js";import"./useBackwardsCompatibleTheme-BDfv2Eej.js";import"./Label-T3V6prm0.js";import"./ZIndexLayer-C61b4tvj.js";import"./types-4J1YdzxR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BAgU6T0J.js";import"./useAnimationId-E9ax1yjD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BtmGpz6E.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHMUVdMS.js";import"./tooltipContext-Cy6fvl5s.js";import"./RegisterGraphicalItemId-B0kmn4VH.js";import"./ErrorBarContext-CUA3MPdo.js";import"./GraphicalItemClipPath-C2l89xTF.js";import"./SetGraphicalItem-B2TqdHsC.js";import"./getZIndexFromUnknown-jFsPjy_A.js";import"./useGraphicalItemIdentity-DeD0kRsv.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
