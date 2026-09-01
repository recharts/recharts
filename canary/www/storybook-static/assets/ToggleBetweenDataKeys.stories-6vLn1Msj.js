import{r as n,R as t}from"./iframe-BB3lVLoc.js";import{L as p}from"./LineChart-DsJ8SC-q.js";import{R as s}from"./zIndexSlice-CfHP3A1Y.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BrTBnP2B.js";import{X as d}from"./XAxis-BBQp-Idt.js";import{Y as y}from"./YAxis-DG4767Mj.js";import{L as u}from"./Legend-BZK3nF7M.js";import{L as h}from"./Line-C9JbolpU.js";import{T as g}from"./Tooltip-ChW1fGhT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-S-WqrQUy.js";import"./resolveDefaultProps-CUfoVU2p.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CEA0dwEw.js";import"./throttle-QtsYQF8O.js";import"./index-DcEJbqAh.js";import"./index-BKenMcKp.js";import"./isWellBehavedNumber-_9n5Uq-d.js";import"./d3-scale-CDtyCF0X.js";import"./index-DUlsk-Es.js";import"./index-B-cCuGfC.js";import"./renderedTicksSlice-Toi-dgcz.js";import"./index-yFQohn8S.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Kpp943Pu.js";import"./chartDataContext-CiYf8ag2.js";import"./CategoricalChart-CwlUzHNA.js";import"./CartesianAxis-m8s8CMt8.js";import"./Layer-NQ3_WlgF.js";import"./Text-DEC8wtTL.js";import"./DOMUtils-CldD4RXg.js";import"./useId-BaM-cyip.js";import"./useBackwardsCompatibleTheme-Cqzm3Lgs.js";import"./Label-Cn0Fp29B.js";import"./ZIndexLayer-DTgItK4v.js";import"./types-KCNzlOcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D3aKpe7H.js";import"./symbol-BGppE-YZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yO1LxUDf.js";import"./uniqBy-BBx3NQ59.js";import"./iteratee-CI9yimKx.js";import"./Curve-DzA4hX9V.js";import"./step-D6h1aeKq.js";import"./AnimatedItems-DJZqC0i8.js";import"./useAnimationId-BDqb5MNR.js";import"./ActivePoints-C2lE0Ysx.js";import"./Dot-bxm0u_di.js";import"./RegisterGraphicalItemId-BeJ9531v.js";import"./ErrorBarContext-BboOIeGg.js";import"./GraphicalItemClipPath-DHVb6D1Y.js";import"./SetGraphicalItem-B2jSBaNX.js";import"./getRadiusAndStrokeWidthFromDot-D184pFcr.js";import"./ActiveShapeUtils-DiHdw4Rv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Cpmu6xPG.js";import"./Rectangle-BTqJh7jp.js";import"./util-Dxo8gN5i.js";import"./Sector-qPpg4NhU.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
