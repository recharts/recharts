import{R as t}from"./iframe-CqMmO9Xr.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DFZjSdbQ.js";import{B as p}from"./BarChart-ESpwhRN5.js";import{X as l}from"./XAxis-D2oZKEvW.js";import{Y as h}from"./YAxis-saOkQHhA.js";import{B as x}from"./Brush-BwjpfUNO.js";import{B as c}from"./Bar-CEYyIcOK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-QEuO__ZS.js";import"./index-DM7XJZkc.js";import"./index-C7a4ZWQb.js";import"./get-Bd1LrVMt.js";import"./resolveDefaultProps-B4mfWg2L.js";import"./isWellBehavedNumber-BQfelr5r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnEYhKO1.js";import"./index-4Y0h8bRC.js";import"./index-DUkcUndf.js";import"./renderedTicksSlice-CRwA1chB.js";import"./axisSelectors-DNmvLHVP.js";import"./d3-scale-QPfz2uTg.js";import"./CartesianChart-9yjUQzO4.js";import"./chartDataContext-C_w1UWdz.js";import"./CategoricalChart-D2FUAiwR.js";import"./CartesianAxis-CazwgKuv.js";import"./Layer-B_iZYaDE.js";import"./Text-CEmf9w7F.js";import"./DOMUtils-Ds2cGO5I.js";import"./Label-I1gAWal3.js";import"./ZIndexLayer-pq6FNmg5.js";import"./types-DVuTAt9Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DeugTG73.js";import"./AnimatedItems-CVpfsiGm.js";import"./useAnimationId-CUS7kjlN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DB2MZslE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B4C1Nqw7.js";import"./RegisterGraphicalItemId-CKAuGKYu.js";import"./ErrorBarContext-BhL3whwn.js";import"./GraphicalItemClipPath-BKxNv1YA.js";import"./SetGraphicalItem-DZlHA3su.js";import"./getZIndexFromUnknown-CEZhJHOt.js";import"./graphicalItemSelectors-DDHZ_A4y.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
