import{R as t}from"./iframe-D48Nzg7a.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Nz3qbcrc.js";import{B as p}from"./BarChart-Br89sekh.js";import{X as l}from"./XAxis-vF58_Zhz.js";import{Y as h}from"./YAxis-B8Cc3RzQ.js";import{B as x}from"./Brush-DywIpQvB.js";import{B as c}from"./Bar-C0StZq4c.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DSE-ZCYP.js";import"./index-1Ac2q3vk.js";import"./index-DZyliIRq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-X4i4u3XO.js";import"./isWellBehavedNumber-C7xfGJm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S_Xc00BH.js";import"./index-BpddMd5l.js";import"./index-Dqx9cZ4q.js";import"./axisSelectors-CnpCzdAy.js";import"./d3-scale-BmAkfb5N.js";import"./renderedTicksSlice-DkSC6crE.js";import"./CartesianChart-DqIlVucu.js";import"./chartDataContext-DiRp1I73.js";import"./CategoricalChart-DWr61JUe.js";import"./CartesianAxis-DNEYl1Os.js";import"./Layer-DQQ0bNB2.js";import"./Text-BmDi8oon.js";import"./DOMUtils-MwbqvkJM.js";import"./useBackwardsCompatibleTheme-D_bQGNKj.js";import"./Label-Dvc5-O45.js";import"./ZIndexLayer-C5gHLVh2.js";import"./types-DUxuHHgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CvUvPizu.js";import"./useAnimationId-C-dtJewN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLR_lgnH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C9yMl5UT.js";import"./tooltipContext-BIjf47GM.js";import"./RegisterGraphicalItemId-DFpeIKrt.js";import"./ErrorBarContext-D4VutYOM.js";import"./GraphicalItemClipPath-BHb4Wa01.js";import"./SetGraphicalItem-aeCrMt0o.js";import"./getZIndexFromUnknown-DrophhrA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C2xNQRdY.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
