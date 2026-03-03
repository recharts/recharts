import{r as n,e as t}from"./iframe-q7EKBh7o.js";import{L as p}from"./LineChart-DbNB-0Ji.js";import{R as s}from"./arrayEqualityCheck-CNeXmyp-.js";import{C as c}from"./CartesianGrid-zerpxpsB.js";import{X as l}from"./XAxis-Cc06MLaN.js";import{Y as d}from"./YAxis-Dzu9zp52.js";import{L as y}from"./Legend-L2aYPyi0.js";import{L as h}from"./Line-BWfPW2C0.js";import{T as u}from"./Tooltip-iTXI8B3b.js";import{R as g}from"./RechartsHookInspector-DewVmCy0.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B22qLPQG.js";import"./index-C4-9aL-F.js";import"./immer-so6Ulnev.js";import"./hooks-BZKkCtfI.js";import"./axisSelectors-D3C9QRtF.js";import"./d3-scale-C3h6liLe.js";import"./zIndexSlice-FB6DIKIg.js";import"./renderedTicksSlice-egFijHun.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_NqAGOq.js";import"./chartDataContext-KwgMu4Lm.js";import"./CategoricalChart-BZ540HIN.js";import"./resolveDefaultProps-B7X7PXgS.js";import"./CartesianAxis-DgR0v-Eb.js";import"./Layer-QiojE74q.js";import"./Text-Df64Y-kP.js";import"./DOMUtils-CVphFinv.js";import"./Label-D0Yxhrga.js";import"./ZIndexLayer-CyDdrDhA.js";import"./types-8fLOkEDP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BiDhCEPu.js";import"./symbol-BD_3EPYV.js";import"./step-BUn93TOQ.js";import"./useElementOffset-w_DRWkBd.js";import"./uniqBy-C9c8NOE5.js";import"./iteratee-DCcyxzVq.js";import"./ReactUtils-CCO8h_ST.js";import"./ActivePoints-DPbjwaD_.js";import"./Dot-DPAcQCLX.js";import"./RegisterGraphicalItemId-CxyJNLVz.js";import"./ErrorBarContext-B0wOEolD.js";import"./GraphicalItemClipPath-CMf4z5s0.js";import"./SetGraphicalItem-D3d8G_vE.js";import"./useAnimationId-CVW780SS.js";import"./getRadiusAndStrokeWidthFromDot-D64HU0Nx.js";import"./ActiveShapeUtils-BUcYuJvN.js";import"./isPlainObject-DABaG52Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9CBwic5.js";import"./Trapezoid-C9zo0qDT.js";import"./Sector-CO_u1rWF.js";import"./Curve-CMEBV0h5.js";import"./Cross-CsXDdVSc.js";import"./index-z6UB51wB.js";import"./ChartSizeDimensions-xzO8bMu2.js";import"./OffsetShower-Dpn1KfVs.js";import"./PlotAreaShower-BRuQ0joF.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
