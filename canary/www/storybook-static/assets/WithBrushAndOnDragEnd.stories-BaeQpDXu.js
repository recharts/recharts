import{R as t}from"./iframe-BTkF_ck3.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DMb1iT4y.js";import{B as p}from"./BarChart-CEdwwzxf.js";import{X as l}from"./XAxis-XXOeJL4_.js";import{Y as h}from"./YAxis-xlfioMoU.js";import{B as x}from"./Brush-DXQrljXH.js";import{B as c}from"./Bar-DJns9iwc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./throttle-C296Coau.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./RechartsWrapper-Bfhw4EQp.js";import"./axisSelectors-CNaIfHAW.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmgL8dDE.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./CartesianAxis-BPFkFfQP.js";import"./Layer-DbGB2kqV.js";import"./Text-TXIjjn1-.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./Label-BzrvAI-c.js";import"./types-8wxp4ZmL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-2kTqXwcO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRH2iL4s.js";import"./useAnimationId-BxLJVC0T.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./tooltipContext-CfPN8kce.js";import"./dataEntryStyles-CxN2r_W-.js";import"./ErrorBarContext-nR9VGpMB.js";import"./activeStyles-DacmxpXN.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getZIndexFromUnknown-lCk3uQXh.js";import"./useEffectiveDataKey-IRMZLONN.js";import"./fillDefinitions-BHSDIcCA.js";import"./omit-DEd-BCVA.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
