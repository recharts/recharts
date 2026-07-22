import{R as t}from"./iframe-CM9KFlpR.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-i3oRyNLb.js";import{B as p}from"./BarChart-xHoEo-7H.js";import{X as l}from"./XAxis-BpZNPHzq.js";import{Y as h}from"./YAxis-CI94Yo_i.js";import{B as x}from"./Brush-DpP3zIxn.js";import{B as c}from"./Bar-Cwvj_01T.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-De6mCLNM.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./index-CO_J2hQh.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./axisSelectors-gWKpmW3G.js";import"./d3-scale-BtCHm39u.js";import"./CartesianChart-Bh6VCjY7.js";import"./chartDataContext-Do1rIj0R.js";import"./CategoricalChart-DG8gXHxR.js";import"./CartesianAxis-wxz_d6Fj.js";import"./Layer-CyTLoz3L.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./Label-8JT3S2zg.js";import"./ZIndexLayer-CLQFgWIH.js";import"./types-BZH27c5K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-CZ6_3IBR.js";import"./AnimatedItems-Dc6JrbcK.js";import"./useAnimationId-OG1_HfMp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTzWPR0Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BKApU02X.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./ErrorBarContext-L6TULBDt.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getZIndexFromUnknown-Cv5Y_cVr.js";import"./graphicalItemSelectors-DJPuYJhE.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
