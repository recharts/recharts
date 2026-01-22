import{r as n,e as t}from"./iframe-Bnj2hik-.js";import{L as p}from"./LineChart-3Oe4O3eO.js";import{R as s}from"./arrayEqualityCheck-CvUuuvKy.js";import{C as c}from"./CartesianGrid-ClAraMwg.js";import{X as l}from"./XAxis-DOcRfQ-w.js";import{Y as d}from"./YAxis-D5VnaMC1.js";import{L as y}from"./Legend-Bb-V3Rnn.js";import{L as h}from"./Line-D9lTYQ4h.js";import{T as u}from"./Tooltip-5z-9ouH6.js";import{R as g}from"./RechartsHookInspector-C_AeFs2E.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0Rp0hND.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./zIndexSlice-CXHmHRtI.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-D6wdmsep.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./CartesianAxis-5Ck476fs.js";import"./Layer-CTa4OydD.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./Label-CGAHaC0Q.js";import"./ZIndexLayer-AOmKG0iq.js";import"./types-BDwtxhLH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DhIIpi5f.js";import"./Curve-DmusCa7H.js";import"./useElementOffset-Cs4N1beZ.js";import"./iteratee-hXzJyvq3.js";import"./ReactUtils-Df0RtsJl.js";import"./ActivePoints-Zh-g-ty0.js";import"./Dot-pJFhyCMJ.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./ErrorBarContext-D6agTjiV.js";import"./GraphicalItemClipPath-UbaOhT8l.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./useAnimationId-APU2l9w6.js";import"./getRadiusAndStrokeWidthFromDot-DrD-zBLL.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./Trapezoid-CztQNmuh.js";import"./Sector-DCA192jN.js";import"./Cross-g1_l6O_A.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
