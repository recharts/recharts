import{r as n,R as t}from"./iframe-DGsKi3sD.js";import{L as p}from"./LineChart-c7I3eIff.js";import{R as s}from"./zIndexSlice-KX0_yctO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B0jOaMV2.js";import{X as d}from"./XAxis-DC55o2jW.js";import{Y as y}from"./YAxis-CmpmKkx6.js";import{L as u}from"./Legend-CXKBkp4r.js";import{L as h}from"./Line-BUFeRjVl.js";import{T as g}from"./Tooltip-CwkMS4uO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DYCPiSo2.js";import"./resolveDefaultProps-WH78MRVQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DtyBM-5t.js";import"./throttle-DCh63S7N.js";import"./index-Dco7y41f.js";import"./index-Bp6gYlCO.js";import"./isWellBehavedNumber-O5p8iLqQ.js";import"./d3-scale-D5k0CP0B.js";import"./index-BcRP16iL.js";import"./index-C3o7ztbZ.js";import"./renderedTicksSlice-BV6OKQcy.js";import"./index-BUKcBCac.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqPq6dfa.js";import"./chartDataContext-YSpCe_4G.js";import"./CategoricalChart-kDHsGv00.js";import"./CartesianAxis-BxHxH-nJ.js";import"./Layer-BEEnYnIh.js";import"./Text-ChCNWouT.js";import"./DOMUtils-Bj-nNPQP.js";import"./useId-DbfF67AC.js";import"./useBackwardsCompatibleTheme-CdHfIa1f.js";import"./Label-kB9Gr9Je.js";import"./ZIndexLayer-C-hUG3-A.js";import"./types-BYQ55WzM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D4h-5pRv.js";import"./symbol-D4m_fLa8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BOCzr69a.js";import"./uniqBy-Bjp_9c9Z.js";import"./iteratee-3-ku6Z3Y.js";import"./Curve-Jm82kUWT.js";import"./step-B-VK-dxT.js";import"./AnimatedItems-oaPm5uVb.js";import"./useAnimationId-CpfROKBj.js";import"./ActivePoints-ALRvVDi0.js";import"./Dot-BfPTVnro.js";import"./RegisterGraphicalItemId-Ci3kKosu.js";import"./ErrorBarContext-Lyc5VGnS.js";import"./GraphicalItemClipPath-DAhebsqX.js";import"./SetGraphicalItem-TmtzSo0n.js";import"./getRadiusAndStrokeWidthFromDot-D62b7kUR.js";import"./ActiveShapeUtils-D1-7_dRK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CSwqD5sP.js";import"./Rectangle-QV_I5D3C.js";import"./util-Dxo8gN5i.js";import"./Sector-CDbYdWIO.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
