import{R as t}from"./iframe-BH_ynjC4.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BI1ysfjy.js";import{B as p}from"./BarChart-DflBkrYw.js";import{X as l}from"./XAxis-DHYBvz-p.js";import{Y as h}from"./YAxis-zkDdPwB0.js";import{B as x}from"./Brush-DPmebDtg.js";import{B as c}from"./Bar-DyycvxsZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B92nZ18Y.js";import"./index-RF2vHOS8.js";import"./index-DbazBVJ8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlxwprZn.js";import"./isWellBehavedNumber-BHoIJZLy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BODbUaHb.js";import"./axisSelectors-BuZGyw5u.js";import"./d3-scale-3O5mTbCq.js";import"./index-C7z_bQHY.js";import"./index-B2CUqXvo.js";import"./renderedTicksSlice-AZvUrajM.js";import"./index-483Wu6hp.js";import"./CartesianChart-x2wpl3h2.js";import"./chartDataContext-D5KYfl9L.js";import"./CategoricalChart-CQ3zK25U.js";import"./CartesianAxis-L0O2lUH5.js";import"./Layer-BZJOgrQn.js";import"./Text-DIx256cP.js";import"./DOMUtils-Cq_tvs96.js";import"./useId-POUb9F1l.js";import"./useBackwardsCompatibleTheme-BDKfSYgg.js";import"./Label-FZu_WDSG.js";import"./ZIndexLayer-DJFUyPkd.js";import"./types-BCqSdCtd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BzetGmJU.js";import"./useAnimationId-dKpzhWqB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcuPIW-h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-vPOXs-PX.js";import"./tooltipContext-CzkBNMsY.js";import"./RegisterGraphicalItemId-BaYVXJgS.js";import"./ErrorBarContext-C6wSEKqb.js";import"./GraphicalItemClipPath-CJUrTS9M.js";import"./SetGraphicalItem-CVCJo--0.js";import"./getZIndexFromUnknown-C0VMxTb-.js";import"./useGraphicalItemIdentity-CmFW8bhj.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
