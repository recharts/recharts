import{R as t}from"./iframe-DHxweIO9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-oAGhcyxs.js";import{B as p}from"./BarChart-Bvpjuvay.js";import{X as l}from"./XAxis-by-9KJMG.js";import{Y as h}from"./YAxis-Cdmy20fv.js";import{B as x}from"./Brush-BTrQX6At.js";import{B as c}from"./Bar-CAd9YPjJ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-LtTlQghk.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./get-C0Lt804T.js";import"./resolveDefaultProps-BFfik0lP.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";import"./CartesianAxis-CVNW_DPG.js";import"./Layer-Ck33QkwT.js";import"./Text-r1UAkK_M.js";import"./DOMUtils-CB5jUme8.js";import"./Label-Hedzo6WI.js";import"./ZIndexLayer-tleOLVC8.js";import"./types-D6mO4BwK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Bs6K6Vjj.js";import"./AnimatedItems-CcOK_yF7.js";import"./useAnimationId-CKZSDbra.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eYgp7t5C.js";import"./ActiveShapeUtils-BTTuLaTo.js";import"./RegisterGraphicalItemId-D9fHh-dg.js";import"./ErrorBarContext-Dm9lKBps.js";import"./GraphicalItemClipPath-DNkFii-i.js";import"./SetGraphicalItem-BdtIdG4P.js";import"./getZIndexFromUnknown-B7WRUIro.js";import"./graphicalItemSelectors-B6UttE3J.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
