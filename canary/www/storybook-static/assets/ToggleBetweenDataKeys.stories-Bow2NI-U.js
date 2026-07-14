import{r as n,R as t}from"./iframe-CxG2PZXj.js";import{L as p}from"./LineChart-D-jbm5MF.js";import{R as s}from"./zIndexSlice-DAD_xoRY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dr3fExMw.js";import{X as d}from"./XAxis-B4ycL0c8.js";import{Y as y}from"./YAxis-B1kX2SHx.js";import{L as u}from"./Legend-BAPAMVGJ.js";import{L as h}from"./Line-_o8LGB_p.js";import{T as g}from"./Tooltip-D4E4fjDv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0t_sSZG.js";import"./index-5B0X8Ccq.js";import"./index-DK4BYQS1.js";import"./index-DToZBGKP.js";import"./index-DiKZrp18.js";import"./throttle-BLzUd2wF.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DK3Qh-AH.js";import"./axisSelectors-BOLkCBrq.js";import"./resolveDefaultProps-DUaFgx3m.js";import"./isWellBehavedNumber-8T9tdyF1.js";import"./d3-scale-LDX-W-e5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqtDQP9t.js";import"./chartDataContext-Cw7l7MNk.js";import"./CategoricalChart-Dozh9-kX.js";import"./CartesianAxis--mae7NqH.js";import"./Layer-Cge6P4R-.js";import"./Text-Cndr_sMa.js";import"./DOMUtils-D8hCt3_g.js";import"./Label-Z4HB-UJ_.js";import"./ZIndexLayer-kEwpMnQu.js";import"./types-Da-j7B5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BwKJCYen.js";import"./symbol-B-j-jSQL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpY2ID8s.js";import"./uniqBy-BHBdLEDm.js";import"./iteratee-DVQ7CCFT.js";import"./Curve-e0q54Fup.js";import"./step-wD8k8EBt.js";import"./AnimatedItems-DqWCyLkw.js";import"./useAnimationId-D_YXQiTc.js";import"./ActivePoints-Dtvrk-n_.js";import"./Dot-B9yiNv-3.js";import"./RegisterGraphicalItemId-Cn9-4_hp.js";import"./ErrorBarContext-DRFeJFbi.js";import"./GraphicalItemClipPath-m4xLKPFC.js";import"./SetGraphicalItem-C-4LQBhg.js";import"./getRadiusAndStrokeWidthFromDot-3b51JfXm.js";import"./ActiveShapeUtils-CVhA8l6O.js";import"./Cross-DqS9wKdN.js";import"./Rectangle-Dg43H9ES.js";import"./util-Dxo8gN5i.js";import"./Sector-CtOvhzVo.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
