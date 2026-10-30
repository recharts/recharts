import{R as t}from"./iframe-C1szs8Ge.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-2Z2wgmDW.js";import{B as p}from"./BarChart-CIi6iv3e.js";import{X as l}from"./XAxis-DAR-gQPA.js";import{Y as h}from"./YAxis-BL_YScKz.js";import{B as x}from"./Brush-BeMUAjGf.js";import{B as c}from"./Bar-BCMMQZF2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CIiYtXni.js";import"./throttle-BnhEbDBT.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./RechartsWrapper-xd3kaPdN.js";import"./axisSelectors-D9npcJPs.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D4TUcbxA.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./CartesianAxis-8dKjDOC0.js";import"./Layer-KO-TauTm.js";import"./Text-BAXgr8vS.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./Label-DKy-t54T.js";import"./types-DbKLPbYB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-iP8lFrAf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Qa1VLo8n.js";import"./useAnimationId-Cg9ej0wY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./tooltipContext-Qg5R6Zry.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./ErrorBarContext-C-G-Mak5.js";import"./activeStyles-CqRrjByh.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getZIndexFromUnknown-COGfRxGI.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./fillDefinitions-DO3waM5C.js";import"./omit-C154lu3f.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
