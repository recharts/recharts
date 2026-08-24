import{R as t}from"./iframe-vymQxHWj.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CKW_xCBG.js";import{B as p}from"./BarChart-DvkpmT66.js";import{X as l}from"./XAxis-Bzr2Ibny.js";import{Y as h}from"./YAxis-C5MuLC6_.js";import{B as x}from"./Brush-DS9IpiN7.js";import{B as c}from"./Bar-DCO0mLA3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BK01krp9.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./axisSelectors-qkXPFIdN.js";import"./d3-scale-shLsO6db.js";import"./renderedTicksSlice-_g-coWrV.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./CategoricalChart-htsvTMax.js";import"./CartesianAxis-CmNHn6lS.js";import"./Layer-DHaSl27L.js";import"./Text-BroBeAan.js";import"./DOMUtils-BKNZKxmm.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./Label-CMMqvv98.js";import"./ZIndexLayer-ChwVVG6J.js";import"./types-ZBx8sWKw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BAUw0A61.js";import"./useAnimationId-DSN2oeL8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xjAPvdj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./tooltipContext-BNSiOswh.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getZIndexFromUnknown-BaZocLEn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-1S1dbJJ6.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
