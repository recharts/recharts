import{r as n,e as t}from"./iframe-Dbih6tM_.js";import{L as p}from"./LineChart-DKIU-EIM.js";import{g as s}from"./zIndexSlice-F7HsGAhb.js";import{p as l}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-B47bI95A.js";import{X as d}from"./XAxis-UKVsyr7-.js";import{Y as y}from"./YAxis-x6PKBVdt.js";import{L as u}from"./Legend-cJzfLKeh.js";import{L as g}from"./Line-DKLERS8c.js";import{T as h}from"./Tooltip-91lkN_Ou.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./immer-u9L_0Kl5.js";import"./get-DVIR8H8G.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./resolveDefaultProps-C6XhIduD.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./CategoricalChart-BUbHs2Eq.js";import"./CartesianAxis-sMFUgupR.js";import"./Layer-B42S8g5T.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./Label-CzYO866A.js";import"./ZIndexLayer-DaMCCGdS.js";import"./types-Bhc7gOzP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BGSIVaqN.js";import"./symbol-C1rCDija.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXd0grxf.js";import"./uniqBy-ByRFrmC2.js";import"./iteratee-DEDrKpvz.js";import"./Curve-CbpaSJeH.js";import"./step-EAtlMAAS.js";import"./ReactUtils-Bj9mmMxB.js";import"./ActivePoints-DzbjRTsh.js";import"./Dot-BKoIVpn9.js";import"./RegisterGraphicalItemId-CoMv7TZ7.js";import"./ErrorBarContext-CaITZn-H.js";import"./GraphicalItemClipPath-BqpiOJ0K.js";import"./SetGraphicalItem-C_rRFyeV.js";import"./useAnimationId-CWLhhp_H.js";import"./getRadiusAndStrokeWidthFromDot-DA8FMUL1.js";import"./ActiveShapeUtils-B7EaMEP1.js";import"./Cross-BehVYR4O.js";import"./Rectangle-DeVdQqm5.js";import"./Sector-C4ZURWaA.js";const Dt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:l},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Dt as default};
