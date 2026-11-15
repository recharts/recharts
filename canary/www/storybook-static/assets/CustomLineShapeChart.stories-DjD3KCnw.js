import{R as t}from"./iframe-BEGj1koH.js";import{R as D,l as p}from"./zIndexSlice-CEJVfddR.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DLeL4OTs.js";import{C as M}from"./CartesianGrid-CnGKMMdf.js";import{X as $}from"./XAxis-A5l93qYr.js";import{Y as I}from"./YAxis-pWnSqNwD.js";import{L as O}from"./Legend-BGEPhXJp.js";import{T as W}from"./Tooltip-BlRYrkch.js";import{L as f}from"./Line-wcAYZAbC.js";import{C as X}from"./Curve-hlvSyv9M.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BYyXPZU-.js";import"./throttle-9RbVUj4o.js";import"./index-DDO4uWer.js";import"./index-DR0rd1FX.js";import"./RechartsWrapper-DyBgNckc.js";import"./axisSelectors-DNGVPDPw.js";import"./polarAxisSelectors-Bip_MddP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-80plsouy.js";import"./index-BjkAsnz4.js";import"./index-OAXr3uJt.js";import"./renderedTicksSlice-kRCXaW-h.js";import"./index-CMfsitJi.js";import"./fillDefinitions-CBOLnqU9.js";import"./CartesianChart-Ct1jbJB4.js";import"./chartDataContext-CTuyBUPX.js";import"./CategoricalChart-DExcD38L.js";import"./CartesianAxis-DbfSB8D9.js";import"./Layer-C55olOZb.js";import"./Text-DjwfkybI.js";import"./ZIndexLayer-DF1RNmQW.js";import"./Label-D38IadvQ.js";import"./types-DoIEZrXt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B6OXEcw9.js";import"./symbol-Bug6GalK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CiV49lwO.js";import"./uniqBy-C61gVEFe.js";import"./iteratee-BOHATSs8.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Dz0dpT6V.js";import"./Cross-DnloOoyf.js";import"./Rectangle-Br2C5RSL.js";import"./util-Dxo8gN5i.js";import"./Sector-D3cUvRcp.js";import"./dataEntryStyles-D0L-GBmA.js";import"./ActivePoints-htAl9rci.js";import"./Dot-CF8XQTEk.js";import"./activeStyles-BAv2bBi7.js";import"./ErrorBarContext-DjI-jDw7.js";import"./SetGraphicalItem-CZ4dqLwM.js";import"./getRadiusAndStrokeWidthFromDot-CkygA61E.js";import"./ActiveShapeUtils-CbYiWbjj.js";import"./useEffectiveDataKey-Dgv3FRKU.js";import"./step-Cc4Umos1.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
