import{r as n,R as t}from"./iframe-DXKzzws4.js";import{L as p}from"./LineChart-B_HT4_qO.js";import{R as s}from"./zIndexSlice-DMX8Hhzz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-dn8jQool.js";import{X as d}from"./XAxis-B7JoDVaz.js";import{Y as y}from"./YAxis-rHqCYw2v.js";import{L as u}from"./Legend-QcCiTVJb.js";import{L as h}from"./Line-CqA0P4v1.js";import{T as g}from"./Tooltip-BgqWabVR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CAtabfYs.js";import"./index-D033D4Zv.js";import"./index-Bg5IH0LC.js";import"./index-lFjFQb2-.js";import"./index-CL_M0WF6.js";import"./throttle-BD3oF8Du.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-egJwNk4f.js";import"./axisSelectors-v3JljGjn.js";import"./resolveDefaultProps-BSNhK7r6.js";import"./isWellBehavedNumber-C7AyK_9S.js";import"./d3-scale-DYAtoVGZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BbjVuMqC.js";import"./chartDataContext-CSoMwZ9z.js";import"./CategoricalChart-CAv3CBz7.js";import"./CartesianAxis-CVHxu40z.js";import"./Layer-C_ZH39cx.js";import"./Text-H0ump6nt.js";import"./DOMUtils-DglI10nq.js";import"./Label-C30Q7qcI.js";import"./ZIndexLayer-CMaU0WuF.js";import"./types-BceUICSF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-COmsubEa.js";import"./symbol-BUlFMA9I.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BqV11enm.js";import"./uniqBy-CUADLInF.js";import"./iteratee-CHkUkcds.js";import"./Curve-DmVGde8u.js";import"./step-BR5H3S21.js";import"./AnimatedItems-DnXQuXZD.js";import"./useAnimationId-DeOyrvrW.js";import"./ActivePoints-CSBiBk5C.js";import"./Dot-sf8y4IWV.js";import"./RegisterGraphicalItemId-CW1tA6c4.js";import"./ErrorBarContext-CuLgZ_wX.js";import"./GraphicalItemClipPath-C72bnPxn.js";import"./SetGraphicalItem-CYGj1XVR.js";import"./getRadiusAndStrokeWidthFromDot-BvNGRFfN.js";import"./ActiveShapeUtils-D95WmeDO.js";import"./Cross-5OJntGQy.js";import"./Rectangle-DKjzEYBW.js";import"./util-Dxo8gN5i.js";import"./Sector-G5hJhTYV.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
