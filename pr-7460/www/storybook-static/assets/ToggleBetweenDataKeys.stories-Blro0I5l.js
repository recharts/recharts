import{r as n,R as t}from"./iframe-sORstnao.js";import{L as p}from"./LineChart-BGbBpq-B.js";import{R as s}from"./zIndexSlice-D4nSzQXG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CoCW4h36.js";import{X as d}from"./XAxis-CLx5zWj1.js";import{Y as y}from"./YAxis-B0nIj3Rm.js";import{L as u}from"./Legend-DPngQBCv.js";import{L as h}from"./Line-B4Nxznnp.js";import{T as g}from"./Tooltip-Bo23RdJr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1LnNbdI.js";import"./index-TsoCApfs.js";import"./index-C6ss-rRK.js";import"./index-BHPpgMD3.js";import"./index-D72u634P.js";import"./immer-6f0a2Itz.js";import"./get-41kC8iMv.js";import"./renderedTicksSlice-DnIB2gDY.js";import"./axisSelectors-Cn-VKMDy.js";import"./d3-scale-D2bjBGPq.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CiA9punn.js";import"./isWellBehavedNumber-BMV6Q8kx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D2sGcfAi.js";import"./chartDataContext-3qQmZcQj.js";import"./CategoricalChart-CxG8s20W.js";import"./CartesianAxis-B64g0dZi.js";import"./Layer--egwL1wz.js";import"./Text-CnvPdDEF.js";import"./DOMUtils-fq1NzIyR.js";import"./Label-SYMy3G3-.js";import"./ZIndexLayer-BEh4PufB.js";import"./types-iWkEMmGL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DBkZE3FX.js";import"./symbol-BNlBPIVa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BI2zHJkS.js";import"./uniqBy-DZcIVEUd.js";import"./iteratee-CLUUH9ga.js";import"./Curve-DN6qrrBJ.js";import"./step-BwuKoovG.js";import"./AnimatedItems-CV70jau4.js";import"./useAnimationId-Dc5RekzQ.js";import"./ActivePoints-DgX9BosL.js";import"./Dot-EjXLgxI9.js";import"./RegisterGraphicalItemId-CV0Blp2K.js";import"./ErrorBarContext-DTHknnLU.js";import"./GraphicalItemClipPath-B7hrgjyT.js";import"./SetGraphicalItem-BWtqlZ1x.js";import"./getRadiusAndStrokeWidthFromDot-Ce5hKttK.js";import"./ActiveShapeUtils-C6v-Gqt7.js";import"./Cross-BjZK5vKu.js";import"./Rectangle-CIsVQIpM.js";import"./Sector-Da8ZKB8T.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
