import{R as t}from"./iframe-CovNYYUo.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CG1QRjTL.js";import{B as p}from"./BarChart-D0kvszau.js";import{X as l}from"./XAxis-Chp7Zboz.js";import{Y as h}from"./YAxis-C8zfjK9y.js";import{B as x}from"./Brush-CloiPn6b.js";import{B as c}from"./Bar-B_y4chwC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFV15FmS.js";import"./index-BOOo10Dt.js";import"./index-BX1OwXWy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C3KXfaUm.js";import"./isWellBehavedNumber-CBjh5bWe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcAFjHOR.js";import"./axisSelectors-DLPfwtJa.js";import"./d3-scale-8-fomhbE.js";import"./index-CJEqzZUU.js";import"./index-QRiHEery.js";import"./renderedTicksSlice-CESc-GFX.js";import"./index-B2LjI-r6.js";import"./CartesianChart-90if4UGz.js";import"./chartDataContext-H-ub9DU9.js";import"./CategoricalChart-BDIwdK2u.js";import"./CartesianAxis--m_-6qlQ.js";import"./Layer-DKlwDXlR.js";import"./Text-DEuItJ4K.js";import"./DOMUtils-De4xq-vL.js";import"./useId-Cjo1HJUq.js";import"./useBackwardsCompatibleTheme-DN97qP5V.js";import"./Label-9Le1xeRu.js";import"./ZIndexLayer-ZvhdQo8-.js";import"./types-KNQCcPDF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CJ9rAey6.js";import"./useAnimationId-JaizdS8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ba8s0q7Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D5kbOuDR.js";import"./tooltipContext-CBhBcA7p.js";import"./RegisterGraphicalItemId-Bcqk9WK5.js";import"./ErrorBarContext-QhTrXeZ4.js";import"./GraphicalItemClipPath-Ba1ve3pE.js";import"./SetGraphicalItem-CMRsJ6yg.js";import"./getZIndexFromUnknown-_WCAf4BA.js";import"./useGraphicalItemIdentity-Dsva0Zcm.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
