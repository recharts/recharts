import{r as n,R as t}from"./iframe-DCxLvNga.js";import{L as p}from"./LineChart-DbDt0ZoY.js";import{R as s}from"./zIndexSlice-DgwgOA8W.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CB2P8cwY.js";import{X as d}from"./XAxis-CvAM-btA.js";import{Y as y}from"./YAxis-BqxXsg45.js";import{L as u}from"./Legend-ze8rcI28.js";import{L as h}from"./Line-BL__EnOs.js";import{T as g}from"./Tooltip-BDzvXn_9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQRomY3U.js";import"./index-WumRa2O_.js";import"./index-HEbudI5N.js";import"./index-8Ky9zJpe.js";import"./index-eUk0KR26.js";import"./throttle-BEPLbkDl.js";import"./get-Cqaz2t92.js";import"./renderedTicksSlice-PHCHKu5h.js";import"./axisSelectors-LD-bHnG0.js";import"./d3-scale-U7zf4vxG.js";import"./resolveDefaultProps-Clp0Py5Q.js";import"./isWellBehavedNumber-C0c3JW0z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-WbtSIkDa.js";import"./chartDataContext-1-JtWOIC.js";import"./CategoricalChart-BL0VhkFE.js";import"./CartesianAxis-D6yEppZ-.js";import"./Layer-wgUOVjl0.js";import"./Text-CxvVezqe.js";import"./DOMUtils-CJlLdKU3.js";import"./Label-B5b7aLp5.js";import"./ZIndexLayer-CM9bDnHX.js";import"./types-CVkN-t8Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C85RPVvD.js";import"./symbol-BU7Yt18z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-AXra7XvW.js";import"./uniqBy-C8S0yzEw.js";import"./iteratee-XGgbb57g.js";import"./Curve-BhRVcMAR.js";import"./step-x_BcDJPY.js";import"./AnimatedItems-kb_X2dzq.js";import"./useAnimationId-HOEbSJwy.js";import"./ActivePoints-BUWG0sGV.js";import"./Dot-D-XUpmdF.js";import"./RegisterGraphicalItemId-uoD-MQmf.js";import"./ErrorBarContext-BqmhDiAL.js";import"./GraphicalItemClipPath-CWBeJB2a.js";import"./SetGraphicalItem-Cst8NOmH.js";import"./getRadiusAndStrokeWidthFromDot-6CNdFBKE.js";import"./ActiveShapeUtils-j_zEDQtR.js";import"./Cross-C2VI1nHf.js";import"./Rectangle-TQcaGvcZ.js";import"./util-Dxo8gN5i.js";import"./Sector-C4RdNObv.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
