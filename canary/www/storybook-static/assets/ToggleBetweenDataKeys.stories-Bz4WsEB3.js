import{r as n,R as t}from"./iframe-IXBD7Hhe.js";import{L as p}from"./LineChart-DC73wMG6.js";import{R as s}from"./zIndexSlice-Bx8LfIjs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CO0Gigqi.js";import{X as d}from"./XAxis-XUByFPwA.js";import{Y as y}from"./YAxis-BVu4beHD.js";import{L as u}from"./Legend-BZbqyyhK.js";import{L as h}from"./Line-CBDt_Hjf.js";import{T as g}from"./Tooltip-DZ6XDHmc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6CdKiKJ.js";import"./index-DHkJVPjU.js";import"./index-P0vZTmxc.js";import"./index-BH3ea_oR.js";import"./index-CLS2dsqf.js";import"./throttle-Cb9pxaut.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cllx2Xbl.js";import"./resolveDefaultProps-LMM2s1w5.js";import"./isWellBehavedNumber-DuIg09Ee.js";import"./d3-scale-DP7A7DdQ.js";import"./renderedTicksSlice-DFEnKLGW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GzQbM-WD.js";import"./chartDataContext-TL9Jhgyo.js";import"./CategoricalChart-CsZZ-_Ww.js";import"./CartesianAxis-vF0DZ8PI.js";import"./Layer-CznxcDV0.js";import"./Text-CKl7HfzI.js";import"./DOMUtils-CIca5pvR.js";import"./Label-COpsAeG1.js";import"./ZIndexLayer-BDgiHtX6.js";import"./types-ootxRHuI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Dmq8UOW5.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BtcJIIdL.js";import"./symbol-DRjMj09s.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ChbU1jy5.js";import"./uniqBy-55gB6jpL.js";import"./iteratee-MNxXH5z8.js";import"./Curve-BH0BT-1U.js";import"./step-CYiGRfb_.js";import"./AnimatedItems-C0wExScK.js";import"./useAnimationId-DKTTaUff.js";import"./ActivePoints-CHxp0sMa.js";import"./Dot-CqTh5SAj.js";import"./RegisterGraphicalItemId-c9Yy-XmY.js";import"./ErrorBarContext-Bg5OE5lB.js";import"./GraphicalItemClipPath-DnF330yG.js";import"./SetGraphicalItem-D7LoeNCT.js";import"./getRadiusAndStrokeWidthFromDot-CdGZqJil.js";import"./ActiveShapeUtils-DQ7ehDLd.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DxQQFwz_.js";import"./Rectangle-Cg0GC15e.js";import"./util-Dxo8gN5i.js";import"./Sector-D8tacgFs.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
