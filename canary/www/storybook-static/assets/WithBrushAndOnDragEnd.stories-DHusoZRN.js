import{R as t}from"./iframe-BB3lVLoc.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CfHP3A1Y.js";import{B as p}from"./BarChart-B4y4WK9Y.js";import{X as l}from"./XAxis-BBQp-Idt.js";import{Y as h}from"./YAxis-DG4767Mj.js";import{B as x}from"./Brush-e7OWOJN-.js";import{B as c}from"./Bar-Ccm6G5ye.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-QtsYQF8O.js";import"./index-DcEJbqAh.js";import"./index-BKenMcKp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUfoVU2p.js";import"./isWellBehavedNumber-_9n5Uq-d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S-WqrQUy.js";import"./axisSelectors-CEA0dwEw.js";import"./d3-scale-CDtyCF0X.js";import"./index-DUlsk-Es.js";import"./index-B-cCuGfC.js";import"./renderedTicksSlice-Toi-dgcz.js";import"./index-yFQohn8S.js";import"./CartesianChart-Kpp943Pu.js";import"./chartDataContext-CiYf8ag2.js";import"./CategoricalChart-CwlUzHNA.js";import"./CartesianAxis-m8s8CMt8.js";import"./Layer-NQ3_WlgF.js";import"./Text-DEC8wtTL.js";import"./DOMUtils-CldD4RXg.js";import"./useId-BaM-cyip.js";import"./useBackwardsCompatibleTheme-Cqzm3Lgs.js";import"./Label-Cn0Fp29B.js";import"./ZIndexLayer-DTgItK4v.js";import"./types-KCNzlOcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DJZqC0i8.js";import"./useAnimationId-BDqb5MNR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTqJh7jp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiHdw4Rv.js";import"./tooltipContext-BFo4MnEz.js";import"./RegisterGraphicalItemId-BeJ9531v.js";import"./ErrorBarContext-BboOIeGg.js";import"./GraphicalItemClipPath-DHVb6D1Y.js";import"./SetGraphicalItem-B2jSBaNX.js";import"./getZIndexFromUnknown-PK6XOoIa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B1_R2Hdb.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
