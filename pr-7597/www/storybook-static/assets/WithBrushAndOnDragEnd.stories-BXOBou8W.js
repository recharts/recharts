import{R as t}from"./iframe-BpGtcNOk.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BUkXJe7m.js";import{B as p}from"./BarChart-F90T1TV1.js";import{X as l}from"./XAxis-xA3C2iEm.js";import{Y as h}from"./YAxis-CzpQ82Ya.js";import{B as x}from"./Brush-Q1R5dBQy.js";import{B as c}from"./Bar-DeXkykzA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7JHSkAt.js";import"./index-CHBEpFe4.js";import"./index-CEaO1Ily.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bzz9qGby.js";import"./isWellBehavedNumber-CgtKnfGk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8zW8Q-QW.js";import"./index-CWPU6MDT.js";import"./index-B2c9XwPD.js";import"./renderedTicksSlice-CgSHpo4d.js";import"./axisSelectors-DvNlgVd_.js";import"./d3-scale-BIg-AE9c.js";import"./CartesianChart-D_T5BGrl.js";import"./chartDataContext-BnIwxX66.js";import"./CategoricalChart-cfDxlkao.js";import"./CartesianAxis-C36sPR-f.js";import"./Layer-CuHhWFqD.js";import"./Text-C5eSQgGe.js";import"./DOMUtils-Bd2Qm1G_.js";import"./Label-CVd1F7qG.js";import"./ZIndexLayer-Cu4Swk1f.js";import"./types-CFaUoyvU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CLwClxTv.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-BQnmAs8_.js";import"./AnimatedItems-I1ECyx5O.js";import"./useAnimationId-B7_Ne5YB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1PkWZRq5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BdR0GCmt.js";import"./RegisterGraphicalItemId-fTSs4quI.js";import"./ErrorBarContext-D-HuE8jj.js";import"./GraphicalItemClipPath-CBj-Oygo.js";import"./SetGraphicalItem-Dc3K4Fiu.js";import"./getZIndexFromUnknown-Buk6t42b.js";import"./graphicalItemSelectors-CxriLMeL.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
