import{R as t}from"./iframe-CxHJIaxn.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B4J4SBJt.js";import{B as p}from"./BarChart-D5kfIBW0.js";import{X as l}from"./XAxis-BtFfwAik.js";import{Y as h}from"./YAxis-CePtpgW3.js";import{B as x}from"./Brush-B0lkfWWS.js";import{B as c}from"./Bar-CZxejRCU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./throttle-zrHO1Lk3.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./RechartsWrapper-lHGqaVDW.js";import"./axisSelectors-DToVA1z_.js";import"./polarAxisSelectors-Cypa3mep.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-AJjDHMaN.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./CartesianAxis-DtD-UOrB.js";import"./Layer-CkJdGJLp.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./Label-M_CthLgf.js";import"./types-BGw9U51_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DnDN_vpi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-AwN8DkOy.js";import"./useAnimationId-D_Yg6oAr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHoE966L.js";import"./tooltipContext-9a1Rg7V8.js";import"./ErrorBarContext-BUUfXJQl.js";import"./activeStyles-BwCU-iTy.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./getZIndexFromUnknown-C257KuLs.js";import"./useEffectiveDataKey-BI2pOOYW.js";import"./omit-3IZhTV-p.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
