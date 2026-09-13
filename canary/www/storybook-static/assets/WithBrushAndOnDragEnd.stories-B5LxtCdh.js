import{R as t}from"./iframe-D3DZ11bG.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-koFSVmIS.js";import{B as p}from"./BarChart-Drkjy_nu.js";import{X as l}from"./XAxis-BAFnXrYz.js";import{Y as h}from"./YAxis-BVoshuZP.js";import{B as x}from"./Brush-CcEnZSru.js";import{B as c}from"./Bar-DO5v3VPf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvSgxNGl.js";import"./index-DAXiWeRu.js";import"./index-DCVZlAXE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrEHrPl8.js";import"./isWellBehavedNumber-DgENaxxs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2mvRmank.js";import"./axisSelectors-BkLxkidb.js";import"./d3-scale-7R73k4zX.js";import"./index-DunVsAad.js";import"./index-B2DufawG.js";import"./renderedTicksSlice-Z6YIazxJ.js";import"./index-DCmUTN9n.js";import"./CartesianChart-Cp3-TDst.js";import"./chartDataContext-D1-Rpxku.js";import"./CategoricalChart-I8UNjAYq.js";import"./CartesianAxis-CFVJgng7.js";import"./Layer-CwzWBsuX.js";import"./Text-C7ib1IN2.js";import"./DOMUtils-oxRtXime.js";import"./useId-CgLLCsym.js";import"./useBackwardsCompatibleTheme-s53ki85_.js";import"./Label-Bbim0zl5.js";import"./ZIndexLayer-DQIxNGdf.js";import"./types-D0iIZkpY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-pWsx1jF-.js";import"./useAnimationId-CJPwsDgU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B3_YmP4-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B-ZLq9Vo.js";import"./tooltipContext-DkdLhzjm.js";import"./RegisterGraphicalItemId-BuIVKkOb.js";import"./ErrorBarContext-DowgzNp1.js";import"./GraphicalItemClipPath-B4npPoNm.js";import"./SetGraphicalItem-DA1q5iTH.js";import"./getZIndexFromUnknown-BYMbjL2X.js";import"./useGraphicalItemIdentity-B9okNIr3.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
