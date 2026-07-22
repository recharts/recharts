import{r as n,R as t}from"./iframe-DgJplLvS.js";import{L as p}from"./LineChart-DUISkIjc.js";import{R as s}from"./zIndexSlice-BEw7ZoBF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DBabwDzt.js";import{X as d}from"./XAxis-Cv0cLySm.js";import{Y as y}from"./YAxis-Dq42uhEw.js";import{L as u}from"./Legend-BILwxJ3K.js";import{L as h}from"./Line-DVl-UA0H.js";import{T as g}from"./Tooltip-Diuoded2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkMI-tV9.js";import"./index-Bwl4xJcj.js";import"./index-DBV_c5tC.js";import"./index-CuR81imj.js";import"./index-DVtuWZEP.js";import"./throttle-BFtjLKgc.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-RcICWtpY.js";import"./axisSelectors-YqbMVrI6.js";import"./resolveDefaultProps-CgspoxK6.js";import"./isWellBehavedNumber-CYMKDc-o.js";import"./d3-scale-T7rND5KE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CDSt_igg.js";import"./chartDataContext-B8YdYa_T.js";import"./CategoricalChart-B_F4Qeg4.js";import"./CartesianAxis-iv3hpdCC.js";import"./Layer-CDKK6jHZ.js";import"./Text-DSQZtkf1.js";import"./DOMUtils-C8GJnqc6.js";import"./Label-DUk5cie5.js";import"./ZIndexLayer-DezlpkmC.js";import"./types-DgMxxOTT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-5r-kjQvx.js";import"./symbol-wGUlUL8e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BA__8TOj.js";import"./uniqBy-BsO6J-fr.js";import"./iteratee-m2OFbEqY.js";import"./Curve-BjTIUQH-.js";import"./step-CkXO2b_C.js";import"./AnimatedItems-hO6Ptiqq.js";import"./useAnimationId-SGeRDQQf.js";import"./ActivePoints-Dudi51yy.js";import"./Dot-CJqaNK4q.js";import"./RegisterGraphicalItemId-B36x_Amu.js";import"./ErrorBarContext-PVL9kjDM.js";import"./GraphicalItemClipPath-Dn9TF0yr.js";import"./SetGraphicalItem-9qFMsJKM.js";import"./getRadiusAndStrokeWidthFromDot-DkNcCvt4.js";import"./ActiveShapeUtils-Cjw-C0nA.js";import"./Cross-dkc1C4KG.js";import"./Rectangle-BkNYTIw0.js";import"./util-Dxo8gN5i.js";import"./Sector-DOS1I4Dx.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
