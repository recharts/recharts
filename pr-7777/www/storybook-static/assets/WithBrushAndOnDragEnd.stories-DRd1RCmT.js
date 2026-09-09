import{R as t}from"./iframe-BysHx74D.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B9_IIDSS.js";import{B as p}from"./BarChart-DiOldat8.js";import{X as l}from"./XAxis-Bu0Olx-M.js";import{Y as h}from"./YAxis-BuISev1J.js";import{B as x}from"./Brush-DsIRaWF-.js";import{B as c}from"./Bar-mf8qlkvb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvXCXgu9.js";import"./index-BJxLMgN-.js";import"./index-H0SrxT4N.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5vv7I0d.js";import"./isWellBehavedNumber-oHvlto0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUyJnBgS.js";import"./axisSelectors-BPfQ7z4G.js";import"./d3-scale-DD00swLB.js";import"./index-CB_yz375.js";import"./index-DNsScqoB.js";import"./renderedTicksSlice-3X1ncpqb.js";import"./index-r38g0wHW.js";import"./CartesianChart-DmPHp5IF.js";import"./chartDataContext-9O_0ckbs.js";import"./CategoricalChart-Cn_rERmH.js";import"./CartesianAxis-CKvkK8kD.js";import"./Layer-BF34dHnr.js";import"./Text-BCrIO-O-.js";import"./DOMUtils-CXQBBarz.js";import"./useId-Bj8s3C04.js";import"./useBackwardsCompatibleTheme-Dm-8fXUv.js";import"./Label-BN43rvaR.js";import"./ZIndexLayer-lKptmcsL.js";import"./types-DGXblPho.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DsYEWi_U.js";import"./useAnimationId-COzQNsPr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BgPukjWy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-OXeos-xf.js";import"./tooltipContext-DyL0Ssur.js";import"./RegisterGraphicalItemId-B5UvF8cg.js";import"./ErrorBarContext-C3rhr1lE.js";import"./GraphicalItemClipPath-D2pDNvXJ.js";import"./SetGraphicalItem-CewCaUrF.js";import"./getZIndexFromUnknown-BUi5wy88.js";import"./useGraphicalItemIdentity-rkAwppzN.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
