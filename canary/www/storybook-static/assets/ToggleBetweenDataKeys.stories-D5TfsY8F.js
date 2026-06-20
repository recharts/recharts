import{r as n,R as t}from"./iframe-BFQyqMbU.js";import{L as p}from"./LineChart-BNXGvlN4.js";import{R as s}from"./zIndexSlice-jJ_CaBDo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-QGae8iA0.js";import{X as d}from"./XAxis-Db3L_JCQ.js";import{Y as y}from"./YAxis-Cz8KrmGC.js";import{L as u}from"./Legend-BXiztOAE.js";import{L as h}from"./Line-Chmj4NtI.js";import{T as g}from"./Tooltip-CXFEEuZc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BounuTKv.js";import"./index-CDKHoQ9z.js";import"./index-Gba51aKu.js";import"./index-lcxumIdx.js";import"./index-yqk7rkqd.js";import"./immer--b20-lFI.js";import"./get-p4pcudXd.js";import"./renderedTicksSlice-HnYJqdGr.js";import"./axisSelectors-CRFbB7ND.js";import"./d3-scale--vDRC-Zz.js";import"./resolveDefaultProps-B_ssPDKF.js";import"./isWellBehavedNumber-CXuZhh3h.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qgf-TM4c.js";import"./chartDataContext-BM8qcz36.js";import"./CategoricalChart-FqadQC9J.js";import"./CartesianAxis-JBeJCkI-.js";import"./Layer-BpUtlx2X.js";import"./Text-BMugx81A.js";import"./DOMUtils-CzHwSZC9.js";import"./Label-BBfCiCQ6.js";import"./ZIndexLayer-DPawcbSR.js";import"./types-cy48Xvgh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B2TF9-Ed.js";import"./symbol-DiXwW3Zb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-iy_d7mMM.js";import"./uniqBy-w3S1ilQh.js";import"./iteratee-cMb-fu6v.js";import"./Curve-BGI4IKSF.js";import"./step-D-tHTqvJ.js";import"./AnimatedItems-BA8IgjUl.js";import"./useAnimationId-D_DRQ5ok.js";import"./ActivePoints-CftO_jkK.js";import"./Dot-BN0Lszie.js";import"./RegisterGraphicalItemId-BEWz97Wy.js";import"./ErrorBarContext-CGoKUjs6.js";import"./GraphicalItemClipPath-B53LZcY2.js";import"./SetGraphicalItem-D0WJt6mF.js";import"./getRadiusAndStrokeWidthFromDot-C2SI6lR2.js";import"./ActiveShapeUtils-BDWRsG1S.js";import"./Cross-DiEAKJxm.js";import"./Rectangle-CLh9RCDA.js";import"./util-Dxo8gN5i.js";import"./Sector-C2-9f_ud.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
