import{R as t}from"./iframe-EeI-1j8u.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DHZxeEos.js";import{B as p}from"./BarChart-w1u1K-9a.js";import{X as l}from"./XAxis-CIWygb1G.js";import{Y as h}from"./YAxis-BRal3r11.js";import{B as x}from"./Brush-C0lQaC0r.js";import{B as c}from"./Bar-J9fPx4i9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-nYBnVSVd.js";import"./throttle-CXPRMSpL.js";import"./index-pgwVXRJO.js";import"./index-jJDdBZp4.js";import"./RechartsWrapper-BS1aWGo0.js";import"./axisSelectors-Cv1-8nVO.js";import"./polarAxisSelectors-D7djmlhq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DCtxOwfO.js";import"./index-BylysGcb.js";import"./index-BCOZ7QjH.js";import"./renderedTicksSlice-Y-CkzfGU.js";import"./index-DKT02nAj.js";import"./CartesianChart-e1TnBbHn.js";import"./ZIndexPortal-pivMB2CQ.js";import"./CategoricalChart-BQ46uFlP.js";import"./CartesianAxis-Qxk-B3SK.js";import"./Layer-U6GYHWx5.js";import"./Text-BY4Mp6iu.js";import"./DOMUtils-CO7WypWi.js";import"./ZIndexLayer-D_EbKSUX.js";import"./Label-BhnhNpXu.js";import"./types-DqUdmTjU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D0m07rKR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCoDLphy.js";import"./useAnimationId-CIis84-o.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2Xd3mgO.js";import"./tooltipContext-C5ItyuzL.js";import"./dataEntryStyles-RarJtqD3.js";import"./ErrorBarContext-Cxsgmfrf.js";import"./activeStyles-T-Ne1kjI.js";import"./SetGraphicalItem-DIh7Z4HQ.js";import"./getZIndexFromUnknown-B1ltCxHN.js";import"./useEffectiveDataKey-Ce4gQ9XU.js";import"./FillDefinition-DuMwyIxx.js";import"./omit-CKFdUnHM.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
