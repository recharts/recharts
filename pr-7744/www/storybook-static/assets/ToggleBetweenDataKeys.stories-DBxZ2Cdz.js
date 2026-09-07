import{r as p,R as t}from"./iframe-CnWp8UDJ.js";import{L as n}from"./LineChart-DC_GfjNP.js";import{R as s}from"./zIndexSlice-Bxeoa1fM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bu8k57f3.js";import{X as d}from"./XAxis-ChzUm0qK.js";import{Y as y}from"./YAxis-1jz_kHbZ.js";import{L as u}from"./Legend-D93VCnCX.js";import{L as h}from"./Line-B_yZhlkz.js";import{T as g}from"./Tooltip-JJZ65NIh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BLeW-6qK.js";import"./resolveDefaultProps-omDmhEQP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-LX60wKXF.js";import"./throttle-aLzKR_Gj.js";import"./index-39D9i7_F.js";import"./index-Data0V-G.js";import"./isWellBehavedNumber-B6aemPPP.js";import"./d3-scale-C7Jq6zIj.js";import"./index-gtYqs59B.js";import"./index-Dehtp_44.js";import"./renderedTicksSlice-BKgb7qhp.js";import"./index-Doynhu3_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsDmw2jX.js";import"./chartDataContext-CO0CX1GC.js";import"./CategoricalChart-CM4dP2j4.js";import"./CartesianAxis-CwBaIU9L.js";import"./Layer-C_mDLxAs.js";import"./Text-B0OOyN3r.js";import"./DOMUtils-CiASkXFs.js";import"./useId-EGP6ZE8R.js";import"./useBackwardsCompatibleTheme-UXRLdwDp.js";import"./Label-WwV9YhCJ.js";import"./ZIndexLayer-BZ4idX5Z.js";import"./types-BIFao3Et.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-COXuV_BO.js";import"./symbol-DgCR7R8V.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBfXPX7X.js";import"./uniqBy-1fP4lO5S.js";import"./iteratee-DiGtiHzb.js";import"./Curve-BQDaiCsn.js";import"./step-4VYt7eZC.js";import"./AnimatedItems-Dbq_Hz9T.js";import"./useAnimationId-Maj24DOj.js";import"./ActivePoints-C5ifQD97.js";import"./Dot-CVjhwEFH.js";import"./RegisterGraphicalItemId-F3i4J8HM.js";import"./ErrorBarContext-CnG1miAN.js";import"./GraphicalItemClipPath-BoXmuKsm.js";import"./SetGraphicalItem-BDu63G4F.js";import"./getRadiusAndStrokeWidthFromDot-DT21Og_Z.js";import"./ActiveShapeUtils-BhVsu49r.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BZojVn3K.js";import"./Rectangle-DC-Ff8xS.js";import"./util-Dxo8gN5i.js";import"./Sector-DhnExu7d.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
