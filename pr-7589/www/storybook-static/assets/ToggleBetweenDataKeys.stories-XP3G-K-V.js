import{r as n,R as t}from"./iframe-DsM5Snoh.js";import{L as p}from"./LineChart-BMW1p7Cr.js";import{R as s}from"./zIndexSlice-Bw64GR0n.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CR69ad4g.js";import{X as d}from"./XAxis-BP59MRl4.js";import{Y as y}from"./YAxis-AiKtCrqX.js";import{L as u}from"./Legend-qZpYFHxv.js";import{L as h}from"./Line-CbSm--Jp.js";import{T as g}from"./Tooltip-BDoWEOKg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCACJiBR.js";import"./index-DzyEvv1d.js";import"./index-Dme9ADAC.js";import"./index-C1bUMSNa.js";import"./index-Cpv94xK3.js";import"./throttle-BxJwdddW.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2lYgmQd.js";import"./axisSelectors-ZbRe1Fr2.js";import"./resolveDefaultProps-B889QW7F.js";import"./isWellBehavedNumber-BL4XxRG3.js";import"./d3-scale-5xoUdZXJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHkgxIBG.js";import"./chartDataContext-ChNOSR4m.js";import"./CategoricalChart-C7zh0Rx-.js";import"./CartesianAxis-CVbxoQSN.js";import"./Layer-DJ-_hZeS.js";import"./Text-DTpoJfmA.js";import"./DOMUtils-bol6pq_B.js";import"./Label-COWFM_3h.js";import"./ZIndexLayer-8J4UOhVH.js";import"./types-C3s_AHHw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BASV0N3J.js";import"./symbol-DgUa4s6j.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3ItBwVb.js";import"./uniqBy-DHqhlZDI.js";import"./iteratee-C3LESQL9.js";import"./Curve-DtFyS1kb.js";import"./step-DmgaGYb6.js";import"./AnimatedItems-B9cLBWaU.js";import"./useAnimationId-C3tGSe4h.js";import"./ActivePoints-jmPmXIfv.js";import"./Dot-F9GzLPgD.js";import"./RegisterGraphicalItemId-B77AAmB8.js";import"./ErrorBarContext-SZrR3kne.js";import"./GraphicalItemClipPath-DkDzGEyf.js";import"./SetGraphicalItem-HftiDrim.js";import"./getRadiusAndStrokeWidthFromDot-Bt2ychRU.js";import"./ActiveShapeUtils-Crk25mmB.js";import"./Cross-pP9lI4hq.js";import"./Rectangle-BJ0VqAUA.js";import"./util-Dxo8gN5i.js";import"./Sector-CR-Y1Tms.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
