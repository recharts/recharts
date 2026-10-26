import{r as p,R as t}from"./iframe-BzJSp-Lb.js";import{L as n}from"./LineChart-sEC3PvnR.js";import{R as s}from"./zIndexSlice-CpY4G_41.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DEcWpesG.js";import{X as d}from"./XAxis-CLk9ccVg.js";import{Y as y}from"./YAxis-DH3wuMUO.js";import{L as u}from"./Legend-V6chc68W.js";import{L as h}from"./Line-BVjDL0Y0.js";import{T as g}from"./Tooltip-CnZZ1FQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-LKbuKCMS.js";import"./resolveDefaultProps-D32Nc0UY.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dmo5ac34.js";import"./throttle-BdS6UYxD.js";import"./index-YB3txD15.js";import"./index-DEl98Bjo.js";import"./polarAxisSelectors-CKi8pQjD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BS7oaQgh.js";import"./index-GvdMQirt.js";import"./index-DTL6jccP.js";import"./renderedTicksSlice-DRNaA9Q_.js";import"./index-D2gj9RGS.js";import"./CartesianChart-BDSIE1-i.js";import"./chartDataContext-DNk2bkFc.js";import"./CategoricalChart-BXcX0RVa.js";import"./CartesianAxis-ImLT1R94.js";import"./Layer-Ci5AF7LX.js";import"./Text-Di-RptE9.js";import"./pageBackground-8jgZJDd7.js";import"./useId-Cb7sX_a1.js";import"./ZIndexLayer-CGBlNVI9.js";import"./Label-CXAJ70oq.js";import"./dataEntryStyles-eQjR1qV2.js";import"./types-DTueBMDQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C3MESPx5.js";import"./symbol-BGHOeo3E.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DR9OLuHh.js";import"./uniqBy-CSQkScZ5.js";import"./iteratee-xpgxqzFE.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DdA-p64w.js";import"./step-CKjxAWSD.js";import"./activeStyles-B_Yk1DNA.js";import"./useAnimationId-vzOulJcL.js";import"./ActivePoints-gL4Smrft.js";import"./Dot-Bedwt1R7.js";import"./RegisterGraphicalItemId-DeENaGzF.js";import"./ErrorBarContext-CPvXKihC.js";import"./SetGraphicalItem-Cc_8d-ll.js";import"./getRadiusAndStrokeWidthFromDot-DI7kq6ii.js";import"./ActiveShapeUtils-CPEFsget.js";import"./useEffectiveDataKey-Dlkdw6F3.js";import"./Cross-DeILzgGw.js";import"./Rectangle-COJJ_LvU.js";import"./util-Dxo8gN5i.js";import"./Sector-DQO2T2pR.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
