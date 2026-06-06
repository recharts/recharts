import{r as n,R as t}from"./iframe-C2BX5KlG.js";import{L as p}from"./LineChart-M3CfzZIj.js";import{R as s}from"./zIndexSlice-CxPEcPAu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-IRNWuAYH.js";import{X as d}from"./XAxis-DVvf2cjO.js";import{Y as y}from"./YAxis-DyEK7c-9.js";import{L as u}from"./Legend-Ce3iB2By.js";import{L as h}from"./Line-DLZXl40V.js";import{T as g}from"./Tooltip-BNcp-BI8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D59koTZo.js";import"./index-mM7HvUIP.js";import"./index-B4ncEIHG.js";import"./index-BGPmBimQ.js";import"./index-COSvD7ew.js";import"./immer-CvWW5aeq.js";import"./get-CAfMQs0q.js";import"./renderedTicksSlice-u_9WNmNI.js";import"./axisSelectors-CMoKJGYW.js";import"./d3-scale-CWyzRMoK.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BYCxJvcu.js";import"./isWellBehavedNumber-DmYLFUk5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUqQYDbS.js";import"./chartDataContext-BBtoeQBI.js";import"./CategoricalChart-wPXQ1QrH.js";import"./CartesianAxis-1gCJxPwk.js";import"./Layer-Y7EAuX4r.js";import"./Text-D33SlXvN.js";import"./DOMUtils-DjP-hpRu.js";import"./Label-BtHuGICT.js";import"./ZIndexLayer-DXknjapM.js";import"./types-Bzm0K4Xv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C8818rpd.js";import"./symbol-BrPwpKoT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DgvALgLL.js";import"./uniqBy-Dndb0Oy8.js";import"./iteratee-KOU-VhL7.js";import"./Curve-skm-derQ.js";import"./step-CaZe8v-k.js";import"./AnimatedItems-a4bz34sF.js";import"./useAnimationId-By3GmLUa.js";import"./ActivePoints-BR22gwdA.js";import"./Dot-MNln9N_X.js";import"./RegisterGraphicalItemId-D-0LsKMM.js";import"./ErrorBarContext-Dxkwh2s-.js";import"./GraphicalItemClipPath-BeTilTZu.js";import"./SetGraphicalItem-BLppYw7V.js";import"./getRadiusAndStrokeWidthFromDot-BpkcLqmS.js";import"./ActiveShapeUtils-8DISroY0.js";import"./Cross-Cr_uS2gb.js";import"./Rectangle-DRmt8yX0.js";import"./Sector-BGIVy27E.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
