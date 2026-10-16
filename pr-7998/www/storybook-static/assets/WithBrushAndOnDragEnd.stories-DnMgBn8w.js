import{R as t}from"./iframe-BMLr-N8m.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CNoIWiIj.js";import{B as p}from"./BarChart-BXnCuOvz.js";import{X as l}from"./XAxis-vhD_R5mq.js";import{Y as h}from"./YAxis-Cn7UNGEz.js";import{B as x}from"./Brush-DUSTZEPK.js";import{B as c}from"./Bar-aA6K6mbP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpCsf_je.js";import"./index-g4GeTxJm.js";import"./index-jx1ZEi_d.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jOc_O7Kv.js";import"./isWellBehavedNumber-gG-DUVNw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6IV3yYd.js";import"./axisSelectors-QHFm6bdo.js";import"./d3-scale-uv4cuZVX.js";import"./index-B5o-g1JC.js";import"./index-BoO0kGmt.js";import"./renderedTicksSlice-D6osv6XO.js";import"./index-CL1KOieJ.js";import"./CartesianChart-crhgf43U.js";import"./chartDataContext-Ch0M7QOU.js";import"./CategoricalChart-D8IryVYJ.js";import"./CartesianAxis-Cy6jCwYH.js";import"./Layer-D25gMhyW.js";import"./Text-Cz3Pbtag.js";import"./pageBackground-cNUAWp1v.js";import"./useId-Dyawny2A.js";import"./useBackwardsCompatibleTheme-TjicyzGG.js";import"./Label-CO8bLvFk.js";import"./ZIndexLayer-B6k-j2NC.js";import"./types-ClqQg-f4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Bwhdd0Sh.js";import"./useAnimationId--2Xv8oOg.js";import"./dataEntryStyles-BB_5qzNe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVvn14nh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_iPwrws.js";import"./tooltipContext-Buu601Jv.js";import"./ErrorBarContext-CNWoIG-z.js";import"./GraphicalItemClipPath--PSqgLsU.js";import"./SetGraphicalItem-Bhbnxfc6.js";import"./getZIndexFromUnknown-51_r1wPI.js";import"./useEffectiveDataKey-BCNG7ZLV.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
