import{r as n,R as t}from"./iframe-DX1vtGMO.js";import{L as p}from"./LineChart-CWb2fsSZ.js";import{R as s}from"./zIndexSlice-CBHqXPZu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-339ME1w1.js";import{X as d}from"./XAxis-DLegRWnR.js";import{Y as y}from"./YAxis-oQ2494Ky.js";import{L as u}from"./Legend-C7VLggpR.js";import{L as h}from"./Line-BeNVFQ-c.js";import{T as g}from"./Tooltip-B_SozOdJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./immer-CyjJLdoY.js";import"./get-Cgjumwe9.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./Label-D5WIiRBw.js";import"./ZIndexLayer-DdHbybrS.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cgj4MZk1.js";import"./symbol-B0aoDzxh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHGceypl.js";import"./uniqBy-DwA9whMp.js";import"./iteratee-BRHNmftS.js";import"./Curve-B-MgiVxo.js";import"./step-d6ptEm-b.js";import"./AnimatedItems-D5gtlj3g.js";import"./useAnimationId-3wGGsZoS.js";import"./ActivePoints-4qRZgwnO.js";import"./Dot-UykzmigB.js";import"./RegisterGraphicalItemId-BdvIWiM6.js";import"./ErrorBarContext-BR5rkK2A.js";import"./GraphicalItemClipPath-CtH8IX0c.js";import"./SetGraphicalItem-DJ3AMYhJ.js";import"./getRadiusAndStrokeWidthFromDot-CigRqL_g.js";import"./ActiveShapeUtils-C5uepk-V.js";import"./Cross-CTITRFSj.js";import"./Rectangle-m_tCbE2d.js";import"./util-Dxo8gN5i.js";import"./Sector-B5U3iBwp.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
