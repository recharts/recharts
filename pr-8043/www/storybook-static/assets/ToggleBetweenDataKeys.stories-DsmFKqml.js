import{r as p,R as t}from"./iframe-x9YCwuVc.js";import{L as n}from"./LineChart-Cy8Yflxs.js";import{R as s}from"./zIndexSlice-BV1eDa8t.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dj6fKyXJ.js";import{X as d}from"./XAxis-DOrrA_AO.js";import{Y as y}from"./YAxis-CcW9nNm_.js";import{L as u}from"./Legend-6UoBpxle.js";import{L as h}from"./Line-B5t4aXxo.js";import{T as g}from"./Tooltip-CXDzUWmd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DuSi3yuo.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DUrnAUTK.js";import"./throttle-CFpl0b0L.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./d3-scale-DeFHX2Lm.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./index-BC2a9-E_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./CartesianAxis-C1FOk_u6.js";import"./Layer-byU46PKm.js";import"./Text-COBhbjuo.js";import"./pageBackground-TE-MQad5.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./Label-BWVi17tM.js";import"./ZIndexLayer-DrSAG7iO.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./types-fCYwQ83-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BrPTbFSx.js";import"./symbol-DYEAEcXk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Q7vbrrOH.js";import"./uniqBy-bvQ6Ay4K.js";import"./iteratee-_rf4IMM8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-8b-Qxogq.js";import"./step-DWJVpFVS.js";import"./activeStyles-B5NsC4ZM.js";import"./useAnimationId-DxnlQorl.js";import"./ActivePoints-BL8qk4Kh.js";import"./Dot-B98z2wU8.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./ErrorBarContext-a5it_Nak.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getRadiusAndStrokeWidthFromDot-DRWTNSpx.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./useEffectiveDataKey-D48S_iiZ.js";import"./Cross-B9ZBBQd6.js";import"./Rectangle-B-VzFgv3.js";import"./util-Dxo8gN5i.js";import"./Sector-e9C-YfcB.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
