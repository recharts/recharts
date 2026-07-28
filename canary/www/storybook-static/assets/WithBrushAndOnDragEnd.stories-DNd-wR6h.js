import{R as t}from"./iframe-C-D94QkC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BKwIbV_L.js";import{B as p}from"./BarChart-B2ZAHipb.js";import{X as l}from"./XAxis-CUwTyuxs.js";import{Y as h}from"./YAxis-gSjGcUn4.js";import{B as x}from"./Brush-C0B2957O.js";import{B as c}from"./Bar-oPfR9M-J.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2piy3LIT.js";import"./index-BIeQrv2Z.js";import"./index-CTfmrlJH.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I0oO3hVe.js";import"./isWellBehavedNumber-CW3dwjTv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8SdZUxr.js";import"./index-CVumJag_.js";import"./index-Dq3qqcGT.js";import"./renderedTicksSlice-DheIhU3o.js";import"./axisSelectors-RkZJ2biJ.js";import"./d3-scale-DDXy3r7j.js";import"./CartesianChart-DbK0sv1B.js";import"./chartDataContext-BuH_IHSv.js";import"./CategoricalChart-ChFoWP6Y.js";import"./CartesianAxis-DdUGRqEL.js";import"./Layer-CmhR3M6w.js";import"./Text-BGLH01e4.js";import"./DOMUtils-CTJUeuSO.js";import"./Label-CEdJYykS.js";import"./ZIndexLayer-D0m4rTFg.js";import"./types-BVMbYXvi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-FU4W4bTr.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DC1yWL3Z.js";import"./AnimatedItems-CNnKFhUF.js";import"./useAnimationId-Qux1tHbm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbIEjk7Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-mVYQLGWO.js";import"./RegisterGraphicalItemId-BEroCjsR.js";import"./ErrorBarContext-xYFd4kf3.js";import"./GraphicalItemClipPath-D86AO83t.js";import"./SetGraphicalItem-D38tmZrb.js";import"./getZIndexFromUnknown-DUi7QXhQ.js";import"./graphicalItemSelectors-B-svnAv6.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
