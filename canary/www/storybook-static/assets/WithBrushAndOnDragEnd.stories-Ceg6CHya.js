import{R as t}from"./iframe-DVVgwXG1.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cy6ToStD.js";import{B as p}from"./BarChart-Cx9NhA6L.js";import{X as l}from"./XAxis-Bz_enE-E.js";import{Y as h}from"./YAxis-DTftp1IZ.js";import{B as x}from"./Brush-CA8-D3Ut.js";import{B as c}from"./Bar-CniBJf7W.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3PkmjBJ2.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgxxYcZz.js";import"./axisSelectors-sfX5WmHa.js";import"./d3-scale-DTJLq2d9.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./renderedTicksSlice-CfmunlkM.js";import"./index-BybtA4IG.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./CartesianAxis-CMSfRSGS.js";import"./Layer-DfoKGH6M.js";import"./Text-x0LSajbz.js";import"./DOMUtils-Dl_vO6wQ.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";import"./Label-Bq1dbdZA.js";import"./ZIndexLayer-Dy5YDtfO.js";import"./types-6aOyMGka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DCmrT7i2.js";import"./useAnimationId-BGsmQL0f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWI-Pcd6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CF_ghEpm.js";import"./tooltipContext-B_Ip8Zvn.js";import"./RegisterGraphicalItemId-BsgFzShu.js";import"./ErrorBarContext-xcvO8XZX.js";import"./GraphicalItemClipPath-CPFvU9dM.js";import"./SetGraphicalItem-BChXMtyH.js";import"./getZIndexFromUnknown-D84Eb0en.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BgK3GuXn.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
