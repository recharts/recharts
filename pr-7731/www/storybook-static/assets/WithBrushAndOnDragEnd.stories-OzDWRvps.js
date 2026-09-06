import{R as t}from"./iframe-BxrJSuEo.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BT09z8vD.js";import{B as p}from"./BarChart-BS0j88gz.js";import{X as l}from"./XAxis-BWu3iNn9.js";import{Y as h}from"./YAxis-CH4Eo4Zq.js";import{B as x}from"./Brush-vyauTUJn.js";import{B as c}from"./Bar-BO2PSRtL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CoaYbzsD.js";import"./index-BhD1rzMR.js";import"./index-DGAZ_OJd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vU4RggVs.js";import"./isWellBehavedNumber-CpUOh-vc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWFnbdFS.js";import"./axisSelectors-JUmVyq34.js";import"./d3-scale-B5WK_JhK.js";import"./index-BHq5Sa6E.js";import"./index-CLaZmg3F.js";import"./renderedTicksSlice-CAPgIIpT.js";import"./index-Dd2r1808.js";import"./CartesianChart-D1XAoGxw.js";import"./chartDataContext-BsAxXToq.js";import"./CategoricalChart-Clhvfpfg.js";import"./CartesianAxis-rK53amZo.js";import"./Layer-NfsQLk-M.js";import"./Text-ChzbpadS.js";import"./DOMUtils-BV3IXFQQ.js";import"./useId-D7n7M89L.js";import"./useBackwardsCompatibleTheme-BBdb5Xlh.js";import"./Label-DaJavsxU.js";import"./ZIndexLayer-K4qh24Ap.js";import"./types-DWdcB5KA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-2V-RFRVt.js";import"./useAnimationId-BTkxH0KN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-f27aWKX5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CodrMQ8l.js";import"./tooltipContext-B4HvzUEA.js";import"./RegisterGraphicalItemId-BvxwJdeC.js";import"./ErrorBarContext-DuvrknuQ.js";import"./GraphicalItemClipPath-Cu9TKpDv.js";import"./SetGraphicalItem-xqqXYUDX.js";import"./getZIndexFromUnknown-Bml9b-BI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-hp8xxE1P.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
