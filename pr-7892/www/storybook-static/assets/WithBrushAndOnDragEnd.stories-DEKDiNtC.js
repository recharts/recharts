import{R as t}from"./iframe-C9psKz5H.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DpmGRp-Q.js";import{B as p}from"./BarChart-BC9qcuZ8.js";import{X as l}from"./XAxis-7TSk_dxf.js";import{Y as h}from"./YAxis-hQp9fU0j.js";import{B as x}from"./Brush-BslMKppc.js";import{B as c}from"./Bar-FCCAvm-T.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ybqMtWK8.js";import"./index-D90R4_Ry.js";import"./index-DO4kgVpb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DXpX2jzi.js";import"./isWellBehavedNumber-DtoestQf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DBEUhNwk.js";import"./axisSelectors-BVR1qW5C.js";import"./d3-scale-DOPiKI9I.js";import"./index-Boed59-W.js";import"./index-C0Ds42Ok.js";import"./renderedTicksSlice-C81k7Y0M.js";import"./index-C4HmYpYK.js";import"./CartesianChart-DqQaN6li.js";import"./chartDataContext-C8FZLZVj.js";import"./CategoricalChart-oiLx-c2-.js";import"./CartesianAxis-QX-AYICp.js";import"./Layer-D1lf7NaI.js";import"./Text-CxmkIGJJ.js";import"./DOMUtils-5QLcrI6X.js";import"./useId-BmRjTouL.js";import"./useBackwardsCompatibleTheme-u-6iGz_C.js";import"./Label-tLoAdhBg.js";import"./ZIndexLayer-Dp6mI4S2.js";import"./types-Bo9cWGoI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CEzVE_qf.js";import"./useAnimationId-NO-aRC2z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DiC0sGbs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_bGVHtn.js";import"./tooltipContext-C6VvXhV0.js";import"./RegisterGraphicalItemId-Bou02MzC.js";import"./ErrorBarContext-C0X-i2LX.js";import"./GraphicalItemClipPath-BiRBEzG3.js";import"./SetGraphicalItem-DbUk56bY.js";import"./getZIndexFromUnknown-zWUOnkFn.js";import"./useGraphicalItemIdentity-CFJPU_4U.js";import"./dataEntryStyles-DaZUr0c-.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
