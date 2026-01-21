import{r as n,e as t}from"./iframe-B3JCtExw.js";import{L as p}from"./LineChart-qKWsFQZq.js";import{R as s}from"./arrayEqualityCheck-BI5ikbve.js";import{C as c}from"./CartesianGrid-BeqWnVU4.js";import{X as l}from"./XAxis-D8u9sAce.js";import{Y as d}from"./YAxis-jqSdFVky.js";import{L as y}from"./Legend-D5r5RWGJ.js";import{L as h}from"./Line-D3Zmpmyn.js";import{T as u}from"./Tooltip-BmkvFz22.js";import{R as g}from"./RechartsHookInspector-B6PrNXux.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D9I6VAiu.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./zIndexSlice-CzadPF-N.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DfwgXX5-.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./CartesianAxis-D0PW3MM-.js";import"./Layer-m9bU_GMN.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./Label-DjeP5w8o.js";import"./ZIndexLayer-BuYvVcNP.js";import"./types-CzJtAzjL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CjdLCsX8.js";import"./Curve-CrR1QL9p.js";import"./useElementOffset-BoaozXpF.js";import"./iteratee-Cz7oSf5Y.js";import"./ReactUtils-YAdCW6ic.js";import"./ActivePoints-Cr18JU0C.js";import"./Dot-BO3IuXC8.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./ErrorBarContext-Bf3IY7YL.js";import"./GraphicalItemClipPath-DJH2B78L.js";import"./SetGraphicalItem-CgnveGex.js";import"./useAnimationId-YJOXYlAT.js";import"./getRadiusAndStrokeWidthFromDot-CZJ1soND.js";import"./ActiveShapeUtils-B5WBZ39Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D23yRLTV.js";import"./Trapezoid-54tzhOdh.js";import"./Sector-zNAlF0WR.js";import"./Cross-B0CbIQuP.js";import"./index-DqnQGlGG.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
