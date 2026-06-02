import{P as n,c as t}from"./iframe-DcZ25aZq.js";import{L as p}from"./LineChart-C2zHba_T.js";import{g as s}from"./zIndexSlice-Bx385Wu5.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-C0VQBDvF.js";import{X as d}from"./XAxis-DyhIsrPh.js";import{Y as y}from"./YAxis-C_fkHFUI.js";import{L as u}from"./Legend-D3iuJ925.js";import{L as g}from"./Line-CAf-fyij.js";import{T as h}from"./Tooltip-DUzLPYEr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DsTdodcN.js";import"./index-CxwbJNHI.js";import"./index-kO-m-NHC.js";import"./index-DUKnKSji.js";import"./index-6by7EgtV.js";import"./immer-CNH0Qykv.js";import"./get-BBHPk0wF.js";import"./renderedTicksSlice-CAWK7f2V.js";import"./axisSelectors-C3VexB3f.js";import"./d3-scale-COdDGNPP.js";import"./resolveDefaultProps-C_CQ9UBc.js";import"./isWellBehavedNumber-DH8Wjvkj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cl4arGk4.js";import"./chartDataContext-DIHsMymB.js";import"./CategoricalChart-im9vFRI0.js";import"./CartesianAxis-BygLm6pY.js";import"./Layer-BPFmWcLz.js";import"./Text-B5Z71jGK.js";import"./DOMUtils-CBs1V0PN.js";import"./Label-madSHGhS.js";import"./ZIndexLayer-CX9fDFPC.js";import"./types-CDVpgISI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-FaOp8ptw.js";import"./symbol-Cpj73b5m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHtU9LZv.js";import"./uniqBy-CxmJpd9c.js";import"./iteratee-DGXMHyCR.js";import"./Curve-C4CaZCwE.js";import"./step-BUy109CO.js";import"./ReactUtils-BfQpQwdE.js";import"./ActivePoints-mSOk-v2V.js";import"./Dot-Ci7H-Wks.js";import"./RegisterGraphicalItemId-Cyx6k34u.js";import"./ErrorBarContext-3J6T58S3.js";import"./GraphicalItemClipPath-CXNX3kTP.js";import"./SetGraphicalItem-BsEDaVAo.js";import"./useAnimationId-wbWpU06B.js";import"./getRadiusAndStrokeWidthFromDot-CxfGK76v.js";import"./ActiveShapeUtils-cdOmSqYT.js";import"./Cross-JclV0vmp.js";import"./Rectangle-BMeCNBC5.js";import"./Sector-BdKYeoRV.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
