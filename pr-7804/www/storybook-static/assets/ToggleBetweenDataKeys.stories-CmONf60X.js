import{r as p,R as t}from"./iframe-CKftEeOR.js";import{L as n}from"./LineChart-C6mLp5od.js";import{R as s}from"./zIndexSlice-Rd7CQgQI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C5zADhw1.js";import{X as d}from"./XAxis-IahfvaCM.js";import{Y as y}from"./YAxis-DtHNKlU_.js";import{L as u}from"./Legend-ERMTR0gC.js";import{L as h}from"./Line-CtyxKqH8.js";import{T as g}from"./Tooltip-C-5yBIxR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBr2vBLf.js";import"./resolveDefaultProps-CUD-thP6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DhTPihhT.js";import"./throttle-BNKYmND6.js";import"./index-B3U1nEt0.js";import"./index-CMyqNfgS.js";import"./isWellBehavedNumber-B15AKauy.js";import"./d3-scale-DUU3auep.js";import"./index-CfJyz4zD.js";import"./index-CaONc0yZ.js";import"./renderedTicksSlice-4VCM87iZ.js";import"./index-D3UZJ1g6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-yCMxlTpO.js";import"./chartDataContext-4zvmbyyj.js";import"./CategoricalChart-DGT3qw3A.js";import"./CartesianAxis-klHqdii2.js";import"./Layer-t7Sk-OLm.js";import"./Text-BY0JJbaS.js";import"./DOMUtils-B_LhErBS.js";import"./useId-j7axFfWl.js";import"./useBackwardsCompatibleTheme-BFpC_R2y.js";import"./Label-BtMZmHcU.js";import"./ZIndexLayer-CfiakTBb.js";import"./types-CQiiKif5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BqO3Xqua.js";import"./symbol-Dma1RmVC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJqx9A--.js";import"./uniqBy-CLIdSOOo.js";import"./iteratee-Dl0nvfyM.js";import"./Curve-DKcxqEob.js";import"./step-Bq5ebvyI.js";import"./AnimatedItems-ePjd4Kgp.js";import"./useAnimationId-cpDkl9it.js";import"./ActivePoints-D9o__0t3.js";import"./Dot-C7TV-TKY.js";import"./RegisterGraphicalItemId-rDiVUOUt.js";import"./ErrorBarContext-DliiI0LB.js";import"./GraphicalItemClipPath-C7Us-zic.js";import"./SetGraphicalItem-DS6Pgf_p.js";import"./getRadiusAndStrokeWidthFromDot-CeZqJgOi.js";import"./ActiveShapeUtils-B9DHSeBV.js";import"./useGraphicalItemIdentity-C7mRPXGd.js";import"./Cross-CrrRIKEY.js";import"./Rectangle-BOOPVSCO.js";import"./util-Dxo8gN5i.js";import"./Sector-DRJq0nZU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
