import{r as n,R as t}from"./iframe-D972tbhF.js";import{L as p}from"./LineChart-BGgzHg8X.js";import{R as s}from"./zIndexSlice-Dmvy26G-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CY_9Ffyk.js";import{X as d}from"./XAxis-QP_2w1I7.js";import{Y as y}from"./YAxis-MB1xCt9L.js";import{L as u}from"./Legend-Du5VkTqb.js";import{L as h}from"./Line-DPj7HunO.js";import{T as g}from"./Tooltip-TE4pRVsg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./throttle-D2OThsuy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-uJIqnO2D.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./CategoricalChart-DKJz-sZX.js";import"./CartesianAxis-B06URywl.js";import"./Layer-C5RVdPDc.js";import"./Text-Dysxol0f.js";import"./DOMUtils-DPBa-ha3.js";import"./Label-BZnc8KKN.js";import"./ZIndexLayer-Dhusbhig.js";import"./types-DLeA2L4w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7EwwBej.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-duaXYgIE.js";import"./symbol-v0Ok8s8m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BmB2opmc.js";import"./uniqBy-Dj3fIOcG.js";import"./iteratee-BauBQiDY.js";import"./Curve-DGKxAkYd.js";import"./step-9Pc3Vsuh.js";import"./AnimatedItems-2p3qtLJi.js";import"./useAnimationId-BPwHrlOs.js";import"./ActivePoints-SQF2J3GR.js";import"./Dot-DBr8YjaB.js";import"./RegisterGraphicalItemId-ySe1Fca9.js";import"./ErrorBarContext-DNvNglsi.js";import"./GraphicalItemClipPath-DuVjniBd.js";import"./SetGraphicalItem-EZqGepIx.js";import"./graphicalItemIdentity-BolIVYF7.js";import"./ActiveShapeUtils-D5m6KacQ.js";import"./Cross-Cw9WjHFk.js";import"./Rectangle-C3KTtfAJ.js";import"./util-Dxo8gN5i.js";import"./Sector-B0ejNnxM.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
