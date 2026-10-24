import{R as t}from"./iframe-CwjnBdPJ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DCK0oMjs.js";import{B as p}from"./BarChart-CCT6rZfe.js";import{X as l}from"./XAxis-DGiS1jyS.js";import{Y as h}from"./YAxis-BJPBUcLn.js";import{B as x}from"./Brush-ZKMQB4Pa.js";import{B as c}from"./Bar-Bvkn-NeY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NOTipQ48.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DssFoHZN.js";import"./axisSelectors-yVNmvCZQ.js";import"./d3-scale-B8EUKI5D.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-Bgw_dChb.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./CartesianAxis-BCC92CcD.js";import"./Layer-mPZxMc5S.js";import"./Text-CkJvnqMb.js";import"./pageBackground-CPZsdU6n.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./Label-DUPKJ4wq.js";import"./ZIndexLayer-Cf72LToz.js";import"./dataEntryStyles-MXIeXXjf.js";import"./types-Bf6WAwuG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Dq37JbhA.js";import"./useAnimationId-CsReVCtf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYb6tTOo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./tooltipContext-CoqwBK9n.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./ErrorBarContext-Dx-lWvRW.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getZIndexFromUnknown-ByNeKVDU.js";import"./useEffectiveDataKey-Cb7tOd6S.js";import"./omit-DD5rNiKZ.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ut as __namedExportsOrder,ct as default};
