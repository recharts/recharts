import{R as t}from"./iframe-CZFgSFnm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CTISp4tv.js";import{B as p}from"./BarChart-DSWxQCVR.js";import{X as l}from"./XAxis-BfXelSpG.js";import{Y as h}from"./YAxis-DRz0mmf0.js";import{B as x}from"./Brush-nzA9zKxQ.js";import{B as c}from"./Bar-DZaL7tcL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DrSRHMPG.js";import"./index-DX3tFi2I.js";import"./index-BJs7iDzc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-e55Twtbt.js";import"./isWellBehavedNumber-DUdaibLy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvRLJ5Qk.js";import"./index-DYK-T1Xx.js";import"./index-CW1iMe2m.js";import"./axisSelectors-LF1AULtu.js";import"./d3-scale-Brc85VvE.js";import"./renderedTicksSlice-D-MBTj4C.js";import"./CartesianChart-PmCypDgu.js";import"./chartDataContext-CvAeifx3.js";import"./CategoricalChart-dvJV-_Rh.js";import"./CartesianAxis-XGvO_fDW.js";import"./Layer-C6R-wMgD.js";import"./Text-Dna8Rnzv.js";import"./DOMUtils-Ba5sbmYY.js";import"./useId-C0SVDnoD.js";import"./useBackwardsCompatibleTheme-xKYPlRvL.js";import"./Label-CMeQeDmk.js";import"./ZIndexLayer-Xe1tLTY7.js";import"./types-C_Z_MS2b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DmVERa1o.js";import"./useAnimationId-DM0V1ULk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DaKn8iZV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWrsW3HO.js";import"./tooltipContext-BgAiZbQ8.js";import"./RegisterGraphicalItemId-CA2MokDU.js";import"./ErrorBarContext-BupfeAir.js";import"./GraphicalItemClipPath-BA_NbQWw.js";import"./SetGraphicalItem-DBiVF70L.js";import"./getZIndexFromUnknown-64ilhjqn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DlwaWh21.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
