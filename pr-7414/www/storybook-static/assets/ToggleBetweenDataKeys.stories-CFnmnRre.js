import{r as n,R as t}from"./iframe-Cx28kabR.js";import{L as p}from"./LineChart-BsMAUKhp.js";import{R as s}from"./zIndexSlice-BJophbSs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D5AZ4yC0.js";import{X as d}from"./XAxis-CWTUtLan.js";import{Y as y}from"./YAxis-DtGVJOoG.js";import{L as u}from"./Legend-CHHDMFmN.js";import{L as h}from"./Line-Cn1MCW6C.js";import{T as g}from"./Tooltip-BKDHWttE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DI8RF6tE.js";import"./index-DVR_r8nO.js";import"./index-D-WuKlNL.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./immer-C9z4Tvb1.js";import"./get-B9lrw7-x.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DKQmb89J.js";import"./isWellBehavedNumber-CMbzImp5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./CartesianAxis-BKywCzO2.js";import"./Layer-DvLhXWX-.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./Label-BDMWILCu.js";import"./ZIndexLayer-CZAm4j4p.js";import"./types-UeNFcMv5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BlW_LPoz.js";import"./symbol-8JxOaiEe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1Lt73IJ.js";import"./uniqBy-1qQJ4H2D.js";import"./iteratee-8IZU8Gil.js";import"./Curve-BhQA-w3U.js";import"./step-JKjbkiwo.js";import"./AnimatedItems-BxtLfWI4.js";import"./useAnimationId-DLl-Zvtm.js";import"./ActivePoints-Bq-7Nh5y.js";import"./Dot-Iy9OPdn2.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./ErrorBarContext-ZNw_jj1S.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./getRadiusAndStrokeWidthFromDot-pD6-2pnW.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./Cross-3dBm2aFN.js";import"./Rectangle-DJiMJWXy.js";import"./Sector-CCXsbnI5.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
