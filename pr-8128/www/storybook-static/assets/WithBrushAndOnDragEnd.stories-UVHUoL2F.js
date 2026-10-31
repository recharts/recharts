import{R as t}from"./iframe-CqZM7-m_.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C2bhYwAU.js";import{B as p}from"./BarChart-DdXqbWYM.js";import{X as l}from"./XAxis-KlRKQHwy.js";import{Y as h}from"./YAxis-ae7SlnFd.js";import{B as x}from"./Brush-CNLPQmzf.js";import{B as c}from"./Bar-s6W-sAwP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./throttle-BMiHfZwg.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./RechartsWrapper-C-tKczMb.js";import"./axisSelectors-CU7asiQ5.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaJTA9nk.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./CartesianAxis-F_8zYdOn.js";import"./Layer--KWigSyO.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./Label-CFulNYa4.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-CUygaBJV.js";import"./LabelList-DhQNMiPW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uSuGTrTU.js";import"./fillDefinitions-1X04y-fM.js";import"./useAnimationId-Bff8cv61.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./tooltipContext-C3dWHiK2.js";import"./dataEntryStyles-Df1iMIlW.js";import"./ErrorBarContext-CF_mHvca.js";import"./activeStyles-cNHowlQL.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./getZIndexFromUnknown-D8eNYpxd.js";import"./useEffectiveDataKey-B0QeK97Q.js";import"./omit-C681iIyE.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
