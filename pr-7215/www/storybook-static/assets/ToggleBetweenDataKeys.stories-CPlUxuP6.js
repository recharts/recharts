import{u as n,e as t}from"./iframe-B82q9u-Y.js";import{L as p}from"./LineChart-F0rDwKc2.js";import{g as s}from"./arrayEqualityCheck-CKCQU2qV.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-39AKtB2i.js";import{X as d}from"./XAxis-BRaoe5W0.js";import{Y as u}from"./YAxis-CWyiNt5V.js";import{L as y}from"./Legend-DSpSu37z.js";import{L as h}from"./Line-CWq30mlj.js";import{T as g}from"./Tooltip-DoN-IRTo.js";import{R as K}from"./RechartsHookInspector-z9cebFjB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBADlju4.js";import"./index-DXyPKPXc.js";import"./immer-WiujJWUS.js";import"./hooks-Sri1sPLr.js";import"./axisSelectors-DXfv2Drb.js";import"./d3-scale-B8FZewzC.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-I2t58hxh.js";import"./renderedTicksSlice-CInncnPk.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5ApupumH.js";import"./chartDataContext-D6HVVC2S.js";import"./CategoricalChart-DKDPW_6L.js";import"./resolveDefaultProps-g5aDd7Yf.js";import"./CartesianAxis-U5xnp7fG.js";import"./Layer-C2GvyuKR.js";import"./Text-DlTF1_pF.js";import"./DOMUtils-CfA92o7z.js";import"./Label-yJEcHIim.js";import"./ZIndexLayer-DTDC0Rqe.js";import"./types-BjP-coDb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D0OvFEPa.js";import"./symbol-BgLdl-Fp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7Quszb0.js";import"./uniqBy-DRfr_3Tm.js";import"./iteratee-DVb5hUcr.js";import"./Curve-BwRgum1p.js";import"./step-BxVbCn_a.js";import"./AnimatedItems-COwEU_uD.js";import"./useAnimationId-DLlegLLP.js";import"./ActivePoints-BsAXJsSc.js";import"./Dot-Ca9kKcpV.js";import"./RegisterGraphicalItemId-kL3h8ct-.js";import"./ErrorBarContext-BL5FMVHx.js";import"./GraphicalItemClipPath-BpOAg0aH.js";import"./SetGraphicalItem-BoZe1188.js";import"./getRadiusAndStrokeWidthFromDot-Dgtb5g0j.js";import"./ActiveShapeUtils-D-OS5cJ_.js";import"./Cross-C2dTsZH7.js";import"./Rectangle-BGMFafl1.js";import"./Sector-RiuWdAe8.js";import"./index-dYimQAlj.js";import"./ChartSizeDimensions-BGSkMu5K.js";import"./OffsetShower-DzS61Pg9.js";import"./PlotAreaShower-uXu1OgRK.js";const kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,kt as default};
