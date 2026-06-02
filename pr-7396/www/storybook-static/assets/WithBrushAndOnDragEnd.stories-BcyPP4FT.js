import{R as t}from"./iframe-BOLHcnEq.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C8kTqOmj.js";import{B as p}from"./BarChart-B9QdvSqk.js";import{X as l}from"./XAxis-C1WN-pkQ.js";import{Y as h}from"./YAxis-YubxuWa5.js";import{B as x}from"./Brush-DRGP0PRI.js";import{B as c}from"./Bar-CvLANxLU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CxjXtk_l.js";import"./index-tgbEpTci.js";import"./index-D6CwE66r.js";import"./get-Q7-QRRNs.js";import"./resolveDefaultProps-Z5NUUnaV.js";import"./isWellBehavedNumber-wvIQrlfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7tC_WXo.js";import"./index-B1Z2mgyL.js";import"./index-CeNzyE2J.js";import"./renderedTicksSlice-CxjdWKYi.js";import"./axisSelectors-C8lj3akb.js";import"./d3-scale-C1j7mBel.js";import"./CartesianChart-BmPupl9-.js";import"./chartDataContext-C7_PfxRX.js";import"./CategoricalChart-Ytc03f7l.js";import"./CartesianAxis-Cr_Ww8PH.js";import"./Layer-CuuZoUsG.js";import"./Text-XHfzhZk8.js";import"./DOMUtils-D0co-hPv.js";import"./Label-DYMy2guT.js";import"./ZIndexLayer-CNPe-074.js";import"./types-DPwewkdM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-z17QOzFZ.js";import"./ReactUtils-8Czxn-Uo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-yS7V0F_a.js";import"./useAnimationId-BckTdhqG.js";import"./ActiveShapeUtils-DWIyzqt2.js";import"./RegisterGraphicalItemId-f9q-fu78.js";import"./ErrorBarContext-C3dgZsKy.js";import"./GraphicalItemClipPath--wTpErch.js";import"./SetGraphicalItem-D2UHcxYS.js";import"./getZIndexFromUnknown-D1n9bhRw.js";import"./graphicalItemSelectors-DGMwM8cu.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const dt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,dt as __namedExportsOrder,ot as default};
