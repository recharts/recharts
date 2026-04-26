import{r as n,e as t}from"./iframe-Gbg_l78M.js";import{L as p}from"./LineChart-eaZmFXO6.js";import{R as s}from"./arrayEqualityCheck-B69LB4m3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BMhBEEa4.js";import{X as d}from"./XAxis-DY33qp1b.js";import{Y as y}from"./YAxis-DZDs3GKO.js";import{L as h}from"./Legend-C9X7UUEv.js";import{L as u}from"./Line-4pnz_hNM.js";import{T as g}from"./Tooltip-D5agznPE.js";import{R as K}from"./RechartsHookInspector-Do2lkGOS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B733cAvp.js";import"./index-Ck6DfcF7.js";import"./immer-mU5ngVSZ.js";import"./hooks-BX9UIUih.js";import"./axisSelectors-BhOsWb8H.js";import"./d3-scale-B1Xdl3mZ.js";import"./zIndexSlice-BsUMgwVy.js";import"./renderedTicksSlice-CfnOktJ2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0_pR8lQ.js";import"./chartDataContext-DKgbTOGI.js";import"./CategoricalChart-CF19xo_7.js";import"./resolveDefaultProps-sMeqIZjn.js";import"./CartesianAxis-Dca3a3op.js";import"./Layer-BI5znRpT.js";import"./Text-BbIMZo50.js";import"./DOMUtils-BEdmeFzJ.js";import"./Label-C97vZCUD.js";import"./ZIndexLayer-Cu_ZYhKd.js";import"./types-6-jxyL20.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DdxMLZNU.js";import"./symbol-gfqsi-zR.js";import"./step-BMA_kAfe.js";import"./useElementOffset-B5ago7eB.js";import"./uniqBy-D3sIEuXx.js";import"./iteratee-Bz9748e7.js";import"./ReactUtils-BEyTjZ-J.js";import"./ActivePoints-CLdEaCHn.js";import"./Dot-DiubYT5n.js";import"./RegisterGraphicalItemId-B4Pbzoa5.js";import"./ErrorBarContext-muYUytku.js";import"./GraphicalItemClipPath-C6vmlIdz.js";import"./SetGraphicalItem-BeRS8RAb.js";import"./useAnimationId-FFZ8e1iF.js";import"./getRadiusAndStrokeWidthFromDot-qW4tViY-.js";import"./ActiveShapeUtils-BF5Ec1rO.js";import"./isPlainObject-C5_xiZ-_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ao9F5Oc0.js";import"./Trapezoid-B9yBSbp-.js";import"./Sector-NBw4H--I.js";import"./Curve-CLZ73sU1.js";import"./Cross-DEFXd5kS.js";import"./index-Dqxuu1t4.js";import"./ChartSizeDimensions-BLrRxRyE.js";import"./OffsetShower-C_0qPv4p.js";import"./PlotAreaShower-C7q1PybE.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
