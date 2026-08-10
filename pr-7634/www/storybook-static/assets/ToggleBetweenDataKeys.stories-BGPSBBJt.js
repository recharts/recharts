import{r as n,R as t}from"./iframe-BKvNh1h_.js";import{L as p}from"./LineChart-DDm57NLM.js";import{R as s}from"./zIndexSlice-C45OUbld.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CU7MDKqs.js";import{X as d}from"./XAxis-Cpwb-IQX.js";import{Y as y}from"./YAxis-TFOOT7wp.js";import{L as u}from"./Legend-B19xbslo.js";import{L as h}from"./Line-DHhB6lUX.js";import{T as g}from"./Tooltip-CH7VXEpY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bjdqnb5s.js";import"./index-LDeJ6IyG.js";import"./index-Bs0U2hFi.js";import"./index-LbIdVRN9.js";import"./index-C8RhipGY.js";import"./throttle-CCr4r-wz.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CqcxQY1m.js";import"./resolveDefaultProps-DkG3FLLb.js";import"./isWellBehavedNumber-CCuIO4aK.js";import"./d3-scale-C0LZPMhi.js";import"./renderedTicksSlice-CZ4-swon.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BRsslnmW.js";import"./chartDataContext-CYnF151M.js";import"./CategoricalChart-ByQYOV-Z.js";import"./CartesianAxis-BURSUJ7n.js";import"./Layer-B8EPTqa2.js";import"./Text-Uy9kBT6v.js";import"./DOMUtils-B6CNM4ee.js";import"./Label-D2RnPYt_.js";import"./ZIndexLayer-Dc9WCXop.js";import"./types-BwPciZr7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-a-KGKEje.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CXb0Y0lK.js";import"./symbol-w5xUT4gq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-16dn994i.js";import"./uniqBy-CpZLg9oD.js";import"./iteratee-CSiLF3kk.js";import"./Curve-B1iKKL18.js";import"./step-CFL-eQno.js";import"./AnimatedItems-GpiTBXk9.js";import"./useAnimationId-B6MPcNoZ.js";import"./ActivePoints-Db6v46Om.js";import"./Dot-jCktDg80.js";import"./RegisterGraphicalItemId-D3RFuNNX.js";import"./ErrorBarContext-BdGaK5EK.js";import"./GraphicalItemClipPath-CWTvD5fd.js";import"./SetGraphicalItem-B2KPFtj4.js";import"./getRadiusAndStrokeWidthFromDot-DisaDplY.js";import"./ActiveShapeUtils-Dl_5YuKK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DojD0aFs.js";import"./Rectangle-OKuxmDV_.js";import"./util-Dxo8gN5i.js";import"./Sector-DJIrPNXW.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
