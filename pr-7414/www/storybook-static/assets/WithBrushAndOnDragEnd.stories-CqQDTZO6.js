import{R as t}from"./iframe-Cx28kabR.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BJophbSs.js";import{B as p}from"./BarChart-ViTlz52P.js";import{X as l}from"./XAxis-CWTUtLan.js";import{Y as h}from"./YAxis-DtGVJOoG.js";import{B as x}from"./Brush-B7y4a_Bx.js";import{B as c}from"./Bar-CmGNw5-h.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C9z4Tvb1.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./get-B9lrw7-x.js";import"./resolveDefaultProps-DKQmb89J.js";import"./isWellBehavedNumber-CMbzImp5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DI8RF6tE.js";import"./index-DVR_r8nO.js";import"./index-D-WuKlNL.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./CartesianAxis-BKywCzO2.js";import"./Layer-DvLhXWX-.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./Label-BDMWILCu.js";import"./ZIndexLayer-CZAm4j4p.js";import"./types-UeNFcMv5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Bexp3cQ9.js";import"./AnimatedItems-BxtLfWI4.js";import"./useAnimationId-DLl-Zvtm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DJiMJWXy.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./ErrorBarContext-ZNw_jj1S.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./getZIndexFromUnknown-B2_utusi.js";import"./graphicalItemSelectors-DpikqHET.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
