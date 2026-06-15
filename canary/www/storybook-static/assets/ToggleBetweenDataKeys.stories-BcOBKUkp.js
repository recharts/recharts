import{r as n,R as t}from"./iframe-BECHMrDZ.js";import{L as p}from"./LineChart-CBE2b039.js";import{R as s}from"./zIndexSlice-ZZYOt5ZJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BweugEAK.js";import{X as d}from"./XAxis-Dnf9N0V4.js";import{Y as y}from"./YAxis-9bvi17Wq.js";import{L as u}from"./Legend-C_5eNF-Y.js";import{L as h}from"./Line-NU5SWiL4.js";import{T as g}from"./Tooltip-DkpUoC0h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNofag6x.js";import"./index-Cdabc56c.js";import"./index-BHRyfSkK.js";import"./index-DsWKibNG.js";import"./index-BdtLPmOn.js";import"./immer-DNeblauM.js";import"./get-CPwaVA9l.js";import"./renderedTicksSlice-CcmJJV_E.js";import"./axisSelectors-Do_tBIrF.js";import"./d3-scale-D-I2gAvK.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BtqON1I7.js";import"./isWellBehavedNumber-Zub9mv9t.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmqQmt9e.js";import"./chartDataContext-ievxR12T.js";import"./CategoricalChart-CZw-S4E-.js";import"./CartesianAxis-BTVfzskq.js";import"./Layer-ESOqu-Gc.js";import"./Text-C9QSstgR.js";import"./DOMUtils-BMatnmOn.js";import"./Label-VQOoexxL.js";import"./ZIndexLayer-dzP4UBMr.js";import"./types-n4LQ-b_y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C1067cmX.js";import"./symbol-B59qSlrV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcmDvjnC.js";import"./uniqBy-3fDUfdm2.js";import"./iteratee-DRu_ACEH.js";import"./Curve-Bn_0oI69.js";import"./step-DbGI_ztS.js";import"./AnimatedItems-CQmyu7n-.js";import"./useAnimationId-BT4jYtUB.js";import"./ActivePoints-Cmc10X0Q.js";import"./Dot-C7DD26qy.js";import"./RegisterGraphicalItemId-DV64Udii.js";import"./ErrorBarContext-D2jpma0H.js";import"./GraphicalItemClipPath-BUhmAU6I.js";import"./SetGraphicalItem-DhkvModl.js";import"./getRadiusAndStrokeWidthFromDot-C9KiXcw0.js";import"./ActiveShapeUtils-LDykMPUP.js";import"./Cross-CN_wglQD.js";import"./Rectangle-De025VPd.js";import"./Sector-DT-TfJCp.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
