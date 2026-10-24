import{R as t}from"./iframe-Bibrvi93.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-IRdU2Eq4.js";import{B as p}from"./BarChart-C9D3ZPui.js";import{X as l}from"./XAxis-DJh80Lk8.js";import{Y as h}from"./YAxis-C5_c0VAl.js";import{B as x}from"./Brush-DaL-HQje.js";import{B as c}from"./Bar-CDmVFixy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BYyvulfq.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuLA9rob.js";import"./isWellBehavedNumber-DEJNr0Qw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bt5qeROs.js";import"./axisSelectors-DSlGSk_i.js";import"./d3-scale-Cv38ge3f.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-BJXhTZS7.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./CartesianAxis-Cuzpv6zD.js";import"./Layer-DE86HNiB.js";import"./Text-BO_ppYYl.js";import"./pageBackground-XzqliJgP.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./Label-cYp5UoGe.js";import"./ZIndexLayer-CR2StRvF.js";import"./dataEntryStyles-DDDSAcpo.js";import"./types-Bq4foVci.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-DrZDHncN.js";import"./useAnimationId-CyOwunze.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tEZ4S3O4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9IZw5gW.js";import"./tooltipContext-DHjZ0LWr.js";import"./RegisterGraphicalItemId-Cbm3m_DF.js";import"./ErrorBarContext-BkgPrLn0.js";import"./SetGraphicalItem-CE5ARGmx.js";import"./getZIndexFromUnknown-C5MCd5Ql.js";import"./useEffectiveDataKey-BbVSYZl7.js";import"./omit-DkLyMs2K.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
