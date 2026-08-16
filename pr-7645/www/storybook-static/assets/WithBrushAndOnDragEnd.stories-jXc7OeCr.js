import{R as t}from"./iframe-DsrT6Igl.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-h68Ml9Fg.js";import{B as p}from"./BarChart-Edm1F2Of.js";import{X as l}from"./XAxis-B8sGkbA_.js";import{Y as h}from"./YAxis-CZhK_UtL.js";import{B as x}from"./Brush-9FX8Gsd9.js";import{B as c}from"./Bar-DwYWN0DD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CKywVGzs.js";import"./index-CcGDpKo8.js";import"./index-CFQPgMx1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B9PzJr_D.js";import"./isWellBehavedNumber-BKc-Hacq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSffRmp6.js";import"./index-TmgrHUX7.js";import"./index-yiXd6Pb-.js";import"./axisSelectors-wSA8VE6u.js";import"./d3-scale-xIAfNFu1.js";import"./renderedTicksSlice-CMKIM6y2.js";import"./CartesianChart-BZwpOQ8g.js";import"./chartDataContext-CfBgcaN6.js";import"./CategoricalChart-CEyUxV14.js";import"./CartesianAxis-BXcmAp6r.js";import"./Layer-DLKGrOO6.js";import"./Text-C481n1OT.js";import"./DOMUtils-C9ccNhGG.js";import"./useBackwardsCompatibleTheme-DXRl_guv.js";import"./Label-Vp0epMck.js";import"./ZIndexLayer-CReW--vZ.js";import"./types-Dr4WwlRr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BAsTm5qu.js";import"./AnimatedItems-BHAzNwyg.js";import"./useAnimationId-B6Rv0dv4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTeUrZeI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ETIvX2m5.js";import"./RegisterGraphicalItemId-Bitjrotw.js";import"./ErrorBarContext-CvpDkEE-.js";import"./GraphicalItemClipPath-acoCHMXA.js";import"./SetGraphicalItem-vfAWovt3.js";import"./getZIndexFromUnknown-D29chZ6p.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-WSGANWYu.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
