import{r as p,R as t}from"./iframe-DIGZheBd.js";import{L as n}from"./LineChart-C3MIainG.js";import{R as s}from"./zIndexSlice-_cU-ODvm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CGrfPWch.js";import{X as d}from"./XAxis-JeVlcNJo.js";import{Y as y}from"./YAxis-pOdEjlW4.js";import{L as u}from"./Legend-CfHDjC-3.js";import{L as h}from"./Line-sf0r7qgd.js";import{T as g}from"./Tooltip-Cd8nZnBm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZtBBFTk.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D8SOTwsy.js";import"./throttle-BSuBUnwb.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./d3-scale-DdurYsOp.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CiMP-PEk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./CartesianAxis--bh-_8od.js";import"./Layer-CyJKyehG.js";import"./Text-OwXAxNhC.js";import"./pageBackground-CxPMNoKP.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./Label-DdnBRnzY.js";import"./ZIndexLayer-Csfe5z3g.js";import"./types-MK9UFfTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfxfCoQh.js";import"./symbol-CFKklyyk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MF99uNag.js";import"./uniqBy-De-60mdC.js";import"./iteratee-UNnIxzF9.js";import"./Curve-DTsvKbrn.js";import"./step-DnA-tUNV.js";import"./activeStyles-BNdVOgR8.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./ActivePoints-DCRcJ-JV.js";import"./Dot-Dr6-XXth.js";import"./ErrorBarContext-Bx6RRNyu.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getRadiusAndStrokeWidthFromDot-CEhKuZ-K.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./useEffectiveDataKey-DDZKQvTb.js";import"./Cross-C0f6ReDS.js";import"./Rectangle-CbIHVVOf.js";import"./util-Dxo8gN5i.js";import"./Sector-B1hWzDc8.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
