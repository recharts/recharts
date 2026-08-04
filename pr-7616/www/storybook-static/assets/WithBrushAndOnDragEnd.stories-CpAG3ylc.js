import{R as t}from"./iframe-UaiYvcjH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-8ciJYIbx.js";import{B as p}from"./BarChart-tEgULpSk.js";import{X as l}from"./XAxis-CK0z3Vz2.js";import{Y as h}from"./YAxis-BCEqWUDI.js";import{B as x}from"./Brush-B3wnYD3U.js";import{B as c}from"./Bar-CZ690Un0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7x_Svn9H.js";import"./index-wYI15btu.js";import"./index-DPsHnpl0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgeajuqz.js";import"./isWellBehavedNumber-nnrZFap8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-O36xGZ1Z.js";import"./index-Ckg9ET-m.js";import"./index-CFVz9CrA.js";import"./renderedTicksSlice-DFI0gqQt.js";import"./axisSelectors-CeZCJXhc.js";import"./d3-scale-Dc-s3w0P.js";import"./CartesianChart-DWJG29v6.js";import"./chartDataContext-vTHMMUrQ.js";import"./CategoricalChart-8pueoY18.js";import"./CartesianAxis-ebqqt3vU.js";import"./Layer-DOm2DEtl.js";import"./Text-D929lMpi.js";import"./DOMUtils-C7Mhp4IV.js";import"./Label-D-49EUqg.js";import"./ZIndexLayer-DxXiKzAC.js";import"./types-CAb7fg-d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-zp7TEc_c.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BuGDK7-Q.js";import"./AnimatedItems-DAGS26Tt.js";import"./useAnimationId-BTJ_iqsG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bha7Re6V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xOOsUn5l.js";import"./RegisterGraphicalItemId-CSm9rcoN.js";import"./ErrorBarContext-CFINHyZq.js";import"./GraphicalItemClipPath-CS_rGnhc.js";import"./SetGraphicalItem-C1Kxnb7_.js";import"./getZIndexFromUnknown-BUXuLBsW.js";import"./graphicalItemSelectors-CqS9UHaD.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
