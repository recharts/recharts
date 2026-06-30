import{r as n,R as t}from"./iframe-BAw0s5ot.js";import{L as p}from"./LineChart-wTqlh64R.js";import{R as s}from"./zIndexSlice-BeH27P2U.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CG-mQCyS.js";import{X as d}from"./XAxis-DLc6krzc.js";import{Y as y}from"./YAxis-o1QSu-GR.js";import{L as u}from"./Legend-CTPvlbFs.js";import{L as h}from"./Line-DjWgsN1g.js";import{T as g}from"./Tooltip-C9JqWq_X.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./throttle-CMKSqw9i.js";import"./get-CSAr6kNF.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./resolveDefaultProps-BuFdbqch.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./CartesianAxis-BP8vTRJY.js";import"./Layer-CnD0sOVo.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./Label-RqhE4qn6.js";import"./ZIndexLayer-B6NdRg2s.js";import"./types-3486df9G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BExFE9NQ.js";import"./symbol-CdA8a2iG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFqwe0iW.js";import"./uniqBy-dt3axYWo.js";import"./iteratee-E5lawuru.js";import"./Curve-DDP5uwdK.js";import"./step-BMQa1wmq.js";import"./AnimatedItems-DKynRxAN.js";import"./useAnimationId-D83gTctj.js";import"./ActivePoints-x13vM-lM.js";import"./Dot-DM8ASB1e.js";import"./RegisterGraphicalItemId-BYWDLggr.js";import"./ErrorBarContext-B9tnwNW4.js";import"./GraphicalItemClipPath-CFCGDJ4D.js";import"./SetGraphicalItem-BtUL3que.js";import"./getRadiusAndStrokeWidthFromDot-Dj6bNAvM.js";import"./ActiveShapeUtils-DPtxPHYL.js";import"./Cross-4E-QbQ6H.js";import"./Rectangle-BKTeT_Dl.js";import"./util-Dxo8gN5i.js";import"./Sector-CxvJl0Zv.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
