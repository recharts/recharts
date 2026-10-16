import{r as p,R as t}from"./iframe-BMLr-N8m.js";import{L as n}from"./LineChart-GQh9bp3Z.js";import{R as s}from"./zIndexSlice-CNoIWiIj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-74wadsDV.js";import{X as d}from"./XAxis-vhD_R5mq.js";import{Y as y}from"./YAxis-Cn7UNGEz.js";import{L as u}from"./Legend-CXB5Xult.js";import{L as h}from"./Line-BtcKFTig.js";import{T as g}from"./Tooltip-DCI5-BCa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6IV3yYd.js";import"./resolveDefaultProps-jOc_O7Kv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-QHFm6bdo.js";import"./throttle-DpCsf_je.js";import"./index-g4GeTxJm.js";import"./index-jx1ZEi_d.js";import"./isWellBehavedNumber-gG-DUVNw.js";import"./d3-scale-uv4cuZVX.js";import"./index-B5o-g1JC.js";import"./index-BoO0kGmt.js";import"./renderedTicksSlice-D6osv6XO.js";import"./index-CL1KOieJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-crhgf43U.js";import"./chartDataContext-Ch0M7QOU.js";import"./CategoricalChart-D8IryVYJ.js";import"./CartesianAxis-Cy6jCwYH.js";import"./Layer-D25gMhyW.js";import"./Text-Cz3Pbtag.js";import"./pageBackground-cNUAWp1v.js";import"./useId-Dyawny2A.js";import"./useBackwardsCompatibleTheme-TjicyzGG.js";import"./Label-CO8bLvFk.js";import"./ZIndexLayer-B6k-j2NC.js";import"./types-ClqQg-f4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CLpMt3BM.js";import"./symbol-XJ_Ke-PS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CeqI-3BD.js";import"./uniqBy-CwBYrhp-.js";import"./iteratee-B3n8rbtL.js";import"./Curve-xHb5ea2i.js";import"./step-5G9v9Gpk.js";import"./activeStyles-Bwhdd0Sh.js";import"./useAnimationId--2Xv8oOg.js";import"./dataEntryStyles-BB_5qzNe.js";import"./ActivePoints-rASjYmBp.js";import"./Dot-DbGsYyOE.js";import"./ErrorBarContext-CNWoIG-z.js";import"./GraphicalItemClipPath--PSqgLsU.js";import"./SetGraphicalItem-Bhbnxfc6.js";import"./getRadiusAndStrokeWidthFromDot-C_Z9reo5.js";import"./ActiveShapeUtils-C_iPwrws.js";import"./useEffectiveDataKey-BCNG7ZLV.js";import"./Cross-DgLTumD4.js";import"./Rectangle-DVvn14nh.js";import"./util-Dxo8gN5i.js";import"./Sector-B1wyfadM.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
