import{R as t}from"./iframe-BB7QZXLs.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-tJAM9iWj.js";import{B as p}from"./BarChart-CYbDhhTW.js";import{X as l}from"./XAxis-XcDOkDmd.js";import{Y as h}from"./YAxis-DSzkAjgg.js";import{B as x}from"./Brush-CqhDxCZF.js";import{B as c}from"./Bar-B9bxzyYW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BIPObZtO.js";import"./index-dVHp78rg.js";import"./index-_M8YNH98.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpmXZA4k.js";import"./isWellBehavedNumber-BJy-JztG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-e66Xzxgl.js";import"./axisSelectors-C9Ww97e2.js";import"./d3-scale-iQiKVngo.js";import"./index-VwBP7ySp.js";import"./index-DhA5-aT4.js";import"./renderedTicksSlice-qkMRB7Jj.js";import"./index-qzDpnTu9.js";import"./CartesianChart-D1IApd6R.js";import"./chartDataContext-CBZ7yVc5.js";import"./CategoricalChart-DG2kQqAq.js";import"./CartesianAxis-ByfKlAGp.js";import"./Layer-07NELy8e.js";import"./Text-CEEsNHtu.js";import"./DOMUtils-C2ZnKXb0.js";import"./useId-BVIeIeeB.js";import"./useBackwardsCompatibleTheme-BKLDWadY.js";import"./Label-ssYRudSZ.js";import"./ZIndexLayer-BnNru_wJ.js";import"./types-D6b6NoLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BHb_g3It.js";import"./useAnimationId-C1x4gWZO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BdgR7Lei.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHeKF_6U.js";import"./tooltipContext-C9TsINef.js";import"./RegisterGraphicalItemId-BrQFxchm.js";import"./ErrorBarContext-Cj0JdL2W.js";import"./GraphicalItemClipPath-DgpfNhEU.js";import"./SetGraphicalItem-BRob5fGw.js";import"./getZIndexFromUnknown-DJIHPW7k.js";import"./useGraphicalItemIdentity-DsYSBEP4.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
