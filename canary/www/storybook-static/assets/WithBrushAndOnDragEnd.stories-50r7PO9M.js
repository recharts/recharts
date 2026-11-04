import{R as t}from"./iframe-B_nNZpI2.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-FViTDxbD.js";import{B as p}from"./BarChart-CfaYPzT0.js";import{X as l}from"./XAxis-BnGisaM6.js";import{Y as h}from"./YAxis-2XrZ_LwE.js";import{B as x}from"./Brush-C99Daf1w.js";import{B as c}from"./Bar-Bu7FASb1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BCFRFaLp.js";import"./throttle-CfowHFSP.js";import"./index-CvC1anYi.js";import"./index-CLDy2H7V.js";import"./RechartsWrapper-C-v3LlOW.js";import"./axisSelectors-BlrbKtsJ.js";import"./polarAxisSelectors-c40A3UY1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BP2r_61E.js";import"./index-D3rZTjme.js";import"./index-CMcdxE-j.js";import"./renderedTicksSlice-BZkCDNTa.js";import"./index-CkI1O38Z.js";import"./fillDefinitions-BvN15Ps2.js";import"./CartesianChart-Ct6HzlQ7.js";import"./ZIndexPortal-fcfY6DBt.js";import"./CategoricalChart-CN7dS280.js";import"./CartesianAxis-CmpohTUe.js";import"./Layer-BI_5R4V_.js";import"./Text-D-JNnNjs.js";import"./DOMUtils-adSDEv62.js";import"./ZIndexLayer-DP7ICro2.js";import"./Label-CETIJz5j.js";import"./types-CwUR8ti8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DxewBo1N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8RP3-tc.js";import"./useAnimationId-DARA-gCu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2gG84cu.js";import"./tooltipContext-goTd0_TX.js";import"./dataEntryStyles-RBGB6YIO.js";import"./ErrorBarContext-DhTGqk3o.js";import"./activeStyles-BsBbQeVt.js";import"./SetGraphicalItem-BWi71ya4.js";import"./getZIndexFromUnknown-UdxXNnsn.js";import"./useEffectiveDataKey-BKhq6vYl.js";import"./omit-lQ-G7lRl.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
