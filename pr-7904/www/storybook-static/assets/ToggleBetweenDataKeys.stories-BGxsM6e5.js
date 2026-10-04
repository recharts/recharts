import{r as p,R as t}from"./iframe-DeP4Wy7i.js";import{L as n}from"./LineChart-DdhqaBVt.js";import{R as s}from"./zIndexSlice-nnPIR1gF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DHkC3FJy.js";import{X as d}from"./XAxis-D55ujQEE.js";import{Y as y}from"./YAxis-Blw3_-Cc.js";import{L as u}from"./Legend-Wsna19w5.js";import{L as h}from"./Line-BE3lNE-B.js";import{T as g}from"./Tooltip-Bz-Ojc_z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSrF3qvK.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CZy9dm6d.js";import"./throttle-meF8BPI2.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./d3-scale-BMFuZ2xk.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./index-BI5vUZLp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./CartesianAxis-CZDdo6k-.js";import"./Layer-CBmTHU88.js";import"./Text-tlJnHXas.js";import"./DOMUtils-fGj0XAk5.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./Label-BDn5In4u.js";import"./ZIndexLayer-46z2Emao.js";import"./types-CanfrVuk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bx3k4bkK.js";import"./symbol-CoUfccn9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWI8BIOr.js";import"./uniqBy-Dv4DpKxP.js";import"./iteratee-CkWGGgWz.js";import"./Curve-BgvZ8zEy.js";import"./step-D7VIgsjb.js";import"./AnimatedItems-XIng_I1E.js";import"./useAnimationId-BrY9w4yL.js";import"./ActivePoints-CKZ5Aqki.js";import"./Dot-BLQMwT0r.js";import"./RegisterGraphicalItemId-C2Pze7xm.js";import"./ErrorBarContext-kXoA89OY.js";import"./GraphicalItemClipPath-F-rOP2Wx.js";import"./SetGraphicalItem-Bb8kLJya.js";import"./getRadiusAndStrokeWidthFromDot-mAqkcHAK.js";import"./ActiveShapeUtils-DbA45Jz_.js";import"./useGraphicalItemIdentity-DO54SzyN.js";import"./Cross-iEk_dVMK.js";import"./Rectangle-fbRf2OP7.js";import"./util-Dxo8gN5i.js";import"./Sector-Cj9uxPUk.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
