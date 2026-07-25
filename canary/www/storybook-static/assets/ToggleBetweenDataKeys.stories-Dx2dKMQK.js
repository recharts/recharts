import{r as n,R as t}from"./iframe-DNItCT7m.js";import{L as p}from"./LineChart-BVAwPyok.js";import{R as s}from"./zIndexSlice-BIc7DaAW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-68pXkVyS.js";import{X as d}from"./XAxis-Daqmz5Xv.js";import{Y as y}from"./YAxis-BTzQl_Zr.js";import{L as u}from"./Legend-S1INlTBC.js";import{L as h}from"./Line-DvlQWCkT.js";import{T as g}from"./Tooltip-ClqZwAtD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMs8UQqD.js";import"./index-ROxRgVl8.js";import"./index-C_m6BLaT.js";import"./index-CATLtXB_.js";import"./index-COLkHtZe.js";import"./throttle-C6rBLGvR.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DtPKT0nb.js";import"./axisSelectors-BBK9nbq3.js";import"./resolveDefaultProps-Bl2ououO.js";import"./isWellBehavedNumber-CgbpTCVR.js";import"./d3-scale-CToN17b5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPv-NLLr.js";import"./chartDataContext-abx-D_mf.js";import"./CategoricalChart-DyfBdBCf.js";import"./CartesianAxis-Bnx97baV.js";import"./Layer-Db2cjn9q.js";import"./Text-CG5VQSen.js";import"./DOMUtils-D-QZZqkA.js";import"./Label-Dd-8-k84.js";import"./ZIndexLayer-C8mc3Rgo.js";import"./types-BUhan55B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-Blhs67Ix.js";import"./symbol-BPmt5VBA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C4tOubk4.js";import"./uniqBy-DV28RGwR.js";import"./iteratee-D8sPzuRh.js";import"./Curve-DUQP-DVq.js";import"./step-CV_HIcdR.js";import"./AnimatedItems-CA_PH1lw.js";import"./useAnimationId-0YgIZ0Y8.js";import"./ActivePoints-DrmmrcJw.js";import"./Dot-CBZvltEJ.js";import"./RegisterGraphicalItemId-DzuoUeII.js";import"./ErrorBarContext-BlEkCG4n.js";import"./GraphicalItemClipPath-DTm1hIPW.js";import"./SetGraphicalItem-B0-RRBJT.js";import"./getRadiusAndStrokeWidthFromDot-DPqVYI7W.js";import"./ActiveShapeUtils-DbSW9g1N.js";import"./Cross-De0Ntlpb.js";import"./Rectangle-ymMtDHlr.js";import"./util-Dxo8gN5i.js";import"./Sector-CLSgdK3f.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
