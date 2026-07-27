import{r as n,R as t}from"./iframe-KfsXDyYe.js";import{L as p}from"./LineChart-BeMSwvfb.js";import{R as s}from"./zIndexSlice-DRQ5ZoPP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CelUoahD.js";import{X as d}from"./XAxis-BunU0kIP.js";import{Y as y}from"./YAxis-BIQLiJJ1.js";import{L as u}from"./Legend-PPLZhzBK.js";import{L as h}from"./Line-BKA-K_z5.js";import{T as g}from"./Tooltip-RPVgM5JW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./throttle-0X77pc-d.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-VAstzL9_.js";import"./axisSelectors-DqRFL16u.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./d3-scale-CwZ0fpJQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./CategoricalChart-D28QOUrV.js";import"./CartesianAxis-DJyQkACC.js";import"./Layer-DvnIPp0b.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./Label-dJq5mBhi.js";import"./ZIndexLayer-DyFku1ry.js";import"./types-Cp7Kv4cO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-s5HlCTRW.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-ClWMTeYK.js";import"./symbol-7YHxc7ew.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrZ2pKQv.js";import"./uniqBy-BdchAijA.js";import"./iteratee-ByW1jmvF.js";import"./Curve-DHdhUSXl.js";import"./step-ww9sKUkN.js";import"./AnimatedItems-CsvMn_0v.js";import"./useAnimationId-BRufZRyg.js";import"./ActivePoints-DD9eCF-L.js";import"./Dot-BXiPHS-i.js";import"./RegisterGraphicalItemId-BVy8O7ka.js";import"./ErrorBarContext-BxIBjeUQ.js";import"./GraphicalItemClipPath-CLORxtCR.js";import"./SetGraphicalItem-BXsnmgyo.js";import"./getRadiusAndStrokeWidthFromDot-D62YsXR3.js";import"./ActiveShapeUtils-YGV0Qwxy.js";import"./Cross-bT4y3WNS.js";import"./Rectangle-CVNtesT6.js";import"./util-Dxo8gN5i.js";import"./Sector-BIWm56fJ.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
