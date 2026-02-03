import{r as n,e as t}from"./iframe-Dw3q2J_C.js";import{L as p}from"./LineChart-C1EJvARN.js";import{R as s}from"./arrayEqualityCheck-CyZN96pQ.js";import{C as c}from"./CartesianGrid-BHFrmdCe.js";import{X as l}from"./XAxis-BkGhyUaZ.js";import{Y as d}from"./YAxis-Rj4UToqR.js";import{L as y}from"./Legend-CAf-rXVr.js";import{L as h}from"./Line-c1IAKOzu.js";import{T as u}from"./Tooltip-0x8wBCfm.js";import{R as g}from"./RechartsHookInspector-CjBXEdYk.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxCpSvqF.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./zIndexSlice-CgOi6Kpf.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./CartesianAxis-Dx05xS85.js";import"./Layer-kgIv22jT.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./Label-BTeufvbK.js";import"./ZIndexLayer-QOZqstTD.js";import"./types-BJHbMGwM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CuhIBlUX.js";import"./Curve-DlYk4-Kk.js";import"./useElementOffset-m4QFPyQu.js";import"./iteratee-CYRk1_iR.js";import"./ReactUtils-CRr71kpZ.js";import"./ActivePoints-D4tj1Ft8.js";import"./Dot-U-LLWdez.js";import"./RegisterGraphicalItemId-CrW_A7sx.js";import"./ErrorBarContext-CH81KESR.js";import"./GraphicalItemClipPath-BL_BqIRg.js";import"./SetGraphicalItem-C0Kooi_K.js";import"./useAnimationId-BJQnqM8-.js";import"./getRadiusAndStrokeWidthFromDot-DUMZDB8N.js";import"./ActiveShapeUtils-CnPzR9TY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdkJqkle.js";import"./Trapezoid-BYebN7Pj.js";import"./Sector-C3UDCS_F.js";import"./Cross-Btj8qbbV.js";import"./index-cG5s137W.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./OffsetShower-shA12VSX.js";import"./PlotAreaShower-DksCyK2N.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
