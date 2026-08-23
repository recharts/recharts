import{R as t}from"./iframe-DnFxx7IH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DMQesRjL.js";import{B as p}from"./BarChart-CjMKpbCX.js";import{X as l}from"./XAxis-IDSfm9bg.js";import{Y as h}from"./YAxis-CEWgAKNT.js";import{B as x}from"./Brush-DgH6FyS3.js";import{B as c}from"./Bar-D7-CEhDB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9ypYn8O.js";import"./index-rcoyIDVk.js";import"./index-Brqhvl0Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrQSc28h.js";import"./isWellBehavedNumber-DwCdsfaa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEVhWh0t.js";import"./index-GUUQK7eb.js";import"./index-CAdU6H6S.js";import"./axisSelectors-5k6UVVXW.js";import"./d3-scale-Bs_R4IxC.js";import"./renderedTicksSlice-D0pYs9KP.js";import"./CartesianChart-DEdd4Z6y.js";import"./chartDataContext-DJs6EXfK.js";import"./CategoricalChart-DJUCMkjn.js";import"./CartesianAxis-BE4Vor5z.js";import"./Layer-D_Gfp3eA.js";import"./Text-DMuBrTIK.js";import"./DOMUtils-L7csA6Z4.js";import"./useId-DrpNe8Nn.js";import"./useBackwardsCompatibleTheme-DDCq5JLw.js";import"./Label--8_ga_Yz.js";import"./ZIndexLayer-DWUDk33_.js";import"./types-BDVRIOHN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C4h-Xaxi.js";import"./useAnimationId-CvbAXd24.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIvdGauu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMhAfvBj.js";import"./tooltipContext-Cjrh2pgr.js";import"./RegisterGraphicalItemId-CKqNw0Tr.js";import"./ErrorBarContext-UyjGsXAe.js";import"./GraphicalItemClipPath-Cr1fTws_.js";import"./SetGraphicalItem-BEKqBC8O.js";import"./getZIndexFromUnknown-CEpUfyH8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Qui8nPll.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
