import{R as t}from"./iframe-DqyoK0ud.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BLzMP0pQ.js";import{B as p}from"./BarChart-BlC7Zljb.js";import{X as l}from"./XAxis-BatUM5pq.js";import{Y as h}from"./YAxis-_lbVlQrz.js";import{B as x}from"./Brush-BvsEXzNR.js";import{B as c}from"./Bar-D75AP1PQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./throttle-Dn4JCjly.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./RechartsWrapper-Bv3_Hj5n.js";import"./axisSelectors-CFa3shM-.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oZSie1D-.js";import"./index-CtviIcDK.js";import"./index-BwS7ULIY.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./CartesianAxis-MuFUII6s.js";import"./Layer-svnx0Bdz.js";import"./Text-2V5_vcbB.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./Label-C_IP7EJJ.js";import"./dataEntryStyles-sIqJlf-4.js";import"./types-DD3eyhWj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-D0nGCC2C.js";import"./useAnimationId-b5BOeEdT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DW2Nkmcm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HHjD57n-.js";import"./tooltipContext-Dh-jfrtk.js";import"./RegisterGraphicalItemId-DywfiWqL.js";import"./ErrorBarContext-CHgLAGYu.js";import"./SetGraphicalItem-DDAjd9Yt.js";import"./getZIndexFromUnknown-D1LNvxgr.js";import"./useEffectiveDataKey-D-FiIxk6.js";import"./omit-DwHp4S1F.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
