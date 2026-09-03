import{R as t}from"./iframe-DwwIEbnV.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CQLOtaPs.js";import{B as p}from"./BarChart-BUukQrB_.js";import{X as l}from"./XAxis-Cz_Rnhgj.js";import{Y as h}from"./YAxis-Bawx2GP2.js";import{B as x}from"./Brush-DBmAgNI_.js";import{B as c}from"./Bar-CkV_S-a9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Blsl_VHV.js";import"./index-8KuM36sP.js";import"./index-DybJUNaL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAdQSn8_.js";import"./isWellBehavedNumber-8UixZU7J.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuqxCVgz.js";import"./axisSelectors-Cxc5coFg.js";import"./d3-scale-DUeQ8AUA.js";import"./index-DnZ0PMCs.js";import"./index-Dy8lu7uT.js";import"./renderedTicksSlice-COQyRYk9.js";import"./index-DEjMF1lf.js";import"./CartesianChart-CyJUqNIj.js";import"./chartDataContext-UFw-Jz6V.js";import"./CategoricalChart-COFTchkj.js";import"./CartesianAxis-Duh3rzkN.js";import"./Layer-6Fp4VzoQ.js";import"./Text-CoeOXdGz.js";import"./DOMUtils-Da_EKwNY.js";import"./useId-ccy3SIu_.js";import"./useBackwardsCompatibleTheme-Fn2SpsbR.js";import"./Label-BBU3iKAi.js";import"./ZIndexLayer-B_JcFefp.js";import"./types-DYVbiWe3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ds3KeOI2.js";import"./useAnimationId-Cx0Chyvr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGZsEs1f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4ijpv1W.js";import"./tooltipContext-BYzhs__g.js";import"./RegisterGraphicalItemId-BM_5HpC8.js";import"./ErrorBarContext-BgIeQnXJ.js";import"./GraphicalItemClipPath-CajkPYvX.js";import"./SetGraphicalItem-jtaJvjxx.js";import"./getZIndexFromUnknown-mhTMZkDS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cp48jKTe.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
