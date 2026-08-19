import{R as t}from"./iframe-BxezfZww.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-HcjonX2F.js";import{B as p}from"./BarChart-CqlTKgUi.js";import{X as l}from"./XAxis-CiqbzTox.js";import{Y as h}from"./YAxis-CLrmrnP-.js";import{B as x}from"./Brush-_UZn5CIs.js";import{B as c}from"./Bar-CxnpRt_n.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-kDZpq7hG.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./index-jirKooN3.js";import"./axisSelectors-Cqbxg7Vx.js";import"./d3-scale-D269iDuq.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./CategoricalChart-BhuBu3pE.js";import"./CartesianAxis-DN3oreA6.js";import"./Layer-B7Lou8N3.js";import"./Text-BDhYhtIl.js";import"./DOMUtils-DML8OagK.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./Label-Cwi7qDe-.js";import"./ZIndexLayer-DCAxC-a3.js";import"./types-CqtRzysP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-szXuAxdz.js";import"./useAnimationId-DlB6WviS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EFbhg0-p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./tooltipContext-CfXPAL1U.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./ErrorBarContext-1IA4vt79.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getZIndexFromUnknown-DySiGNfw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C5f0vLre.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
