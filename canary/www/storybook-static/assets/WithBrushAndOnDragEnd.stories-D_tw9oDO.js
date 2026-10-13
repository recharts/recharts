import{R as t}from"./iframe-CRWpOW02.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BeAe48-I.js";import{B as p}from"./BarChart-CadExxno.js";import{X as l}from"./XAxis-D1dQPR-6.js";import{Y as h}from"./YAxis-DHYidPrE.js";import{B as x}from"./Brush-DllKdKet.js";import{B as c}from"./Bar-BAP2Py6-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYPAZ-oY.js";import"./index-CqqjX4mb.js";import"./index-BtZZPVlj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGJ-s5wM.js";import"./isWellBehavedNumber-DnvCGmEU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIU9TwkO.js";import"./axisSelectors-CEaTU0uL.js";import"./d3-scale-d-dAzt7l.js";import"./index-Br2LofN0.js";import"./index-D_MdTA2d.js";import"./renderedTicksSlice-D6XZoNOx.js";import"./index-CqBbZHkF.js";import"./CartesianChart-BKIvGl2K.js";import"./chartDataContext-BIcAjQe6.js";import"./CategoricalChart-DHoPXZtk.js";import"./CartesianAxis-BjJPyt3G.js";import"./Layer-CNbUO4cy.js";import"./Text-159WNhne.js";import"./pageBackground-CeS3kx1x.js";import"./useId-ECIur30B.js";import"./useBackwardsCompatibleTheme-4poegSRB.js";import"./Label-C0mxneHa.js";import"./ZIndexLayer-CE46bnfu.js";import"./types-VHH142lq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-qMzt72fn.js";import"./useAnimationId-D92beKJG.js";import"./dataEntryStyles-BglHhD-H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5Ov4WxTU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJ3uGwKk.js";import"./tooltipContext-CRdtwP7J.js";import"./ErrorBarContext-Bq-5TM9D.js";import"./GraphicalItemClipPath-Baz6IWCm.js";import"./SetGraphicalItem-CHlvRlHN.js";import"./getZIndexFromUnknown-D0lnl5dW.js";import"./useEffectiveDataKey-BpgvrKzX.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
