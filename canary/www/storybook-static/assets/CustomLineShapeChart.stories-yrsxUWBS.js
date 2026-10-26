import{R as t}from"./iframe-CcLWsqZ6.js";import{R as D,m as p}from"./zIndexSlice-qEbbRsug.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DUeRH4V3.js";import{C as M}from"./CartesianGrid-B_gilkWH.js";import{X as $}from"./XAxis-BgOtkzm1.js";import{Y as I}from"./YAxis-BSdoGpjP.js";import{L as O}from"./Legend-CnZ3wN7p.js";import{T as W}from"./Tooltip-BNUTWoNn.js";import{L as f}from"./Line-CqlVNCGh.js";import{C as X}from"./Curve-CkzSpo54.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIHsajMe.js";import"./throttle-QCGHXTx2.js";import"./index-BFIBYpnF.js";import"./index-DS2FinM5.js";import"./RechartsWrapper-BXLQXmKg.js";import"./axisSelectors-DKMD16Y3.js";import"./polarAxisSelectors-ChPgG8gV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4Z54rtJ.js";import"./index-53ZRgOab.js";import"./index-DTchXhsD.js";import"./renderedTicksSlice-ByXwp7t2.js";import"./index-DgxdHgy0.js";import"./CartesianChart-DtQ910PV.js";import"./chartDataContext-BOZiBkOs.js";import"./CategoricalChart-xvgg784f.js";import"./CartesianAxis-nGOA1KMV.js";import"./Layer-Cid6c7Vb.js";import"./Text-B8YpIyQn.js";import"./pageBackground-LUiwpw9x.js";import"./useId-HcHlz_oH.js";import"./ZIndexLayer-DNvaLTFc.js";import"./Label-FbOJbP-p.js";import"./dataEntryStyles-Cm1A0_Zh.js";import"./types-B5Ef_z7I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CqDetlVC.js";import"./symbol-CfzxdKp_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzNyUy0f.js";import"./uniqBy-Bl1hupsk.js";import"./iteratee-BmEXTGiW.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-D35HAJRU.js";import"./Cross-CiNcOdta.js";import"./Rectangle-D6aDAVT3.js";import"./util-Dxo8gN5i.js";import"./Sector-B-5V9BZl.js";import"./activeStyles-l3ZfSaP4.js";import"./ActivePoints-Ch_IhoTN.js";import"./Dot-DxmHRpLN.js";import"./RegisterGraphicalItemId-DuSlzxcR.js";import"./ErrorBarContext-BFxrQbxP.js";import"./SetGraphicalItem-DRC1z2NN.js";import"./getRadiusAndStrokeWidthFromDot-Dy2q91XH.js";import"./ActiveShapeUtils-B0HZ1tIg.js";import"./useEffectiveDataKey-7iKmBNHY.js";import"./step-Dkisf4Kt.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
