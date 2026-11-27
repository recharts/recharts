import{R as t}from"./iframe-2TbE3qYT.js";import{R as D,l as p}from"./zIndexSlice-CDl_l-89.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-tm61HVF4.js";import{C as M}from"./CartesianGrid-Br04DuFw.js";import{X as $}from"./XAxis-J5474B1k.js";import{Y as I}from"./YAxis-DJiyoeoo.js";import{L as O}from"./Legend-zcd4ylac.js";import{T as W}from"./Tooltip-DhqtrPJ9.js";import{L as f}from"./Line-C0MGKIx5.js";import{C as X}from"./Curve-Z7vcnGYC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./throttle-AC4zKKET.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./RechartsWrapper-DSdhDIUK.js";import"./axisSelectors-BRsQeeHB.js";import"./polarAxisSelectors-BVGWIciz.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-gVDFTlHt.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./CartesianAxis-DY1zMkgy.js";import"./Layer-7DEP56Bj.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./Label-BqpWbzgg.js";import"./types-Dx30sS-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BqG7sYmQ.js";import"./symbol-CUR1FaxD.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D9QIVvZV.js";import"./uniqBy-B9J3txXo.js";import"./iteratee-BLZOulYj.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-D_GZEFYT.js";import"./Cross-DBCSj7Wj.js";import"./Rectangle-DnludKWy.js";import"./util-Dxo8gN5i.js";import"./Sector-dUg13oG9.js";import"./getRadiusAndStrokeWidthFromDot-DrA60Arr.js";import"./dataEntryStyles-T1g5qPBF.js";import"./ActivePoints-D8FfETBR.js";import"./Dot-_rUk0L2M.js";import"./activeStyles-Rm_R6i1P.js";import"./ErrorBarContext-D7D-MJNc.js";import"./SetGraphicalItem-Dl3lwAU1.js";import"./ActiveShapeUtils-Bsp6lbzE.js";import"./useEffectiveDataKey-CWpkrBwa.js";import"./step-DFCmv64b.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
