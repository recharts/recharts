import{R as t}from"./iframe-BLwLvMjc.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-f39TItqz.js";import{B as p}from"./BarChart-DqY7VTzu.js";import{X as l}from"./XAxis-ejI-Sa_I.js";import{Y as h}from"./YAxis-BeG492ya.js";import{B as x}from"./Brush-CM1eaXXT.js";import{B as c}from"./Bar-C5QEOUex.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D_8Dczsi.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./get-BkG6HND6.js";import"./resolveDefaultProps-BYhifOb3.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./index-C34Ey_Rg.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./axisSelectors-D58BkBim.js";import"./d3-scale-DDplI62N.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./CartesianAxis-BaKeQioI.js";import"./Layer-Bt0_PYLT.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./Label-pioiAs6J.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./types-WD3PBzf9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BwB3jdXU.js";import"./AnimatedItems-BZKtZoic.js";import"./useAnimationId-CqDdhCYT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wKNM39ge.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-peAesLaa.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./ErrorBarContext-DWoI7kQ6.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getZIndexFromUnknown-CNC0JZgj.js";import"./graphicalItemSelectors-DoeQmq6z.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
