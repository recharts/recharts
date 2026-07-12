import{r as n,R as t}from"./iframe-U4mOrMwe.js";import{L as p}from"./LineChart-CLXzAGmn.js";import{R as s}from"./zIndexSlice-BlSgM3ea.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bq9tg7lR.js";import{X as d}from"./XAxis-DG6xcemZ.js";import{Y as y}from"./YAxis-DLdDDS3Z.js";import{L as u}from"./Legend-DPUZIXCc.js";import{L as h}from"./Line-3uFaqECT.js";import{T as g}from"./Tooltip-DdlrVHKb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ccy1_TNc.js";import"./index-CECNT87F.js";import"./index-CnEU82E2.js";import"./index-DUYa25JH.js";import"./index-BegtHHbP.js";import"./throttle-C66Yjghp.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DIBgsBMZ.js";import"./axisSelectors-D_j8BHYk.js";import"./resolveDefaultProps-DeLH2ecz.js";import"./isWellBehavedNumber-K_DMN0Z2.js";import"./d3-scale-DcD2sPeq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BwiXZARa.js";import"./chartDataContext-ClSkA-dc.js";import"./CategoricalChart-wt8G0fhK.js";import"./CartesianAxis-B1Bb8VCA.js";import"./Layer-Dh2FttVt.js";import"./Text-5DtlWUUA.js";import"./DOMUtils-CsYBkNDR.js";import"./Label-CcnC99yA.js";import"./ZIndexLayer-yVDcLD3J.js";import"./types-B0fbEwRP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CKuT-4HC.js";import"./symbol-bz0Y9ldF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CN4fPkTB.js";import"./uniqBy-_0mEzY_K.js";import"./iteratee-OYHaUVmV.js";import"./Curve-Dsu_AJtV.js";import"./step-Dg4X7SdR.js";import"./AnimatedItems-Moj_u834.js";import"./useAnimationId-R6vuYPvP.js";import"./ActivePoints-BNwDYYZl.js";import"./Dot-BvSFkLq2.js";import"./RegisterGraphicalItemId-BryVNAH7.js";import"./ErrorBarContext-_tOLdnG2.js";import"./GraphicalItemClipPath-IA0cC_pI.js";import"./SetGraphicalItem-BzboYsPC.js";import"./getRadiusAndStrokeWidthFromDot-BPAj830K.js";import"./ActiveShapeUtils--yBfM0nT.js";import"./Cross-BngjGOzZ.js";import"./Rectangle-CsJy8j3I.js";import"./util-Dxo8gN5i.js";import"./Sector-qJ4kp9X9.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
