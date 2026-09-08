import{r as p,R as t}from"./iframe-3h349717.js";import{L as n}from"./LineChart-DChVxa1x.js";import{R as s}from"./zIndexSlice-BzHS8zt2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BTlx-uaS.js";import{X as d}from"./XAxis-Bw5xxXY1.js";import{Y as y}from"./YAxis-tMbI8NgR.js";import{L as u}from"./Legend-BEZJZowB.js";import{L as h}from"./Line-CdkVEHcj.js";import{T as g}from"./Tooltip-zSQBQnXA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUULyex2.js";import"./resolveDefaultProps-DJBK0DUa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CTBJiowg.js";import"./throttle-BlVp8HkD.js";import"./index-oX4N-tXs.js";import"./index-BRv0H6zV.js";import"./isWellBehavedNumber-D3Yo8GQB.js";import"./d3-scale-CLmVRDrj.js";import"./index-CsFq6h3I.js";import"./index-BbUWtFl0.js";import"./renderedTicksSlice-6SwbUeKS.js";import"./index-Bo8dIp4D.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CFmcy4vR.js";import"./chartDataContext-Chtbdmd2.js";import"./CategoricalChart-Lt1wUyHP.js";import"./CartesianAxis-DyDK0v82.js";import"./Layer-BPJ6tmqq.js";import"./Text-DVnErtU5.js";import"./DOMUtils--0390Y1X.js";import"./useId-Ced_CVYT.js";import"./useBackwardsCompatibleTheme-BYrRaigu.js";import"./Label-Dtiya_7s.js";import"./ZIndexLayer-BTc3Y12q.js";import"./types-D64Ekh4L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CL0JFPKo.js";import"./symbol-BwOY_zgB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DNp2u43t.js";import"./uniqBy-C8soMpcc.js";import"./iteratee-Dt6uUIOF.js";import"./Curve-Bi3KcdO0.js";import"./step-DOsNm07K.js";import"./AnimatedItems-DOjhrzsE.js";import"./useAnimationId-BzBuvVRV.js";import"./ActivePoints-BcO3Gsaw.js";import"./Dot-CUMV7p2u.js";import"./RegisterGraphicalItemId-Byw__Yoi.js";import"./ErrorBarContext-BtoBWPHm.js";import"./GraphicalItemClipPath-C24GD_Bh.js";import"./SetGraphicalItem-wGbg7zCS.js";import"./getRadiusAndStrokeWidthFromDot-qaKJk7YD.js";import"./ActiveShapeUtils-C78HHNIc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Dk7k_2l8.js";import"./Rectangle-tvaTM7i9.js";import"./util-Dxo8gN5i.js";import"./Sector-MO_FaW_H.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
