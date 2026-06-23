import{R as t}from"./iframe-B-rX_Ovq.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BsQifls5.js";import{B as p}from"./BarChart-BGE5eWbs.js";import{X as l}from"./XAxis-SdNRN-8o.js";import{Y as h}from"./YAxis-Cicu2WWw.js";import{B as x}from"./Brush-Y3SCKZkp.js";import{B as c}from"./Bar-ChulcTN3.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DYOeNz8_.js";import"./index-D2kGKgGj.js";import"./index-Bh_-T13z.js";import"./get-DdRsJrM-.js";import"./resolveDefaultProps-D1pz5wzG.js";import"./isWellBehavedNumber-DgpUmT_-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCnMK_aC.js";import"./index-chviYFta.js";import"./index-CpJc3r_b.js";import"./renderedTicksSlice-DQrcKm6F.js";import"./axisSelectors-CfXFgmuu.js";import"./d3-scale-DG2A9yU0.js";import"./CartesianChart-Hr6f_olX.js";import"./chartDataContext-CWp3X-kc.js";import"./CategoricalChart-BH_EAWmt.js";import"./CartesianAxis-Cxy1JVbR.js";import"./Layer-BzDAHWqw.js";import"./Text-CbyfEyi5.js";import"./DOMUtils-CImWbOuY.js";import"./Label-CL0zassZ.js";import"./ZIndexLayer-CFxBNrtU.js";import"./types-BrxUVIV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Bq4LI70d.js";import"./AnimatedItems-C_X3btbZ.js";import"./useAnimationId-Bc7mMz9I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNA8eQFW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cb8N5twM.js";import"./RegisterGraphicalItemId-DRp7yt-Z.js";import"./ErrorBarContext-D1MAgXEd.js";import"./GraphicalItemClipPath-gUtT7Str.js";import"./SetGraphicalItem-mNTSaJYY.js";import"./getZIndexFromUnknown-zyJ_61yv.js";import"./graphicalItemSelectors-D_FjOrWh.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
