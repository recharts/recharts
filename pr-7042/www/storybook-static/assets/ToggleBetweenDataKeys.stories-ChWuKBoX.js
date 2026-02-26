import{r as n,e as t}from"./iframe-CJQnRCN7.js";import{L as p}from"./LineChart-E0zD102V.js";import{R as s}from"./arrayEqualityCheck-DcQtyVca.js";import{C as c}from"./CartesianGrid-BWHoKEcJ.js";import{X as l}from"./XAxis-DGEO6QJA.js";import{Y as d}from"./YAxis-Bx_UxG-b.js";import{L as y}from"./Legend-BlD56xgl.js";import{L as h}from"./Line-CK6_c6B6.js";import{T as u}from"./Tooltip-QIQBaDRZ.js";import{R as g}from"./RechartsHookInspector-DQZJ1VRL.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DEeMF7CZ.js";import"./index-D1Dxg2z1.js";import"./immer-pCuW_8mX.js";import"./hooks-D3GLo4z9.js";import"./axisSelectors-CBcJoGrJ.js";import"./d3-scale-AQeZIKmR.js";import"./zIndexSlice-D7pH0QjK.js";import"./renderedTicksSlice-6is9WC9q.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-pu1Q9M14.js";import"./chartDataContext-DYHRLxlR.js";import"./CategoricalChart-DZh5W8ZS.js";import"./resolveDefaultProps-Bn42vmR1.js";import"./CartesianAxis-CA-DoWhq.js";import"./Layer-B-568WrD.js";import"./Text-8oP5Jeys.js";import"./DOMUtils-CpcfJsF7.js";import"./Label-C1IYMHDK.js";import"./ZIndexLayer-DBz_ncGo.js";import"./types-Bb5s1IIN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BqZb3kY5.js";import"./symbol-CVXqLImo.js";import"./step-xPk2jUCK.js";import"./useElementOffset-DS1TYk1g.js";import"./uniqBy-CVqqkYEQ.js";import"./iteratee-tQQnC2SF.js";import"./ReactUtils-BMRDQSQL.js";import"./ActivePoints-0FO4QfDc.js";import"./Dot-DVt8NYvp.js";import"./RegisterGraphicalItemId-CErdNO5K.js";import"./ErrorBarContext-WcfhBNrP.js";import"./GraphicalItemClipPath-BMpRvZ7r.js";import"./SetGraphicalItem-oTp0Feor.js";import"./useAnimationId-Btjbf-3C.js";import"./getRadiusAndStrokeWidthFromDot-27Jzsgzj.js";import"./ActiveShapeUtils-Al5O4_0X.js";import"./isPlainObject-Cy53febZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIClz7bW.js";import"./Trapezoid-DO_o8qI8.js";import"./Sector-DPKTnHdo.js";import"./Curve-ClJjpRlb.js";import"./Cross-PSTvbWDH.js";import"./index-BmBTwCFz.js";import"./ChartSizeDimensions-BxOAeUa_.js";import"./OffsetShower-Bp1qc7mw.js";import"./PlotAreaShower-DPY3URo4.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
