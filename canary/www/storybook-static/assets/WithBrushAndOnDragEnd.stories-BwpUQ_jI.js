import{R as t}from"./iframe-CWlxxFHy.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-eChv8v5o.js";import{B as p}from"./BarChart-CjgWuEs5.js";import{X as l}from"./XAxis-CaG1n6yG.js";import{Y as h}from"./YAxis-DLav1J7f.js";import{B as x}from"./Brush-sxrRE5Kn.js";import{B as c}from"./Bar-CP-260Ad.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cuwp_Om4.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B211gnQK.js";import"./axisSelectors-CY4U4PmW.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./index-uNGw9-ET.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./CartesianAxis-I-oV71yY.js";import"./Layer-bfSBtv71.js";import"./Text-th2Jn0HQ.js";import"./DOMUtils-Cr7AYV1x.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./Label-DN7T9GpD.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./types-CjEkwpQR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-mLTl2k4L.js";import"./useAnimationId-BVaZGbnp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-F4SI3wJr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CN9JJwYa.js";import"./tooltipContext-BQEe4Ju4.js";import"./RegisterGraphicalItemId-C2KKr6Fw.js";import"./ErrorBarContext-BArOb86o.js";import"./GraphicalItemClipPath-BZhOYfMs.js";import"./SetGraphicalItem-tjuShIDU.js";import"./getZIndexFromUnknown-CvHUcGMl.js";import"./useGraphicalItemIdentity-BaE4xim7.js";import"./dataEntryStyles-BIaq3C15.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
