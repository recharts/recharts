import{R as t}from"./iframe-CVDCphxx.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D76eaAVt.js";import{B as p}from"./BarChart-CfvqrZlE.js";import{X as l}from"./XAxis-BaXZzVL8.js";import{Y as h}from"./YAxis-BxEmWMWe.js";import{B as x}from"./Brush-Dkw5QxiO.js";import{B as c}from"./Bar-zmWu46zM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-t8E79NJX.js";import"./index-BJO-ep7J.js";import"./index-BpxiUomY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_5oDYmC.js";import"./isWellBehavedNumber-DVmFYWt0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEnb7ufM.js";import"./axisSelectors-ChjpNCZD.js";import"./d3-scale-Cu204p6o.js";import"./index-CihE6hhr.js";import"./index-DCMHKzI9.js";import"./renderedTicksSlice-B1XRs7d0.js";import"./index-BJY-g_ad.js";import"./CartesianChart-D47jpHMU.js";import"./chartDataContext-C-FdSEwK.js";import"./CategoricalChart-D7b0lra6.js";import"./CartesianAxis-BZu_fnrb.js";import"./Layer-CMIguF8f.js";import"./Text-Dgr5qdov.js";import"./DOMUtils-DF_qw-1b.js";import"./useId-CWzKPTKL.js";import"./useBackwardsCompatibleTheme-MdPX2i5n.js";import"./Label-CplunMl3.js";import"./ZIndexLayer-BeV_pa6H.js";import"./types-qF5qaMWi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BHXlTf3v.js";import"./useAnimationId-Bwtwv5PP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-g52yuu9_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BczdQoPB.js";import"./tooltipContext-D9nws42x.js";import"./RegisterGraphicalItemId-z4StfXHb.js";import"./ErrorBarContext-Dl0aWSaL.js";import"./GraphicalItemClipPath-C3-aN0c_.js";import"./SetGraphicalItem-Xr4kmH_o.js";import"./getZIndexFromUnknown-Dj8bIyb_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CJ6oKWPg.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
