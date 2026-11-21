import{R as t}from"./iframe-ClXUkryL.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DzUiPhG1.js";import{B as p}from"./BarChart-Dg8-TzZM.js";import{X as l}from"./XAxis-DAmFlkh4.js";import{Y as h}from"./YAxis-CSB-tj7Q.js";import{B as x}from"./Brush-eiMUptpU.js";import{B as c}from"./Bar-CL-TKqP4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./throttle-CEjR9znF.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./RechartsWrapper-C4CsKSyh.js";import"./axisSelectors-BImpBlrZ.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Crqvu4_S.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./CartesianAxis-DC6JqvO0.js";import"./Layer-L872TvYf.js";import"./Text-C9XRZpa-.js";import"./ZIndexLayer-CVBpK4Om.js";import"./Label-BMxAhfb3.js";import"./types-la06XTph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Br1h1G1A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KaRylKEj.js";import"./useAnimationId-Dks1GaGE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./tooltipContext-BY7561bJ.js";import"./ErrorBarContext-BbIl9cJe.js";import"./activeStyles-CbEtMY8z.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./getZIndexFromUnknown-C_8ZJkTx.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./omit-CGaxN5Wh.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
