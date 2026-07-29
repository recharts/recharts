import{r as n,R as t}from"./iframe-D2OYENKH.js";import{L as p}from"./LineChart-DIpS1w4o.js";import{R as s}from"./zIndexSlice-D0ZhXs4m.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-COFti2ZN.js";import{X as d}from"./XAxis-Pkmtv0hr.js";import{Y as y}from"./YAxis-BOZmPEET.js";import{L as u}from"./Legend-B_Rub_BT.js";import{L as h}from"./Line-CtVgLkBu.js";import{T as g}from"./Tooltip-DB7eXyiT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BWgpx-pN.js";import"./index-JR3rJPe5.js";import"./index-CVAOKIGV.js";import"./index-Dur45csw.js";import"./index-DuPaBThV.js";import"./throttle-Bn9pRQ9R.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CAJ7-KA1.js";import"./axisSelectors-D5cpRxU3.js";import"./resolveDefaultProps-dYsmKBqC.js";import"./isWellBehavedNumber-CA6K8V7o.js";import"./d3-scale-BX-yZ5Fv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D90Zb4X0.js";import"./chartDataContext-BdJZhmRg.js";import"./CategoricalChart-UC5rHyt5.js";import"./CartesianAxis-BVkShzhs.js";import"./Layer-D9vccuwA.js";import"./Text-Dw3wOnD-.js";import"./DOMUtils-DDs_Dfl9.js";import"./Label-BhTPc9li.js";import"./ZIndexLayer-Cf4JaxIV.js";import"./types-CP4OIotA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-B2FvzarN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-zZY-dgPF.js";import"./symbol-B4rpbFe-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CLBcQN83.js";import"./uniqBy-P6iSPcSj.js";import"./iteratee-1U3upCJW.js";import"./Curve-2nThZew5.js";import"./step-DWDRJwlo.js";import"./AnimatedItems-DmNuH65D.js";import"./useAnimationId-INjmlW7n.js";import"./ActivePoints-BjhdQ6pz.js";import"./Dot-DT2GXuQy.js";import"./RegisterGraphicalItemId-B9FhgBpj.js";import"./ErrorBarContext-DK9yojOq.js";import"./GraphicalItemClipPath-BwblPJrN.js";import"./SetGraphicalItem-CS5ycuRe.js";import"./getRadiusAndStrokeWidthFromDot-awhZfjnX.js";import"./ActiveShapeUtils-CzcMe4-S.js";import"./Cross-CacqqhTY.js";import"./Rectangle-xLYCPX3G.js";import"./util-Dxo8gN5i.js";import"./Sector-BqNrUyRn.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
