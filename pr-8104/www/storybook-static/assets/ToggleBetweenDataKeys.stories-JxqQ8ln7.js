import{r as p,R as t}from"./iframe-Bc_TQ7zr.js";import{L as n}from"./LineChart-BgMpV5Q8.js";import{R as s}from"./zIndexSlice-CO4_damr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CYUKirm5.js";import{X as d}from"./XAxis-DWAumGqR.js";import{Y as y}from"./YAxis-Dbf9f4fH.js";import{L as u}from"./Legend-DSyel8Aq.js";import{L as h}from"./Line-Drv4Jn_f.js";import{T as g}from"./Tooltip-9IBuq1vJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./resolveDefaultProps-urKJAClX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BQX-Wl7f.js";import"./throttle-DHt3nTHd.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-2JXHcyFQ.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./CartesianAxis-C2icTJ4e.js";import"./Layer-Pn8de_pX.js";import"./Text-DL7i-IN9.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./Label-B9G7W81w.js";import"./types-CI1g0QBx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6rTFYDIL.js";import"./uniqBy-euoVOqhK.js";import"./iteratee-KP71SW6w.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BkI7sWgu.js";import"./step-Bz4sQ0ke.js";import"./LabelList-aO6gLBJB.js";import"./ActivePoints-lBMg9AK3.js";import"./Dot-BVzb9xNA.js";import"./activeStyles-CqnjEaUo.js";import"./useAnimationId-BaQxjUGX.js";import"./dataEntryStyles-CcDBy8RW.js";import"./ErrorBarContext-C3uNXZgX.js";import"./SetGraphicalItem-m2XDPigg.js";import"./getRadiusAndStrokeWidthFromDot-CL0rbQkZ.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./useEffectiveDataKey-BSvuchOk.js";import"./Cross-zt8H4zmm.js";import"./Rectangle-B4HzsWKb.js";import"./util-Dxo8gN5i.js";import"./Sector-QL_PXW4W.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
