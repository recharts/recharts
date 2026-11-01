import{R as t}from"./iframe-CcMBsn7a.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DFRlFrsj.js";import{B as p}from"./BarChart-B0EtTrU2.js";import{X as l}from"./XAxis-Dcud2AjR.js";import{Y as h}from"./YAxis-BnF9M7Oe.js";import{B as x}from"./Brush-ClpC4ZW_.js";import{B as c}from"./Bar-Djl7boDS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_I-9eVr.js";import"./throttle-LNv5qelv.js";import"./index-BSB29nKH.js";import"./index-SlWo1Crq.js";import"./RechartsWrapper-C5Uizgqh.js";import"./axisSelectors-CpYzXpFY.js";import"./polarAxisSelectors-DoAcr0yY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DgNN2Fjk.js";import"./index-CdPGreQS.js";import"./index-CVuW9U_Y.js";import"./renderedTicksSlice-BvTPYPK6.js";import"./index-DNvfWRuY.js";import"./fillDefinitions-Cn95lAWR.js";import"./CartesianChart-GrqiJAJ3.js";import"./ZIndexPortal-CBXOiKa0.js";import"./CategoricalChart-BZVQkMIT.js";import"./CartesianAxis-Dr7Ti05X.js";import"./Layer-CeaFY6L3.js";import"./Text-Dz_XqFLj.js";import"./DOMUtils-DHsAC8dS.js";import"./ZIndexLayer-BQYqJ9ai.js";import"./Label-M1IGuJE8.js";import"./types-6qK0DF3w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BOiHk-iP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJTdQbL8.js";import"./useAnimationId-BiyhMFfV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ce6BVgWv.js";import"./tooltipContext-4MmzbFvB.js";import"./dataEntryStyles-Bttpss0z.js";import"./ErrorBarContext-B0K3ejq2.js";import"./activeStyles-CkIUhE4Y.js";import"./SetGraphicalItem-D39u22t5.js";import"./getZIndexFromUnknown-Bo3A1RnC.js";import"./useEffectiveDataKey-C8oLMiMN.js";import"./omit-XgeoO07C.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
