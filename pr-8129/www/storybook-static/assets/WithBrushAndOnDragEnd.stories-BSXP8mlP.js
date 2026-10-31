import{R as t}from"./iframe-CIzVR-2-.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CJv9lj0d.js";import{B as p}from"./BarChart-BexQ4yu4.js";import{X as l}from"./XAxis-DuVjd9Cl.js";import{Y as h}from"./YAxis-BM-BvKCY.js";import{B as x}from"./Brush-GdQoyNSO.js";import{B as c}from"./Bar-NqM9nJn7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./throttle-g_l7Z0ZN.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./RechartsWrapper-CaOZ9lUC.js";import"./axisSelectors-mbotnnaX.js";import"./polarAxisSelectors-D4S23sJN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CN1jPZAK.js";import"./index-B0W9noqG.js";import"./index-CJvlApl9.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./CartesianAxis-B1xkqmAC.js";import"./Layer-BlSvO1E4.js";import"./Text-D3Kha142.js";import"./DOMUtils-D-TrccP0.js";import"./pageBackground-DPTEcMe3.js";import"./ZIndexLayer-eeqaM0q4.js";import"./Label-MgaHTNfc.js";import"./types-Ci0QqKEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CqtDfKww.js";import"./LabelList-BTCEEH0Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFbXfnvF.js";import"./useAnimationId-BGu4RQqd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./tooltipContext-DceeobfX.js";import"./dataEntryStyles-DxP76lNF.js";import"./ErrorBarContext-BpJZX0b6.js";import"./activeStyles-Dl0q6Ayx.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./getZIndexFromUnknown-Bb95lncj.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./omit-DfFtAPPG.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
