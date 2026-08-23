import{R as t}from"./iframe-1Nx1Hwd8.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BPgffy3O.js";import{B as p}from"./BarChart-BdVY_SHX.js";import{X as l}from"./XAxis-Iy9-nOhv.js";import{Y as h}from"./YAxis-CLaAdl_L.js";import{B as x}from"./Brush-wL_cePig.js";import{B as c}from"./Bar-B_Nqj4lj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvcOGqjl.js";import"./index-BxODcotD.js";import"./index-BxXrUDFi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuS60Zcm.js";import"./isWellBehavedNumber-BZkA4GqO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOZVWK-P.js";import"./index-DrfO8rcp.js";import"./index-DuNxWLhT.js";import"./axisSelectors-C77-vGCj.js";import"./d3-scale-B_Ed44y-.js";import"./renderedTicksSlice-DdDjPDgD.js";import"./CartesianChart-CfBDZXwX.js";import"./chartDataContext-B9qtLtUj.js";import"./CategoricalChart-CmvqfSaL.js";import"./CartesianAxis-zUKk9a_2.js";import"./Layer-CY3HNiYQ.js";import"./Text-D7Dvlpl9.js";import"./DOMUtils-CyzSDn7U.js";import"./useId-y9Z6ZhpG.js";import"./useBackwardsCompatibleTheme-CJcbMh-P.js";import"./Label-CzY3tv0Q.js";import"./ZIndexLayer-CgXwR33B.js";import"./types-CW2QSzeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CvXLsYG2.js";import"./useAnimationId-BUamwr57.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DQ3akkPb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-K1kvzU25.js";import"./tooltipContext-B1Zg-jqn.js";import"./RegisterGraphicalItemId-Ctsh4Fgt.js";import"./ErrorBarContext-aNneKhPH.js";import"./GraphicalItemClipPath-l6BikrPU.js";import"./SetGraphicalItem-CfAx1sDn.js";import"./getZIndexFromUnknown-BhNgmBUg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CrnNOped.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
