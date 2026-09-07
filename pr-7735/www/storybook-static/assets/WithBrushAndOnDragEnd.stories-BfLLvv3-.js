import{R as t}from"./iframe-Bpd2XNWC.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BTu_B7mV.js";import{B as p}from"./BarChart-DZLMPpHo.js";import{X as l}from"./XAxis-BIqIlQ9-.js";import{Y as h}from"./YAxis-CYnJfJw2.js";import{B as x}from"./Brush-BBEuHpIk.js";import{B as c}from"./Bar-HmII4SBU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CxmKEgMS.js";import"./index-xC6Bkz7H.js";import"./index-DgsoqgCs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8bn9Lip.js";import"./isWellBehavedNumber-DYj3VVfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cs-3N8QT.js";import"./axisSelectors-BrNdfEDm.js";import"./d3-scale-C1KyS_uc.js";import"./index-Bvjdo_xp.js";import"./index-3uQaoJQn.js";import"./renderedTicksSlice-BjQ916I1.js";import"./index-Di8Mdcoc.js";import"./CartesianChart-CGMddJ7u.js";import"./chartDataContext-Ddh2yzQT.js";import"./CategoricalChart-CuTFNTZi.js";import"./CartesianAxis-qQEQr_OK.js";import"./Layer-DWU20C-K.js";import"./Text-DXGXVj-Q.js";import"./DOMUtils-CSQS_b5b.js";import"./useId-C9UFJlhx.js";import"./useBackwardsCompatibleTheme-BtLkKBFp.js";import"./Label-CGyNRxJa.js";import"./ZIndexLayer-BFtSzcZm.js";import"./types-B5zWJp34.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-dPJnsYL3.js";import"./useAnimationId-DbYR-C-O.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-l4QrEY0S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CE66pmBi.js";import"./tooltipContext-BqHkA-Bu.js";import"./RegisterGraphicalItemId-DEOSTvja.js";import"./ErrorBarContext-BALmliVb.js";import"./GraphicalItemClipPath-CVghwEWn.js";import"./SetGraphicalItem-FT01QPFF.js";import"./getZIndexFromUnknown-CLOLBUIp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IaVESyrB.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
