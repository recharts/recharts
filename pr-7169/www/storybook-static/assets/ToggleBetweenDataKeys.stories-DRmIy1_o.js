import{r as n,e as t}from"./iframe-CB4rwuoz.js";import{L as p}from"./LineChart-BiTSSiaU.js";import{R as s}from"./arrayEqualityCheck-B0sfDo8e.js";import{C as c}from"./CartesianGrid-yd7HEcQz.js";import{X as l}from"./XAxis-DCt1RS6w.js";import{Y as d}from"./YAxis-BaJrW052.js";import{L as y}from"./Legend-IZj4yYE7.js";import{L as h}from"./Line-0O1iT2mF.js";import{T as u}from"./Tooltip-CbV8c3wz.js";import{R as g}from"./RechartsHookInspector-c3RyaB9m.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VUmZrQSA.js";import"./index-BgC6MCXe.js";import"./immer-BWNyrJnU.js";import"./hooks-DoXZqLBz.js";import"./axisSelectors-BlEjC6I8.js";import"./d3-scale-BjYlm7DL.js";import"./zIndexSlice-CX5pCWFs.js";import"./renderedTicksSlice-B7tbCiQT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bwy1F3hm.js";import"./chartDataContext-D2Mcqnh5.js";import"./CategoricalChart-RjnDaFgq.js";import"./resolveDefaultProps-aRufe_6H.js";import"./CartesianAxis-CMMIwY9U.js";import"./Layer-CF-S8dmg.js";import"./Text-BQ5lZJu1.js";import"./DOMUtils-CBex0cbx.js";import"./Label-C4bu2feL.js";import"./ZIndexLayer-DoMA1dJ2.js";import"./types-CgQDsaUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CMdoO83a.js";import"./symbol-C980TeYk.js";import"./step-BgqYgAla.js";import"./useElementOffset-K5yP77dM.js";import"./uniqBy-BiWECRxk.js";import"./iteratee-_24P-b58.js";import"./ReactUtils-BKtMub4g.js";import"./ActivePoints-CemCp_OZ.js";import"./Dot-Dh6sbB0Q.js";import"./RegisterGraphicalItemId-mDbm0o4v.js";import"./ErrorBarContext-C9ucf0NL.js";import"./GraphicalItemClipPath-CewNEzcT.js";import"./SetGraphicalItem-Df_Fprv_.js";import"./useAnimationId-CLj3uDOB.js";import"./getRadiusAndStrokeWidthFromDot-BcBCYhRo.js";import"./ActiveShapeUtils-CXBvI7fg.js";import"./isPlainObject-ExidMtfN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BToq8Jht.js";import"./Trapezoid-oQAH4GDD.js";import"./Sector-C4kas-8x.js";import"./Curve-DX-WNmjD.js";import"./Cross-fgYQklRZ.js";import"./index-DLNZT6vI.js";import"./ChartSizeDimensions-D60uICZH.js";import"./OffsetShower-C1ie4azQ.js";import"./PlotAreaShower-T2_0B54j.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
