import{r as n,R as t}from"./iframe-DLS25dHQ.js";import{L as p}from"./LineChart-BQjj254x.js";import{R as s}from"./zIndexSlice-l2YZmfJm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DNrP8kgM.js";import{X as d}from"./XAxis-ZvceRVhD.js";import{Y as y}from"./YAxis-BYgagr7S.js";import{L as u}from"./Legend-CMw0PR8-.js";import{L as h}from"./Line-inZI_3U-.js";import{T as g}from"./Tooltip-B2aShKax.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_GPZUKV.js";import"./index-CfSfkQYu.js";import"./index-CbCT7aty.js";import"./index-ByCW5xID.js";import"./index-Dq9FB6TB.js";import"./throttle-Hx_xB1Pu.js";import"./get-C2VjdU0L.js";import"./axisSelectors-L-RJvPIw.js";import"./resolveDefaultProps-C31rpRZv.js";import"./isWellBehavedNumber-oc6n5G8D.js";import"./d3-scale-BGUeNoA2.js";import"./renderedTicksSlice-CvT_UYhE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D13Xcxp2.js";import"./chartDataContext-D70kksUU.js";import"./CategoricalChart-C6ulcIic.js";import"./CartesianAxis-ByLvjEbn.js";import"./Layer-DThhki4j.js";import"./Text-DoJs4GjF.js";import"./DOMUtils-B4V2lSh1.js";import"./Label-Bs5nvBdN.js";import"./ZIndexLayer-CVnRsL__.js";import"./types-BNikxk5Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DQBBH2gy.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BghUztBR.js";import"./symbol-DJn7TpAb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOuGmOFv.js";import"./uniqBy-CkpvLjjt.js";import"./iteratee-BC57QjIY.js";import"./Curve-D-nKyO-x.js";import"./step-CSyDwz3m.js";import"./AnimatedItems-C-FlKGX8.js";import"./useAnimationId-BwYkYmq-.js";import"./ActivePoints-CxfQZGg2.js";import"./Dot-DrvJzzI1.js";import"./RegisterGraphicalItemId-DMMtsE5T.js";import"./ErrorBarContext-BMV815Qz.js";import"./graphicalItemIdentity-COzJlxtu.js";import"./SetGraphicalItem-B5zc41tl.js";import"./getRadiusAndStrokeWidthFromDot-BcCKN7uZ.js";import"./ActiveShapeUtils-CZHkl0hJ.js";import"./Cross-DTxuUisw.js";import"./Rectangle-DyGyBKmJ.js";import"./util-Dxo8gN5i.js";import"./Sector-D2pai5wO.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
