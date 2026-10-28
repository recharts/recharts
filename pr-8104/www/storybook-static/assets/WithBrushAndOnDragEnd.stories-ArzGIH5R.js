import{R as t}from"./iframe-BaaAHsSG.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BDxXfDj3.js";import{B as p}from"./BarChart-an1c9cMW.js";import{X as l}from"./XAxis-aYI2fpM3.js";import{Y as h}from"./YAxis-ChlB0m7y.js";import{B as x}from"./Brush-BBua4GDW.js";import{B as c}from"./Bar-V0hyFUrF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cr73uuZ7.js";import"./throttle-Dj8lvlLv.js";import"./index-D4xmIBj5.js";import"./index-CE_XEtoH.js";import"./RechartsWrapper-23oR8mwB.js";import"./axisSelectors-D3-EkVgN.js";import"./polarAxisSelectors-DEr0nz1I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ck8yTiZB.js";import"./index-H_I4rIPo.js";import"./index-wqmW4YDp.js";import"./renderedTicksSlice-BIfFMhm7.js";import"./index-DlVxU2VG.js";import"./CartesianChart-C2TNi3kH.js";import"./ZIndexPortal-uu5Z5Bf6.js";import"./CategoricalChart-BheijUwq.js";import"./CartesianAxis-DPnfQAxf.js";import"./Layer-CoUaFIbR.js";import"./Text-DTGEXNgB.js";import"./pageBackground-B7fTEEtp.js";import"./ZIndexLayer-CjMMPibs.js";import"./Label-Bv3DZIw1.js";import"./types-B5Uvpfau.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D5T0UDIp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1p9HmGl.js";import"./useAnimationId-BBJNRgOy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BWukeBwd.js";import"./tooltipContext-DrhBuj3N.js";import"./dataEntryStyles-B1dajl5B.js";import"./ErrorBarContext-Cye9geJm.js";import"./activeStyles-NrCYIabX.js";import"./SetGraphicalItem-WQYWKVUP.js";import"./getZIndexFromUnknown-8sMKkH9-.js";import"./useEffectiveDataKey-Dr89jUol.js";import"./omit-D2HTLdwC.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
