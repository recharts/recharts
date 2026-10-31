import{R as t}from"./iframe-B0md2XL3.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DA0iP-6p.js";import{B as p}from"./BarChart-BkvKG9at.js";import{X as l}from"./XAxis-DLCMfyHC.js";import{Y as h}from"./YAxis-Dak2FPR9.js";import{B as x}from"./Brush-C66fLsd7.js";import{B as c}from"./Bar-BZBdz_4C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DYFy43g1.js";import"./throttle-Bg4_NSFj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./RechartsWrapper-CWXf9YtC.js";import"./axisSelectors-CGXaSNKn.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uqFZU7-w.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./CartesianAxis-ib9y6Jw_.js";import"./Layer-CEcbE5Mj.js";import"./Text-iaFwzHQc.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./Label-B4OtwMWB.js";import"./types-k-hf9hch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CC8uMe5u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DtE2sp0d.js";import"./useAnimationId-OzV8hXkE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./tooltipContext-9K8_RuoB.js";import"./dataEntryStyles-QaPc2U0F.js";import"./ErrorBarContext-CrVPyI6s.js";import"./activeStyles-CvpZ-3cp.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getZIndexFromUnknown-DsG5JjyG.js";import"./useEffectiveDataKey-B6E0gPoB.js";import"./omit-Do7fl70z.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
