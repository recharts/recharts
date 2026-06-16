import{R as t}from"./iframe-YX8o2v6C.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DdFbRU-_.js";import{B as p}from"./BarChart-Dv3oORq3.js";import{X as l}from"./XAxis-DQ2uOSag.js";import{Y as h}from"./YAxis-Be6O_CQ7.js";import{B as x}from"./Brush-DzQUtQaI.js";import{B as c}from"./Bar-CFHHRu3H.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D9wrmu0j.js";import"./index-DH-2xtWc.js";import"./index-Cl4YYRbA.js";import"./get-BycinDno.js";import"./resolveDefaultProps-Beo9Ue5G.js";import"./isWellBehavedNumber-BTMdVTVN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CG6S7igm.js";import"./index-CEZPHdCs.js";import"./index-C3Ly3wbD.js";import"./renderedTicksSlice-CH1AW_i0.js";import"./axisSelectors-D8SjoVzs.js";import"./d3-scale-BBOwGfMu.js";import"./string-B6fdYHAA.js";import"./CartesianChart-W4Jk2biF.js";import"./chartDataContext-BjewCl-Q.js";import"./CategoricalChart-D0PZB27U.js";import"./CartesianAxis-CKLUnXwa.js";import"./Layer-BIbmWem6.js";import"./Text-Buo3hKKc.js";import"./DOMUtils-QQafW-5D.js";import"./Label-MzgVsBeP.js";import"./ZIndexLayer-jNA71lIU.js";import"./types-DnEhxp69.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DSvHJrY6.js";import"./AnimatedItems-CRhm6WPg.js";import"./useAnimationId-CqTJac9i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKZ5Spt-.js";import"./ActiveShapeUtils-C75e4XAE.js";import"./RegisterGraphicalItemId-6llrHCrO.js";import"./ErrorBarContext-BJw7X7Qy.js";import"./GraphicalItemClipPath-BF8Vebbu.js";import"./SetGraphicalItem-OjQ_8WxS.js";import"./getZIndexFromUnknown-BkLvGmN8.js";import"./graphicalItemSelectors-CBWxv08A.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
