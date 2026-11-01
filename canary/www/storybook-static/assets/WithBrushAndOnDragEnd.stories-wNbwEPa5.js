import{R as t}from"./iframe-Bm_JRRDc.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CE1MC-Bj.js";import{B as p}from"./BarChart-BaKeKbSD.js";import{X as l}from"./XAxis-CYGYoqLr.js";import{Y as h}from"./YAxis-DkJzVEan.js";import{B as x}from"./Brush-D4zuBR5Z.js";import{B as c}from"./Bar-Drfa9bur.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cwcw9Llo.js";import"./throttle-Di0g5pz3.js";import"./index-2pvHcFpK.js";import"./index-DwUcBVgp.js";import"./RechartsWrapper-CWqhr_G8.js";import"./axisSelectors-CQbwMXjx.js";import"./polarAxisSelectors-CFmXVpQm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_mEsQ66i.js";import"./index-B22Nz6Ed.js";import"./index-C9h-Jb--.js";import"./renderedTicksSlice-DeG-maS7.js";import"./index-CuKK0pvL.js";import"./CartesianChart-BtCYpchS.js";import"./ZIndexPortal-Cd4FT9ez.js";import"./CategoricalChart-Ue3TZSpb.js";import"./CartesianAxis-D65lIMFu.js";import"./Layer-C38IBOtq.js";import"./Text-nM-LHLsO.js";import"./DOMUtils-C1tRULq9.js";import"./pageBackground-BcaJILnW.js";import"./ZIndexLayer-DBCQDkbL.js";import"./Label-v2uuRqjZ.js";import"./types-BgOFnMuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DfZYoox_.js";import"./LabelList-CIhUYtSm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVcWQa2n.js";import"./fillDefinitions-D55-ziDc.js";import"./useAnimationId-7tWnytho.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOiWWiaf.js";import"./tooltipContext-CKQTaHLn.js";import"./dataEntryStyles-p95uc1IW.js";import"./ErrorBarContext-Bvj-sJVI.js";import"./activeStyles-BuWIAazB.js";import"./SetGraphicalItem-IhBPl0xA.js";import"./getZIndexFromUnknown-CYHnsZcu.js";import"./useEffectiveDataKey-1gMAnkt8.js";import"./omit-XhcW-dlg.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
