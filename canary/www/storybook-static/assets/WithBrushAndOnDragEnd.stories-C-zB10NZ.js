import{R as t}from"./iframe-C7qTZtPI.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BcOfmYYd.js";import{B as p}from"./BarChart-CLule_Rr.js";import{X as l}from"./XAxis-CgvkfXIs.js";import{Y as h}from"./YAxis-BIekQKnh.js";import{B as x}from"./Brush-Ls0Rt0HY.js";import{B as c}from"./Bar-BRaGn58v.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DLOScDmO.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ce1865_D.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./index-Bl3ZtZEI.js";import"./renderedTicksSlice-CqCAs39i.js";import"./axisSelectors-vHpYaHv4.js";import"./d3-scale-BJE91LPh.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./CartesianAxis-C2LUMKQN.js";import"./Layer-y2Nfuyvg.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./Label-DS1cnk1C.js";import"./ZIndexLayer-B8jqXSnt.js";import"./types-Bx79eQJf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DGawLjrK.js";import"./AnimatedItems-HRihbpAW.js";import"./useAnimationId-D4WzgVDK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DuJIsTif.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJUH9QkP.js";import"./RegisterGraphicalItemId-hstJQcJh.js";import"./ErrorBarContext-BiuHMfT3.js";import"./GraphicalItemClipPath-CJL-G-6t.js";import"./SetGraphicalItem-B6Vsn-QI.js";import"./getZIndexFromUnknown-Cjl7GCXK.js";import"./graphicalItemSelectors-DidJxMin.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
