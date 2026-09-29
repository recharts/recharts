import{r as p,R as t}from"./iframe-VTxubO5w.js";import{L as n}from"./LineChart-CKtWZBGE.js";import{R as s}from"./zIndexSlice-BFYFcuFW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BS6sRpzA.js";import{X as d}from"./XAxis-3pFA-Nf-.js";import{Y as y}from"./YAxis-bVdfj-ty.js";import{L as u}from"./Legend-qtLHfXZy.js";import{L as h}from"./Line-Ckaw2kb_.js";import{T as g}from"./Tooltip-CJw6oxVP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bsatjkvb.js";import"./resolveDefaultProps-BFp7OOq4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CvnfJ2AM.js";import"./throttle-Bj7f8bZe.js";import"./index-4Jh92J2Q.js";import"./index-DdjkBMS_.js";import"./isWellBehavedNumber-yx76n7CA.js";import"./d3-scale-BMdsVvRJ.js";import"./index-DtWT2JaI.js";import"./index-Cr87dMf9.js";import"./renderedTicksSlice-BrmgGQgk.js";import"./index-1-3dFAhM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDdGXWds.js";import"./chartDataContext-DH5kQpc3.js";import"./CategoricalChart-DxD0BnY1.js";import"./CartesianAxis-C-En2Edk.js";import"./Layer-D1MCI5Ak.js";import"./Text-uR2Yj3PM.js";import"./DOMUtils-BAN1xftN.js";import"./useId-DFmSC7ae.js";import"./useBackwardsCompatibleTheme-BYtc2o9v.js";import"./Label-DNcqVwFA.js";import"./ZIndexLayer-NKRjvkpW.js";import"./types-CDzvAUga.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-mnsValfd.js";import"./symbol-v33gieij.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-QmICBX.js";import"./uniqBy-Ch5xiMZc.js";import"./iteratee-M9ugrzAI.js";import"./Curve-CMYEPk4H.js";import"./step-Bhzd0PV7.js";import"./AnimatedItems-YcLJd9jr.js";import"./useAnimationId-DPVDnlp2.js";import"./ActivePoints-DitxvlFH.js";import"./Dot-CaZRr3jt.js";import"./RegisterGraphicalItemId-BW5kojHS.js";import"./ErrorBarContext-BlpBbu3_.js";import"./GraphicalItemClipPath-qDNJ-tN3.js";import"./SetGraphicalItem-BqDT3cr3.js";import"./getRadiusAndStrokeWidthFromDot-pmdOmimJ.js";import"./ActiveShapeUtils-DG8apj0w.js";import"./useGraphicalItemIdentity-jWQRhRf0.js";import"./Cross-DWlfjqmz.js";import"./Rectangle-C-w4cEpw.js";import"./util-Dxo8gN5i.js";import"./Sector-BJkHM4IA.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
