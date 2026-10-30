import{R as t}from"./iframe-DTgRciqJ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DVbLmSgB.js";import{B as p}from"./BarChart-Dkhd6QR8.js";import{X as l}from"./XAxis-GGlBaKPK.js";import{Y as h}from"./YAxis-Bbi7V5fP.js";import{B as x}from"./Brush-Dhokmh8v.js";import{B as c}from"./Bar-CKmLg3q1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./throttle-DuudF_mE.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./RechartsWrapper-MmwUlJ_d.js";import"./axisSelectors-CM_jcbgZ.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5ifwFr0.js";import"./index-Bf4dxhjD.js";import"./index-nyRg1-_W.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./Layer-uwDyCJ97.js";import"./Text-BPTv_m6E.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./Label-ClRWPO-B.js";import"./types-D-ekNx8o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-DQdMNFQg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NM_AUMQ3.js";import"./useAnimationId-D4a67WLs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DKKlK0pJ.js";import"./tooltipContext-BVhZySlP.js";import"./dataEntryStyles-B-5OPbn7.js";import"./ErrorBarContext-CqakUp6M.js";import"./activeStyles-bjUNghBK.js";import"./SetGraphicalItem-GIbuPr5j.js";import"./getZIndexFromUnknown-UWkyHqhi.js";import"./useEffectiveDataKey-CRNpNcQe.js";import"./fillDefinitions-DVVBuQo8.js";import"./omit-CgSUAxHI.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
