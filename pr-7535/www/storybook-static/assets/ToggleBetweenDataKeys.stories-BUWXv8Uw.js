import{r as n,R as t}from"./iframe-7XJ2xcaa.js";import{L as p}from"./LineChart-k3zvZ0sx.js";import{R as s}from"./zIndexSlice-Smyg0ZdR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C_KCMoN3.js";import{X as d}from"./XAxis-C1fpfCfO.js";import{Y as y}from"./YAxis-BG1hFypZ.js";import{L as u}from"./Legend-BaHRoIPM.js";import{L as h}from"./Line-D0ZPViAT.js";import{T as g}from"./Tooltip-BmtInrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-49lbEV7H.js";import"./index-DVTD1Fpd.js";import"./index-WU_oH4BO.js";import"./index-2ovstjTu.js";import"./index-TMtczAeJ.js";import"./throttle-D4811UcH.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2Tixweq.js";import"./axisSelectors-BEWMGkmB.js";import"./resolveDefaultProps-Dm7ujSLB.js";import"./isWellBehavedNumber-C2jdcJtq.js";import"./d3-scale-BuuUT6V5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BVaoZCto.js";import"./chartDataContext-hp2Drl2b.js";import"./CategoricalChart-DLU0PYD6.js";import"./CartesianAxis-OiUDsUEB.js";import"./Layer-BGcXXZrK.js";import"./Text-Dt_HR9_i.js";import"./DOMUtils-DVnhXYtC.js";import"./Label-kaLCkxIc.js";import"./ZIndexLayer-CzQjP_gg.js";import"./types-CCvMXBAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DQCEJqHR.js";import"./symbol-B0FARq78.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-vskSZV.js";import"./uniqBy-Big4MVsT.js";import"./iteratee-BpHsmV36.js";import"./Curve-CHo9cgN6.js";import"./step-CE2G1JBn.js";import"./AnimatedItems-DXPDcN2s.js";import"./useAnimationId-Bhm-Tg4Q.js";import"./ActivePoints-DwDpt2dv.js";import"./Dot-CdCHNKxE.js";import"./RegisterGraphicalItemId-ezS9CDrB.js";import"./ErrorBarContext-BQCQT8xU.js";import"./GraphicalItemClipPath-8cnbCE1N.js";import"./SetGraphicalItem-BkRk4aVf.js";import"./getRadiusAndStrokeWidthFromDot-DV9FgO6_.js";import"./ActiveShapeUtils-CUzuZPCF.js";import"./Cross-GqWREVO2.js";import"./Rectangle-BCPFxxTI.js";import"./util-Dxo8gN5i.js";import"./Sector-DCIpnNip.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
