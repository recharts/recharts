import{r as n,R as t}from"./iframe-ClhUNVnE.js";import{L as p}from"./LineChart-ZCre-wO6.js";import{R as s}from"./zIndexSlice-Bj_mEjES.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DXY2--22.js";import{X as d}from"./XAxis-LUnQ02U1.js";import{Y as y}from"./YAxis-CrIc_odO.js";import{L as u}from"./Legend-CPawz5NQ.js";import{L as h}from"./Line-CrJoEyU1.js";import{T as g}from"./Tooltip-Bgb8w0H3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CH-OQa-8.js";import"./index-CKsF35O1.js";import"./index-D_-76jNe.js";import"./index-CMNlKXgY.js";import"./index-WRHCQy9e.js";import"./throttle-CYmjgX02.js";import"./get-Uq0DWhIe.js";import"./renderedTicksSlice-D-beSFYC.js";import"./axisSelectors-B_omKdC_.js";import"./d3-scale-CyxXVHj6.js";import"./resolveDefaultProps-xxbn2Y0z.js";import"./isWellBehavedNumber-BZGd7hgQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVNFcAED.js";import"./chartDataContext-DT2zm0Bo.js";import"./CategoricalChart-BXjBj4uL.js";import"./CartesianAxis-6ub_g_j0.js";import"./Layer-De05M5So.js";import"./Text-6OmgeIvW.js";import"./DOMUtils-CtaL4Ln2.js";import"./Label-C7_QXzyC.js";import"./ZIndexLayer-DGNmh353.js";import"./types-B-IY3TCA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CM_x84Fs.js";import"./symbol-DRYWtuxg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHiTyfaG.js";import"./uniqBy-CcWMM-R1.js";import"./iteratee-DPPNHIa6.js";import"./Curve-B40-WnjD.js";import"./step-DSY_NY5u.js";import"./AnimatedItems-CjVS2mh2.js";import"./useAnimationId-CT1xX_cr.js";import"./ActivePoints-BylsHrz1.js";import"./Dot-BZCqqavc.js";import"./RegisterGraphicalItemId-EpH2csVt.js";import"./ErrorBarContext-Dhef0H9H.js";import"./GraphicalItemClipPath-BcvmXpNm.js";import"./SetGraphicalItem-D69pntSs.js";import"./getRadiusAndStrokeWidthFromDot-CPyWUTuJ.js";import"./ActiveShapeUtils-DM6q8ZUn.js";import"./Cross-DGcNmab1.js";import"./Rectangle-SjMvhhWJ.js";import"./util-Dxo8gN5i.js";import"./Sector-DtBHNqPc.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
