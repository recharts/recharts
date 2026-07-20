import{r as n,R as t}from"./iframe-vOLnYXOZ.js";import{L as p}from"./LineChart-CwBOKDvH.js";import{R as s}from"./zIndexSlice-Mv0cm5Fz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BHd5fEEF.js";import{X as d}from"./XAxis-DZdEV9rv.js";import{Y as y}from"./YAxis-jgbh3-iB.js";import{L as u}from"./Legend-BgZ9uuiC.js";import{L as h}from"./Line-Ii7UCjUa.js";import{T as g}from"./Tooltip-Bb3rvUwP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cdIriNtS.js";import"./index-C_GLmlAa.js";import"./index-loUlOQAQ.js";import"./index-Ccx6Fn8x.js";import"./index-Bno8px0F.js";import"./throttle-H6UrPiO3.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-zOvani6W.js";import"./axisSelectors-9pB8uUjg.js";import"./resolveDefaultProps-DMvU9hKF.js";import"./isWellBehavedNumber-TyK-Q9bs.js";import"./d3-scale-CXVWvw2_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-6FCR2qTV.js";import"./chartDataContext-CdBeAXiw.js";import"./CategoricalChart-BHtJtaWL.js";import"./CartesianAxis-B04tnKne.js";import"./Layer-BzdlA6Ig.js";import"./Text-FiyA8tGX.js";import"./DOMUtils-Di4Ni1ZE.js";import"./Label-D2t7QHPj.js";import"./ZIndexLayer-DaGlu0J6.js";import"./types-DL_lANQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BwMlZ9Li.js";import"./symbol-B3MWu_Fr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BxXr0q4n.js";import"./uniqBy-B-zSRekl.js";import"./iteratee-BhNLOt-G.js";import"./Curve-DpB1TURa.js";import"./step-DBkijEka.js";import"./AnimatedItems-M5yh8SZt.js";import"./useAnimationId-J9bbR3c6.js";import"./ActivePoints-DMSGIjaa.js";import"./Dot-BOZyGCoc.js";import"./RegisterGraphicalItemId-YQ-tZiZG.js";import"./ErrorBarContext-CYCJv9Vs.js";import"./GraphicalItemClipPath-CSPsls6A.js";import"./SetGraphicalItem-Dz9FndIn.js";import"./getRadiusAndStrokeWidthFromDot-DaL3Xp1Q.js";import"./ActiveShapeUtils-CX_xtPwj.js";import"./Cross-_eiJhukN.js";import"./Rectangle-DGmUUWeF.js";import"./util-Dxo8gN5i.js";import"./Sector-aoDqeOQX.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
