import{r as n,R as t}from"./iframe-D3n-qa3v.js";import{L as p}from"./LineChart-Btvgs1Lw.js";import{R as s}from"./zIndexSlice-URMJGlQl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DdfvKh4X.js";import{X as d}from"./XAxis-BvFg4s2o.js";import{Y as y}from"./YAxis-B-l06g0y.js";import{L as u}from"./Legend-CGP__KEG.js";import{L as h}from"./Line-UgcJB4CE.js";import{T as g}from"./Tooltip-D8w_jK1y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDHIckB2.js";import"./resolveDefaultProps-Cvq-kyHH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DaB7yAHm.js";import"./throttle-DN7vm2uB.js";import"./index-C_ri2ApK.js";import"./index-Dd3rxVYb.js";import"./isWellBehavedNumber-CrERG1s-.js";import"./d3-scale-CaZKGVIZ.js";import"./index-C_Wrm-XW.js";import"./index-CZCnJbjp.js";import"./renderedTicksSlice-CPTSo4fz.js";import"./index-C1lTKvWo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DUso81Db.js";import"./chartDataContext-CZa0hGfr.js";import"./CategoricalChart-CGaW84Rd.js";import"./CartesianAxis-Cx3S-3lL.js";import"./Layer-oKfk3hYA.js";import"./Text-70ucIKSF.js";import"./DOMUtils-CcpQZ2_k.js";import"./useId-B_N_AB1U.js";import"./useBackwardsCompatibleTheme-BAQfNZQf.js";import"./Label-CpaVgYY8.js";import"./ZIndexLayer-hb7j23f9.js";import"./types-DvyNYfPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BdsIUlir.js";import"./symbol-ePdn19-e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-E97WR8Kk.js";import"./uniqBy-DeyvTwgR.js";import"./iteratee-CJAX1ry0.js";import"./Curve-5zGakvVQ.js";import"./step-CxhIdSSF.js";import"./AnimatedItems-CRkuoQfP.js";import"./useAnimationId-CKWjvm6q.js";import"./ActivePoints-BFpUc-QU.js";import"./Dot-DbNEtbef.js";import"./RegisterGraphicalItemId-DsY94qP2.js";import"./ErrorBarContext-DijZHKAW.js";import"./GraphicalItemClipPath-Ch9sm1k7.js";import"./SetGraphicalItem-BmMhxnaz.js";import"./getRadiusAndStrokeWidthFromDot-0WjElrhg.js";import"./ActiveShapeUtils-0ntRQ4Qt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DUS7QXUz.js";import"./Rectangle-BIHrotSs.js";import"./util-Dxo8gN5i.js";import"./Sector-B1HZ_hCy.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
