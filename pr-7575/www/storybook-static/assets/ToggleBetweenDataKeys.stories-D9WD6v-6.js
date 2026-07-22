import{r as n,R as t}from"./iframe-DzzybHr3.js";import{L as p}from"./LineChart-D1ikP5A7.js";import{R as s}from"./zIndexSlice-APm024yE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BFcPkEHE.js";import{X as d}from"./XAxis-C2N3vX2E.js";import{Y as y}from"./YAxis-CKuS-Mr_.js";import{L as u}from"./Legend-CoRF27_3.js";import{L as h}from"./Line-B14pcOUO.js";import{T as g}from"./Tooltip-CobaQ_RT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./throttle-DXJQ7qa7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./axisSelectors-DxliL3D-.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./d3-scale-ikjFpXkq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./CartesianAxis-Bp9IVHGC.js";import"./Layer-DBuOEsC-.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./Label-Yw7Q0JfB.js";import"./ZIndexLayer-B65O7Oyl.js";import"./types-Ck7x6Nhk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-PzedoV3w.js";import"./symbol-CW6c1FZY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-W4H7iZmy.js";import"./uniqBy-BUqH8mTU.js";import"./iteratee-B57Un0sM.js";import"./Curve-CgifKxr5.js";import"./step-CE07F2xj.js";import"./AnimatedItems-CJCL0mBl.js";import"./useAnimationId--dSVNcdm.js";import"./ActivePoints-gO5Bi9Sm.js";import"./Dot-BL6lif_-.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getRadiusAndStrokeWidthFromDot-40lXrNs0.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./Cross-RNdBZ8CM.js";import"./Rectangle-1YG-OgZS.js";import"./util-Dxo8gN5i.js";import"./Sector-CzINYDTr.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
