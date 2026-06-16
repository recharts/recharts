import{r as n,R as t}from"./iframe-Dsugo_zg.js";import{L as p}from"./LineChart-BILblmZW.js";import{R as s}from"./zIndexSlice-CQ8Dq6Rw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ZCTVKiig.js";import{X as d}from"./XAxis-BtWHE8Ii.js";import{Y as y}from"./YAxis-BOEdL1M7.js";import{L as u}from"./Legend-BsJaqzMT.js";import{L as h}from"./Line-Ng1r7DkL.js";import{T as g}from"./Tooltip-D4JKW0Gd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3mVticM.js";import"./index-B1HEKGfm.js";import"./index-B6DCYcPU.js";import"./index-hfwoyc40.js";import"./index-BltQKr7J.js";import"./immer-Dn_ZGj_2.js";import"./get-B4-DsMlp.js";import"./renderedTicksSlice-CsDLwy59.js";import"./axisSelectors-DuSkawJ1.js";import"./d3-scale-C9TIKeBC.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-ByiopbeA.js";import"./isWellBehavedNumber-BXhYPRs7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-UK3tQwAh.js";import"./chartDataContext-D_whFwD4.js";import"./CategoricalChart-FdwMdvH0.js";import"./CartesianAxis-1FBfSHCk.js";import"./Layer-PDKsNXXB.js";import"./Text-BrgPWmaV.js";import"./DOMUtils-Bp38L-kM.js";import"./Label-Dv0ON-tn.js";import"./ZIndexLayer-CosUoOTg.js";import"./types-BdpIxXW8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BHPShsT2.js";import"./symbol-4UK5LcDA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ckhk56wk.js";import"./uniqBy-BVaAsoy2.js";import"./iteratee-BfnyOwZq.js";import"./Curve-ZHf_GWFM.js";import"./step-BaYniHaQ.js";import"./AnimatedItems-BcVxVlvs.js";import"./useAnimationId-BEJfwvjz.js";import"./ActivePoints-B-oBY2kZ.js";import"./Dot-zHN_KyIs.js";import"./RegisterGraphicalItemId-VkMnq2n0.js";import"./ErrorBarContext-BTy60tqZ.js";import"./GraphicalItemClipPath-DVeVc-Gk.js";import"./SetGraphicalItem-CiVD-7Sz.js";import"./getRadiusAndStrokeWidthFromDot-BuDs2Yv2.js";import"./ActiveShapeUtils-DQiBB_Ml.js";import"./Cross-BWkIDfq-.js";import"./Rectangle-6j2cXDPI.js";import"./Sector-ByCcrvia.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
