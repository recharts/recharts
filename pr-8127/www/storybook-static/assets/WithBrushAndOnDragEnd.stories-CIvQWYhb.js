import{R as t}from"./iframe-l1Y42C0u.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B33nqsCb.js";import{B as p}from"./BarChart-C0H4azb-.js";import{X as l}from"./XAxis-B9K8Q1Xb.js";import{Y as h}from"./YAxis-MT51XlEY.js";import{B as x}from"./Brush-DMiJ2hHP.js";import{B as c}from"./Bar-CWc1HL67.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-1jZi99P0.js";import"./throttle-DAyvkz9h.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./RechartsWrapper-DOuMjlQh.js";import"./axisSelectors-D7HUEi6M.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5Y8SIz5.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./CartesianAxis-tpqsI94N.js";import"./Layer-euAv7Vlw.js";import"./Text-B6K4_AwF.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./Label-sWz5CiLk.js";import"./types-CrZHDfLN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DQcF-Fqd.js";import"./LabelList-CqnzZffr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Gcg8iRps.js";import"./useAnimationId-Df3Y-xS6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./tooltipContext-BSj91y9Q.js";import"./dataEntryStyles-D_KE_N47.js";import"./fillDefinitions-AHxQevDT.js";import"./ErrorBarContext-xxN9WryY.js";import"./activeStyles-De0IjX-U.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./getZIndexFromUnknown-DnteUgzv.js";import"./useEffectiveDataKey-Dv99CamK.js";import"./omit-R_--s2l3.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
