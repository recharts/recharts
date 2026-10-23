import{r as p,R as t}from"./iframe-D54unYLy.js";import{L as n}from"./LineChart-KbeJFkeU.js";import{R as s}from"./zIndexSlice-Cm3b7ejj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-iXe5GTLd.js";import{X as d}from"./XAxis-R4jdjMJ5.js";import{Y as y}from"./YAxis-akurfq85.js";import{L as u}from"./Legend-Dk4rOUIE.js";import{L as h}from"./Line-ByVQ_w7d.js";import{T as g}from"./Tooltip-5_e256fX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Sp30bFVi.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CGx4lpK1.js";import"./throttle-DMkP6nmZ.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./d3-scale-izKDfaZA.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-BNdKzrH5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./CartesianAxis-UtS4SURK.js";import"./Layer-crHiZgAm.js";import"./Text-CRGGbb6_.js";import"./pageBackground-CsysAoq2.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./Label-A3PRHVZO.js";import"./ZIndexLayer-DfUYfUZg.js";import"./types-BmPqNA2a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BPVu9Joj.js";import"./symbol-A2VrwPOA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COT3eBVz.js";import"./uniqBy-DUhvtwBb.js";import"./iteratee-D8iCn3Rd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-leEdGdAp.js";import"./step-C309cuJU.js";import"./activeStyles-qzo8AQBX.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./ActivePoints-Bqn9pf-5.js";import"./Dot-B2rX6rOm.js";import"./ErrorBarContext-m85c5O32.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getRadiusAndStrokeWidthFromDot-DqXexg1f.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./useEffectiveDataKey-BB9JnQ0o.js";import"./Cross-CyqJOPur.js";import"./Rectangle-BjxF51Ga.js";import"./util-Dxo8gN5i.js";import"./Sector-MvPs0y-3.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
