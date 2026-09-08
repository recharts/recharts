import{R as t}from"./iframe-C4it_pSb.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bh8QqGYC.js";import{B as p}from"./BarChart-Bf6sOYF6.js";import{X as l}from"./XAxis-D3_RnCQs.js";import{Y as h}from"./YAxis-C2MK_IRI.js";import{B as x}from"./Brush-CulqET7e.js";import{B as c}from"./Bar-D2YbGeDX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BWURsltW.js";import"./index-Djot3vWG.js";import"./index-CyjOeiI7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bk5elTFQ.js";import"./isWellBehavedNumber-C0XEinXA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-WzaEVVng.js";import"./axisSelectors-iywT_uRR.js";import"./d3-scale-CNOoHAop.js";import"./index-B26DTqYo.js";import"./index-BP3VCIYx.js";import"./renderedTicksSlice-B9Dyi-a8.js";import"./index-EJd8pUya.js";import"./CartesianChart-CHj9PLOA.js";import"./chartDataContext-BS14VVpw.js";import"./CategoricalChart-CdGO65GN.js";import"./CartesianAxis-zFiEPAc_.js";import"./Layer-Y_kQ5bDn.js";import"./Text-C95jy76s.js";import"./DOMUtils-CPJ15NMN.js";import"./useId-CmMKngVw.js";import"./useBackwardsCompatibleTheme-DQJyo6AF.js";import"./Label-n6TZOZVu.js";import"./ZIndexLayer-Np7ngrTh.js";import"./types-B3II6rjl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BXHU6KSj.js";import"./useAnimationId-DGQm40Oa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBBlhEC2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D3E5vr02.js";import"./tooltipContext-BokE8xN3.js";import"./RegisterGraphicalItemId-C6_S5Zs0.js";import"./ErrorBarContext-CcVjks2v.js";import"./GraphicalItemClipPath-DOE5ucpL.js";import"./SetGraphicalItem-Crl-vV7P.js";import"./getZIndexFromUnknown-CeQcxris.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CplXrx77.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
