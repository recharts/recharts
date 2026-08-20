import{r as n,R as t}from"./iframe-DU8eOjQ1.js";import{L as p}from"./LineChart-oTNBeb49.js";import{R as s}from"./zIndexSlice-BTgaU9mo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dzwrat8o.js";import{X as d}from"./XAxis-DwxXrNeT.js";import{Y as y}from"./YAxis-C5Bhkieg.js";import{L as u}from"./Legend-XINFVufZ.js";import{L as h}from"./Line-Bui1sNFj.js";import{T as g}from"./Tooltip-QgrLCtkc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9E3HwjIh.js";import"./index-BsY6e3Dv.js";import"./index-C5aMPIVJ.js";import"./index-BiO2BZqr.js";import"./index-BR94yoib.js";import"./throttle-Ds7SGj9O.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BDOPVsa7.js";import"./resolveDefaultProps-DqdCI-hK.js";import"./isWellBehavedNumber-RQOJRbJb.js";import"./d3-scale-Dni3_L1R.js";import"./renderedTicksSlice-FFc2HuFp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DXBshymN.js";import"./chartDataContext-Cbz9ELzS.js";import"./CategoricalChart-QJ_K41d4.js";import"./CartesianAxis-CXtQQdut.js";import"./Layer-BIDK12wM.js";import"./Text-AtzkHDEd.js";import"./DOMUtils-Cql2uYAT.js";import"./useId-ChL7HBdG.js";import"./useBackwardsCompatibleTheme-DkLB3iia.js";import"./Label-Z9o5T8X-.js";import"./ZIndexLayer-D8k4jgaj.js";import"./types-RZ1xD5kE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-s2FGnFTW.js";import"./symbol-D0L4AM1n.js";import"./path-DyVhHtw_.js";import"./useElementOffset-GWMwWCSs.js";import"./uniqBy-DbQx-kHr.js";import"./iteratee-Did0_bax.js";import"./Curve-DOio-0wn.js";import"./step-DrL3PK0v.js";import"./AnimatedItems-DENpSSAq.js";import"./useAnimationId-CdvddGlN.js";import"./ActivePoints-BjMq4-Xw.js";import"./Dot-B7WcmA_A.js";import"./RegisterGraphicalItemId-Z2iPsOPY.js";import"./ErrorBarContext-C4_kHW9u.js";import"./GraphicalItemClipPath-MaN5rDAF.js";import"./SetGraphicalItem-CdyLZ_3H.js";import"./getRadiusAndStrokeWidthFromDot-B5__NC0u.js";import"./ActiveShapeUtils-C-NGBOfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-YxRmKXZw.js";import"./Rectangle-CfThDaqC.js";import"./util-Dxo8gN5i.js";import"./Sector-CEQ3y-cy.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
