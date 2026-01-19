import{r as n,e as t}from"./iframe-CYxrfzzg.js";import{L as p}from"./LineChart-DaNztBXP.js";import{R as s}from"./arrayEqualityCheck-DP0kYLs9.js";import{C as c}from"./CartesianGrid-DD_pLZGb.js";import{X as l}from"./XAxis-Dmnl9BhD.js";import{Y as d}from"./YAxis-BTS_JFed.js";import{L as y}from"./Legend-9AuwFTjD.js";import{L as h}from"./Line-CGTeHK9k.js";import{T as u}from"./Tooltip-C2acYElP.js";import{R as g}from"./RechartsHookInspector-CKj7z6NA.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZIHJFZl.js";import"./hooks-D7sBhVDC.js";import"./axisSelectors-tnzCSBUQ.js";import"./zIndexSlice-BSioTKNu.js";import"./resolveDefaultProps-BKLgGEJu.js";import"./PolarUtils-DvrgzDo3.js";import"./CartesianChart-IXi_xLkG.js";import"./chartDataContext-CfwPSU5Z.js";import"./CategoricalChart-SSUATRMB.js";import"./CartesianAxis-nwRWnCEW.js";import"./Layer-2CuCTQZP.js";import"./Text-DTTsbVV0.js";import"./DOMUtils-DHZkznbd.js";import"./Label-CODmrKP6.js";import"./ZIndexLayer-C2lFhuDH.js";import"./types-VzENM0tL.js";import"./Symbols-BD1jJmy1.js";import"./Curve-BNAJs-1X.js";import"./useElementOffset-BB0azcU5.js";import"./iteratee-DysRkLxA.js";import"./ReactUtils-BBB3MvZm.js";import"./ActivePoints-Vnpu3fVI.js";import"./Dot-DIDXVAE8.js";import"./RegisterGraphicalItemId-C3n7rMAE.js";import"./ErrorBarContext-fxacjPOS.js";import"./GraphicalItemClipPath-CBtigOwz.js";import"./SetGraphicalItem-DBWDI1yN.js";import"./useAnimationId-CUiISCsF.js";import"./getRadiusAndStrokeWidthFromDot-jvncozPt.js";import"./ActiveShapeUtils-DyLP3gGN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_ysU7C8.js";import"./Trapezoid-B1yeBwPe.js";import"./Sector-BlYN7QdB.js";import"./Cross-DCdUQxVy.js";import"./index-DoBieDfB.js";import"./ChartSizeDimensions-HwMCl-rE.js";import"./OffsetShower-B_S1QpU_.js";import"./PlotAreaShower-CbgSdBZD.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
