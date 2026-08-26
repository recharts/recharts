import{r as n,R as t}from"./iframe-C2IAoP9z.js";import{L as p}from"./LineChart-CtlTKue5.js";import{R as s}from"./zIndexSlice-BOdY0c2w.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-EAaFVhHL.js";import{X as d}from"./XAxis-Ceu0E44T.js";import{Y as y}from"./YAxis-CkTJLDxP.js";import{L as u}from"./Legend-BhvsLI5l.js";import{L as h}from"./Line-Cw_tbLsT.js";import{T as g}from"./Tooltip-CSD5N63w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGBW-uJJ.js";import"./index-ozLvQTxr.js";import"./index-Dzs-h2I5.js";import"./index-Bc8qjgC3.js";import"./index-OAErDOz1.js";import"./throttle-CMLI9bDX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cc0lgYtN.js";import"./resolveDefaultProps-CEcc3HUE.js";import"./isWellBehavedNumber-Dx9jutoa.js";import"./d3-scale-Cvy-Ur2o.js";import"./renderedTicksSlice-CQpIMs9x.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dhpx6_3-.js";import"./chartDataContext-D77crK3E.js";import"./CategoricalChart-Q-FJ4faS.js";import"./CartesianAxis-CxQqbA0R.js";import"./Layer-c70k-pgH.js";import"./Text-Cay_E7zv.js";import"./DOMUtils-SGZ0CxAs.js";import"./useId-B5XgiE_K.js";import"./useBackwardsCompatibleTheme-Dqn1q3dG.js";import"./Label-DAn48o-H.js";import"./ZIndexLayer-BqO-ONcy.js";import"./types-BONlApS2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-1DJfKNFx.js";import"./symbol-CLYRJo2K.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlQ6_KNY.js";import"./uniqBy-Dak74J6O.js";import"./iteratee-CHgj4-IF.js";import"./Curve-Dgd-wDO-.js";import"./step-DmsxAhZl.js";import"./AnimatedItems-D3kWiSe3.js";import"./useAnimationId-DzFP_Ei6.js";import"./ActivePoints-D57dx6Bs.js";import"./Dot-BXKPSTnn.js";import"./RegisterGraphicalItemId-BFnewc-x.js";import"./ErrorBarContext-XS2v7-8C.js";import"./GraphicalItemClipPath-j5P5g_UT.js";import"./SetGraphicalItem-CB0dHT4c.js";import"./getRadiusAndStrokeWidthFromDot-BlVIdv42.js";import"./ActiveShapeUtils-dJNYAFGN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BuISlzpb.js";import"./Rectangle-I7JckY3r.js";import"./util-Dxo8gN5i.js";import"./Sector-YB4DXi_y.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
