import{r as n,R as t}from"./iframe-BIMbD8mx.js";import{L as p}from"./LineChart-6UTr3Qqx.js";import{R as s}from"./zIndexSlice-wO_dW_9z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-zFs8ZGAv.js";import{X as d}from"./XAxis-79yd8ZPy.js";import{Y as y}from"./YAxis-yZR3Ev9U.js";import{L as u}from"./Legend-coXETLK_.js";import{L as h}from"./Line-C4NM27Mj.js";import{T as g}from"./Tooltip-CWcALCEY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-QNCP9nY0.js";import"./index-A5Cgym80.js";import"./index-BP-geqPm.js";import"./index-DwWghGbc.js";import"./index-BRQlGlsm.js";import"./throttle-DiXkeT8N.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BtNyQa3m.js";import"./resolveDefaultProps-CZ6QiDkA.js";import"./isWellBehavedNumber-CazuspJq.js";import"./d3-scale-DL9ezE1-.js";import"./renderedTicksSlice-B-RvvD_k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CABLVMKg.js";import"./chartDataContext-CXOVrzNd.js";import"./CategoricalChart-rgEOMHEL.js";import"./CartesianAxis-B1RojcCV.js";import"./Layer-1Cdcr0Iy.js";import"./Text-D6zl2tjY.js";import"./DOMUtils-DjDyXH_P.js";import"./RechartsThemeContext-BjZ7jnPh.js";import"./Label-DfQOptl9.js";import"./ZIndexLayer-YpWri7rk.js";import"./types-Dp-Ax4LT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BuDeeCqi.js";import"./symbol-BfJA77nw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-678MNwLN.js";import"./uniqBy-BwBRvZ4r.js";import"./iteratee-BcVPr63I.js";import"./Curve-BJXCkxMN.js";import"./step-O2UOarbe.js";import"./AnimatedItems-QaKLnfOP.js";import"./useAnimationId-hHgrQgML.js";import"./ActivePoints-BrY5sxJW.js";import"./Dot-N76mer2J.js";import"./RegisterGraphicalItemId-DN1O3Sjb.js";import"./ErrorBarContext-DnIQZp30.js";import"./GraphicalItemClipPath-nqtdT7cB.js";import"./SetGraphicalItem-DRMG3qH2.js";import"./getRadiusAndStrokeWidthFromDot-Dpt2Y5Zj.js";import"./ActiveShapeUtils-CBR4xzcn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Dc-kmE9q.js";import"./Rectangle-DSfjoyTs.js";import"./util-Dxo8gN5i.js";import"./Sector-CktWcgyk.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
