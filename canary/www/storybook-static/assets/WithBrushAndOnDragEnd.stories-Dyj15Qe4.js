import{R as t}from"./iframe-Bo_zsOWR.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-OHt7JoW7.js";import{B as p}from"./BarChart-CQru6Dh5.js";import{X as l}from"./XAxis-D98tl-gx.js";import{Y as h}from"./YAxis-CKvuzz2c.js";import{B as x}from"./Brush-DwK9VCeC.js";import{B as c}from"./Bar-YM-qCCnO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BqQSOARz.js";import"./index-BFt4SfZr.js";import"./index-PR_8Seu8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUDDeE56.js";import"./isWellBehavedNumber-DciPVP_A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXOTGCmH.js";import"./axisSelectors-CoIK-Kuy.js";import"./d3-scale-CKJS4wTS.js";import"./index-krRAv2GK.js";import"./index-Mut52yxE.js";import"./renderedTicksSlice-CdFXeG0P.js";import"./index-DviWxMqn.js";import"./CartesianChart-CzEQA5tK.js";import"./chartDataContext-Cxr8uE5y.js";import"./CategoricalChart-fHgXn9UL.js";import"./CartesianAxis-CKvATVWA.js";import"./Layer-CAovhaI5.js";import"./Text-bwywBWWq.js";import"./DOMUtils-Bc-kV__a.js";import"./useId-DYywqoqR.js";import"./useBackwardsCompatibleTheme-Qf0ZXpAz.js";import"./Label-9TZrIdzh.js";import"./ZIndexLayer-BMSvUtDW.js";import"./types-BNv_Hlvb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ctbn0EH3.js";import"./useAnimationId-D_pJ9jTl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjhkbRaf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bp87fl58.js";import"./tooltipContext-RpjNvuhP.js";import"./RegisterGraphicalItemId-Cd8-cCZH.js";import"./ErrorBarContext-Dd08ywVQ.js";import"./GraphicalItemClipPath-Dbz5b6yM.js";import"./SetGraphicalItem-Drf2tYBV.js";import"./getZIndexFromUnknown-tiaLien0.js";import"./useGraphicalItemIdentity-jZjWs-3I.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
