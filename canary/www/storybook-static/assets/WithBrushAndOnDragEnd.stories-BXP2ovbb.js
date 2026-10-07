import{R as t}from"./iframe-D7QPEs6x.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DRJU9auo.js";import{B as p}from"./BarChart-gda1TYww.js";import{X as l}from"./XAxis-CddzMe5D.js";import{Y as h}from"./YAxis-5bCl6v45.js";import{B as x}from"./Brush-Bh14Hoj4.js";import{B as c}from"./Bar-BUie-6je.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ct4NpkHt.js";import"./index-CJHqU6XL.js";import"./index-JZUC8P_o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRWlv-3y.js";import"./isWellBehavedNumber-DNiV3oks.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i3bpT-Yu.js";import"./axisSelectors-ApgCgdVz.js";import"./d3-scale-BExrlGPv.js";import"./index-BMjjiw1C.js";import"./index-DHFQnlSZ.js";import"./renderedTicksSlice-laAQTg1Q.js";import"./index-wtCc4zD7.js";import"./CartesianChart-C9MabHj3.js";import"./chartDataContext-B6RxQWBJ.js";import"./CategoricalChart-vhkNV8Yp.js";import"./CartesianAxis-BAfU-RT3.js";import"./Layer-CQuTPpTF.js";import"./Text-DA3gX1pv.js";import"./DOMUtils-D_tBKlm6.js";import"./useId-BXkxS-9S.js";import"./useBackwardsCompatibleTheme-D_0RgBTV.js";import"./Label-Dw5oZdmX.js";import"./ZIndexLayer-BteXgmwI.js";import"./types-2ZxaQrL7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-bKH57gE_.js";import"./useAnimationId-1a47Z03A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIfEIhEu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfpd-TE6.js";import"./tooltipContext-B7tmfZyH.js";import"./RegisterGraphicalItemId-DcoGQHKz.js";import"./ErrorBarContext-DMXrIZhk.js";import"./GraphicalItemClipPath-BnEsc6E8.js";import"./SetGraphicalItem-Bur606vr.js";import"./getZIndexFromUnknown-Da8hs9xC.js";import"./useGraphicalItemIdentity-Dd9FM8V7.js";import"./dataEntryStyles-BtWpvhbj.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
