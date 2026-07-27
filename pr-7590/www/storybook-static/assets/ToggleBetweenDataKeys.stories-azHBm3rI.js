import{r as n,R as t}from"./iframe-DX3DoU0V.js";import{L as p}from"./LineChart-D_vcWVpB.js";import{R as s}from"./zIndexSlice-JZscBD-4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BMdbx6fH.js";import{X as d}from"./XAxis-CymymjPS.js";import{Y as y}from"./YAxis-eJYuoSOp.js";import{L as u}from"./Legend-C0PKEmxT.js";import{L as h}from"./Line-Dxp5xYSo.js";import{T as g}from"./Tooltip-D2Im3w3T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cor7Wz0Q.js";import"./index-fiTNjDfz.js";import"./index-dfS5pTPx.js";import"./index-C9zXapq5.js";import"./index-BLWyFYv6.js";import"./throttle-Df9paSU5.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2lqyVGO.js";import"./axisSelectors-CPexRmiS.js";import"./resolveDefaultProps-Dht9eep2.js";import"./isWellBehavedNumber-DXPAUxYw.js";import"./d3-scale-cmuGZbi0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DAdEh2n_.js";import"./chartDataContext-KL4_rbFV.js";import"./CategoricalChart-COC9nxGS.js";import"./CartesianAxis-Bl7vCDUz.js";import"./Layer-CfDkJPJv.js";import"./Text-CGNeItsO.js";import"./DOMUtils-jkxXqBeu.js";import"./Label-CcOENmHR.js";import"./ZIndexLayer-Dcm0gV7H.js";import"./types-CkeZP30w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-D_BkDMQb.js";import"./symbol-DJQhYLZr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BuK6NTey.js";import"./uniqBy-B4dKXf3c.js";import"./iteratee-CB7cTIhH.js";import"./Curve-lZ1smd7v.js";import"./step-m02rWKGn.js";import"./AnimatedItems-azUMJ4jR.js";import"./useAnimationId-2LcPTVkH.js";import"./ActivePoints-D6qpACIy.js";import"./Dot-DycfcH3j.js";import"./RegisterGraphicalItemId-Dlzi8iuz.js";import"./ErrorBarContext-UMJzk-jC.js";import"./GraphicalItemClipPath-BLXFrLs-.js";import"./SetGraphicalItem-C1_wN2SK.js";import"./getRadiusAndStrokeWidthFromDot-BSSlkcIg.js";import"./ActiveShapeUtils-C5RQzc-i.js";import"./Cross-DJeHaODA.js";import"./Rectangle-BknJ5SeS.js";import"./util-Dxo8gN5i.js";import"./Sector-DF69m_zr.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
