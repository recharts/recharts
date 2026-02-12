import{r as n,e as t}from"./iframe-Qw1xV4gr.js";import{L as p}from"./LineChart-EsiR7eCI.js";import{R as s}from"./arrayEqualityCheck-D10Koezk.js";import{C as c}from"./CartesianGrid-BN7mOFms.js";import{X as l}from"./XAxis-CBWX_4iF.js";import{Y as d}from"./YAxis-C_ExxpTj.js";import{L as y}from"./Legend-N1_7rpBz.js";import{L as h}from"./Line-Bd85dJEz.js";import{T as u}from"./Tooltip-BWyg3IOS.js";import{R as g}from"./RechartsHookInspector-D6S_l26T.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-T9NKaIls.js";import"./hooks-vjGh_8ov.js";import"./axisSelectors-h4Qg-dXF.js";import"./zIndexSlice-oRB5pJqD.js";import"./resolveDefaultProps-DW8BpyRT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BtuqRmvy.js";import"./chartDataContext-CGZEqLdY.js";import"./CategoricalChart-DwNQ2qMJ.js";import"./CartesianAxis-Dn5CLCwG.js";import"./Layer-CkwgDlKc.js";import"./Text-A6EoaQwg.js";import"./DOMUtils-BhiXkbhO.js";import"./Label-BQ6NoHU2.js";import"./ZIndexLayer-E7tGttad.js";import"./types-BYf8q4m4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CO8nxrkO.js";import"./Curve-BAYVpCYt.js";import"./useElementOffset-fF3rrBo6.js";import"./iteratee-BggsNeDW.js";import"./ReactUtils-NyMdEGMN.js";import"./ActivePoints-avnz8yKq.js";import"./Dot-nhXnmJfZ.js";import"./RegisterGraphicalItemId-OUWj4Tar.js";import"./ErrorBarContext-JD7QlRlS.js";import"./GraphicalItemClipPath-CmAyPo3v.js";import"./SetGraphicalItem-BrmdzJxe.js";import"./useAnimationId-CmKwPH-s.js";import"./getRadiusAndStrokeWidthFromDot-Dra1xGUm.js";import"./ActiveShapeUtils-dC2_TVxn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-sthHTnfU.js";import"./Trapezoid-q5W18TEo.js";import"./Sector-KkZnhZNR.js";import"./Cross-BlrcuP5E.js";import"./index-BwnoBx2f.js";import"./ChartSizeDimensions-6-fxO9GV.js";import"./OffsetShower-DJSy3W4i.js";import"./PlotAreaShower-h9EpJlJs.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
