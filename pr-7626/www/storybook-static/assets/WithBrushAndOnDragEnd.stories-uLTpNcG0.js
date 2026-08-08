import{R as t}from"./iframe-Bh1U-oMl.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CbwDGfhV.js";import{B as p}from"./BarChart-Dgp-EAsw.js";import{X as l}from"./XAxis-BDDyTBp4.js";import{Y as h}from"./YAxis-DLWlNOvC.js";import{B as x}from"./Brush-BrP2h9tF.js";import{B as c}from"./Bar-CImJU4XG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMII0ZAy.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./axisSelectors-KgYrPzsA.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./CartesianAxis-DON_KZPp.js";import"./Layer-C3H-dOT5.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./Label-CoZlS51A.js";import"./ZIndexLayer-C51_GrjW.js";import"./types-w_TylJof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-B5aE_LSZ.js";import"./AnimatedItems-BvF3WRYv.js";import"./useAnimationId-0BmLZ6mF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B31sdsfS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./ErrorBarContext-CYylskZD.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./getZIndexFromUnknown-CPcuAC_m.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CC_S-o56.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
