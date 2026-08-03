import{r as n,R as t}from"./iframe-BvoaHdmy.js";import{L as p}from"./LineChart-BUyRK8f7.js";import{R as s}from"./zIndexSlice-Bsr7cBhR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6bYhLhX.js";import{X as d}from"./XAxis-CDpMlutO.js";import{Y as y}from"./YAxis-m3S-JfIe.js";import{L as u}from"./Legend-kPzq7o2Z.js";import{L as h}from"./Line-DRoM9ckZ.js";import{T as g}from"./Tooltip-CZZeT887.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtuASqVJ.js";import"./index-b13xllOW.js";import"./index-DeegS3pB.js";import"./index-B_-FbWrF.js";import"./index-BIiBQ2RS.js";import"./throttle-DQ4zUznN.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BOmSwCSv.js";import"./axisSelectors-Choe--Hk.js";import"./resolveDefaultProps-DcaR1-NP.js";import"./isWellBehavedNumber-BXi0lz-u.js";import"./d3-scale-DHqQWI-P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DoxhMpsB.js";import"./chartDataContext-ChSxK7K-.js";import"./CategoricalChart-B1Q3to5_.js";import"./CartesianAxis-BTq7uWzR.js";import"./Layer-NFFKs1EA.js";import"./Text-D4sNDUmz.js";import"./DOMUtils-DEiR2hJy.js";import"./Label-DD7tXZFM.js";import"./ZIndexLayer-BJa50qFF.js";import"./types-Df8Ct0Qg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-w6Fo4fMR.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CxvE_--r.js";import"./symbol-CvaxCqXB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qwTb_lvS.js";import"./uniqBy-CX18kgZb.js";import"./iteratee-Br4cA1kY.js";import"./Curve-B63hJeFK.js";import"./step-8axYNU49.js";import"./AnimatedItems-xGZjbukT.js";import"./useAnimationId-CWnbJHBU.js";import"./ActivePoints-BjVwwW5t.js";import"./Dot-BZ0HUF_R.js";import"./RegisterGraphicalItemId-pYDAMd0U.js";import"./ErrorBarContext-Dvj--byz.js";import"./GraphicalItemClipPath-CYhIxWIa.js";import"./SetGraphicalItem-CAucCLNl.js";import"./getRadiusAndStrokeWidthFromDot-C9Rzznad.js";import"./ActiveShapeUtils-DD4sF3hm.js";import"./Cross-DqfwSoA7.js";import"./Rectangle-D2ErbMHg.js";import"./util-Dxo8gN5i.js";import"./Sector-DUSA457Y.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
