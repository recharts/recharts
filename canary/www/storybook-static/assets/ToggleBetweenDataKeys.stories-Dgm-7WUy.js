import{r as p,R as t}from"./iframe-BquPZQZR.js";import{L as n}from"./LineChart-pb6VXo4D.js";import{R as s}from"./zIndexSlice-DfoMGwwJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CtICaZ9l.js";import{X as d}from"./XAxis-B0NTBS_i.js";import{Y as y}from"./YAxis-DU99c4NY.js";import{L as u}from"./Legend-NxBULrUy.js";import{L as h}from"./Line-BUXIJhlS.js";import{T as g}from"./Tooltip-iSktKwDP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOh7Al31.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ra6SuVrn.js";import"./throttle-Ifciv68t.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B2Z3tDr8.js";import"./index-BBIQOsY9.js";import"./index-DeLNFakb.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./CartesianAxis-G--oVlcc.js";import"./Layer-DgCLyWmw.js";import"./Text-Cz9Qm4K-.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./Label-QfyPAwEN.js";import"./types-HVxQrabK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BOEhDLOF.js";import"./symbol-BytJGu2b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-v0E65nTN.js";import"./uniqBy-Dp4AeUu6.js";import"./iteratee-CvxwxQ4E.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DPOrxZAK.js";import"./step-CUnUoUW9.js";import"./LabelList-c67UtHfn.js";import"./ActivePoints-BzSHcWj6.js";import"./Dot-B5ySELDq.js";import"./activeStyles-7MX0jGA5.js";import"./useAnimationId-BAgUZZzE.js";import"./dataEntryStyles-DcYBdp4K.js";import"./ErrorBarContext-LEjhprcI.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getRadiusAndStrokeWidthFromDot-Dz2gbesP.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./Cross-BoFANieQ.js";import"./Rectangle-BR95K4Qq.js";import"./util-Dxo8gN5i.js";import"./Sector-DnFLuyiy.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
