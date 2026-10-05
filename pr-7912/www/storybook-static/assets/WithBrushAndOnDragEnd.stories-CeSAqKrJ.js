import{R as t}from"./iframe-zVk88q-r.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DfutBn7L.js";import{B as p}from"./BarChart-r_P3TCwH.js";import{X as l}from"./XAxis-DfHugD0J.js";import{Y as h}from"./YAxis-BU4R0oLg.js";import{B as x}from"./Brush-P4rhLe8Y.js";import{B as c}from"./Bar-DfAi5BdA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmkgAj5t.js";import"./index-DsALRTV8.js";import"./index-Bk0bK2TA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_GPAkFH.js";import"./isWellBehavedNumber-C-ZPk_Xp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0-bRbC3.js";import"./axisSelectors-CmXBEtTu.js";import"./d3-scale-CFGG9Jl0.js";import"./index-fUo0OINa.js";import"./index-DlbGxR67.js";import"./renderedTicksSlice-BX5u_Wlp.js";import"./index-C7LumEWu.js";import"./CartesianChart-CaeWlYzw.js";import"./chartDataContext-2A6w0qLe.js";import"./CategoricalChart-DJLnAv9C.js";import"./CartesianAxis-CfxKlxox.js";import"./Layer-lcnk2Jvi.js";import"./Text-Nx4ACQwF.js";import"./DOMUtils-Dnj4_Ujh.js";import"./useId-BC8SsZ2L.js";import"./useBackwardsCompatibleTheme-BjS2fGJi.js";import"./Label-CrnAbRyD.js";import"./ZIndexLayer-r6epNlFr.js";import"./types-gJ-qKTie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CE9fFFYl.js";import"./useAnimationId-DztKFKRO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-o8c6UGkH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-a-OI7kZz.js";import"./tooltipContext-t_fGIXBw.js";import"./RegisterGraphicalItemId-DbfLY7XL.js";import"./ErrorBarContext-DAwElSG5.js";import"./GraphicalItemClipPath-BL0H_9p-.js";import"./SetGraphicalItem-1sdGamMS.js";import"./getZIndexFromUnknown-CEffNke9.js";import"./useGraphicalItemIdentity-D7Hr4JLm.js";import"./dataEntryStyles-D5I8d5IK.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
