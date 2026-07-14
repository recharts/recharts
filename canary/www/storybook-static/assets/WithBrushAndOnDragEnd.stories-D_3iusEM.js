import{R as t}from"./iframe-n-wQuCBi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-agpgazdg.js";import{B as p}from"./BarChart-BE4FKAKS.js";import{X as l}from"./XAxis-CqwZgwEA.js";import{Y as h}from"./YAxis-bBYdAORl.js";import{B as x}from"./Brush-BufFtM1m.js";import{B as c}from"./Bar-CmJr5hnB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DNZjDlXp.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./index-ifJ0vXzc.js";import"./renderedTicksSlice-DRvXNutS.js";import"./axisSelectors-DJGA74tj.js";import"./d3-scale-Dq3pQP3q.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./CartesianAxis-BKtFBsNE.js";import"./Layer-q34S3x6j.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./Label-1gu4eHha.js";import"./ZIndexLayer-CKoiASff.js";import"./types-DiIuPkat.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DqIERWOr.js";import"./AnimatedItems-CukHfitT.js";import"./useAnimationId-CnnOw5XR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CrC21nkp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_ggCq42.js";import"./RegisterGraphicalItemId-DirXNoHy.js";import"./ErrorBarContext-Dm_7tkVC.js";import"./GraphicalItemClipPath-NXqqiVYJ.js";import"./SetGraphicalItem-jej3rFoE.js";import"./getZIndexFromUnknown-CbHOUsb5.js";import"./graphicalItemSelectors-D5_1BCSw.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
