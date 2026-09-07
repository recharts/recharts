import{R as t}from"./iframe-BkeN00Xj.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B-x7pTGs.js";import{B as p}from"./BarChart-BuxnCdN0.js";import{X as l}from"./XAxis-CtkFJuG7.js";import{Y as h}from"./YAxis-DJRwhJXR.js";import{B as x}from"./Brush-Dmw4fZDB.js";import{B as c}from"./Bar-TEbFaxFg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVvQgSvv.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./isWellBehavedNumber-DpaF5Qbq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3Vxgl3Z.js";import"./axisSelectors-CdQeSFob.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./CartesianAxis-LtwF5IC-.js";import"./Layer-CQvSRJEy.js";import"./Text-B4YmNBvy.js";import"./DOMUtils-BtNtGSBk.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./Label-C5oKPJnD.js";import"./ZIndexLayer-BM7jKjXD.js";import"./types-CHY5UDxi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./useAnimationId-DIIcOQR8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DByb3FOE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./tooltipContext-ztpyaTwC.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./ErrorBarContext-CjOXvaZb.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./getZIndexFromUnknown-Db7dNzRv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CDfU_78w.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
