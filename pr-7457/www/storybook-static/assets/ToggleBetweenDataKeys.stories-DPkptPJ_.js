import{r as n,R as t}from"./iframe-CbmcvRkz.js";import{L as p}from"./LineChart-BWO9Nu2v.js";import{R as s}from"./zIndexSlice-DoKZE_fT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dh9Qs3ud.js";import{X as d}from"./XAxis-BXkS-79Y.js";import{Y as y}from"./YAxis-C-NN2TSd.js";import{L as u}from"./Legend-BEk0nWUL.js";import{L as h}from"./Line-cyvqn16I.js";import{T as g}from"./Tooltip-BI_aTt7z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6OXESHp.js";import"./index-NV2k7-9r.js";import"./index-B7UJplH4.js";import"./index-EVqr9zMt.js";import"./index-B4yUayYa.js";import"./immer-BWk67B8y.js";import"./get-prZAxsgN.js";import"./renderedTicksSlice-BID11n2_.js";import"./axisSelectors-BFflKNFi.js";import"./d3-scale-Cq5I-Lzi.js";import"./resolveDefaultProps-DSWLYRE0.js";import"./isWellBehavedNumber-D0V00cvg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C9d6soJe.js";import"./chartDataContext-AyeK8CTN.js";import"./CategoricalChart-CbA9DUlt.js";import"./CartesianAxis-Duc97zpX.js";import"./Layer-aQjZulmS.js";import"./Text-CQlqdYfu.js";import"./DOMUtils-D_6a5VHc.js";import"./Label-CMFdvkIW.js";import"./ZIndexLayer-ByjAgEa2.js";import"./types-aj_9xhUM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B-Xu_6iF.js";import"./symbol-DbjlT6zf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYZx6MBE.js";import"./uniqBy-UCX-Zdy2.js";import"./iteratee-DJKoVJ9l.js";import"./Curve-Ba6UoBvx.js";import"./step-qj-9nXS-.js";import"./AnimatedItems-C8brG2ut.js";import"./useAnimationId-Bg4LY1-F.js";import"./ActivePoints-Bm3DH6tK.js";import"./Dot-CYkHGb9U.js";import"./RegisterGraphicalItemId-BlnWChFK.js";import"./ErrorBarContext-Cf-_Bhe_.js";import"./GraphicalItemClipPath-BhK5nGk3.js";import"./SetGraphicalItem-CVVFn7G6.js";import"./getRadiusAndStrokeWidthFromDot-D4nwke3n.js";import"./ActiveShapeUtils-yEY4r1E4.js";import"./Cross-a0L3AOFH.js";import"./Rectangle-DL-7nMhN.js";import"./util-Dxo8gN5i.js";import"./Sector-CTAwYSUQ.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
