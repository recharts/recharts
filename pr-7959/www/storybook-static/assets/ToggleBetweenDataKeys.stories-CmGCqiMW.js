import{r as p,R as t}from"./iframe-D1Pqp3X7.js";import{L as n}from"./LineChart-BnajEXhy.js";import{R as s}from"./zIndexSlice-CC0vixK0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bu-cWsQQ.js";import{X as d}from"./XAxis-T7u0Y27W.js";import{Y as y}from"./YAxis-Bx5HOyiU.js";import{L as u}from"./Legend-Bb1a6T_X.js";import{L as h}from"./Line-DYKbaseg.js";import{T as g}from"./Tooltip-CtEEN_E_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dlv3UuBc.js";import"./resolveDefaultProps-BY3VWyF-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D2uT0zOX.js";import"./throttle-ukQujWSR.js";import"./index-hC6YZk0S.js";import"./index-4O2rY_Cx.js";import"./isWellBehavedNumber-D9UYuuaw.js";import"./d3-scale-BBX2CRCX.js";import"./index-tZNJXdgS.js";import"./index-BxZa8ohf.js";import"./renderedTicksSlice-BfFvXFNo.js";import"./index-C4H2qa0s.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C5RCyQJ8.js";import"./chartDataContext-Bgnde7n0.js";import"./CategoricalChart-B93ipspd.js";import"./CartesianAxis-By4dWd7I.js";import"./Layer-Bv1Fmb_W.js";import"./Text-B3gTwU4t.js";import"./pageBackground-BD-8uHz0.js";import"./useId-DZsUPY-C.js";import"./useBackwardsCompatibleTheme-yQkddBeS.js";import"./Label-CD1DJmaw.js";import"./ZIndexLayer-Bv7_Srb_.js";import"./types-CpySGoie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BdxiKu9s.js";import"./symbol-DXAxbnUZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CxHlgG-v.js";import"./uniqBy-o1mWMSKB.js";import"./iteratee-CVrITLYk.js";import"./Curve-D1xsq6-l.js";import"./step-7AUpGbZt.js";import"./activeStyles-Bni41BPX.js";import"./useAnimationId-Bu_aUyhK.js";import"./dataEntryStyles-DesCUen4.js";import"./ActivePoints-BTUoBtm0.js";import"./Dot-q9DoNaCP.js";import"./ErrorBarContext-CR6eW5Ea.js";import"./GraphicalItemClipPath-BrZXwUEO.js";import"./SetGraphicalItem-DW-Ki2gV.js";import"./getRadiusAndStrokeWidthFromDot-8ztb8GwF.js";import"./ActiveShapeUtils-NtxvAIW2.js";import"./useEffectiveDataKey-D04u3iKL.js";import"./Cross-BIngWomV.js";import"./Rectangle-BPXhboaf.js";import"./util-Dxo8gN5i.js";import"./Sector-COw70WOV.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
