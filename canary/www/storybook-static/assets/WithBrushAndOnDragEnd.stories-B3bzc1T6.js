import{R as t}from"./iframe-D4CuLoZz.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-SXe885_i.js";import{B as p}from"./BarChart-DATp8lW6.js";import{X as l}from"./XAxis-eawce65C.js";import{Y as h}from"./YAxis-LKz9SoCr.js";import{B as x}from"./Brush-GEOd8ALf.js";import{B as c}from"./Bar-KyGDk3_z.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CFokkZQV.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./get-DBuLXD7N.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./isWellBehavedNumber-BHyLU3rm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./renderedTicksSlice-DHw40_9x.js";import"./axisSelectors-BkOYejTH.js";import"./d3-scale-Bg-gbMqf.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./CartesianAxis-ntk7Om5m.js";import"./Layer-xCWemoOx.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./Label-CcUkFPjg.js";import"./ZIndexLayer-CwgCBSKX.js";import"./types-DyFRA-Bh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BYitAcng.js";import"./AnimatedItems-EJSTJ3cq.js";import"./useAnimationId-DrVwX4j9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wZa2ZWZX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./ErrorBarContext-uD9druzE.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getZIndexFromUnknown-iar16ZxL.js";import"./graphicalItemSelectors-DOamrowD.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
