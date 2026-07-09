import{R as t}from"./iframe-DTfUMuxI.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DgbTd9h0.js";import{B as p}from"./BarChart-BDYmElxv.js";import{X as l}from"./XAxis-CKFG07JY.js";import{Y as h}from"./YAxis-DiRZk9gW.js";import{B as x}from"./Brush--pyA7Fdw.js";import{B as c}from"./Bar-BznAYTF3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DSBiY2UW.js";import"./index-C6ZCQ8Cr.js";import"./index-dA-GAX4g.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2iqIMJj.js";import"./isWellBehavedNumber-CJoo6Zl9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-n6ARRQU-.js";import"./index-Cd9XPR7L.js";import"./index-C-gVZ3HS.js";import"./renderedTicksSlice-DsiYN-l1.js";import"./axisSelectors-D0YyYzBU.js";import"./d3-scale-DrphVPA4.js";import"./CartesianChart-b6kMC5fp.js";import"./chartDataContext-DbVx922-.js";import"./CategoricalChart-DjP0Xpt7.js";import"./CartesianAxis-CzVgKTyr.js";import"./Layer-fCILtQSz.js";import"./Text-8vykb6TY.js";import"./DOMUtils-CP4go6fM.js";import"./Label-Sgtp5mjO.js";import"./ZIndexLayer-BhQOtpEj.js";import"./types-CausIaox.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-E8pJyhGS.js";import"./AnimatedItems-DnEACLZT.js";import"./useAnimationId-BT6QlGBk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cf96Egf9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DX8BqYxQ.js";import"./RegisterGraphicalItemId-1AKHmh8R.js";import"./ErrorBarContext-4arHz5n6.js";import"./GraphicalItemClipPath-Bk6qs07-.js";import"./SetGraphicalItem-BNqcqmMc.js";import"./getZIndexFromUnknown-BEXihlZA.js";import"./graphicalItemSelectors-Dfl11C67.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
