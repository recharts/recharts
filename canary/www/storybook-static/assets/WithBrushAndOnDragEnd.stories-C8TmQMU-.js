import{R as t}from"./iframe-1v9h95J8.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BhjZ46tE.js";import{B as p}from"./BarChart-_ngsfu3A.js";import{X as l}from"./XAxis-C3_Gtrrp.js";import{Y as h}from"./YAxis-DahzdkhC.js";import{B as x}from"./Brush-BJ-myNsC.js";import{B as c}from"./Bar-DuLPR8zA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy0aiko3.js";import"./index-DorzE8c_.js";import"./index-C6o7i8Oe.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhmjJgZI.js";import"./isWellBehavedNumber-IDGRCsZw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-XwXOT9f_.js";import"./index-C_nXGIxS.js";import"./index-DKrzWSHd.js";import"./axisSelectors-BWhm0UuR.js";import"./d3-scale-qCvwfRiK.js";import"./renderedTicksSlice-CbFboWTW.js";import"./CartesianChart-Dhkzwurf.js";import"./chartDataContext-ONZEIQIl.js";import"./CategoricalChart-3eK3rQ5j.js";import"./CartesianAxis-BrAAElTJ.js";import"./Layer-BGkgrUb2.js";import"./Text-t2WYL4eB.js";import"./DOMUtils-Duwm3W6u.js";import"./useId-BeY-WYzc.js";import"./useBackwardsCompatibleTheme-D-bpn3x_.js";import"./Label-CLKDqP8g.js";import"./ZIndexLayer-ClRRfs-A.js";import"./types-Bc5JlxqX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BtjOxZbL.js";import"./useAnimationId-1FoMJdgT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BArip1lr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DyMxVbzF.js";import"./tooltipContext-C8yzlazJ.js";import"./RegisterGraphicalItemId-CM5ihZMg.js";import"./ErrorBarContext-7DKBlL9r.js";import"./GraphicalItemClipPath-CNT3Oe3B.js";import"./SetGraphicalItem-CrvsS0eI.js";import"./getZIndexFromUnknown-CvXnk0Gx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DJQDelow.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
