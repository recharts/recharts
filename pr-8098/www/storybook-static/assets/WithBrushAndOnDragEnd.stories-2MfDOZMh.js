import{R as t}from"./iframe-C-1IryXX.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-fsCRj6jn.js";import{B as p}from"./BarChart-DUj3hLRv.js";import{X as l}from"./XAxis-DgA8soXs.js";import{Y as h}from"./YAxis-BNLMUv-C.js";import{B as x}from"./Brush-C7jj3DvN.js";import{B as c}from"./Bar-3ypa2ByU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BhlxPQQ0.js";import"./throttle-_r7dS2f6.js";import"./index-D_guE_NV.js";import"./index-BpW2h4nW.js";import"./RechartsWrapper-Bb_GJAnC.js";import"./axisSelectors-DnbooZ92.js";import"./polarAxisSelectors-nNfiNjC3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK0ZBavL.js";import"./index-BM9qHJ3l.js";import"./index-CaHSXMyC.js";import"./renderedTicksSlice-B4PG9UaR.js";import"./index-BbeXMPlB.js";import"./CartesianChart-X1Ss8Xb_.js";import"./ZIndexPortal-D1pWS7G9.js";import"./CategoricalChart-CCP7izw9.js";import"./CartesianAxis-Boy6gEfE.js";import"./Layer-BY_4_n1M.js";import"./Text-bsivD33T.js";import"./pageBackground-BsKy__Zx.js";import"./ZIndexLayer-DcusPv6z.js";import"./Label-BTNrgHMM.js";import"./dataEntryStyles-RoHSwMuf.js";import"./types-Ca1J50vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BgJAhVhH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQECHtGD.js";import"./useAnimationId-B4AGcQCE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B19_Z8K8.js";import"./tooltipContext-D0AVn9Xk.js";import"./RegisterGraphicalItemId-BAsbW75f.js";import"./ErrorBarContext-CMFEKiC-.js";import"./activeStyles-DZ3GRzLP.js";import"./SetGraphicalItem-DzD-3glG.js";import"./getZIndexFromUnknown-Bg2Titf7.js";import"./useEffectiveDataKey-B3UErnsT.js";import"./omit-DnswMPG2.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
