import{r as n,R as t}from"./iframe-Ba761dAt.js";import{L as p}from"./LineChart-Cwk38l5K.js";import{R as s}from"./zIndexSlice-QfUsSAvl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CjVT43kO.js";import{X as d}from"./XAxis-BFSA3F3Y.js";import{Y as y}from"./YAxis-BGJzMLCA.js";import{L as u}from"./Legend-CcGGT61q.js";import{L as h}from"./Line-Bm1u625u.js";import{T as g}from"./Tooltip-l28RSMhn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bka_uKoY.js";import"./index-DNu-VFbT.js";import"./index-jmRPS8ks.js";import"./index-CD7Kt9vJ.js";import"./index-CQZXBhnc.js";import"./throttle-DM8vz_S7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C9WcFyVD.js";import"./axisSelectors-Cn6pQrFe.js";import"./resolveDefaultProps-BbsZGrBO.js";import"./isWellBehavedNumber-DtdZYAzd.js";import"./d3-scale-MektT9AZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BhhNM2dx.js";import"./chartDataContext-CIdWR6fk.js";import"./CategoricalChart-B2LsRV82.js";import"./CartesianAxis-Dp6wkVSq.js";import"./Layer-B5w5vx75.js";import"./Text-CN68nsih.js";import"./DOMUtils-BwEbS88Q.js";import"./Label-BnOVxmge.js";import"./ZIndexLayer-DN2jzfCT.js";import"./types-0dL2Niha.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BRW25Rg2.js";import"./symbol-F9gJ0Uyf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zcMD2hVj.js";import"./uniqBy-CHlYBrF5.js";import"./iteratee-BskgW_tl.js";import"./Curve-mQomw5g8.js";import"./step-Bh181Pvp.js";import"./AnimatedItems-DBRlvqN4.js";import"./useAnimationId-Bb4M1zTw.js";import"./ActivePoints-BxdWxMht.js";import"./Dot-DfAT_SUP.js";import"./RegisterGraphicalItemId-BoJDveOV.js";import"./ErrorBarContext-kfdlWhVC.js";import"./GraphicalItemClipPath-CD6E6U12.js";import"./SetGraphicalItem-c2dU8YzM.js";import"./getRadiusAndStrokeWidthFromDot-DNi5zXue.js";import"./ActiveShapeUtils-SxPaImaJ.js";import"./Cross-DbO4vA7X.js";import"./Rectangle-Bb2j6FkB.js";import"./util-Dxo8gN5i.js";import"./Sector-DkRqKnrn.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
