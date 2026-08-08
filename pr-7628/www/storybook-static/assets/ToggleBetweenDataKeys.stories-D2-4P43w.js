import{r as n,R as t}from"./iframe-D_g4F33S.js";import{L as p}from"./LineChart-C05SeLYJ.js";import{R as s}from"./zIndexSlice-qk_W91LH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C9Qjx1Qy.js";import{X as d}from"./XAxis-D0V-DbQJ.js";import{Y as y}from"./YAxis-BeSx8PLK.js";import{L as u}from"./Legend-DP4hRnPN.js";import{L as h}from"./Line-BbKfURZ_.js";import{T as g}from"./Tooltip-a8WCufWp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CPYm6CLL.js";import"./index-DjQlfIyB.js";import"./index-RMAjGoM1.js";import"./index-bqb3oNhY.js";import"./index-DU-EG8Ox.js";import"./throttle-C8ol7TbU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BTeU-Lnf.js";import"./resolveDefaultProps-BMNeBin1.js";import"./isWellBehavedNumber-DbmSi19e.js";import"./d3-scale-CQkgQnoX.js";import"./renderedTicksSlice-9yA5jGLk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C30ToINU.js";import"./chartDataContext-abfC3Iow.js";import"./CategoricalChart-Dp3h3G-T.js";import"./CartesianAxis-eoFvh8zn.js";import"./Layer-CZAafMyB.js";import"./Text-dC5bBnrz.js";import"./DOMUtils-D15rvujY.js";import"./Label-mwDIEaZu.js";import"./ZIndexLayer-CBemJ52Z.js";import"./types-E4fDsamD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DEVDikLO.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-vnU70vMn.js";import"./symbol-CvKw74Ax.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_pF2ZzE.js";import"./uniqBy-CTUiS_hF.js";import"./iteratee-D3RgNIdT.js";import"./Curve-DHe5_cmM.js";import"./step-BcJtBoCB.js";import"./AnimatedItems-5bCKGYgm.js";import"./useAnimationId-F97RPKrS.js";import"./ActivePoints-CjAssZ9T.js";import"./Dot-DT1eTQrx.js";import"./RegisterGraphicalItemId-S9qjeBvy.js";import"./ErrorBarContext-j16ccEsR.js";import"./GraphicalItemClipPath-Ce5CheJW.js";import"./SetGraphicalItem-MWcQtcPB.js";import"./getRadiusAndStrokeWidthFromDot-Bjf5_Zne.js";import"./ActiveShapeUtils-AssYUN6s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CUxwAD3n.js";import"./Rectangle-CYZZnEwA.js";import"./util-Dxo8gN5i.js";import"./Sector-B-A7-pZw.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
