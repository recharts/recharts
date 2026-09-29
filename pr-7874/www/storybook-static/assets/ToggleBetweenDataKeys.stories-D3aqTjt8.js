import{r as p,R as t}from"./iframe-CkExmVLh.js";import{L as n}from"./LineChart-Bf4Fjc4z.js";import{R as s}from"./zIndexSlice-a3gNrCTg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CUTMG6uD.js";import{X as d}from"./XAxis-JBQw78VL.js";import{Y as y}from"./YAxis-BKUGWzYz.js";import{L as u}from"./Legend-n_QnfH8z.js";import{L as h}from"./Line-Cisnr3UH.js";import{T as g}from"./Tooltip-DXJkc_VB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CmpmZooC.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DjYqkdMk.js";import"./throttle-BNvjyLg8.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./index-Dlo0KE1-.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./CartesianAxis-BhWf1FlQ.js";import"./Layer-CGaMavgo.js";import"./Text-mbh8kfNk.js";import"./DOMUtils-B9viDuiF.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./Label-C8EtCHaI.js";import"./ZIndexLayer-DuxWNsKn.js";import"./types-D0Lh6MHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-72F0FLZd.js";import"./symbol-C4swW5GK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXUuqBTx.js";import"./uniqBy-aTBj_DaH.js";import"./iteratee-qu9slWkn.js";import"./Curve-BfUX2fxA.js";import"./step-TH_7jXAx.js";import"./AnimatedItems-V2dSiKDR.js";import"./useAnimationId-B25s9B77.js";import"./ActivePoints-DT4UcXq7.js";import"./Dot-CNUfafHI.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./ErrorBarContext-B3pTgu-r.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getRadiusAndStrokeWidthFromDot-ByuYICUa.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./useGraphicalItemIdentity-BSB2zAct.js";import"./Cross-M3-Y2Aoo.js";import"./Rectangle-B72I1dSe.js";import"./util-Dxo8gN5i.js";import"./Sector-DS9gcpep.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
