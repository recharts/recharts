import{R as t}from"./iframe-CQz631Nk.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BiY29BHb.js";import{B as p}from"./BarChart-BJw2P9vc.js";import{X as l}from"./XAxis-DHy0v3jD.js";import{Y as h}from"./YAxis-CWW4X-Ki.js";import{B as x}from"./Brush-Cf1OxTTs.js";import{B as c}from"./Bar-BjKBeWJq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-tlVaut9a.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Btix0jtf.js";import"./axisSelectors-SdSrtuX_.js";import"./d3-scale-DbP7sHTP.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./renderedTicksSlice-lkRk7heP.js";import"./index-CUVgoBSt.js";import"./CartesianChart-WE1bkj_w.js";import"./chartDataContext-ef-S8XKm.js";import"./CategoricalChart-6rYejfBQ.js";import"./CartesianAxis-Dd11BP7Z.js";import"./Layer-DGn6U-cs.js";import"./Text-CpmwLb5H.js";import"./DOMUtils-V3cEDC71.js";import"./useId-BSAAHf1D.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./Label-DQhaNgKG.js";import"./ZIndexLayer-LgQGURcB.js";import"./types-qf3XACEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B3DzMe78.js";import"./useAnimationId-DN0POjqt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cs9OQ1Xh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./tooltipContext-CezEY4OY.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./ErrorBarContext-BVC7bug8.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./getZIndexFromUnknown-CZumgnna.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-gRJfRcSR.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
