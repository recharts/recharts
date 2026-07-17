import{r as n,R as t}from"./iframe-556vb-qw.js";import{L as p}from"./LineChart-BO43zx0i.js";import{R as s}from"./zIndexSlice-Dx_8tKSl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D7o76xak.js";import{X as d}from"./XAxis-C8oxlX6U.js";import{Y as y}from"./YAxis-CUYZIBQF.js";import{L as u}from"./Legend-CayQOQpd.js";import{L as h}from"./Line-CNegRi9e.js";import{T as g}from"./Tooltip-vqhIBjmx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-KC_7-tBU.js";import"./index-DQcKumtN.js";import"./index-BtPxInWz.js";import"./index-DiiXHLk0.js";import"./index-CiB0Io8X.js";import"./throttle-Bki2cXyV.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CfWaZqlF.js";import"./axisSelectors-BduM4NJa.js";import"./resolveDefaultProps-FVjcPzTE.js";import"./isWellBehavedNumber-Dc37N4M2.js";import"./d3-scale-D2li86P1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8G919J3.js";import"./chartDataContext-Bs-zR_b9.js";import"./CategoricalChart-CcDvDLSk.js";import"./CartesianAxis-C3UFcQ97.js";import"./Layer-BTltl-Cn.js";import"./Text-UXI8_ZCT.js";import"./DOMUtils-B14va7zq.js";import"./Label-BaM1U3dt.js";import"./ZIndexLayer-BOwqliX9.js";import"./types-CA3u3vRt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DArUB4Tu.js";import"./symbol-BAz4A_vL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BH4PUdVa.js";import"./uniqBy-C7RA8kcG.js";import"./iteratee-DBVLQRkV.js";import"./Curve-CQITscbT.js";import"./step-CFU3znK3.js";import"./AnimatedItems-CxcoqNDa.js";import"./useAnimationId-ClUEd6We.js";import"./ActivePoints-CLr-JLZj.js";import"./Dot-J7G-brXT.js";import"./RegisterGraphicalItemId-n-hAz8yp.js";import"./ErrorBarContext-DZjyWL-W.js";import"./GraphicalItemClipPath-CuuadlYj.js";import"./SetGraphicalItem-DRzPdsV9.js";import"./getRadiusAndStrokeWidthFromDot-C_DGpSn1.js";import"./ActiveShapeUtils-BLdFLviC.js";import"./Cross-CllkCknq.js";import"./Rectangle-dJLSMSgO.js";import"./util-Dxo8gN5i.js";import"./Sector-DQYYUIu1.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
