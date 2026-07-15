import{R as t}from"./iframe-ClcrwGuW.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BIGnlmU8.js";import{B as p}from"./BarChart-Cp3Ws4WL.js";import{X as l}from"./XAxis-DBark8Vy.js";import{Y as h}from"./YAxis-XJItrttK.js";import{B as x}from"./Brush-B8i4ooC3.js";import{B as c}from"./Bar-DyiIlEkb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CCS8xgZt.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./CartesianAxis-ByEdCDio.js";import"./Layer-3ZpdhJcS.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./Label-Dq1bNHIu.js";import"./ZIndexLayer-ktmCEwYK.js";import"./types-BTRTN-qV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CGOErNQb.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./useAnimationId-Dr2V8ESg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BnksOpBX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getZIndexFromUnknown-abdcZcSw.js";import"./graphicalItemSelectors-DJzLZ4Ei.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
