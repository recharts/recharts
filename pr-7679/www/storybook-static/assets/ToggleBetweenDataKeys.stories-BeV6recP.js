import{r as n,R as t}from"./iframe-COdQ-_i9.js";import{L as p}from"./LineChart-C23cnykn.js";import{R as s}from"./zIndexSlice-BAUHEZhm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BUWMT4eG.js";import{X as d}from"./XAxis-LizApVv-.js";import{Y as y}from"./YAxis-Dgz3mKRa.js";import{L as u}from"./Legend-f2h2KPX4.js";import{L as h}from"./Line-DFXQ4cY5.js";import{T as g}from"./Tooltip-BqIuqoy5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTy3ifzR.js";import"./index-DZp6-Cy2.js";import"./index-CaZNwhso.js";import"./index-nH6MfLbp.js";import"./index-m-v483sf.js";import"./throttle-DRdGH59w.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DbJ1cRpx.js";import"./resolveDefaultProps-dt-7inwK.js";import"./isWellBehavedNumber-B44fORf2.js";import"./d3-scale-CMt_xflf.js";import"./renderedTicksSlice-hdjV5rOA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart--ZzFWipT.js";import"./chartDataContext-C8omdLZa.js";import"./CategoricalChart-BY1Qswpd.js";import"./CartesianAxis-gJenpmBs.js";import"./Layer-LpNLyWgX.js";import"./Text-BgPldVXh.js";import"./DOMUtils-Di9E6LdJ.js";import"./useId-CipAwz_I.js";import"./useBackwardsCompatibleTheme-Cu3drd5h.js";import"./Label-CFb-_bkR.js";import"./ZIndexLayer-BadBbMoS.js";import"./types-Blz_Jgjg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BcWxCTx9.js";import"./symbol-DWJ0aIu5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-sZVHnRLq.js";import"./uniqBy-CNCdFAnq.js";import"./iteratee-D1isbkYH.js";import"./Curve-K6myfO05.js";import"./step-CqirpvzS.js";import"./AnimatedItems-ePeQa2pM.js";import"./useAnimationId-B94kpDIK.js";import"./ActivePoints-ekgNIGe7.js";import"./Dot-BSGkTFAh.js";import"./RegisterGraphicalItemId-WjWZ93CB.js";import"./ErrorBarContext-C4XMoDIN.js";import"./GraphicalItemClipPath-BoTywd6M.js";import"./SetGraphicalItem-DdM0uyL7.js";import"./getRadiusAndStrokeWidthFromDot-CyRm1MKY.js";import"./ActiveShapeUtils-CaEJ6Khj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DVWoVcyv.js";import"./Rectangle-H5GG1M9C.js";import"./util-Dxo8gN5i.js";import"./Sector-BeBsIt-k.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
