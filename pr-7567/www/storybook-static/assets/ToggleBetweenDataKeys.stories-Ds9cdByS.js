import{r as n,R as t}from"./iframe-BUBMop56.js";import{L as p}from"./LineChart-DlLskTlf.js";import{R as s}from"./zIndexSlice-BFOCeNjP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D1A6VUnX.js";import{X as d}from"./XAxis-Beu0D676.js";import{Y as y}from"./YAxis-CNB6NWqV.js";import{L as u}from"./Legend-Br77Zx9_.js";import{L as h}from"./Line-ChQucypc.js";import{T as g}from"./Tooltip-DD2mCsuY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIZMbcTA.js";import"./index-D9WH3_pB.js";import"./index-CYnUHsqF.js";import"./index-CySDvqVz.js";import"./index-CgGvCayo.js";import"./throttle-D75nL504.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BpqvL_BB.js";import"./axisSelectors-CCSlXmRc.js";import"./resolveDefaultProps-C_KdVhp0.js";import"./isWellBehavedNumber-CCPoxx8d.js";import"./d3-scale-BKS6cnWE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmaucleZ.js";import"./chartDataContext-BpFZdk1W.js";import"./CategoricalChart-a6ycapdr.js";import"./CartesianAxis-DqkvNHf2.js";import"./Layer-CEgjWxAQ.js";import"./Text-DL-t9yLw.js";import"./DOMUtils-Bej4Btff.js";import"./Label-C8PySNEK.js";import"./ZIndexLayer-BKbyZAtu.js";import"./types-CIINUjJb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BWIrY5M4.js";import"./symbol-2MYH5UYO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bc8UoZ8e.js";import"./uniqBy-GaWKKGJl.js";import"./iteratee-oR2_Mtz0.js";import"./Curve-B8ZzY9nf.js";import"./step-nlwLlUk8.js";import"./AnimatedItems-T6oPSFaY.js";import"./useAnimationId-BjgoYA5x.js";import"./ActivePoints-DFwLh6HZ.js";import"./Dot-3ZhUHudT.js";import"./RegisterGraphicalItemId-BChVYVcH.js";import"./ErrorBarContext-D15ZYdOL.js";import"./GraphicalItemClipPath-0CoE9plv.js";import"./SetGraphicalItem-DM6DkeHR.js";import"./getRadiusAndStrokeWidthFromDot-BMrKZbwO.js";import"./ActiveShapeUtils-Dow-vWc_.js";import"./Cross-_pUABBbK.js";import"./Rectangle-B2jqxTYu.js";import"./util-Dxo8gN5i.js";import"./Sector-DvaIwhue.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
