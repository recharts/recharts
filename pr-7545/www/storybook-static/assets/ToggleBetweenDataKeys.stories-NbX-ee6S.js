import{r as n,R as t}from"./iframe-BRR_Yx3q.js";import{L as p}from"./LineChart-CV_f1Ycc.js";import{R as s}from"./zIndexSlice-2cKWUmx1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D-wiV_bL.js";import{X as d}from"./XAxis-D2YOv_sk.js";import{Y as y}from"./YAxis-DT9J28i-.js";import{L as u}from"./Legend-8oAOgQMw.js";import{L as h}from"./Line-DrAvxDeD.js";import{T as g}from"./Tooltip-36Xd1zAl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dreti13-.js";import"./index-C7O-rWXn.js";import"./index-CJWeDOqD.js";import"./index-C-RWhaz3.js";import"./index-dwufCIeA.js";import"./throttle-9Cm-XaBZ.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DsmsDUZ3.js";import"./axisSelectors-BvSj2dv3.js";import"./resolveDefaultProps-BuYHfJJu.js";import"./isWellBehavedNumber-BoZxamXc.js";import"./d3-scale-DiG9HsKp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7iKBlwo.js";import"./chartDataContext-7uLTjT1t.js";import"./CategoricalChart-Bo9h-nM1.js";import"./CartesianAxis-CtRqWNRX.js";import"./Layer-DEnO1k0R.js";import"./Text-CNcfggmg.js";import"./DOMUtils-DaLtqU51.js";import"./Label-BFmCxOLP.js";import"./ZIndexLayer-B_gUHSFj.js";import"./types-DUTL6gmw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CNXodT7a.js";import"./symbol-Brgl6U8b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhJ2uqTW.js";import"./uniqBy-skO6ce2Q.js";import"./iteratee-jFm--KAQ.js";import"./Curve-CgfofNr-.js";import"./step-DD-M69WZ.js";import"./AnimatedItems-BTME76kn.js";import"./useAnimationId-C1SKzxsx.js";import"./ActivePoints-Du_pXw62.js";import"./Dot-RhTFr113.js";import"./RegisterGraphicalItemId-vR20SUSb.js";import"./ErrorBarContext-DKxut-kF.js";import"./GraphicalItemClipPath-DlaiPyn0.js";import"./SetGraphicalItem-BE7YCbvJ.js";import"./getRadiusAndStrokeWidthFromDot-CtiaEZzs.js";import"./ActiveShapeUtils-BvVAnTtS.js";import"./Cross-BJ3_Pen8.js";import"./Rectangle-CzyNBMZ7.js";import"./util-Dxo8gN5i.js";import"./Sector-C_wGj4XA.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
