import{R as t}from"./iframe-B9NgERoL.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CeMrsmMa.js";import{B as p}from"./BarChart-CGcoGj12.js";import{X as l}from"./XAxis-aLbTU0vL.js";import{Y as h}from"./YAxis-BZ7igdn9.js";import{B as x}from"./Brush-DRxqgskm.js";import{B as c}from"./Bar-PREVUBAC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaANxDja.js";import"./index-1yiXAU6d.js";import"./index-U01BUWsX.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dx164Y1F.js";import"./isWellBehavedNumber-bmfh_B4y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIufO86S.js";import"./index-IJSHzaJE.js";import"./index-D4sqhJ-M.js";import"./renderedTicksSlice-Cqze-A-7.js";import"./axisSelectors-Cp9fRWWc.js";import"./d3-scale-CeApqfqF.js";import"./CartesianChart-D1OHX_Vn.js";import"./chartDataContext-MrXPhuTJ.js";import"./CategoricalChart-BaN3vUEH.js";import"./CartesianAxis-CU4wTzgV.js";import"./Layer-C_3qb5EZ.js";import"./Text-ouhTNjrK.js";import"./DOMUtils-BpJWFEfX.js";import"./Label-D0wu2lTJ.js";import"./ZIndexLayer-B-abFFm7.js";import"./types-fCUwHeLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-BeQ330Dx.js";import"./AnimatedItems-C-FRFA-Z.js";import"./useAnimationId-Dul1SXp-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jixavVBj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBSWPzIX.js";import"./RegisterGraphicalItemId-DqMxb_Dg.js";import"./ErrorBarContext-Dl5oIQ1g.js";import"./GraphicalItemClipPath-BesQYa1_.js";import"./SetGraphicalItem-KoMfzPcE.js";import"./getZIndexFromUnknown-BfIvNDpV.js";import"./graphicalItemSelectors-Bs6HCY7o.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
