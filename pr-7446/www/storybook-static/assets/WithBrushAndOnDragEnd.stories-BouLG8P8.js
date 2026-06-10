import{R as t}from"./iframe-DR9JYvo9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C8us_33i.js";import{B as p}from"./BarChart-DbD6JEeF.js";import{X as l}from"./XAxis-CkTBv7Vq.js";import{Y as h}from"./YAxis-njpk2nvi.js";import{B as x}from"./Brush-B2IOEmvY.js";import{B as c}from"./Bar-CqWkihR8.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BibliqvJ.js";import"./index-BSI6txHD.js";import"./index-DDKROPpY.js";import"./get-cu4HmN_G.js";import"./resolveDefaultProps-BYvz8ioJ.js";import"./isWellBehavedNumber-CoRQ5I_Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xGluos2C.js";import"./index-k7j0Xumv.js";import"./index-CU_PZZsV.js";import"./renderedTicksSlice-CyVH_MQq.js";import"./axisSelectors-DGVKCopH.js";import"./d3-scale-L0XByWhe.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BZ37_3cP.js";import"./chartDataContext-CejwtDPv.js";import"./CategoricalChart-BpqxHQTK.js";import"./CartesianAxis-Dipo9dl9.js";import"./Layer-BDZfdfVu.js";import"./Text-DBYgVn99.js";import"./DOMUtils-Bi5BI6KA.js";import"./Label-De6_no0_.js";import"./ZIndexLayer-BgzJVSii.js";import"./types-C_DqPfQs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DJfuGMMl.js";import"./AnimatedItems-DwCxTPVO.js";import"./useAnimationId-BlaQudXH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCKYc31L.js";import"./ActiveShapeUtils-BwilYhsw.js";import"./RegisterGraphicalItemId-DV56rO-3.js";import"./ErrorBarContext-BO0-BSQI.js";import"./GraphicalItemClipPath-Vt_UhRqU.js";import"./SetGraphicalItem-DG2lsiaO.js";import"./getZIndexFromUnknown-DMXv6A8r.js";import"./graphicalItemSelectors-DF-pdot3.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
